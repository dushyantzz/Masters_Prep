import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, LayoutDashboard, BookOpen, User } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isAuthenticated = false; // TODO: Replace with actual auth state

  const NavLink = ({ to, icon: Icon, label }: { to: string; icon: any; label: string }) => (
    <Link
      to={to}
      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
        ${location.pathname === to 
          ? 'text-orange-500 bg-orange-50' 
          : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'}`}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-1.5 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-800">MasterPrep</span>
            </Link>

            {isAuthenticated && (
              <div className="hidden md:flex ml-8 space-x-2">
                <NavLink to="/dashboard" icon={LayoutDashboard} label="Dashboard" />
                <NavLink to="/test-series" icon={BookOpen} label="Test Series" />
                <NavLink to="/profile" icon={User} label="Profile" />
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {!isAuthenticated ? (
              <>
                <Link 
                  to="/auth" 
                  className="text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign In
                </Link>
                <Link
                  to="/auth"
                  className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <div className="md:hidden flex items-center space-x-2">
                <NavLink to="/dashboard" icon={LayoutDashboard} label="Dashboard" />
                <NavLink to="/test-series" icon={BookOpen} label="Test Series" />
                <NavLink to="/profile" icon={User} label="Profile" />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;