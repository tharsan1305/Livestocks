import React from 'react';
import { ICONS } from '../data/mockData';
import { motion } from 'motion/react';

export default function HowItWorks() {
  const steps = [
    {
      icon: ICONS.Smartphone,
      title: "Smart Gate Sensor",
      desc: "Cow walks through smart gate equipped with thermal and weight sensors."
    },
    {
      icon: ICONS.Brain,
      title: "AI Analysis",
      desc: "AI algorithms analyze vitals to detect early signs of illness."
    },
    {
      icon: ICONS.AlertTriangle,
      title: "Instant Alert",
      desc: "Farmer receives WhatsApp alert for any critical health anomalies."
    },
    {
      icon: ICONS.Stethoscope,
      title: "Vet Diagnosis",
      desc: "Vet receives pre-loaded health data and AI prescription suggestions."
    },
    {
      icon: ICONS.Database,
      title: "Blockchain Record",
      desc: "Treatment and drug usage are immutably recorded on the blockchain."
    },
    {
      icon: ICONS.CheckCircle,
      title: "Safe Milk",
      desc: "Consumer scans QR code to verify milk safety and antibiotic-free status."
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-12">
      <div className="bg-[#1A7A3A] text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">How AgroShield Works</h1>
        <p className="text-green-100 max-w-2xl mx-auto px-4">
          A complete end-to-end ecosystem connecting cows, farmers, vets, and consumers.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative hover:shadow-lg transition-shadow"
            >
              <div className="absolute -top-6 left-8 bg-white p-4 rounded-xl shadow-md border border-gray-100">
                <step.icon className="h-8 w-8 text-[#1A7A3A]" />
              </div>
              <div className="mt-8">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Step {idx + 1}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
