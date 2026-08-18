import React from 'react';
import { BLOG_POSTS, TESTIMONIALS } from '../data/travelData';
import { Calendar, User, Clock, ArrowRight, Star, Quote, Mail, Send, Check } from 'lucide-react';
import './TravelInspiration.css';

export default function TravelInspiration() {
  return (
    <>
      {/* Blog / Travel Inspiration Section */}
      <section className="section-padding blog-section" id="blog">
        <div className="container">
          <div className="section-header">
            <span className="sub-title">Travel Inspiration & Blog</span>
            <h2 className="main-title">คู่มือท่องเที่ยว & บทความสร้างแรงบันดาลใจ</h2>
            <p className="desc">
              วางแผนเที่ยวอย่างเซียน ด้วยเทคนิค คู่มือเดินทาง และรีวิวสถานที่ท่องเที่ยวอัปเดตใหม่ล่าสุด
            </p>
          </div>

          <div className="blog-grid">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-img-box">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <span className="blog-category">{post.category}</span>
                </div>

                <div className="blog-content">
                  <div className="blog-meta">
                    <span><Calendar size={13} /> {post.date}</span>
                    <span><Clock size={13} /> {post.readTime}</span>
                  </div>

                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>

                  <div className="blog-footer">
                    <span className="blog-author">
                      <User size={13} /> {post.author}
                    </span>
                    <a href="#" className="read-more-btn">
                      <span>อ่านบทความ</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="sub-title">Traveler Reviews</span>
            <h2 className="main-title">เสียงตอบรับจากนักท่องเที่ยวจริง</h2>
            <p className="desc">
              ความประทับใจของลูกค้าที่ร่วมเดินทางและสร้างความทรงจำสุดพิเศษไปกับ Travel Mate
            </p>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className="testimonial-card">
                <Quote className="quote-icon" size={32} />
                <div className="stars-row">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p className="testimonial-text">"{item.comment}"</p>
                <div className="testimonial-user">
                  <img src={item.avatar} alt={item.name} className="user-avatar" />
                  <div className="user-info">
                    <h4 className="user-name">{item.name}</h4>
                    <span className="user-role">{item.role} • <strong className="dest-tag">{item.destination}</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Banner */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-box">
            <div className="newsletter-content">
              <div className="newsletter-icon font-accent">
                <Mail size={28} />
              </div>
              <h2 className="newsletter-title">รับส่วนลดพิเศษ 10% สำหรับทริปแรก!</h2>
              <p className="newsletter-desc">
                สมัครรับข่าวสาร ดีลทัวร์โปรโมชันสุดเอ็กซ์คลูซีฟ และคู่มือท่องเที่ยวฟรี ส่งตรงถึงอีเมลของคุณ
              </p>
            </div>

            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <div className="input-wrapper">
                <input type="email" placeholder="กรอกอีเมลของคุณ..." required />
                <button type="submit" className="btn btn-accent newsletter-btn">
                  <span>สมัครรับข่าวสาร</span>
                  <Send size={16} />
                </button>
              </div>
              <div className="newsletter-terms">
                <Check size={14} /> <span>ไม่สแปม สามารถยกเลิกการรับข่าวสารได้ตลอดเวลา</span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
