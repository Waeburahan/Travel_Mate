import React, { useState } from 'react';
import { POPULAR_TOURS } from '../data/travelData';
import { Star, Clock, Users, MapPin, CheckCircle, Heart, ArrowRight } from 'lucide-react';
import './PopularTours.css';

export default function PopularTours({ onSelectTour }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (e, tourId) => {
    e.stopPropagation();
    if (favorites.includes(tourId)) {
      setFavorites(favorites.filter(id => id !== tourId));
    } else {
      setFavorites([...favorites, tourId]);
    }
  };

  return (
    <section className="section-padding tours-section" id="tours">
      <div className="container">
        <div className="section-header">
          <span className="sub-title">Popular Tours & Packages</span>
          <h2 className="main-title">แพ็กเกจทัวร์ยอดนิยม ยอดจองสูงสุด</h2>
          <p className="desc">
            การันตีความประทับใจโดยนักท่องเที่ยวกว่า 50,000 ท่าน พร้อมบริการครบครัน ทั้งไกด์ รถรับส่ง และประกันเดินทาง
          </p>
        </div>

        <div className="tours-grid">
          {POPULAR_TOURS.map((tour) => {
            const isFav = favorites.includes(tour.id);
            return (
              <div 
                key={tour.id} 
                className="tour-card"
                onClick={() => onSelectTour(tour)}
              >
                {/* Image & Header Badges */}
                <div className="tour-img-container">
                  <img src={tour.image} alt={tour.title} loading="lazy" />
                  
                  {tour.badge && (
                    <span className="tour-badge">{tour.badge}</span>
                  )}

                  <button 
                    className={`fav-btn ${isFav ? 'active' : ''}`}
                    onClick={(e) => toggleFavorite(e, tour.id)}
                    title="บันทึกทริปนี้"
                  >
                    <Heart size={18} fill={isFav ? "#ef4444" : "none"} color={isFav ? "#ef4444" : "#ffffff"} />
                  </button>
                </div>

                {/* Content */}
                <div className="tour-body">
                  <div className="tour-meta-top">
                    <span className="tour-location">
                      <MapPin size={14} className="meta-icon" />
                      {tour.location}
                    </span>

                    <div className="tour-rating">
                      <Star size={14} fill="#f59e0b" color="#f59e0b" />
                      <span>{tour.rating}</span>
                      <span className="reviews-count">({tour.reviewsCount})</span>
                    </div>
                  </div>

                  <h3 className="tour-title">{tour.title}</h3>

                  <div className="tour-details-row">
                    <div className="detail-item">
                      <Clock size={14} />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="detail-item">
                      <Users size={14} />
                      <span>{tour.groupSize}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="tour-highlights">
                    {tour.highlights.slice(0, 2).map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle size={13} className="check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer & Price */}
                  <div className="tour-footer">
                    <div className="tour-price-box">
                      <span className="price-label">ราคาเริ่มต้น</span>
                      <div className="price-values">
                        <span className="current-price">฿{tour.price.toLocaleString()}</span>
                        {tour.originalPrice && (
                          <span className="original-price">฿{tour.originalPrice.toLocaleString()}</span>
                        )}
                      </div>
                    </div>

                    <button className="btn btn-primary tour-book-btn">
                      <span>รายละเอียด</span>
                      <ArrowRight size={16} />
                    </button>
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
