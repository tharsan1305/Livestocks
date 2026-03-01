import React from 'react';
import { Link } from 'react-router-dom';
import { ICONS } from '../data/mockData';
import { motion } from 'motion/react';

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#1A7A3A] to-[#0d4221] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                <ICONS.Shield className="h-16 w-16 text-white" />
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              AgroShield 360
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-green-100 mb-8 font-light"
            >
              Protecting Cows. Protecting Humans. Saving India.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link 
                to="/dashboard" 
                className="inline-flex items-center gap-2 bg-white text-[#1A7A3A] px-8 py-4 rounded-full text-lg font-bold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Live Farm Dashboard
                <ICONS.ChevronRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-red-50 p-8 rounded-2xl border border-red-100 text-center shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4 text-red-600">
                <ICONS.AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="text-4xl font-bold text-red-700 mb-2">58,000</h3>
              <p className="text-gray-600 font-medium">Indians die yearly from AMR</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-amber-50 p-8 rounded-2xl border border-amber-100 text-center shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4 text-amber-600">
                <ICONS.Milk className="h-6 w-6" />
              </div>
              <h3 className="text-4xl font-bold text-amber-700 mb-2">77%</h3>
              <p className="text-gray-600 font-medium">Indian milk has antibiotic residue</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-green-50 p-8 rounded-2xl border border-green-100 text-center shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4 text-green-600">
                <ICONS.Activity className="h-6 w-6" />
              </div>
              <h3 className="text-4xl font-bold text-green-700 mb-2">₹49,500</h3>
              <p className="text-gray-600 font-medium">Lost per sick cow without system</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
