import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6 md:ml-64">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:slug" element={<Category />} />
              <Route path="/scenario/:id" element={<Scenario />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Welcome to Support Playbook</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Quick access cards */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900">Most Common Issues</h2>
          <div className="mt-4 space-y-2">
            <p className="text-sm text-gray-600">• Password Reset</p>
            <p className="text-sm text-gray-600">• Account Access</p>
            <p className="text-sm text-gray-600">• Payment Processing</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900">Recent Updates</h2>
          <div className="mt-4 space-y-2">
            <p className="text-sm text-gray-600">• New refund policy</p>
            <p className="text-sm text-gray-600">• Updated billing system</p>
            <p className="text-sm text-gray-600">• Enhanced security measures</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900">Quick Stats</h2>
          <div className="mt-4 space-y-2">
            <p className="text-sm text-gray-600">• 50+ scenarios available</p>
            <p className="text-sm text-gray-600">• Last updated: Today</p>
            <p className="text-sm text-gray-600">• 3 new scenarios added</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Category() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Category Page</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Scenario cards */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900">Scenario Title</h2>
          <p className="mt-2 text-gray-600">Brief description of the scenario and its purpose.</p>
          <button className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

function Scenario() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Scenario Title</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Objective</h2>
        <p className="text-gray-600 mb-6">The goal of this scenario is to...</p>

        <h2 className="text-lg font-semibold text-gray-900 mb-4">Steps</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li className="text-gray-600">Step 1: Verify the issue</li>
          <li className="text-gray-600">Step 2: Check system logs</li>
          <li className="text-gray-600">Step 3: Provide solution</li>
        </ol>

        <h2 className="text-lg font-semibold text-gray-900 mb-4">Common Issues</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-gray-600">Issue 1: Description</li>
          <li className="text-gray-600">Issue 2: Description</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
