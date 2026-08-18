import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { DESTINATIONS, POPULAR_TOURS, CHIANG_MAI_SPECIALS } from '../data/travelData';
import './Chatbot.css';

// System prompt injected with local travel data
const SYSTEM_PROMPT = `
คุณคือ "Nong Mate" (น้องเมต) ผู้ช่วยวางแผนท่องเที่ยวประจำเว็บไซต์ TravelMate ในประเทศไทย
บุคลิกของคุณ: สุภาพ น่ารัก อารมณ์ดี เป็นมิตร รอบรู้เรื่องการท่องเที่ยวไทย ตอบเป็นภาษาไทยด้วยความกระตือรือร้น

ข้อมูลแพ็กเกจทัวร์และจุดหมายปลายทางของ TravelMate ที่คุณมีในระบบ:
- จุดหมายเด่น: ${DESTINATIONS.map(d => `${d.name} (${d.region}) - เริ่มต้น ${d.priceFrom}`).join(', ')}
- แพ็กเกจทัวร์ฮิต: ${POPULAR_TOURS.map(t => `${t.title} (${t.location}, ${t.duration}, ราคา ฿${t.price})`).join('; ')}
- ไฮไลท์เชียงใหม่: ${CHIANG_MAI_SPECIALS.spots.map(s => `${s.name} - ${s.desc}`).join('; ')}

คำแนะนำในการตอบคำถาม:
1. แนะนำแพ็กเกจทัวร์ หรือสถานที่ท่องเที่ยวที่ตรงกับคำถามของผู้ใช้ โดยอ้างอิงจากข้อมูลด้านบนก่อนเป็นหลัก
2. ตอบคำถามให้กระชับ อ่านง่าย และมีความเป็นกันเอง
3. หากผู้ใช้ถามเรื่องราคา ให้ระบุราคาเริ่มต้นตรงตามข้อมูลข้างต้น
`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('gemini_api_key') || '');
  const [showKeyInput, setShowKeyInput] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'สวัสดีครับ! 🌿 ผม "น้องเมต" ผู้ช่วย AI วางแผนท่องเที่ยวไทย มีสถานที่หรือแพ็กเกจทัวร์ไหนอยากให้แนะนำสอบถามได้เลยนะครับ!'
    }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSaveApiKey = (e) => {
    e.preventDefault();
    localStorage.setItem('gemini_api_key', apiKey.trim());
    setShowKeyInput(false);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userText = inputMessage.trim();
    setInputMessage('');

    // Append user message
    const updatedMessages = [...messages, { sender: 'user', text: userText }];
    setMessages(updatedMessages);
    setIsLoading(true);

    const activeKey = (apiKey.trim() || import.meta.env.VITE_GEMINI_API_KEY || '').trim();

    // If no API key is provided at all, fall back to local simulated response
    if (!activeKey) {
      setTimeout(() => {
        let botReply = '';
        const lowerText = userText.toLowerCase();

        if (lowerText.includes('เชียงใหม่') || lowerText.includes('แม่กำปอง') || lowerText.includes('ดอย')) {
          botReply = '🏔️ เชียงใหม่น่าเที่ยวมากครับ! แนะนำแพ็กเกจเด่นของ TravelMate:\n• "วันเดย์ทริป แม่กำปอง คาเฟ่กลางป่า" (฿1,890/ท่าน)\n• "ทัวร์ 3 วัน 2 คืน ดอยอินทนนท์-ม่อนแจ่ม-แม่วาง" (฿4,990/ท่าน)\nสัมผัสอากาศเย็นสบายตลอดปีและวิถีชีวิตสโลว์ไลฟ์ครับ!';
        } else if (lowerText.includes('กระบี่') || lowerText.includes('ทะเล') || lowerText.includes('เกาะพีพี')) {
          botReply = '🌊 ทะเลกระบี่สวยระดับโลก! แนะนำแพ็กเกจ "ทัวร์ 4 เกาะกระบี่ สปีดโบ๊ท + ทะเลแหวก & หาดไร่เลย์" (เริ่มต้นเพียง ฿1,450/ท่าน) รวมอุปกรณ์ดำน้ำและอาหารกลางวันบุฟเฟต์ครับ!';
        } else if (lowerText.includes('ภูเก็ต') || lowerText.includes('เรือยอชท์') || lowerText.includes('sunset')) {
          botReply = '🌅 สัมผัสความหรูหราที่ภูเก็ต! แนะนำ "ทัวร์ล่องเรือยอชท์คาทามารัน เกาะเฮ-เกาะราชา ชมพระอาทิตย์ตก" (฿2,990/ท่าน) พร้อมบาร์บีคิวซีฟู้ดบนเรือครับ!';
        } else if (lowerText.includes('กรุงเทพ') || lowerText.includes('ไหว้พระ') || lowerText.includes('วัด')) {
          botReply = '🙏 สายบุญและวัฒนธรรม แนะนำ "ทัวร์ไหว้พระ 9 วัดกรุงเทพฯ + ล่องเรือดินเนอร์เจ้าพระยา" (฿2,190/ท่าน) เดินทางสะดวกมีไกด์ดูแลตลอดทริปครับ!';
        } else {
          botReply = `สวัสดีครับ! น้องเมตยินดีช่วยแนะนำทริปท่องเที่ยวไทยครับ 🌿\n\n📌 เมืองยอดนิยมแนะนำตอนนี้:\n1. 🏔️ เชียงใหม่ - แม่กำปอง / ดอยอินทนนท์ (เริ่มต้น ฿1,590)\n2. 🌊 กระบี่ - 4 เกาะ ทะเลแหวก (เริ่มต้น ฿1,450)\n3. 🌅 ภูเก็ต - ล่องเรือยอชท์เกาะเฮ (เริ่มต้น ฿1,990)\n\nสนใจเน้นเที่ยวแนวไหนสอบถามน้องเมตเพิ่มเติมได้เลยครับ!`;
        }

        setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
        setIsLoading(false);
      }, 600);
      return;
    }

    // Call Gemini API with user key (using gemini-3.6-flash model)
    try {
      let apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${activeKey}`;

      let response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: `${SYSTEM_PROMPT}\n\nคำถามจากผู้ใช้: ${userText}` }] }]
        })
      });

      const data = await response.json();

      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        const aiReply = data.candidates[0].content.parts[0].text;
        setMessages(prev => [...prev, { sender: 'bot', text: aiReply }]);
      } else if (data.error) {
        console.error("Gemini API Response Error:", data.error);
        setMessages(prev => [
          ...prev,
          { sender: 'bot', text: `ขออภัยครับ เกิดข้อผิดพลาดจาก Gemini API: "${data.error.message || 'API Key ไม่ถูกต้อง'}" (รหัสข้อผิดพลาด: ${data.error.code || 'UNAUTHENTICATED'})` }
        ]);
      } else {
        throw new Error('ไม่ได้รับคำตอบจาก Gemini API');
      }
    } catch (err) {
      console.error("Gemini Fetch Error:", err);
      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: `ขออภัยครับ ไม่สามารถเชื่อมต่อกับ Gemini API ได้ในขณะนี้ กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตหรือความถูกต้องของ API Key` }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-wrapper">
      {/* Floating Toggle Button */}
      <button
        className={`chatbot-toggle-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Travel Assistant"
      >
        {isOpen ? (
          <X size={26} />
        ) : (
          <>
            <Bot size={26} />
            <span className="chatbot-badge-ping"></span>
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="bot-profile">
              <div className="bot-avatar">
                <Bot size={20} />
              </div>
              <div className="bot-info">
                <h4>Nong Mate AI</h4>
                <span className="status-online">
                  <span className="dot"></span> ผู้ช่วยท่องเที่ยวไทย 24 ชม.
                </span>
              </div>
            </div>

            <div className="header-actions">
              <button
                className="icon-action-btn"
                onClick={() => setShowKeyInput(!showKeyInput)}
                title="ตั้งค่า Gemini API Key ฟรี"
              >
                <Sparkles size={16} />
              </button>
              <button
                className="icon-action-btn"
                onClick={() => setIsOpen(false)}
                title="ปิด"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Optional API Key Input Banner */}
          {showKeyInput && (
            <form className="api-key-banner" onSubmit={handleSaveApiKey}>
              <label>Gemini API Key (ฟรี 100%):</label>
              <div className="key-input-row">
                <input
                  type="password"
                  placeholder="วาง AIzaSy..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
                <button type="submit" className="btn btn-primary btn-sm">บันทึก</button>
              </div>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noreferrer"
                className="key-link"
              >
                👉 คลิกรับ Gemini API Key ฟรีจาก Google
              </a>
            </form>
          )}

          {/* Messages Area */}
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message-row ${msg.sender}`}>
                {msg.sender === 'bot' && (
                  <div className="msg-avatar bot">
                    <Bot size={14} />
                  </div>
                )}

                <div className="message-bubble">
                  {msg.text}
                </div>

                {msg.sender === 'user' && (
                  <div className="msg-avatar user">
                    <User size={14} />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="message-row bot">
                <div className="msg-avatar bot">
                  <Bot size={14} />
                </div>
                <div className="message-bubble loading">
                  <Loader2 size={16} className="spinner" />
                  <span>น้องเมตกำลังค้นหาทริปปังๆ ให้...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="chatbot-chips">
            <button type="button" onClick={() => setInputMessage('แนะนำทริปเชียงใหม่หน่อย')}>🏔️ ทริปเชียงใหม่</button>
            <button type="button" onClick={() => setInputMessage('มีทัวร์ทะเลกระบี่ราคาเท่าไหร่')}>🌊 เที่ยวกระบี่</button>
            <button type="button" onClick={() => setInputMessage('ทัวร์ภูเก็ตล่องเรือยอชท์')}>🌅 เรือยอชท์ภูเก็ต</button>
          </div>

          {/* Input Form */}
          <form className="chatbot-input-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="ถามน้องเมตเกี่ยวกับทริปท่องเที่ยวไทย..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button type="submit" className="send-btn" disabled={isLoading || !inputMessage.trim()}>
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
