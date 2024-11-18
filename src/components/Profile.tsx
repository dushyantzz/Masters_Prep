import React from 'react';
import { User, Mail, Phone, BookOpen, Trophy } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white border-2 border-orange-400 rounded-lg shadow-sm p-8">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 border-2 border-orange-400 rounded-full flex items-center justify-center">
            <User size={40} className="text-orange-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
            <p className="text-gray-600">Master's Aspirant</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="text-orange-500" />
              <span className="text-gray-700">john.doe@example.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-orange-500" />
              <span className="text-gray-700">+1 234 567 890</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-orange-400 rounded-lg shadow-sm p-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Performance Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-orange-400 p-4 rounded-lg">
            <div className="flex items-center space-x-3 mb-2">
              <BookOpen className="text-orange-500" />
              <h3 className="font-semibold text-gray-800">Tests Taken</h3>
            </div>
            <p className="text-3xl font-bold text-orange-500">45</p>
          </div>
          
          <div className="bg-white border-2 border-orange-400 p-4 rounded-lg">
            <div className="flex items-center space-x-3 mb-2">
              <Trophy className="text-orange-500" />
              <h3 className="font-semibold text-gray-800">Average Score</h3>
            </div>
            <p className="text-3xl font-bold text-orange-500">82%</p>
          </div>
          
          <div className="bg-white border-2 border-orange-400 p-4 rounded-lg">
            <div className="flex items-center space-x-3 mb-2">
              <BookOpen className="text-orange-500" />
              <h3 className="font-semibold text-gray-800">Series Completed</h3>
            </div>
            <p className="text-3xl font-bold text-orange-500">5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;