import React from 'react';
import { ICONS } from '../data/mockData';
import { motion } from 'motion/react';

export default function Consumer() {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white max-w-md w-full rounded-3xl shadow-2xl overflow-hidden border-t-8 border-[#1A7A3A]"
      >
        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ICONS.Shield className="h-8 w-8 text-[#1A7A3A]" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Milk Safety Certificate</h1>
          <p className="text-gray-500 text-sm">Scan Verified Successfully</p>
        </div>

        <div className="px-8 pb-8 space-y-6">
          <div className="bg-gray-50 rounded-xl p-4 space-y-3 border border-gray-100">
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Milk Batch</span>
              <span className="font-mono font-bold text-gray-900">AMC-2847-MAR-11</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Farm</span>
              <span className="font-bold text-gray-900 text-right">Rajan Farm, Annur</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Collection Date</span>
              <span className="font-bold text-gray-900">March 11 2026</span>
            </div>
          </div>

          <div className="space-y-4">
            {[
              "All cows healthy on collection day",
              "Antibiotic free — last use 10+ days ago",
              "Milk quality tested — pH 6.6 normal",
              "Blockchain verified — tamper proof"
            ].map((text, idx) => (
              <motion.div 
                key={idx}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="bg-green-100 p-1 rounded-full">
                  <ICONS.CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium text-sm">{text}</span>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#1A7A3A] text-white p-6 rounded-2xl text-center shadow-lg shadow-green-200">
            <h3 className="font-bold text-lg mb-1">100% SAFE FOR YOUR FAMILY</h3>
            <div className="flex items-center justify-center gap-2 opacity-90">
              <ICONS.Activity className="h-4 w-4" />
              <span>Safety Score: 98/100</span>
            </div>
          </div>
          
          <div className="text-center">
             <p className="text-xs text-gray-400">Verified by AgroShield 360 Blockchain System</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
