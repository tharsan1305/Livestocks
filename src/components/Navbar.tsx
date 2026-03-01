import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ICONS } from '../data/mockData';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Vet Portal', path: '/vet' },
    { name: 'Blockchain', path: '/blockchain' },
    { name: 'Milk Safety', path: '/milk-safety' },
    { name: 'Consumer', path: '/consumer' },
    { name: 'How It Works', path: '/how-it-works' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-[#1A7A3A] p-1.5 rounded-lg">
                <ICONS.Shield className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-[#1A7A3A]">AgroShield 360</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-[#1A7A3A]/10 text-[#1A7A3A]'
                    : 'text-gray-600 hover:text-[#1A7A3A] hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/dashboard"
              className="bg-[#1A7A3A] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#145f2d] transition-colors"
            >
              Live Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-[#1A7A3A] focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'bg-[#1A7A3A]/10 text-[#1A7A3A]'
                    : 'text-gray-600 hover:text-[#1A7A3A] hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/dashboard"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-[#1A7A3A] text-white px-4 py-2 rounded-md text-base font-medium hover:bg-[#145f2d] mt-4"
            >
              Live Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
