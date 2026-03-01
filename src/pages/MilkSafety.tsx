import React from 'react';
import { ICONS, MOCK_COWS } from '../data/mockData';
import { motion } from 'motion/react';

export default function MilkSafety() {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="bg-white border-b border-gray-200 p-6 mb-8">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-lg">
            <ICONS.Milk className="h-6 w-6 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Milk Safety Monitor</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cow Status Grid */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Herd Milk Status</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MOCK_COWS.map((cow) => (
                  <div 
                    key={cow.id}
                    className={`flex items-center justify-between p-3 rounded-lg border ${
                      cow.id === '47' ? 'bg-red-50 border-red-200' :
                      cow.id === '18' ? 'bg-yellow-50 border-yellow-200' :
                      'bg-green-50 border-green-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                        cow.id === '47' ? 'bg-red-200 text-red-700' :
                        cow.id === '18' ? 'bg-yellow-200 text-yellow-700' :
                        'bg-green-200 text-green-700'
                      }`}>
                        {cow.id}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{cow.name}</div>
                        <div className="text-xs text-gray-500">
                          {cow.id === '47' ? 'Treatment Active' : cow.id === '18' ? 'Retest Needed' : 'Safe to Sell'}
                        </div>
                      </div>
                    </div>
                    {cow.id === '47' ? (
                      <ICONS.Lock className="h-5 w-5 text-red-500" />
                    ) : cow.id === '18' ? (
                      <ICONS.AlertTriangle className="h-5 w-5 text-yellow-500" />
                    ) : (
                      <ICONS.CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Report */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Daily Milk Report</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <div className="text-sm text-green-800 mb-1">Safe Milk Today</div>
                  <div className="text-2xl font-bold text-green-900">245 Litres</div>
                  <div className="text-xs text-green-600">From 48 cows</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <div className="text-sm text-red-800 mb-1">Locked/Discarded</div>
                  <div className="text-2xl font-bold text-red-900">12 Litres</div>
                  <div className="text-xs text-red-600">From 1 cow</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="text-sm text-blue-800 mb-1">Est. Income</div>
                  <div className="text-2xl font-bold text-blue-900">₹4,900</div>
                  <div className="text-xs text-blue-600">Yesterday: ₹4,200</div>
                </div>
              </div>
            </div>
          </div>

          {/* Locked Milk Warning */}
          <div>
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
              className="bg-red-600 text-white rounded-xl shadow-lg p-6 mb-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <ICONS.Lock className="h-8 w-8" />
                <h2 className="text-2xl font-bold">MILK LOCKED</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-700/50 p-4 rounded-lg">
                  <div className="text-red-200 text-sm mb-1">Reason</div>
                  <div className="font-bold">Antibiotic treatment active</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-red-200 text-sm mb-1">Drug</div>
                    <div className="font-bold">Oxytetracycline</div>
                  </div>
                  <div>
                    <div className="text-red-200 text-sm mb-1">Withdrawal</div>
                    <div className="font-bold">10 Days</div>
                  </div>
                </div>

                <div className="bg-white text-red-600 p-4 rounded-lg text-center">
                  <div className="text-sm font-bold uppercase tracking-widest mb-1">Safe Date</div>
                  <div className="text-2xl font-black">MARCH 11 2026</div>
                </div>

                <div className="flex items-start gap-2 text-red-100 text-sm bg-red-800/30 p-3 rounded">
                  <ICONS.AlertTriangle className="h-5 w-5 shrink-0" />
                  <p>DO NOT mix with collection. This milk contains antibiotic residue. Harmful to humans.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
