import React from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import { Route, Routes } from 'react-router-dom';

function DashboardSection({ title }: { title: string }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-2">Card {i}</h3>
            <p className="text-gray-600">
              This is a placeholder card for {title}. In a real application, this would contain actual content.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <DashboardSidebar />
      <div className="ml-64">
        <Routes>
          <Route path="/" element={<DashboardSection title="Section 1" />} />
          <Route path="/section2" element={<DashboardSection title="Section 2" />} />
          <Route path="/section3" element={<DashboardSection title="Section 3" />} />
        </Routes>
      </div>
    </div>
  );
}