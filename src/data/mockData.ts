import { 
  Shield, 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  Thermometer, 
  Weight, 
  Eye, 
  Wind, 
  Brain, 
  Stethoscope, 
  Syringe, 
  Lock, 
  FileCheck, 
  QrCode, 
  Smartphone, 
  Database,
  Milk,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

export const ICONS = {
  Shield,
  Activity,
  AlertTriangle,
  CheckCircle,
  Thermometer,
  Weight,
  Eye,
  Wind,
  Brain,
  Stethoscope,
  Syringe,
  Lock,
  FileCheck,
  QrCode,
  Smartphone,
  Database,
  Milk,
  ChevronRight,
  Menu,
  X
};

export const MOCK_COWS = [
  { id: '12', name: 'Lakshmi', score: 92, status: 'Healthy', temp: 38.4 },
  { id: '18', name: 'Ponni', score: 65, status: 'Watch', temp: 38.9 },
  { id: '24', name: 'Gauri', score: 88, status: 'Healthy', temp: 38.5 },
  { id: '31', name: 'Nandini', score: 95, status: 'Healthy', temp: 38.3 },
  { id: '47', name: 'Kamatchi', score: 11, status: 'Critical', temp: 40.4 },
  { id: '52', name: 'Radha', score: 85, status: 'Healthy', temp: 38.6 },
  { id: '63', name: 'Meena', score: 90, status: 'Healthy', temp: 38.4 },
  { id: '71', name: 'Devi', score: 58, status: 'Watch', temp: 39.1 },
  { id: '85', name: 'Kaveri', score: 82, status: 'Healthy', temp: 38.5 },
  { id: '92', name: 'Ganga', score: 94, status: 'Healthy', temp: 38.2 },
];

export const KAMATCHI_DETAILS = {
  id: '47',
  name: 'Kamatchi',
  breed: 'HF Cross',
  age: '4 years',
  score: 11,
  sensors: [
    { name: 'Temperature', value: '40.4°C', normal: '38.5°C', status: 'Critical', trend: 'up' },
    { name: 'Weight', value: '312kg', normal: '318kg', status: 'Warning', trend: 'down' },
    { name: 'Eye Condition', value: 'Dull/Red', normal: 'Bright', status: 'Critical', trend: 'stable' },
    { name: 'Breathing Rate', value: '45/min', normal: '26/min', status: 'Critical', trend: 'up' },
    { name: 'Breath Ammonia', value: '88 ppm', normal: '25 ppm', status: 'Critical', trend: 'up' },
    { name: 'Chewing Strokes', value: '7800/day', normal: '36000/day', status: 'Critical', trend: 'down' },
  ],
  diagnosis: {
    suspects: [
      { condition: 'Pneumonia', probability: 87 },
      { condition: 'Ketosis', probability: 72 }
    ],
    recommendation: 'Call vet immediately. Do not self medicate.'
  },
  history: [
    { day: 'Fri', score: 78 },
    { day: 'Sat', score: 61 },
    { day: 'Sun', score: 34 },
    { day: 'Mon', score: 11 },
  ]
};

export const BLOCKCHAIN_RECORD = {
  id: 'TX8847291',
  timestamp: 'Monday March 1 2026 7:23 AM',
  farm: 'Rajan Farm Annur Coimbatore',
  cowId: '47 Kamatchi',
  vet: 'Dr. Kumar License TN2847',
  diagnosis: 'Pneumonia and Ketosis',
  drug: 'Oxytetracycline 3.1ml Injection',
  treatmentStart: 'March 1 2026',
  milkSafeDate: 'March 11 2026',
  meatSafeDate: 'March 29 2026',
  hash: '3a7f9b2c1d8e4f5a6b7c8d9e0f1a2b3c',
  status: 'LOCKED'
};
