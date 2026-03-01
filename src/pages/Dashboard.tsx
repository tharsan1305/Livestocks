import React, { useState, useEffect } from 'react';
import { ICONS, MOCK_COWS, KAMATCHI_DETAILS } from '../data/mockData';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { format } from 'date-fns';

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedCow, setSelectedCow] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const kamatchi = KAMATCHI_DETAILS;

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Top Summary Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Rajan Farm</h2>
              <p className="text-sm text-gray-500">Annur, Coimbatore</p>
            </div>
            
            <div className="flex items-center gap-4 text-sm font-mono bg-gray-100 px-3 py-1 rounded-md">
              <ICONS.Activity className="h-4 w-4 text-gray-500" />
              {format(currentTime, 'PPpp')}
            </div>

            <div className="flex gap-3">
              <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg border border-green-100">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div>
                  <div className="text-xs text-green-700 font-medium">Healthy</div>
                  <div className="text-lg font-bold text-green-800">47</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-lg border border-yellow-100">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div>
                  <div className="text-xs text-yellow-700 font-medium">Watch</div>
                  <div className="text-lg font-bold text-yellow-800">2</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-red-50 px-4 py-2 rounded-lg border border-red-100 animate-pulse">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div>
                  <div className="text-xs text-red-700 font-medium">Critical</div>
                  <div className="text-lg font-bold text-red-800">1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Live Livestock Monitor</h3>
        
        {/* Cow List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {MOCK_COWS.map((cow) => (
            <motion.div
              key={cow.id}
              layoutId={`cow-${cow.id}`}
              onClick={() => cow.id === '47' ? setSelectedCow(cow.id) : null}
              className={`bg-white rounded-xl p-4 border-2 cursor-pointer transition-all hover:shadow-md ${
                cow.status === 'Critical' 
                  ? 'border-red-500 shadow-red-100 ring-4 ring-red-50' 
                  : cow.status === 'Watch' 
                    ? 'border-yellow-400' 
                    : 'border-green-100 hover:border-green-300'
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-xs font-mono text-gray-400">#{cow.id}</span>
                  <h4 className="font-bold text-gray-900">{cow.name}</h4>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                  cow.status === 'Critical' ? 'bg-red-100 text-red-700' :
                  cow.status === 'Watch' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {cow.status}
                </span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">Health Score</span>
                    <span className={`font-bold ${
                      cow.score < 50 ? 'text-red-600' : cow.score < 80 ? 'text-yellow-600' : 'text-green-600'
                    }`}>{cow.score}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        cow.score < 50 ? 'bg-red-500' : cow.score < 80 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${cow.score}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <ICONS.Thermometer className="h-4 w-4" />
                  <span>{cow.temp}°C</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Popup for Kamatchi */}
      <AnimatePresence>
        {selectedCow === '47' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCow(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div 
              layoutId="cow-47"
              className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative z-10"
            >
              <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-start z-20">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-2xl font-bold text-gray-900">{kamatchi.name}</h2>
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold border border-red-200 flex items-center gap-1">
                      <ICONS.AlertTriangle className="h-4 w-4" />
                      CRITICAL ATTENTION
                    </span>
                  </div>
                  <p className="text-gray-500">ID: #{kamatchi.id} • {kamatchi.breed} • {kamatchi.age}</p>
                </div>
                <button 
                  onClick={() => setSelectedCow(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ICONS.X className="h-6 w-6 text-gray-500" />
                </button>
              </div>

              <div className="p-6 space-y-8">
                {/* Health Score Large */}
                <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="text-lg font-semibold text-red-900">Overall Health Score</h3>
                    <span className="text-3xl font-bold text-red-600">{kamatchi.score}/100</span>
                  </div>
                  <div className="h-4 bg-red-200 rounded-full overflow-hidden">
                    <div className="h-full bg-red-600 rounded-full w-[11%]"></div>
                  </div>
                </div>

                {/* Sensor Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {kamatchi.sensors.map((sensor, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm text-gray-500 font-medium">{sensor.name}</span>
                        <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-100">
                          {sensor.status}
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{sensor.value}</div>
                      <div className="text-xs text-gray-400">Normal: {sensor.normal}</div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* AI Diagnosis */}
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                    <div className="flex items-center gap-2 mb-4">
                      <ICONS.Brain className="h-6 w-6 text-red-600" />
                      <h3 className="text-lg font-bold text-red-900">AI Diagnosis</h3>
                    </div>
                    <div className="space-y-3 mb-4">
                      {kamatchi.diagnosis.suspects.map((suspect, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-white/60 p-2 rounded">
                          <span className="font-medium text-red-800">{suspect.condition}</span>
                          <span className="font-bold text-red-600">{suspect.probability}% Likely</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-red-800 font-medium text-sm italic">
                      Recommendation: {kamatchi.diagnosis.recommendation}
                    </p>
                  </div>

                  {/* Health Trend Chart */}
                  <div className="bg-white border border-gray-200 p-4 rounded-xl">
                    <h3 className="text-sm font-semibold text-gray-700 mb-4">4 Day Health Trend</h3>
                    <div className="h-48 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={kamatchi.history}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} />
                          <YAxis hide domain={[0, 100]} />
                          <Tooltip 
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            cursor={{ stroke: '#EF4444', strokeWidth: 2 }}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="score" 
                            stroke="#EF4444" 
                            strokeWidth={3} 
                            dot={{ r: 4, fill: '#EF4444', strokeWidth: 2, stroke: '#fff' }} 
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-4 border-t border-gray-100">
                  <Link 
                    to="/vet" 
                    className="flex-1 bg-green-600 text-white text-center py-3 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-200 flex items-center justify-center gap-2"
                  >
                    <ICONS.Stethoscope className="h-5 w-5" />
                    CALL VET
                  </Link>
                  <Link 
                    to="/blockchain" 
                    className="flex-1 bg-blue-600 text-white text-center py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
                  >
                    <ICONS.Database className="h-5 w-5" />
                    VIEW BLOCKCHAIN RECORD
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
