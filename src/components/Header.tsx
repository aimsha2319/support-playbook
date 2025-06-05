import React from 'react';
import { MagnifyingGlassIcon as SearchIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-white border-b border-gray-200 md:ml-64">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center space-x-4">
          <div className="relative w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search scenarios..."
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
