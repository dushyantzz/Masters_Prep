import React from 'react';
import { Clock, Users, Award } from 'lucide-react';

const tests = [
  {
    id: 1,
    title: 'General Aptitude Mock Test',
    duration: '2 hours',
    participants: 1200,
    questions: 100,
    difficulty: 'Medium',
  },
  {
    id: 2,
    title: 'Subject Specific Test - Mathematics',
    duration: '3 hours',
    participants: 800,
    questions: 120,
    difficulty: 'Hard',
  },
  {
    id: 3,
    title: 'Previous Year Paper Analysis',
    duration: '3 hours',
    participants: 1500,
    questions: 100,
    difficulty: 'Medium',
  },
];

const TestSeries = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Test Series</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tests.map((test) => (
          <div key={test.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">{test.title}</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{test.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{test.participants.toLocaleString()} participants</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="h-5 w-5 mr-2" />
                  <span>{test.difficulty}</span>
                </div>
              </div>

              <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors">
                Start Test
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestSeries;