import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Languages } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Languages className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              SignSpeak
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" active={location.pathname === "/"}>Home</NavLink>
            <NavLink to="/tutorials" active={location.pathname === "/tutorials"}>Tutorials</NavLink>
            <NavLink to="/login" active={location.pathname === "/login"}>Login</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children, active }: { to: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link
      to={to}
      className={`${
        active
          ? "text-purple-600"
          : "text-gray-600 hover:text-purple-600"
      } transition-colors duration-200 font-medium`}
    >
      {children}
    </Link>
  );
}