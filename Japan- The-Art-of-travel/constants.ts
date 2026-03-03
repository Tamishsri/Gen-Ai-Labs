import { Region, FoodItem, EtiquetteRule, Season, Phrase, ChecklistItem } from './types';

export const REGIONS: Region[] = [
  {
    id: 'hokkaido',
    name: 'Hokkaido',
    japaneseName: '北海道',
    description: 'The wild north. Vast flower fields in summer and the world’s best powder snow in winter.',
    image: 'https://picsum.photos/seed/hokkaido_snow/800/600',
    highlights: ['Sapporo Snow Festival', 'Furano Lavender Fields', 'Otaru Canal', 'Blue Pond'],
    hiddenGems: ['Rishiri Island', 'Noboribetsu Onsen', 'Shiretoko National Park'],
    bestSeason: 'Winter/Summer',
    coordinates: { x: 75, y: 15 }
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    japaneseName: '東京',
    description: 'A neon-lit metropolis where ancient shrines nestle between skyscrapers. The heartbeat of modern Japan.',
    image: 'https://picsum.photos/seed/tokyo_vibe/800/600',
    highlights: ['Shibuya Crossing', 'Senso-ji Temple', 'Harajuku Fashion', 'Tsukiji Outer Market'],
    hiddenGems: ['Yanaka Ginza', 'Daikanyama T-Site', 'Mount Takao', 'Kichijoji Harmonica Yokocho'],
    bestSeason: 'Spring/Autumn',
    coordinates: { x: 62, y: 55 }
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    japaneseName: '京都',
    description: 'The cultural soul of Japan. A timeless city of geisha, wooden teahouses, and over 1,000 temples.',
    image: 'https://picsum.photos/seed/kyoto_temple/800/600',
    highlights: ['Fushimi Inari Shrine', 'Arashiyama Bamboo Grove', 'Kinkaku-ji', 'Gion District'],
    hiddenGems: ['Otagi Nenbutsu-ji', 'Kifune Shrine', 'Ine no Funaya', 'Philosopher\'s Path at Dawn'],
    bestSeason: 'Spring/Autumn',
    coordinates: { x: 48, y: 62 }
  },
  {
    id: 'osaka',
    name: 'Osaka',
    japaneseName: '大阪',
    description: 'Japan’s kitchen. A loud, friendly, and delicious city known for its street food and comedy culture.',
    image: 'https://picsum.photos/seed/osaka_neon/800/600',
    highlights: ['Dotonbori', 'Osaka Castle', 'Universal Studios Japan', 'Kuromon Market'],
    hiddenGems: ['Sumiyoshi Taisha', 'Minoo Park', 'Hozenji Yokocho', 'Retro Nakazakicho'],
    bestSeason: 'Year-round',
    coordinates: { x: 45, y: 65 }
  },
  {
    id: 'okinawa',
    name: 'Okinawa',
    japaneseName: '沖縄',
    description: 'The tropical paradise. Crystal clear waters, coral reefs, and a unique Ryukyu heritage.',
    image: 'https://picsum.photos/seed/okinawa_beach/800/600',
    highlights: ['Churaumi Aquarium', 'Ishigaki Island', 'Taketomi Village', 'Emerald Beaches'],
    hiddenGems: ['Cape Manzamo', 'Iriomote Jungle', 'Yachimun Pottery Village'],
    bestSeason: 'Summer/Autumn',
    coordinates: { x: 20, y: 85 }
  }
];

export const FOOD_ITEMS: FoodItem[] = [
  {
    name: 'Omakase Sushi',
    japaneseName: 'お任せ寿司',
    description: 'Leave it to the chef. A seasonal journey of raw fish artistry.',
    category: 'Dish',
    priceRange: '$$$$'
  },
  {
    name: 'Tonkotsu Ramen',
    japaneseName: '豚骨ラーメン',
    description: 'Rich, creamy pork bone broth noodles, famous in Fukuoka but loved everywhere.',
    category: 'Dish',
    priceRange: '$'
  },
  {
    name: 'Takoyaki',
    japaneseName: 'たこ焼き',
    description: 'Savory octopus balls, piping hot and covered in bonito flakes. An Osaka classic.',
    category: 'Street Food',
    priceRange: '$'
  },
  {
    name: 'Kaiseki Ryori',
    japaneseName: '懐石料理',
    description: 'Traditional multi-course dinner. The ultimate expression of Japanese hospitality.',
    category: 'Experience',
    priceRange: '$$$$$'
  }
];

export const ETIQUETTE_RULES: EtiquetteRule[] = [
  {
    title: 'The Art of Bowing',
    description: 'A slight bow represents respect. You don’t need to go full 90 degrees; a gentle nod suffices for tourists.',
    type: 'do',
    iconName: 'UserCheck'
  },
  {
    title: 'Quiet Trains',
    description: 'Trains are for sleeping or reading. Keep your voice down and phone on silent mode.',
    type: 'do',
    iconName: 'VolumeX'
  },
  {
    title: 'No Tipping',
    description: 'Service is included. Tipping can actually be seen as confusing or rude.',
    type: 'dont',
    iconName: 'Ban'
  },
  {
    title: 'Shoes Off',
    description: 'Always remove shoes at the entrance of homes, ryokans, and some temples. Look for the tatami.',
    type: 'do',
    iconName: 'Footprints'
  },
  {
    title: 'Eating While Walking',
    description: 'Generally frowned upon. Stop, eat your snack near the shop, then dispose of trash.',
    type: 'dont',
    iconName: 'Utensils'
  }
];

export const SEASONS: Season[] = [
  {
    name: 'Sakura (Spring)',
    months: 'March - May',
    description: 'The world turns pink. Hanami parties under the cherry blossoms are a national obsession.',
    activity: 'Picnic in Ueno Park',
    color: 'bg-pink-100'
  },
  {
    name: 'Natsu (Summer)',
    months: 'June - August',
    description: 'Humid days and electric nights. Fireworks festivals (Hanabi) and street food stalls.',
    activity: 'Climb Mt. Fuji',
    color: 'bg-green-100'
  },
  {
    name: 'Aki (Autumn)',
    months: 'September - November',
    description: 'The changing leaves (Koyo) paint the mountains in fiery reds and burnt oranges.',
    activity: 'Temple hopping in Kyoto',
    color: 'bg-orange-100'
  },
  {
    name: 'Fuyu (Winter)',
    months: 'December - February',
    description: 'Crisp air, snow-capped mountains, and steaming hot onsens to warm the soul.',
    activity: 'Skiing in Niseko',
    color: 'bg-blue-50'
  }
];

export const PHRASES: Phrase[] = [
  {
    japanese: 'こんにちは',
    pronunciation: 'Konnichiwa',
    english: 'Hello / Good afternoon',
    category: 'Greetings'
  },
  {
    japanese: 'ありがとうございます',
    pronunciation: 'Arigatou gozaimasu',
    english: 'Thank you very much',
    category: 'Politeness'
  },
  {
    japanese: 'すみません',
    pronunciation: 'Sumimasen',
    english: 'Excuse me / I am sorry',
    category: 'Politeness'
  },
  {
    japanese: 'これをお願いします',
    pronunciation: 'Kore o onegaishimasu',
    english: 'I would like this, please',
    category: 'Ordering'
  },
  {
    japanese: 'お会計をお願いします',
    pronunciation: 'Okaikei o onegaishimasu',
    english: 'The bill, please',
    category: 'Ordering'
  },
  {
    japanese: 'トイレはどこですか？',
    pronunciation: 'Toire wa doko desu ka?',
    english: 'Where is the bathroom?',
    category: 'Travel'
  }
];

export const MUST_TRY_LIST: ChecklistItem[] = [
  { id: 'c1', label: 'Eat an egg sandwich from 7-Eleven', category: 'Food' },
  { id: 'c2', label: 'Buy a hot drink from a vending machine', category: 'Food' },
  { id: 'c3', label: 'Walk through a path of Torii gates', category: 'Experience' },
  { id: 'c4', label: 'Purify your hands at a shrine (Temizuya)', category: 'Experience' },
  { id: 'c5', label: 'Ride the Shinkansen and eat an Ekiben', category: 'Experience' },
  { id: 'c6', label: 'Try Matcha soft serve ice cream', category: 'Food' },
  { id: 'c7', label: 'Visit a TeamLab exhibition', category: 'Experience' },
  { id: 'c8', label: 'Soak in an Onsen (Hot Spring)', category: 'Experience' },
];
