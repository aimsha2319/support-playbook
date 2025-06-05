import React from 'react';
import { useState } from 'react';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Technical Issues', slug: 'technical-issues' },
  { id: 2, name: 'Account Management', slug: 'account-management' },
  { id: 3, name: 'Billing', slug: 'billing' },
  { id: 4, name: 'Product Features', slug: 'product-features' },
  { id: 5, name: 'Shipping & Delivery', slug: 'shipping-delivery' },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 md:static md:inset-0">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">Support Playbook</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? (
            <XIcon className="w-6 h-6 text-gray-600" />
          ) : (
            <MenuIcon className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>

      <nav className="mt-4">
        <ul className="space-y-1">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                to={`/category/${category.slug}`}
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
