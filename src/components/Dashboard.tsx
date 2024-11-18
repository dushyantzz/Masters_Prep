import React from 'react';
import { BookOpen, Clock, Trophy, Brain } from 'lucide-react';

const Dashboard = () => {
  const upcomingTests = [
    { id: 1, name: 'Mock Test - Quantitative Aptitude', date: '2024-03-20', duration: '180 min' },
    { id: 2, name: 'Verbal Ability Practice Set', date: '2024-03-22', duration: '120 min' },
    { id: 3, name: 'Logical Reasoning Full Test', date: '2024-03-25', duration: '150 min' },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Welcome back, Student!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border-2 border-orange-400 p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <Trophy className="text-orange-500" size={24} />
            <h2 className="text-xl font-semibold text-gray-800">Performance</h2>
          </div>
          <p className="mt-2 text-3xl font-bold text-orange-500">85%</p>
          <p className="text-gray-600">Average Score</p>
        </div>

        <div className="bg-white border-2 border-orange-400 p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <Clock className="text-orange-500" size={24} />
            <h2 className="text-xl font-semibold text-gray-800">Time Spent</h2>
          </div>
          <p className="mt-2 text-3xl font-bold text-orange-500">24h</p>
          <p className="text-gray-600">This Week</p>
        </div>

        <div className="bg-white border-2 border-orange-400 p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <Brain className="text-orange-500" size={24} />
            <h2 className="text-xl font-semibold text-gray-800">Tests Completed</h2>
          </div>
          <p className="mt-2 text-3xl font-bold text-orange-500">12</p>
          <p className="text-gray-600">This Month</p>
        </div>
      </div>

      <div className="bg-white border-2 border-orange-400 rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upcoming Tests</h2>
        <div className="space-y-4">
          {upcomingTests.map((test) => (
            <div key={test.id} className="flex items-center justify-between p-4 bg-white border border-orange-300 rounded-lg">
              <div className="flex items-center space-x-3">
                <BookOpen className="text-orange-500" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-800">{test.name}</h3>
                  <p className="text-sm text-gray-600">Duration: {test.duration}</p>
                </div>
              </div>
              <button className="px-4 py-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-md transition-colors">
                Start Test
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;