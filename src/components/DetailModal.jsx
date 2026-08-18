import React, { useState } from 'react';
import { X, Star, Clock, Users, MapPin, CheckCircle, Calendar, Shield, PhoneCall } from 'lucide-react';
import './DetailModal.css';

export default function DetailModal({ item, type, onClose }) {
  const [selectedDate, setSelectedDate] = useState('2026-09-01');
  const [guestsCount, setGuestsCount] = useState(2);
  const [bookedSuccess, setBookedSuccess] = useState(false);

  if (!item) return null;

  const handleBooking = (e) => {
    e.preventDefault();
    setBookedSuccess(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        <div className="modal-body">
          {/* Modal Header Media Showcase */}
          <div className="modal-media">
            <img src={item.image} alt={item.name || item.title} />
            <div className="modal-media-overlay"></div>
            
            <div className="modal-media-badge">
              {item.region || item.badge || 'Thailand Travel'}
            </div>

            <div className="modal-media-title">
              <span className="modal-location">
                <MapPin size={16} /> {item.location || item.name}
              </span>
              <h2>{item.title || item.name}</h2>
            </div>
          </div>

          {/* Details Content */}
          <div className="modal-grid">
            <div className="modal-info">
              {item.rating && (
                <div className="modal-rating">
                  <Star size={16} fill="#f59e0b" color="#f59e0b" />
                  <strong>{item.rating}</strong>
                  <span>({item.reviewsCount || item.reviews || 100} รีวิวจากนักท่องเที่ยวจริง)</span>
                </div>
              )}

              <p className="modal-desc">
                {item.tagline || item.desc || item.excerpt || 'สัมผัสประสบการณ์การท่องเที่ยวในประเทศไทยที่น่าประทับใจ พร้อมบริการดูแลระดับพรีเมียม'}
              </p>

              {item.highlights && (
                <div className="modal-highlights-box">
                  <h4>ไฮไลท์การเดินทาง & จุดเช็กอิน</h4>
                  <ul className="modal-highlights-list">
                    {item.highlights.map((h, i) => (
                      <li key={i}>
                        <CheckCircle size={16} className="text-emerald" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="modal-guarantees">
                <div className="guarantee-item">
                  <Shield size={18} className="text-primary" />
                  <span>ประกันภัยเดินทางฟรีตลอดทริป</span>
                </div>
                <div className="guarantee-item">
                  <PhoneCall size={18} className="text-primary" />
                  <span>มีไกด์ท้องถิ่นดูแลตลอดการเดินทาง</span>
                </div>
              </div>
            </div>

            {/* Quick Booking Sidebar Preview */}
            <div className="modal-booking-sidebar">
              {bookedSuccess ? (
                <div className="booking-success-box">
                  <CheckCircle size={48} className="success-icon" />
                  <h3>ส่งคำขอสำรองที่นั่งเรียบร้อย!</h3>
                  <p>เจ้าหน้าที่ TravelMate จะติดต่อกลับเพื่อยืนยันรายละเอียดและส่วนลดภายใน 15 นาที</p>
                  <button className="btn btn-secondary w-full" onClick={() => setBookedSuccess(false)}>
                    ทำการจองใหม่
                  </button>
                </div>
              ) : (
                <form className="booking-form" onSubmit={handleBooking}>
                  <h3 className="booking-form-title">สำรองที่นั่ง / สอบถามโปรโมชัน</h3>

                  <div className="price-tag-big">
                    <span className="from">เริ่มต้น</span>
                    <span className="price">฿{(item.price || 1890).toLocaleString()}</span>
                    <span className="unit">/ ท่าน</span>
                  </div>

                  <div className="booking-field">
                    <label><Calendar size={14} /> เลือกวันที่เดินทาง</label>
                    <input 
                      type="date" 
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      required 
                    />
                  </div>

                  <div className="booking-field">
                    <label><Users size={14} /> จำนวนผู้เดินทาง</label>
                    <select value={guestsCount} onChange={(e) => setGuestsCount(e.target.value)}>
                      <option value="1">1 ท่าน</option>
                      <option value="2">2 ท่าน</option>
                      <option value="3">3 ท่าน</option>
                      <option value="4">4 ท่าน</option>
                      <option value="5+">5 ท่านขึ้นไป</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary booking-submit-btn w-full">
                    สอบถามรายละเอียด / จองทริปนี้
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
