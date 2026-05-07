import BTSpeakerImg from '../assets/btspeaker.png';
import EarbudsImg from '../assets/earbuds.png';
import HeadphoneImg from '../assets/headphone.png';

const products = [
  {
    id: 1,
    name: 'AirPods Lite Earbuds',
    category: 'Earbuds',
    price: 2500,
    oldPrice: 3200,
    rating: 4.5,
    stock: 14,
    badge: 'Best seller',
    description: 'Compact wireless earbuds with balanced sound, touch controls, and a pocket-friendly charging case.',
    features: ['24-hour battery with case', 'Touch controls', 'Low-latency gaming mode'],
    image: EarbudsImg
  },
  {
    id: 2,
    name: 'BassCore Bluetooth Speaker',
    category: 'Speakers',
    price: 4500,
    oldPrice: 5200,
    rating: 4.7,
    stock: 9,
    badge: 'Hot deal',
    description: 'Portable Bluetooth speaker with punchy bass, crisp vocals, and splash-resistant build for daily use.',
    features: ['10W stereo output', 'IPX5 splash resistance', '12-hour playback'],
    image: BTSpeakerImg
  },
  {
    id: 3,
    name: 'Studio Max Headphones',
    category: 'Headphones',
    price: 6000,
    oldPrice: 7500,
    rating: 4.8,
    stock: 6,
    badge: 'Premium',
    description: 'Over-ear headphones designed for immersive sound, soft cushions, and long study or work sessions.',
    features: ['Noise isolation', 'Foldable design', '40mm audio drivers'],
    image: HeadphoneImg
  },
  {
    id: 4,
    name: 'Pocket Mini Speaker',
    category: 'Speakers',
    price: 2800,
    oldPrice: 3400,
    rating: 4.2,
    stock: 18,
    badge: 'New',
    description: 'Small wireless speaker made for desks, bedrooms, and travel without taking much space.',
    features: ['Ultra compact', 'Bluetooth 5.3', 'Built-in microphone'],
    image: BTSpeakerImg
  },
  {
    id: 5,
    name: 'Focus Buds Pro',
    category: 'Earbuds',
    price: 3900,
    oldPrice: 4800,
    rating: 4.6,
    stock: 3,
    badge: 'Low stock',
    description: 'Comfort-fit earbuds with clear calls, fast pairing, and strong battery life for everyday routines.',
    features: ['ENC calling', 'Fast charging', 'Secure in-ear fit'],
    image: EarbudsImg
  },
  {
    id: 6,
    name: 'WorkFlow Headset',
    category: 'Headphones',
    price: 5200,
    oldPrice: 6100,
    rating: 4.4,
    stock: 11,
    badge: 'Office pick',
    description: 'Lightweight headset for online classes, meetings, and long calls with reliable microphone clarity.',
    features: ['Clear boom mic', 'Soft ear cushions', 'Wired and wireless modes'],
    image: HeadphoneImg
  }
];

export default products;
