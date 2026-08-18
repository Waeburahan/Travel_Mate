import React from 'react';
import { ShieldCheck, BadgePercent, Headphones, Award, HeartHandshake, Zap } from 'lucide-react';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: 'การันตีราคาดีที่สุด',
      desc: 'มั่นใจได้ในราคาที่เป็นมิตร ไร้ค่าธรรมเนียมแอบแฝง พร้อมการันตีคืนเงินหากพบถูกกว่า'
    },
    {
      icon: Award,
      title: 'มาตรฐานทัวร์ระดับ พรีเมียม',
      desc: 'คัดสรรพาร์ทเนอร์ไกด์และรถรับส่งที่ผ่านการรับรองมาตรฐานความปลอดภัยระดับสากล'
    },
    {
      icon: Headphones,
      title: 'บริการช่วยเหลือ 24 ชั่วโมง',
      desc: 'ทีมงานพร้อมดูแลและตอบข้อสงสัยตลอด 24/7 เพื่อให้ทริปของคุณราบรื่นไร้กังวล'
    },
    {
      icon: Zap,
      title: 'ยืนยันการจองทันที',
      desc: 'รับ E-Voucher ทันทีหลังจากชำระเงิน นำไปสแกนเช็กอินที่สถานที่จริงได้อย่างรวดเร็ว'
    }
  ];

  return (
    <section className="section-padding why-choose-section" id="about">
      <div className="container">
        <div className="why-choose-wrapper">
          <div className="why-header">
            <span className="sub-title">Why Choose Us</span>
            <h2 className="main-title">ทำไมต้องวางแผนทริปกับ TravelMate?</h2>
            <p className="desc">
              เรามุ่งมั่นสร้างประสบการณ์การเดินทางที่ดีที่สุด ให้ทุกทริปในประเทศไทยของคุณเต็มไปด้วยความประทับใจและความทรงจำที่งดงาม
            </p>
          </div>

          <div className="why-grid">
            {features.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="why-card">
                  <div className="why-icon-box">
                    <IconComp size={28} />
                  </div>
                  <h3 className="why-card-title">{item.title}</h3>
                  <p className="why-card-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
