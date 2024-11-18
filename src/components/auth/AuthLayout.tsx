import React from 'react';
import { BookOpen, BookCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center p-4">
      <Link to="/" className="flex items-center space-x-2 mb-8">
        <div className="flex items-center justify-center w-12 h-12 border-2 border-orange-400 rounded-lg shadow-sm bg-white">
          <div className="relative">
            <BookOpen size={28} className="text-orange-500 stroke-2" />
            <BookCheck size={16} className="text-orange-500 absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 border border-orange-400" />
          </div>
        </div>
        <span className="text-2xl font-bold text-gray-800">MasterPrep</span>
      </Link>
      {children}
    </div>
  );
};

export default AuthLayout;