export const DESTINATIONS = [
  {
    id: 'chiang-mai',
    name: 'เชียงใหม่ (Chiang Mai)',
    region: 'ภาคเหนือ',
    tagline: 'สัมผัสเสน่ห์ล้านนา ธรรมชาติ ดอยสุเทพ และคาเฟ่สุดสโลว์ไลฟ์',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=800&q=80',
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
    category: 'adventure',
    categoryName: 'ผจญภัย & ธรรมชาติ',
    duration: '1 วัน (8 ชั่วโมง)',
    groupSize: '2 ท่าน (คู่รัก/เพื่อน)',
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
    category: 'beach',
    categoryName: 'ชายหาด & ทะเล',
    duration: '1 วัน (7 ชั่วโมง)',
    groupSize: '3-5 ท่าน (กลุ่มเพื่อน)',
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
    category: 'nature',
    categoryName: 'ภูเขา & น้ำตก',
    duration: '3 วัน 2 คืน',
    groupSize: '3-5 ท่าน (กลุ่มเพื่อน)',
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
    category: 'beach',
    categoryName: 'ชายหาด & ทะเล',
    duration: '1 วัน (6 ชั่วโมง)',
    groupSize: '3-5 ท่าน (กลุ่มเพื่อน)',
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
    category: 'culture',
    categoryName: 'วัฒนธรรม & วัดวาอาราม',
    duration: '1 วัน (9 ชั่วโมง)',
    groupSize: '2 ท่าน (คู่รัก/เพื่อน)',
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
    title: 'ดำน้ำลึกชมปะการัง และทัวร์รอบเกาะสมุย - หมู่เกาะอ่างทอง',
    location: 'เกาะสมุย',
    category: 'beach',
    categoryName: 'ชายหาด & ทะเล',
    duration: '1 วัน (7 ชั่วโมง)',
    groupSize: '3-5 ท่าน (กลุ่มเพื่อน)',
    rating: 4.8,
    reviewsCount: 210,
    price: 2500,
    originalPrice: 3200,
    badge: 'Island Paradise',
    image: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=800&q=80',
    highlights: ['จุดชมวิวทะเลใน', 'พายคายัคลอดถ้ำ', 'ดำน้ำชมปะการังและสมบูรณ์แบบ']
  },
  {
    id: 7,
    title: 'แอดเวนเจอร์ ซิปไลน์ผินป่าเชียงใหม่ (Zipline Chiang Mai)',
    location: 'เชียงใหม่',
    category: 'adventure',
    categoryName: 'ผจญภัย & ธรรมชาติ',
    duration: 'ครึ่งวัน (4 ชั่วโมง)',
    groupSize: '2 ท่าน (คู่รัก/เพื่อน)',
    rating: 4.9,
    reviewsCount: 365,
    price: 1750,
    originalPrice: 2200,
    badge: 'Extreme Fun',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    highlights: ['32 สถานีตื่นเต้น', 'วิวยอดไม้ผืนป่าสมบูรณ์', 'มาตรฐานความปลอดภัยยุโรป']
  },
  {
    id: 8,
    title: 'ตะลุยทัวร์สตรีทฟู้ดเยาวราช & ตลาดน้ำยามเย็น กรุงเทพฯ',
    location: 'กรุงเทพฯ',
    category: 'food',
    categoryName: 'อาหาร & สตรีทฟู้ด',
    duration: 'ครึ่งวัน (5 ชั่วโมง)',
    groupSize: '1 ท่าน (Solo)',
    rating: 4.9,
    reviewsCount: 510,
    price: 1200,
    originalPrice: 1600,
    badge: 'Foodie Choice',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    highlights: ['ชิม 8 ร้านมิชลินไกด์', 'นั่งรถตุ๊กตุ๊กชมเมืองยามค่ำคืน', 'ไกด์ผู้เชี่ยวชาญเรื่องอาหาร']
  },
  {
    id: 9,
    title: 'ทัวร์เกาะพีพี - ถ้ำไวกิ้ง - หาดมาหยา โดยเรือสปีดโบ๊ท ภูเก็ต',
    location: 'ภูเก็ต',
    category: 'beach',
    categoryName: 'ชายหาด & ทะเล',
    duration: '1 วัน (8 ชั่วโมง)',
    groupSize: '3-5 ท่าน (กลุ่มเพื่อน)',
    rating: 4.9,
    reviewsCount: 620,
    price: 1990,
    originalPrice: 2700,
    badge: 'Must Visit',
    image: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=800&q=80',
    highlights: ['ถ่ายรูปอ่าวมาหยา', 'ดำน้ำอ่าวปิเละ', 'อาหารกลางวันบนเกาะพีพีดอน']
  },
  {
    id: 10,
    title: 'เดินป่ากิ่วแม่ปาน ชมทะเลหมอกดอยอินทนนท์ เชียงใหม่',
    location: 'เชียงใหม่',
    category: 'nature',
    categoryName: 'ภูเขา & น้ำตก',
    duration: '1 วัน (9 ชั่วโมง)',
    groupSize: '1 ท่าน (Solo)',
    rating: 4.8,
    reviewsCount: 175,
    price: 1650,
    originalPrice: 2100,
    badge: 'Trekking Special',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    highlights: ['เส้นทางศึกษาธรรมชาติกิ่วแม่ปาน', 'ชมพระมหาธาตุเจดีย์คู่', 'ไกด์ท้องถิ่นชาวดอย']
  },
  {
    id: 11,
    title: 'พายเรือคายัค คลองหรูด & สระมรกต กระบี่',
    location: 'กระบี่',
    category: 'adventure',
    categoryName: 'ผจญภัย & ธรรมชาติ',
    duration: 'ครึ่งวัน (4 ชั่วโมง)',
    groupSize: '2 ท่าน (คู่รัก/เพื่อน)',
    rating: 4.7,
    reviewsCount: 230,
    price: 990,
    originalPrice: 1390,
    badge: 'Eco Adventure',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    highlights: ['พายคายัคน้ำใสคลองหนองทะเล', 'เล่นน้ำสระมรกตธรรมชาติ', 'ผลไม้สดตามฤดูกาลฟรี']
  },
  {
    id: 13,
    title: 'ล่องเรือพายชมตลาดน้ำดำเนินสะดวก & ตลาดอัมพวา กรุงเทพฯ-สมุทรสงคราม',
    location: 'กรุงเทพฯ',
    category: 'adventure',
    categoryName: 'ผจญภัย & ธรรมชาติ',
    duration: '1 วัน (7 ชั่วโมง)',
    groupSize: '3-5 ท่าน (กลุ่มเพื่อน)',
    rating: 4.8,
    reviewsCount: 380,
    price: 1500,
    originalPrice: 1900,
    badge: 'Popular Floating Market',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
    highlights: ['นั่งเรือหางยาวชมวิถีชีวิตริมน้ำ', 'ชิมขนมไทยโบราณ', 'ชมหิ่งห้อยยามค่ำคืน']
  },
  {
    id: 14,
    title: 'ทัวร์ไหว้พระวัดดอยสุเทพ & วัดอุโมงค์ (สวนพุทธธรรม) เชียงใหม่',
    location: 'เชียงใหม่',
    category: 'culture',
    categoryName: 'วัฒนธรรม & วัดวาอาราม',
    duration: 'ครึ่งวัน (4 ชั่วโมง)',
    groupSize: '2 ท่าน (คู่รัก/เพื่อน)',
    rating: 4.9,
    reviewsCount: 290,
    price: 950,
    originalPrice: 1200,
    badge: 'Spiritual Tour',
    image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=800&q=80',
    highlights: ['ชมอุโมงค์โบราณยุคล้านนา', 'สักการะพระธาตุดอยสุเทพ', 'ชมวิวเมืองเชียงใหม่มุมสูง']
  },
  {
    id: 15,
    title: 'ลิ้มลองขันโตกดินเนอร์ พร้อมการแสดงวัฒนธรรมล้านนา เชียงใหม่',
    location: 'เชียงใหม่',
    category: 'food',
    categoryName: 'อาหาร & สตรีทฟู้ด',
    duration: '3 ชั่วโมง (18:30 - 21:30)',
    groupSize: 'ครอบครัว (5+ ท่าน)',
    rating: 4.8,
    reviewsCount: 410,
    price: 850,
    originalPrice: 1100,
    badge: 'Culture & Dinner',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    highlights: ['ทานอาหารเหนือแบบขันโตก', 'ชมรำฟ้อนเล็บและรำดาบ', 'บรรยากาศเรือนไทยโบราณ']
  },
  {
    id: 16,
    title: 'ทัวร์เกาะสมุย 1 วัน: หินตาหินยาย วัดพระใหญ่ & น้ำตกหน้าเมือง',
    location: 'เกาะสมุย',
    category: 'nature',
    categoryName: 'ภูเขา & น้ำตก',
    duration: '1 วัน (6 ชั่วโมง)',
    groupSize: 'ครอบครัว (5+ ท่าน)',
    rating: 4.7,
    reviewsCount: 165,
    price: 1400,
    originalPrice: 1800,
    badge: 'Island Sightseeing',
    image: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=800&q=80',
    highlights: ['ถ่ายรูปสถานที่ไฮไลท์รอบเกาะ', 'เล่นน้ำตกหน้าเมือง', 'จุดชมวิวลาดก๊ก']
  },
  {
    id: 17,
    title: 'ทัวร์เกาะห้อง สปีดโบ๊ท ดำน้ำชมปะการัง & จุดชมวิว 360 องศา กระบี่',
    location: 'กระบี่',
    category: 'beach',
    categoryName: 'ชายหาด & ทะเล',
    duration: '1 วัน (7 ชั่วโมง)',
    groupSize: '2 ท่าน (คู่รัก/เพื่อน)',
    rating: 4.9,
    reviewsCount: 388,
    price: 1600,
    originalPrice: 2100,
    badge: 'Highlight Krabi',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
    highlights: ['เดินขึ้นจุดชมวิว 360 องศา', 'เล่นน้ำลากูนเกาะห้อง', 'พายคายัคหาดทรายขาว']
  },
  {
    id: 18,
    title: 'ชมการแสดงสยามนิรมิต & ดินเนอร์บุฟเฟต์ ภูเก็ต',
    location: 'ภูเก็ต',
    category: 'culture',
    categoryName: 'วัฒนธรรม & วัดวาอาราม',
    duration: '4 ชั่วโมง (17:30 - 21:30)',
    groupSize: 'ครอบครัว (5+ ท่าน)',
    rating: 4.8,
    reviewsCount: 270,
    price: 1790,
    originalPrice: 2300,
    badge: 'World Class Show',
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80',
    highlights: ['การแสดงเวทีระดับโลก', 'หมู่บ้านไทยโบราณ 4 ภาค', 'บุฟเฟต์อาหารไทย-นานาชาติ']
  },
  {
    id: 19,
    title: 'ทัวร์ไหว้พระวัดปลายแหลม & วัดพระใหญ่ เกาะสมุย (Solo Package)',
    location: 'เกาะสมุย',
    category: 'culture',
    categoryName: 'วัฒนธรรม & วัดวาอาราม',
    duration: 'ครึ่งวัน (4 ชั่วโมง)',
    groupSize: '1 ท่าน (Solo)',
    rating: 4.9,
    reviewsCount: 155,
    price: 1100,
    originalPrice: 1500,
    badge: 'Samui Culture',
    image: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=800&q=80',
    highlights: ['ชมเจ้าแม่กวนอิม 18 แขนกลางน้ำ', 'สักการะองค์พระใหญ่เกาะสมุย', 'บริการรถรับส่งแบบไพรเวท']
  },
  {
    id: 20,
    title: 'ทัวร์ไหว้พระวัดฉลอง & ชมเมืองเก่าภูเก็ต (Solo Day Tour)',
    location: 'ภูเก็ต',
    category: 'culture',
    categoryName: 'วัฒนธรรม & วัดวาอาราม',
    duration: '1 วัน (6 ชั่วโมง)',
    groupSize: '1 ท่าน (Solo)',
    rating: 4.8,
    reviewsCount: 204,
    price: 1250,
    originalPrice: 1700,
    badge: 'Heritage Phuket',
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80',
    highlights: ['กราบหลวงพ่อแช่ม วัดฉลอง', 'เดินชมตึก ชิโน-โปรตุกีส', 'ชิมโอ้เอ๋วขนมหวานภูเก็ต']
  },
  {
    id: 21,
    title: 'ทัวร์ไหว้พระถ้ำเสือ & ชมเมืองกระบี่ 1 วัน (Solo Traveler)',
    location: 'กระบี่',
    category: 'culture',
    categoryName: 'วัฒนธรรม & วัดวาอาราม',
    duration: '1 วัน (7 ชั่วโมง)',
    groupSize: '1 ท่าน (Solo)',
    rating: 4.7,
    reviewsCount: 180,
    price: 1150,
    originalPrice: 1600,
    badge: 'Krabi Temple',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
    highlights: ['ขึ้นบันได 1,237 ขั้นชมวิวยอดเขาวัดถ้ำเสือ', 'ชมลานปูดำและเขาขนาบน้ำ', 'ไกด์ดูแลตลอดทริป']
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
