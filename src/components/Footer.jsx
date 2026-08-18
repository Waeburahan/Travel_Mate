import React from 'react';
import { Compass, Phone, Mail, MapPin, ArrowUp, Share2, Globe, Tv } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info Column */}
          <div className="footer-col brand-col">
            <a href="#" className="footer-brand">
              <div className="footer-logo-icon">
                <Compass size={22} />
              </div>
              <span>Travel<strong className="text-accent">Mate</strong></span>
            </a>

            <p className="footer-desc">
              แพลตฟอร์มค้นหา คัดสรร และจองแพ็กเกจท่องเที่ยวประเทศไทยครบวงจร ให้ทุกการเดินทางของคุณปลอดภัย คุ้มค่า และน่าจดจำ
            </p>

            <div className="social-links">
              <a href="#" title="Facebook"><Share2 size={18} /></a>
              <a href="#" title="Website"><Globe size={18} /></a>
              <a href="#" title="Media"><Tv size={18} /></a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-title">จุดหมายปลายทาง</h4>
            <ul className="footer-links">
              <li><a href="#chiangmai-featured">เชียงใหม่ (Chiang Mai)</a></li>
              <li><a href="#destinations">ภูเก็ต (Phuket)</a></li>
              <li><a href="#destinations">กระบี่ (Krabi)</a></li>
              <li><a href="#destinations">กรุงเทพฯ (Bangkok)</a></li>
              <li><a href="#destinations">เกาะสมุย (Koh Samui)</a></li>
            </ul>
          </div>

          {/* Experience Links */}
          <div className="footer-col">
            <h4 className="footer-title">ประเภทกิจกรรม</h4>
            <ul className="footer-links">
              <li><a href="#experiences">ชายหาด & ทะเล</a></li>
              <li><a href="#experiences">ผจญภัย & ธรรมชาติ</a></li>
              <li><a href="#experiences">วัฒนธรรม & วัดวาอาราม</a></li>
              <li><a href="#experiences">อาหาร & สตรีทฟู้ด</a></li>
              <li><a href="#tours">ทัวร์ดอย & เที่ยวป่า</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col contact-col">
            <h4 className="footer-title">ติดต่อเรา</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>123 อาคารทราเวลเมต ชั้น 15 ถนนสุขุมวิท กรุงเทพฯ 10110</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>02-123-4567 / 081-987-6543</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>support@travelmate-th.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2026 TravelMate Thailand. All Rights Reserved. Designed for Travel Experience.</p>

          <button className="scroll-top-btn" onClick={scrollToTop} title="กลับสู่ด้านบน">
            <span>ขึ้นด้านบน</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
