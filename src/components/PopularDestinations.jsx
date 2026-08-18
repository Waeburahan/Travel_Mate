import React, { useState } from 'react';
import { DESTINATIONS } from '../data/travelData';
import { Star, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import './PopularDestinations.css';

export default function PopularDestinations({ onSelectDestination }) {
  const [filterRegion, setFilterRegion] = useState('all');

  const filteredDestinations = filterRegion === 'all' 
    ? DESTINATIONS 
    : DESTINATIONS.filter(d => d.region === filterRegion);

  return (
    <section className="section-padding destinations-section" id="destinations">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="sub-title">Popular Destinations</span>
          <h2 className="main-title">สำรวจจุดหมายปลายทางยอดนิยม</h2>
          <p className="desc">
            คัดสรรเมืองท่องเที่ยวสุดฮิตทั่วไทย ที่ตอบโจทย์ทุกไลฟ์สไตล์การเดินทาง ทั้งสายชิล ธรรมชาติ วัฒนธรรม และผจญภัย
          </p>
        </div>

        {/* Region Filter Buttons */}
        <div className="destinations-filter">
          <button 
            className={`filter-btn ${filterRegion === 'all' ? 'active' : ''}`}
            onClick={() => setFilterRegion('all')}
          >
            ทั้งหมด (5)
          </button>
          <button 
            className={`filter-btn ${filterRegion === 'ภาคเหนือ' ? 'active' : ''}`}
            onClick={() => setFilterRegion('ภาคเหนือ')}
          >
            ภาคเหนือ (เชียงใหม่)
          </button>
          <button 
            className={`filter-btn ${filterRegion === 'ภาคใต้' ? 'active' : ''}`}
            onClick={() => setFilterRegion('ภาคใต้')}
          >
            ภาคใต้ (ภูเก็ต/กระบี่/สมุย)
          </button>
          <button 
            className={`filter-btn ${filterRegion === 'ภาคกลาง' ? 'active' : ''}`}
            onClick={() => setFilterRegion('ภาคกลาง')}
          >
            ภาคกลาง (กรุงเทพฯ)
          </button>
        </div>

        {/* Destinations Grid */}
        <div className="destinations-grid">
          {filteredDestinations.map((dest) => (
            <div 
              key={dest.id} 
              className={`destination-card ${dest.id === 'chiang-mai' ? 'featured-spot' : ''}`}
              onClick={() => onSelectDestination(dest)}
            >
              <div className="card-image-wrapper">
                <img src={dest.image} alt={dest.name} loading="lazy" />
                <div className="card-overlay"></div>
                
                {dest.id === 'chiang-mai' && (
                  <div className="spotlight-tag">
                    <Sparkles size={14} /> Highlight
                  </div>
                )}
                
                <div className="card-top-info">
                  <span className="region-badge">{dest.region}</span>
                  <div className="rating-badge">
                    <Star size={14} fill="#f59e0b" color="#f59e0b" />
                    <span>{dest.rating}</span>
                  </div>
                </div>

                <div className="card-bottom-info">
                  <div className="card-tours-count">{dest.toursCount}</div>
                  <h3 className="card-title">{dest.name}</h3>
                  <p className="card-tagline">{dest.tagline}</p>
                  
                  <div className="card-action">
                    <span className="price-start">เริ่ม {dest.priceFrom}</span>
                    <button className="explore-btn">
                      <span>สำรวจ</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
