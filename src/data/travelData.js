export const DESTINATIONS = [
  {
    id: 'chiang-mai',
    name: 'เชียงใหม่ (Chiang Mai)',
    region: 'ภาคเหนือ',
    tagline: 'สัมผัสเสน่ห์ล้านนา ธรรมชาติ ดอยสุเทพ และคาเฟ่สุดสโลว์ไลฟ์',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80',
    toursCount: '48 ทัวร์',
    rating: 4.9,
    reviews: 1280,
    highlights: ['วัดพระธาตุดอยสุเทพ', 'ถนนคนเดินท่าแพ', 'ม่อนแจ่ม', 'แม่กำปอง'],
    featured: true,
    priceFrom: '฿1,590'
  },
  {
    id: 'phuket',
    name: 'ภูเก็ต (Phuket)',
    region: 'ภาคใต้',
    tagline: 'ไข่มุกแห่งอันดามัน ชายหาดสวยระดับโลกและย่านเมืองเก่า',
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80',
    toursCount: '64 ทัวร์',
    rating: 4.9,
    reviews: 2450,
    highlights: ['หาดป่าตอง', 'แหลมพรหมเทพ', 'เมืองเก่าภูเก็ต', 'เกาะเฮ'],
    featured: true,
    priceFrom: '฿1,990'
  },
  {
    id: 'krabi',
    name: 'กระบี่ (Krabi)',
    region: 'ภาคใต้',
    tagline: 'เขาหินปูนตระการตา ทะเลแหวก และเกาะพีพีสุดอลังการ',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
    toursCount: '36 ทัวร์',
    rating: 4.8,
    reviews: 1890,
    highlights: ['หาดไร่เลย์', 'เกาะพีพี', 'สระมรกต', 'เกาะห้อง'],
    featured: false,
    priceFrom: '฿1,450'
  },
  {
    id: 'bangkok',
    name: 'กรุงเทพฯ (Bangkok)',
    region: 'ภาคกลาง',
    tagline: 'มหานครแห่งวัฒนธรรม วัดวาอาราม ช้อปปิ้ง และสตรีทฟู้ด',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
    toursCount: '52 ทัวร์',
    rating: 4.7,
    reviews: 3120,
    highlights: ['วัดพระแก้ว', 'เยาวราช', 'ตลาดน้ำดำเนินสะดวก', 'ไอคอนสยาม'],
    featured: false,
    priceFrom: '฿990'
  },
  {
    id: 'koh-samui',
    name: 'เกาะสมุย (Koh Samui)',
    region: 'ภาคใต้',
    tagline: 'สวรรค์แห่งอ่าวไทย หาดทรายขาว และรีสอร์ตระดับหรู',
    image: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=800&q=80',
    toursCount: '29 ทัวร์',
    rating: 4.8,
    reviews: 1420,
    highlights: ['หาดเฉวง', 'หินตาหินยาย', 'อุทยานแห่งชาติหมู่เกาะอ่างทอง'],
    featured: false,
    priceFrom: '฿2,200'
  }
];

export const EXPERIENCES = [
  {
    id: 'beach',
    title: 'ชายหาด & ทะเล',
    icon: 'Waves',
    count: '120+ กิจกรรม',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    desc: 'ดำน้ำ ชมปะการัง พายคายัค และพักผ่อนบนหาดทรายขาว'
  },
  {
    id: 'adventure',
    title: 'ผจญภัย & ธรรมชาติ',
    icon: 'Compass',
    count: '85+ กิจกรรม',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
    desc: 'เดินป่า ขึ้นดอย โหนสลิง ซิปไลน์ และแคมป์ปิ้ง'
  },
  {
    id: 'culture',
    title: 'วัฒนธรรม & วัดวาอาราม',
    icon: 'Landmark',
    count: '95+ กิจกรรม',
    image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=600&q=80',
    desc: 'สัมผัสประวัติศาสตร์ ไหว้พระ สักการะสิ่งศักดิ์สิทธิ์โบราณ'
  },
  {
    id: 'food',
    title: 'อาหาร & สตรีทฟู้ด',
    icon: 'UtensilsCrossed',
    count: '110+ กิจกรรม',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    desc: 'ทัวร์กินสตรีทฟู้ด เรียนทำอาหารไทย และคาเฟ่ทัวร์'
  },
  {
    id: 'nature',
    title: 'ภูเขา & น้ำตก',
    icon: 'Trees',
    count: '70+ กิจกรรม',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    desc: 'รับอากาศบริสุทธิ์บนยอดดอย ชมทะเลหมอก และน้ำตกใส'
  }
];

export const POPULAR_TOURS = [
  {
    id: 1,
    title: 'วันเดย์ทริป เชียงใหม่-แม่กำปอง ชมวิถีชีวิตสโลว์ไลฟ์ & คาเฟ่กลางป่า',
    location: 'เชียงใหม่',
    duration: '1 วัน (8 ชั่วโมง)',
    groupSize: '2-10 คน',
    rating: 4.9,
    reviewsCount: 312,
    price: 1890,
    originalPrice: 2400,
    badge: 'ยอดนิยมในเชียงใหม่',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80',
    highlights: ['จิบกาแฟริมธารแม่กำปอง', 'ชมน้ำตกแม่กำปอง', 'แวะศูนย์พัฒนาโครงการหลวง', 'รถรับส่งจากโรงแรม']
  },
  {
    id: 2,
    title: 'ทัวร์ 4 เกาะกระบี่ โดยเรือสปีดโบ๊ท + ทะเลแหวก & หาดไร่เลย์',
    location: 'กระบี่',
    duration: '1 วัน (7 ชั่วโมง)',
    groupSize: '10-25 คน',
    rating: 4.8,
    reviewsCount: 540,
    price: 1450,
    originalPrice: 1900,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
    highlights: ['ชม miracle ทะเลแหวก', 'ดำน้ำชมปะการังเกาะไก่', 'อาหารกลางวันบุฟเฟต์', 'อุปกรณ์ดำน้ำฟรี']
  },
  {
    id: 3,
    title: 'แพ็กเกจทัวร์เชียงใหม่ 3 วัน 2 คืน: ดอยอินทนนท์ ม่อนแจ่ม & ล่องแพแม่วาง',
    location: 'เชียงใหม่',
    duration: '3 วัน 2 คืน',
    groupSize: 'private group',
    rating: 5.0,
    reviewsCount: 198,
    price: 4990,
    originalPrice: 6500,
    badge: 'แนะนำพิเศษ',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80',
    highlights: ['ยอดดอยอินทนนท์จุดสูงสุด', 'ชมดอกพญาเสือโคร่งตามฤดูกาล', 'ล่องแพไม้ไผ่แม่วาง', 'พักรีสอร์ตวิวหมอก']
  },
  {
    id: 4,
    title: 'ล่องเรือยอชท์ชมพระอาทิตย์ตก เกาะเฮ-เกาะราชา ภูเก็ต',
    location: 'ภูเก็ต',
    duration: '1 วัน (6 ชั่วโมง)',
    groupSize: '15-30 คน',
    rating: 4.9,
    reviewsCount: 420,
    price: 2990,
    originalPrice: 3800,
    badge: 'Luxury Experience',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    highlights: ['เรือยอชท์คาทามารันหรู', 'บาร์บีคิวซีฟู้ดบนเรือ', 'ดำน้ำสน็อกเกิล', 'ชม sunset แหลมพรหมเทพ']
  },
  {
    id: 5,
    title: 'ทัวร์ไหว้พระ 9 วัดกรุงเทพฯ + ล่องเรือดินเนอร์เจ้าพระยา',
    location: 'กรุงเทพฯ',
    duration: '1 วัน (9 ชั่วโมง)',
    groupSize: '4-12 คน',
    rating: 4.7,
    reviewsCount: 280,
    price: 2190,
    originalPrice: 2800,
    badge: 'Cultural Classic',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
    highlights: ['วัดพระแก้ว & วัดอรุณฯ', 'ล่องเรือบุฟเฟต์อินเตอร์', 'ไกด์ท้องถิ่นดูแลตลอดทริป']
  },
  {
    id: 6,
    title: 'แอดเวนเจอร์ ซิปไลน์ผินป่าเชียงใหม่ (Zipline Chiang Mai)',
    location: 'เชียงใหม่',
    duration: 'ครึ่งวัน (4 ชั่วโมง)',
    groupSize: '2-8 คน',
    rating: 4.9,
    reviewsCount: 365,
    price: 1750,
    originalPrice: 2200,
    badge: 'Extreme Fun',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    highlights: ['32 สถานีตื่นเต้น', 'วิวยอดไม้ผืนป่าสมบูรณ์', 'มาตรฐานความปลอดภัยยุโรป']
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'แจกแพลนเที่ยวเชียงใหม่ 4 วัน 3 คืน ฉบับอัปเดต 2026 เที่ยวครบทั้งคาเฟ่และธรรมชาติ',
    category: 'Travel Guide',
    date: '12 ส.ค. 2026',
    author: 'ทีมงาน TravelMate',
    readTime: '6 นาที',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80',
    excerpt: 'รวมพิกัดเช็กอินใหม่ล่าสุดในเชียงใหม่ ทั้งแม่กำปอง ม่อนแจ่ม นิมมานฯ และดอยอินทนนท์...'
  },
  {
    id: 2,
    title: '10 หาดลับในภูเก็ตและกระบี่ ที่คนรักสงบต้องไม่พลาด',
    category: 'Island Guide',
    date: '05 ส.ค. 2026',
    author: 'กิตติพงษ์ ทราเวลเลอร์',
    readTime: '5 นาที',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    excerpt: 'หลีกหนีความวุ่นวาย มาสัมผัสหาดทรายขาวบริสุทธิ์และน้ำทะเลสีฟ้าใสที่คุณอาจยังไม่เคยรู้จัก...'
  },
  {
    id: 3,
    title: 'รีวิวทริปไหว้พระ ขอพรสายมู ณ กรุงเทพฯ และอยุธยา เดินทางง่ายใน 1 วัน',
    category: 'Culture & Lifestyle',
    date: '28 ก.ค. 2026',
    author: 'ศศิธร สุขใจ',
    readTime: '4 นาที',
    image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=800&q=80',
    excerpt: 'เส้นทางท่องเที่ยวเสริมสิริมงคล พร้อมแนะนำจุดถ่ายรูปและร้านเด็ดเจ้าดังตลอดทาง...'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'คุณณัฐวุฒิ ศิริกุล',
    role: 'นักท่องเที่ยวจากกรุงเทพฯ',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    comment: 'จองทัวร์เชียงใหม่แม่กำปองกับ TravelMate สะดวกมาก รถรับส่งตรงเวลา ไกด์เป็นกันเองและบริการประทับใจสุดๆ ประทับใจวิวธรรมชาติมากครับ!',
    rating: 5,
    destination: 'ทริปเชียงใหม่'
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'Solo Traveler from UK',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    comment: 'TravelMate made my Krabi trip unforgettable. Super transparent pricing, great customer service, and smooth island hopping booking!',
    rating: 5,
    destination: 'Krabi 4-Islands Tour'
  },
  {
    id: 3,
    name: 'คุณภาวิณี & ครอบครัว',
    role: 'Family Trip',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    comment: 'พาลูกๆ ไปเที่ยวภูเก็ตและล่องเรือยอชท์ บริการดีเยี่ยม ปลอดภัย เด็กๆ ชอบมากค่ะ วางแผนทริปต่อไปผ่าน TravelMate แน่นอน',
    rating: 5,
    destination: 'ทริปเกาะเฮ-ภูเก็ต'
  }
];

export const CHIANG_MAI_SPECIALS = {
  title: 'มนต์เสน่ห์เชียงใหม่ (Chiang Mai Highlights)',
  subtitle: 'สัมผัสบรรยากาศเมืองเหนือ ธรรมชาติอันบริสุทธิ์ และวัฒนธรรมล้านนาอันน่าหลงใหล',
  spots: [
    {
      name: 'แม่กำปอง (Mae Kampong)',
      tag: 'หมู่บ้านโฮมสเตย์กลางป่า',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80',
      desc: 'สัมผัสอากาศเย็นสบายตลอดปี เสียงน้ำตกไหลผ่าน และวิถีชีวิตสโลว์ไลฟ์ของชาวบ้าน'
    },
    {
      name: 'ดอยอินทนนท์ (Doi Inthanon)',
      tag: 'ยอดดอยที่สูงที่สุดในไทย',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80',
      desc: 'ชมพระมหาธาตุนภเมทนีดล เส้นทางศึกษาธรรมชาติกิ่วแม่ปาน และทะเลหมอกยามเช้า'
    },
    {
      name: 'ม่อนแจ่ม (Mon Jam)',
      tag: 'ทุ่งดอกไม้ & วิวทิวเขา',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      desc: 'ทะเลหมอกยามเช้า แปลงผักและแปลงดอกไม้เมืองหนาวหลากสีสัน พร้อมที่พักแบบแคมป์ปิ้ง'
    },
    {
      name: 'วัดพระธาตุดอยสุเทพ (Doi Suthep)',
      tag: 'สัญลักษณ์คู่บ้านคู่เมืองเชียงใหม่',
      image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=800&q=80',
      desc: 'กราบสักการะองค์พระบรมธาตุเจดีย์ทองคำ พร้อมชมทัศนียภาพอันสวยงามของเมืองเชียงใหม่'
    }
  ]
};
