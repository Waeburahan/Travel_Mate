import React from 'react';
import { EXPERIENCES } from '../data/travelData';
import { Waves, Compass, Landmark, UtensilsCrossed, Trees, ArrowRight } from 'lucide-react';
import './ExploreExperiences.css';

const iconMap = {
  Waves: Waves,
  Compass: Compass,
  Landmark: Landmark,
  UtensilsCrossed: UtensilsCrossed,
  Trees: Trees
};

export default function ExploreExperiences({ onSelectCategory }) {
  return (
    <section className="section-padding experiences-section" id="experiences">
      <div className="container">
        <div className="section-header">
          <span className="sub-title">Explore Experiences</span>
          <h2 className="main-title">เลือกประสบการณ์ท่องเที่ยวในแบบที่คุณชอบ</h2>
          <p className="desc">
            สัมผัสหลากหลายรูปแบบกิจกรรมที่ไม่เหมือนใคร ตอบโจทย์ทุกแพสชันการเดินทางของคุณ
          </p>
        </div>

        <div className="experiences-grid">
          {EXPERIENCES.map((exp) => {
            const IconComponent = iconMap[exp.icon] || Compass;
            return (
              <div 
                key={exp.id} 
                className="experience-card"
                onClick={() => onSelectCategory(exp.id)}
              >
                <div className="exp-bg-image">
                  <img src={exp.image} alt={exp.title} loading="lazy" />
                  <div className="exp-overlay"></div>
                </div>

                <div className="exp-content">
                  <div className="exp-icon-box">
                    <IconComponent size={24} />
                  </div>
                  <span className="exp-count">{exp.count}</span>
                  <h3 className="exp-title">{exp.title}</h3>
                  <p className="exp-desc">{exp.desc}</p>
                  
                  <div className="exp-link">
                    <span>ค้นหากิจกรรม</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
