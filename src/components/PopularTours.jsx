import React, { useState } from 'react';
import { POPULAR_TOURS } from '../data/travelData';
import { Star, Clock, Users, MapPin, CheckCircle, Heart, ArrowRight, X, Filter } from 'lucide-react';
import './PopularTours.css';

export default function PopularTours({ onSelectTour, searchFilter, onClearSearch }) {
  const [favorites, setFavorites] = useState([]);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');

  const toggleFavorite = (e, tourId) => {
    e.stopPropagation();
    if (favorites.includes(tourId)) {
      setFavorites(favorites.filter(id => id !== tourId));
    } else {
      setFavorites([...favorites, tourId]);
    }
  };

  // Map category code to Thai label
  const categoryLabels = {
    beach: 'ชายหาด & ทะเล',
    adventure: 'ผจญภัย & ธรรมชาติ',
    culture: 'วัฒนธรรม & วัดวาอาราม',
    food: 'อาหาร & สตรีทฟู้ด',
    nature: 'ภูเขา & น้ำตก'
  };

  // Filter tours based on searchFilter or category tab
  const filteredTours = POPULAR_TOURS.filter(tour => {
    if (searchFilter) {
      // 1. Check Location
      const matchLocation = !searchFilter.location ||
        tour.location.toLowerCase().includes(searchFilter.location.toLowerCase()) ||
        searchFilter.location.toLowerCase().includes(tour.location.toLowerCase());

      // 2. Check Category
      const matchCategory = !searchFilter.category ||
        searchFilter.category === 'all' ||
        tour.category === searchFilter.category;

      // Filter primarily by location and category so user always gets great recommendations
      return matchLocation && matchCategory;
    }
    // Quick Category Filter
    if (activeCategoryFilter !== 'all') {
      return tour.category === activeCategoryFilter;
    }
    return true;
  });

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

        {/* Active Search Filter Status */}
        {searchFilter ? (
          <div className="active-filter-bar">
            <div className="filter-info">
              <Filter size={18} className="filter-icon" />
              <span>ผลการค้นหาสำหรับ: </span>
              {searchFilter.location && <strong className="filter-tag">📍 {searchFilter.location}</strong>}
              {searchFilter.category && searchFilter.category !== 'all' && (
                <strong className="filter-tag">🏷️ {categoryLabels[searchFilter.category] || searchFilter.category}</strong>
              )}
              {searchFilter.guests && <strong className="filter-tag">👥 {searchFilter.guests === '1' ? '1 ท่าน (Solo)' : searchFilter.guests === '2' ? '2 ท่าน (คู่รัก)' : searchFilter.guests === '3-5' ? '3-5 ท่าน' : 'ครอบครัว'}</strong>}
            </div>
            <button className="clear-filter-btn" onClick={onClearSearch}>
              <X size={16} /> ล้างตัวกรอง (แสดงทั้งหมด)
            </button>
          </div>
        ) : (
          /* Category Quick Filter Pills */
          <div className="category-pills">
            <button
              className={`pill-btn ${activeCategoryFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategoryFilter('all')}
            >
              ทั้งหมด ({POPULAR_TOURS.length})
            </button>
            <button
              className={`pill-btn ${activeCategoryFilter === 'beach' ? 'active' : ''}`}
              onClick={() => setActiveCategoryFilter('beach')}
            >
              🏖️ ชายหาด & ทะเล
            </button>
            <button
              className={`pill-btn ${activeCategoryFilter === 'adventure' ? 'active' : ''}`}
              onClick={() => setActiveCategoryFilter('adventure')}
            >
              🏕️ ผจญภัย & ธรรมชาติ
            </button>
            <button
              className={`pill-btn ${activeCategoryFilter === 'culture' ? 'active' : ''}`}
              onClick={() => setActiveCategoryFilter('culture')}
            >
              🛕 วัฒนธรรม & วัด
            </button>
            <button
              className={`pill-btn ${activeCategoryFilter === 'food' ? 'active' : ''}`}
              onClick={() => setActiveCategoryFilter('food')}
            >
              🍜 อาหาร & สตรีทฟู้ด
            </button>
          </div>
        )}

        {filteredTours.length === 0 ? (
          <div className="no-results">
            <p>😔 ไม่พบแพ็กเกจทัวร์ที่ตรงกับเงื่อนไขการค้นหาของคุณ</p>
            <button className="btn btn-primary" onClick={onClearSearch}>ดูทัวร์ทั้งหมด</button>
          </div>
        ) : (
          <div className="tours-grid">
            {filteredTours.map((tour) => {
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
        )}
      </div>
    </section>
  );
}
