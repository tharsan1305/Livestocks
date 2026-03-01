import React, { useState } from 'react';
import { ICONS, KAMATCHI_DETAILS } from '../data/mockData';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export default function VetPortal() {
  const navigate = useNavigate();
  const [isPrescribed, setIsPrescribed] = useState(false);

  const handleConfirm = () => {
    setIsPrescribed(true);
    setTimeout(() => {
      navigate('/blockchain');
    }, 2000);
  };

  if (isPrescribed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ICONS.CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Prescription Confirmed</h2>
          <p className="text-gray-600 mb-6">Blockchain record created. Milk withdrawal period started automatically.</p>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2 }}
              className="h-full bg-green-500"
            />
          </div>
          <p className="text-xs text-gray-400 mt-4">Redirecting to Blockchain Ledger...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pb-12">
      <div className="bg-white border-b border-gray-200 py-4 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <ICONS.Stethoscope className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Dr. Kumar</h1>
              <p className="text-xs text-gray-500">Veterinary Portal • License TN2847</p>
            </div>
          </div>
          <div className="bg-red-50 text-red-700 px-4 py-2 rounded-lg text-sm font-bold border border-red-100 flex items-center gap-2 animate-pulse">
            <ICONS.AlertTriangle className="h-4 w-4" />
            New Critical Case
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Patient Data Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="font-bold text-gray-900">Patient Data: {KAMATCHI_DETAILS.name} (#{KAMATCHI_DETAILS.id})</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {KAMATCHI_DETAILS.sensors.map((sensor, idx) => (
                    <div key={idx} className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <div className="text-xs text-gray-500">{sensor.name}</div>
                      <div className="font-bold text-gray-900">{sensor.value}</div>
                      <div className={`text-xs font-medium ${sensor.status === 'Critical' ? 'text-red-600' : 'text-orange-600'}`}>
                        {sensor.status}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="text-sm font-bold text-blue-900 mb-2">Medical History</h4>
                  <p className="text-sm text-blue-800">
                    Previous medicine history: <span className="font-semibold">Oxytetracycline</span> given 23 days ago — Recovered
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-green-50 px-6 py-4 border-b border-green-100 flex items-center gap-2">
                <ICONS.Brain className="h-5 w-5 text-green-700" />
                <h3 className="font-bold text-green-900">AI Prescription Recommendation</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Recommended Drug</label>
                    <div className="text-lg font-bold text-gray-900">Oxytetracycline</div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Dose Calculation</label>
                    <div className="text-lg font-bold text-gray-900">3.1ml</div>
                    <div className="text-xs text-gray-400">Based on 312kg weight</div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Route</label>
                    <div className="font-medium text-gray-900">Intramuscular Injection</div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Frequency & Duration</label>
                    <div className="font-medium text-gray-900">Once daily for 5 days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Column */}
          <div className="space-y-6">
            <div className="bg-orange-50 rounded-xl shadow-sm border border-orange-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <ICONS.Shield className="h-5 w-5 text-orange-600" />
                <h3 className="font-bold text-orange-900">AMR Risk Check</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white/60 p-3 rounded-lg">
                  <div className="text-xs text-orange-800 mb-1">Usage History</div>
                  <div className="font-medium text-orange-900">Used 1 time in last 23 days</div>
                </div>
                
                <div>
                  <div className="text-xs text-orange-800 mb-1">Risk Level</div>
                  <div className="text-xl font-bold text-green-600 flex items-center gap-2">
                    LOW
                    <span className="text-xs font-normal text-gray-500 bg-white px-2 py-1 rounded-full border border-gray-200">Safe to prescribe</span>
                  </div>
                </div>
                
                <p className="text-xs text-orange-700 leading-relaxed">
                  Note: If same drug used more than 3 times in 30 days — HIGH RISK — choose different drug.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <button 
                onClick={handleConfirm}
                className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-200 flex items-center justify-center gap-2"
              >
                <ICONS.CheckCircle className="h-5 w-5" />
                CONFIRM PRESCRIPTION
              </button>
              <button className="w-full bg-white text-gray-600 border border-gray-300 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                CHANGE DRUG
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
