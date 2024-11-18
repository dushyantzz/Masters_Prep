import React from 'react';
import { BookOpen, Clock, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <BookOpen className="h-6 w-6 text-orange-500" />
            <h2 className="text-lg font-semibold text-gray-900">Tests Taken</h2>
          </div>
          <p className="text-3xl font-bold text-gray-900">12</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="h-6 w-6 text-orange-500" />
            <h2 className="text-lg font-semibold text-gray-900">Study Hours</h2>
          </div>
          <p className="text-3xl font-bold text-gray-900">48</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <TrendingUp className="h-6 w-6 text-orange-500" />
            <h2 className="text-lg font-semibold text-gray-900">Avg. Score</h2>
          </div>
          <p className="text-3xl font-bold text-gray-900">76%</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div>
                <h3 className="font-medium text-gray-900">Mock Test #{index + 1}</h3>
                <p className="text-sm text-gray-500">Completed on March {10 + index}, 2024</p>
              </div>
              <span className="text-orange-500 font-medium">82%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;