import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PopularDestinations from './components/PopularDestinations';
import ExploreExperiences from './components/ExploreExperiences';
import PopularTours from './components/PopularTours';
import ChiangMaiFeatured from './components/ChiangMaiFeatured';
import WhyChooseUs from './components/WhyChooseUs';
import TravelInspiration from './components/TravelInspiration';
import Footer from './components/Footer';
import DetailModal from './components/DetailModal';
import Chatbot from './components/Chatbot';

export default function App() {
  const [selectedModalItem, setSelectedModalItem] = useState(null);
  const [modalType, setModalType] = useState('tour');

  const handleOpenDetail = (item, type = 'tour') => {
    setSelectedModalItem(item);
    setModalType(type);
  };

  const handleSearchSubmit = (searchParams) => {
    // Smooth scroll to tours section and highlight search filter
    const toursSection = document.getElementById('tours');
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="travelmate-app">
      {/* 1. Header Navigation */}
      <Navbar onOpenSearch={() => {
        const hero = document.querySelector('.hero-section');
        if (hero) hero.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* 2. Hero Section */}
      <HeroSection onSearchSubmit={handleSearchSubmit} />

      {/* 3. Popular Destinations */}
      <PopularDestinations onSelectDestination={(dest) => handleOpenDetail(dest, 'destination')} />

      {/* 4. Explore Experiences */}
      <ExploreExperiences onSelectCategory={(catId) => {
        const tours = document.getElementById('tours');
        if (tours) tours.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* 5. Popular Tours */}
      <PopularTours onSelectTour={(tour) => handleOpenDetail(tour, 'tour')} />

      {/* 6. Chiang Mai Spotlight / Featured Destination */}
      <ChiangMaiFeatured onSelectSpot={(spot) => handleOpenDetail(spot, 'spot')} />

      {/* 7. Why Choose Us */}
      <WhyChooseUs />

      {/* 8. Travel Inspiration & Blog, Testimonials, Newsletter */}
      <TravelInspiration />

      {/* 9. Footer */}
      <Footer />

      {/* 10. AI Travel Assistant Chatbot */}
      <Chatbot />

      {/* 11. Detail & Booking Modal */}
      {selectedModalItem && (
        <DetailModal 
          item={selectedModalItem} 
          type={modalType} 
          onClose={() => setSelectedModalItem(null)} 
        />
      )}
    </div>
  );
}
