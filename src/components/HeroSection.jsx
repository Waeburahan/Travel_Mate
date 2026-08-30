import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import './HeroSection.css';

export default function HeroSection({ onSearchSubmit }) {
  const [activeTab, setActiveTab] = useState('tours');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchCategory, setSearchCategory] = useState('all');
  const [searchGuests, setSearchGuests] = useState('2');

  // Dynamic Category Options depending on selected Location
  const getCategoryOptions = (location) => {
    const allCategories = [
      { value: 'all', label: 'ทุกประเภทกิจกรรม' },
      { value: 'beach', label: 'ชายหาด & ทะเล' },
      { value: 'adventure', label: 'ผจญภัย & ธรรมชาติ' },
      { value: 'culture', label: 'วัฒนธรรม & ไหว้พระ' },
      { value: 'food', label: 'อาหาร & สตรีทฟู้ด' },
      { value: 'nature', label: 'ภูเขา & น้ำตก' }
    ];

    if (location === 'เชียงใหม่') {
      // เชียงใหม่ไม่มีทะเล/ชายหาด
      return allCategories.filter(c => c.value !== 'beach');
    }
    if (location === 'กรุงเทพฯ') {
      // กรุงเทพฯ ไม่มีภูเขา/ทะเล
      return allCategories.filter(c => c.value !== 'beach' && c.value !== 'nature');
    }
    return allCategories;
  };

  const handleLocationChange = (e) => {
    const loc = e.target.value;
    setSearchLocation(loc);
    // If selected category is 'beach' but user switched to 'เชียงใหม่', reset category
    if (loc === 'เชียงใหม่' && searchCategory === 'beach') {
      setSearchCategory('all');
    }
    if (loc === 'กรุงเทพฯ' && (searchCategory === 'beach' || searchCategory === 'nature')) {
      setSearchCategory('all');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearchSubmit({
      location: searchLocation,
      category: searchCategory,
      guests: searchGuests
    });
  };

  return (
    <section className="hero-section" id="hero">
      {/* Background Image Overlay */}
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">


          <h1 className="hero-title">
            Discover Amazing Places <br />
            <span className="text-highlight">in Thailand</span>
          </h1>

          <p className="hero-subtitle">
            ออกไปค้นพบความงดงามของประเทศไทย ตั้งแต่ดอยสูงในเชียงใหม่ ชายหาดอันดามันสุดอลังการ ไปจนถึงวัฒนธรรมท้องถิ่นที่ไม่ซ้ำใคร
          </p>

          {/* Quick Stats Badges */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">500+</span>
              <span className="stat-label">ทริป & สถานที่เด่น</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">50,000+</span>
              <span className="stat-label">นักท่องเที่ยวไว้วางใจ</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">4.9/5</span>
              <span className="stat-label">คะแนนความพึงพอใจ</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Search Bar */}
        <div className="search-card">
          {/* Tabs */}
          <div className="search-tabs">
            <button
              className={`tab-btn ${activeTab === 'tours' ? 'active' : ''}`}
              onClick={() => setActiveTab('tours')}
            >
              ค้นหาทัวร์ & แพ็กเกจ
            </button>
            <button
              className={`tab-btn ${activeTab === 'chiangmai' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('chiangmai');
                setSearchLocation('เชียงใหม่');
              }}
            >
              🌟 เที่ยวเชียงใหม่
            </button>
            <button
              className={`tab-btn ${activeTab === 'destinations' ? 'active' : ''}`}
              onClick={() => setActiveTab('destinations')}
            >
              จุดหมายปลายทาง
            </button>
          </div>

          {/* Search Form */}
          <form className="search-form" onSubmit={handleSearch}>
            <div className="form-group">
              <label>
                <MapPin size={18} className="form-icon" />
                <span>จุดหมาย / จังหวัด</span>
              </label>
              <select
                value={searchLocation}
                onChange={handleLocationChange}
                className="form-input"
              >
                <option value="">ทุกจังหวัดในไทย</option>
                <option value="เชียงใหม่">เชียงใหม่ (Chiang Mai)</option>
                <option value="ภูเก็ต">ภูเก็ต (Phuket)</option>
                <option value="กระบี่">กระบี่ (Krabi)</option>
                <option value="กรุงเทพฯ">กรุงเทพฯ (Bangkok)</option>
                <option value="เกาะสมุย">เกาะสมุย (Koh Samui)</option>
              </select>
            </div>

            <div className="form-group">
              <label>
                <Filter size={18} className="form-icon" />
                <span>ประเภททริป</span>
              </label>
              <select
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
                className="form-input"
              >
                {getCategoryOptions(searchLocation).map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>
                <Users size={18} className="form-icon" />
                <span>ผู้เดินทาง</span>
              </label>
              <select
                value={searchGuests}
                onChange={(e) => setSearchGuests(e.target.value)}
                className="form-input"
              >
                <option value="1">1 ท่าน (Solo)</option>
                <option value="2">2 ท่าน (คู่รัก/เพื่อน)</option>
                <option value="3-5">3-5 ท่าน (กลุ่มเพื่อน)</option>
                <option value="family">ครอบครัว (5+ ท่าน)</option>
              </select>
            </div>

            <button type="submit" className="btn btn-accent search-btn">
              <Search size={20} />
              <span>ค้นหาทริป</span>
            </button>
          </form>

          {/* Quick Keywords */}
          <div className="search-tags">
            <span className="tags-label">ยอดนิยม:</span>
            <button type="button" onClick={() => setSearchLocation('เชียงใหม่')}>#แม่กำปอง</button>
            <button type="button" onClick={() => setSearchLocation('กระบี่')}>#เกาะพีพี</button>
            <button type="button" onClick={() => setSearchLocation('ภูเก็ต')}>#แหลมพรหมเทพ</button>
            <button type="button" onClick={() => setSearchLocation('เชียงใหม่')}>#ดอยอินทนนท์</button>
          </div>
        </div>
      </div>
    </section>
  );
}
