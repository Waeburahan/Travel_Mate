import React, { useState } from 'react';
import { CHIANG_MAI_SPECIALS } from '../data/travelData';
import { Sparkles, MapPin, ArrowRight, CheckCircle2, HeartHandshake } from 'lucide-react';
import './ChiangMaiFeatured.css';

export default function ChiangMaiFeatured({ onSelectSpot }) {
  const [activeSpot, setActiveSpot] = useState(CHIANG_MAI_SPECIALS.spots[0]);

  return (
    <section className="section-padding chiangmai-section" id="chiangmai-featured">
      <div className="container">
        {/* Banner Title */}
        <div className="cm-banner-header">
          <div className="cm-tag font-accent">
            <Sparkles size={16} /> Destination Highlight
          </div>
          <h2 className="cm-title">{CHIANG_MAI_SPECIALS.title}</h2>
          <p className="cm-subtitle">{CHIANG_MAI_SPECIALS.subtitle}</p>
        </div>

        {/* Interactive Highlight Grid */}
        <div className="cm-interactive-grid">
          {/* Left Main View Showcase */}
          <div className="cm-main-showcase">
            <div className="cm-showcase-image">
              <img src={activeSpot.image} alt={activeSpot.name} />
              <div className="cm-overlay"></div>
              
              <div className="cm-showcase-content">
                <span className="cm-spot-tag">{activeSpot.tag}</span>
                <h3 className="cm-spot-name">{activeSpot.name}</h3>
                <p className="cm-spot-desc">{activeSpot.desc}</p>
                
                <div className="cm-showcase-features">
                  <div className="feature-pill">
                    <CheckCircle2 size={14} /> อากาศเย็นสบายตลอดปี
                  </div>
                  <div className="feature-pill">
                    <CheckCircle2 size={14} /> คาเฟ่ & วิวธรรมชาติ 360°
                  </div>
                  <div className="feature-pill">
                    <CheckCircle2 size={14} /> เหมาะกับทริปครอบครัว & คู่รัก
                  </div>
                </div>

                <button 
                  className="btn btn-accent cm-action-btn"
                  onClick={() => onSelectSpot(activeSpot)}
                >
                  <span>สำรวจแพ็กเกจทัวร์เชียงใหม่</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Spot Selection Cards */}
          <div className="cm-spots-list">
            <h4 className="cm-list-title">เลือกพิกัดเช็กอินฮิตในเชียงใหม่</h4>
            
            {CHIANG_MAI_SPECIALS.spots.map((spot, idx) => {
              const isSelected = activeSpot.name === spot.name;
              return (
                <div 
                  key={idx}
                  className={`cm-spot-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => setActiveSpot(spot)}
                >
                  <div className="spot-thumb">
                    <img src={spot.image} alt={spot.name} />
                  </div>
                  
                  <div className="spot-info">
                    <span className="spot-tag-sm">{spot.tag}</span>
                    <h5 className="spot-name-sm">{spot.name}</h5>
                    <p className="spot-desc-sm">{spot.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
