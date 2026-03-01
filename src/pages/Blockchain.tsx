import React from 'react';
import { ICONS, BLOCKCHAIN_RECORD } from '../data/mockData';
import { motion } from 'motion/react';

export default function Blockchain() {
  return (
    <div className="min-h-screen bg-slate-900 text-green-400 font-mono pb-12">
      <div className="border-b border-green-900/50 p-6">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <ICONS.Database className="h-8 w-8 text-green-500" />
          <h1 className="text-2xl font-bold tracking-wider text-white">BLOCKCHAIN DRUG TRACKING LEDGER</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-slate-800 rounded-lg border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.1)] overflow-hidden"
        >
          <div className="bg-slate-950 px-6 py-4 border-b border-green-500/30 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <ICONS.Lock className="h-5 w-5 text-red-500" />
              <span className="text-red-500 font-bold">RECORD LOCKED</span>
            </div>
            <span className="text-slate-500 text-sm">ID: {BLOCKCHAIN_RECORD.id}</span>
          </div>

          <div className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-1">
                <label className="text-xs text-slate-500 uppercase tracking-widest">Timestamp</label>
                <div className="text-white">{BLOCKCHAIN_RECORD.timestamp}</div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-500 uppercase tracking-widest">Farm</label>
                <div className="text-white">{BLOCKCHAIN_RECORD.farm}</div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-500 uppercase tracking-widest">Cow ID</label>
                <div className="text-white">{BLOCKCHAIN_RECORD.cowId}</div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-500 uppercase tracking-widest">Veterinarian</label>
                <div className="text-white">{BLOCKCHAIN_RECORD.vet}</div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-500 uppercase tracking-widest">Diagnosis</label>
                <div className="text-white">{BLOCKCHAIN_RECORD.diagnosis}</div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-500 uppercase tracking-widest">Prescribed Drug</label>
                <div className="text-green-400 font-bold">{BLOCKCHAIN_RECORD.drug}</div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-500 uppercase tracking-widest">Milk Safe Date</label>
                <div className="text-red-400 font-bold">{BLOCKCHAIN_RECORD.milkSafeDate}</div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-500 uppercase tracking-widest">Meat Safe Date</label>
                <div className="text-red-400 font-bold">{BLOCKCHAIN_RECORD.meatSafeDate}</div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700">
              <label className="text-xs text-slate-500 uppercase tracking-widest mb-2 block">Cryptographic Hash</label>
              <div className="bg-slate-950 p-4 rounded border border-slate-700 font-mono text-xs md:text-sm break-all text-slate-400">
                {BLOCKCHAIN_RECORD.hash}
              </div>
            </div>
          </div>

          <div className="bg-red-900/20 border-t border-red-900/30 p-4 flex items-start gap-3">
            <ICONS.AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-red-400 font-bold text-sm">IMMUTABLE RECORD</p>
              <p className="text-red-400/70 text-xs mt-1">
                This record is permanent. Cannot be edited by anyone. If anyone tries to change the record the hash changes. System immediately detects tampering.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
