import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Settings } from 'lucide-react';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Section 1', path: '/dashboard' },
  { icon: BookOpen, label: 'Section 2', path: '/dashboard/section2' },
  { icon: Settings, label: 'Section 3', path: '/dashboard/section3' },
];

export default function DashboardSidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-r border-gray-100 h-screen fixed left-0 top-16">
      <div className="p-4">
        <nav className="space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'bg-purple-50 text-purple-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}