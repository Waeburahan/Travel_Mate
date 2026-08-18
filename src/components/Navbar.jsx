import React, { useState, useEffect } from 'react';
import { Compass, Globe, Search, User, Menu, X, PhoneCall, ChevronDown } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Exact DOM section sequence in App.jsx
    const sections = [
      { id: 'hero', name: 'home' },
      { id: 'destinations', name: 'destinations' },
      { id: 'experiences', name: 'experiences' },
      { id: 'tours', name: 'tours' },
      { id: 'chiangmai-featured', name: 'chiangmai' },
      { id: 'about', name: 'about' },
      { id: 'blog', name: 'blog' },
      { id: 'contact', name: 'contact' }
    ];

    const handleScrollActive = () => {
      const scrollPosition = window.scrollY + 180;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Bottom of page check for contact/footer
      if (window.scrollY + windowHeight >= fullHeight - 50) {
        setActiveSection('contact');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const item = sections[i];
        if (item.id === 'hero') {
          if (window.scrollY < 250) {
            setActiveSection('home');
            break;
          }
        } else {
          const el = document.getElementById(item.id);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(item.name);
              break;
            }
          }
        }
      }
    };

    handleScrollActive();
    window.addEventListener('scroll', handleScrollActive);
    return () => window.removeEventListener('scroll', handleScrollActive);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#" className="navbar-brand">
          <div className="logo-icon">
            <Compass className="icon" />
          </div>
          <span className="logo-text">
            Travel<span className="logo-highlight">Mate</span>
          </span>
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="desktop-nav">
          <a href="#" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>หน้าแรก</a>
          <a href="#destinations" className={`nav-link ${activeSection === 'destinations' ? 'active' : ''}`}>จุดหมาย</a>
          <a href="#experiences" className={`nav-link ${activeSection === 'experiences' ? 'active' : ''}`}>กิจกรรม</a>
          <a href="#tours" className={`nav-link ${activeSection === 'tours' ? 'active' : ''}`}>แพ็กเกจทัวร์</a>
          <a href="#chiangmai-featured" className={`nav-link nav-special ${activeSection === 'chiangmai' ? 'active' : ''}`}>
            <span>เชียงใหม่</span>
            <span className="special-badge">Hot</span>
          </a>
          <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>เกี่ยวกับเรา</a>
          <a href="#blog" className={`nav-link ${activeSection === 'blog' ? 'active' : ''}`}>คู่มือท่องเที่ยว</a>
          <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>ติดต่อ</a>
        </nav>

        {/* Action Buttons */}
        <div className="navbar-actions">
          <button className="nav-icon-btn" onClick={onOpenSearch} title="ค้นหา">
            <Search size={20} />
          </button>

          <div className="lang-selector">
            <Globe size={18} />
            <span>TH / THB</span>
            <ChevronDown size={14} />
          </div>

          <button className="btn btn-primary nav-cta">
            <User size={18} />
            <span>เข้าสู่ระบบ</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav">
            <a href="#" onClick={() => setMobileMenuOpen(false)}>หน้าแรก</a>
            <a href="#destinations" onClick={() => setMobileMenuOpen(false)}>จุดหมายปลายทาง</a>
            <a href="#tours" onClick={() => setMobileMenuOpen(false)}>แพ็กเกจทัวร์</a>
            <a href="#experiences" onClick={() => setMobileMenuOpen(false)}>กิจกรรม & ประสบการณ์</a>
            <a href="#chiangmai-featured" onClick={() => setMobileMenuOpen(false)} className="mobile-special">
              🌟 เชียงใหม่ไฮไลท์
            </a>
            <a href="#blog" onClick={() => setMobileMenuOpen(false)}>คู่มือท่องเที่ยว</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>เกี่ยวกับเรา</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>ติดต่อ</a>

            <div className="mobile-drawer-footer">
              <button className="btn btn-primary w-full">
                <User size={18} /> เข้าสู่ระบบ / สมัครสมาชิก
              </button>
              <div className="contact-quick">
                <PhoneCall size={16} /> <span>คอลเซ็นเตอร์ 24 ชม: 02-123-4567</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
