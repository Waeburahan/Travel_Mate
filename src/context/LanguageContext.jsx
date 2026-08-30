import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  th: {
    // Navbar
    home: 'หน้าแรก',
    destinations: 'จุดหมาย',
    experiences: 'กิจกรรม',
    tours: 'แพ็กเกจทัวร์',
    chiangmai: 'เชียงใหม่',
    about: 'เกี่ยวกับเรา',
    blog: 'คู่มือท่องเที่ยว',
    contact: 'ติดต่อ',
    login: 'เข้าสู่ระบบ',
    signup: 'สมัครสมาชิก',
    hotBadge: 'Hot',

    // Hero Section
    heroTitlePrefix: 'Discover Amazing Places',
    heroTitleHighlight: 'in Thailand',
    heroSubtitle: 'ออกไปค้นพบความงดงามของประเทศไทย ตั้งแต่ดอยสูงในเชียงใหม่ ชายหาดอันดามันสุดอลังการ ไปจนถึงวัฒนธรรมท้องถิ่นที่ไม่ซ้ำใคร',
    statTours: 'ทริป & สถานที่เด่น',
    statTravelers: 'นักท่องเที่ยวไว้วางใจ',
    statRating: 'คะแนนความพึงพอใจ',
    searchTabTours: 'ค้นหาทัวร์ & แพ็กเกจ',
    searchTabChiangmai: '🌟 เที่ยวเชียงใหม่',
    searchTabDestinations: 'จุดหมายปลายทาง',
    labelLocation: 'จุดหมาย / จังหวัด',
    labelCategory: 'ประเภททริป',
    labelGuests: 'ผู้เดินทาง',
    allLocations: 'ทุกจังหวัดในไทย',
    allCategories: 'ทุกประเภทกิจกรรม',
    searchBtn: 'ค้นหาทริป',
    popularTags: 'ยอดนิยม:',

    // Popular Destinations Section
    popularDestSub: 'Popular Destinations',
    popularDestTitle: 'จุดหมายปลายทางยอดนิยมในไทย',
    popularDestDesc: 'สำรวจจังหวัดท่องเที่ยวยอดฮิต ครอบคลุมทั้งภาคเหนือ ภาคใต้ ภาคกลาง และเกาะสวยระดับโลก',

    // Explore Experiences Section
    experiencesSub: 'Explore Experiences',
    experiencesTitle: 'เลือกสไตล์การท่องเที่ยวที่คุณชอบ',
    experiencesDesc: 'ไม่ว่าคุณจะเป็นสายชิล ชายหาด สายผจญภัย เดินป่า หรือสายวัฒนธรรม เรามีกิจกรรมตอบโจทย์ทุกไลฟ์สไตล์',

    // Popular Tours Section
    toursSub: 'Popular Tours & Packages',
    toursTitle: 'แพ็กเกจทัวร์ยอดนิยม ยอดจองสูงสุด',
    toursDesc: 'การันตีความประทับใจโดยนักท่องเที่ยวกว่า 50,000 ท่าน พร้อมบริการครบครัน ทั้งไกด์ รถรับส่ง และประกันเดินทาง',
    searchResultFor: 'ผลการค้นหาสำหรับ:',
    clearFilter: 'ล้างตัวกรอง (แสดงทั้งหมด)',
    noToursFound: '😔 ไม่พบแพ็กเกจทัวร์ที่ตรงกับเงื่อนไขการค้นหาของคุณ',
    viewAllTours: 'ดูทัวร์ทั้งหมด',
    startPriceLabel: 'ราคาเริ่มต้น',
    viewDetails: 'รายละเอียด',
    allFilter: 'ทั้งหมด',

    // Categories
    catBeach: '🏖️ ชายหาด & ทะเล',
    catAdventure: '🏕️ ผจญภัย & ธรรมชาติ',
    catCulture: '🛕 วัฒนธรรม & วัด',
    catFood: '🍜 อาหาร & สตรีทฟู้ด',
    catNature: '🌲 ภูเขา & น้ำตก',

    // Footer
    footerDesc: 'ศูนย์รวมแพ็กเกจท่องเที่ยว ทัวร์วันเดย์ทริป และตั๋ว กิจกรรมคุณภาพทั่วประเทศไทย บริการด้วยความซื่อสัตย์ 24 ชม.',
    quickLinks: 'ลิงก์ด่วน',
    destinationsHeader: 'จุดหมายปลายทาง',
    contactUs: 'ติดต่อเรา',
    copyright: 'สงวนลิขสิทธิ์.'
  },
  en: {
    // Navbar
    home: 'Home',
    destinations: 'Destinations',
    experiences: 'Experiences',
    tours: 'Tours & Packages',
    chiangmai: 'Chiang Mai',
    about: 'About Us',
    blog: 'Travel Guide',
    contact: 'Contact',
    login: 'Log In',
    signup: 'Sign Up',
    hotBadge: 'Hot',

    // Hero Section
    heroTitlePrefix: 'Discover Amazing Places',
    heroTitleHighlight: 'in Thailand',
    heroSubtitle: 'Explore the natural beauty of Thailand, from high mountain peaks in Chiang Mai, stunning Andaman beaches, to unique local culture.',
    statTours: 'Tours & Destinations',
    statTravelers: 'Happy Travelers',
    statRating: 'Satisfaction Score',
    searchTabTours: 'Search Tours & Packages',
    searchTabChiangmai: '🌟 Chiang Mai Trips',
    searchTabDestinations: 'Destinations',
    labelLocation: 'Destination / City',
    labelCategory: 'Trip Category',
    labelGuests: 'Travelers',
    allLocations: 'All Thailand Cities',
    allCategories: 'All Categories',
    searchBtn: 'Search Trips',
    popularTags: 'Popular:',

    // Popular Destinations Section
    popularDestSub: 'Popular Destinations',
    popularDestTitle: 'Popular Destinations in Thailand',
    popularDestDesc: 'Explore top travel destinations covering North, South, Central, and world-class island paradises.',

    // Explore Experiences Section
    experiencesSub: 'Explore Experiences',
    experiencesTitle: 'Choose Your Travel Style',
    experiencesDesc: 'Whether you are a beach lover, outdoor adventurer, nature explorer, or culture enthusiast, we have something for you.',

    // Popular Tours Section
    toursSub: 'Popular Tours & Packages',
    toursTitle: 'Top Booked Tours & Packages',
    toursDesc: 'Guaranteed satisfaction by over 50,000 travelers with full-service guides, transfers, and travel insurance.',
    searchResultFor: 'Search results for:',
    clearFilter: 'Clear filter (Show all)',
    noToursFound: '😔 No tour packages matched your search criteria.',
    viewAllTours: 'View All Tours',
    startPriceLabel: 'From',
    viewDetails: 'Details',
    allFilter: 'All',

    // Categories
    catBeach: '🏖️ Beach & Islands',
    catAdventure: '🏕️ Adventure & Nature',
    catCulture: '🛕 Culture & Temples',
    catFood: '🍜 Food & Street Eats',
    catNature: '🌲 Mountains & Waterfalls',

    // Footer
    footerDesc: 'Your trusted platform for Thailand tour packages, day trips, and attraction tickets with 24/7 dedicated support.',
    quickLinks: 'Quick Links',
    destinationsHeader: 'Destinations',
    contactUs: 'Contact Us',
    copyright: 'All rights reserved.'
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('th');

  const toggleLanguage = (selectedLang) => {
    setLang(selectedLang);
  };

  const t = (key) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
