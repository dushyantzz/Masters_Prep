import React from 'react';
import { BookOpen, Clock, Star } from 'lucide-react';

const TestSeries = () => {
  const testSeries = [
    {
      id: 1,
      title: 'Quantitative Aptitude',
      description: 'Complete test series covering all major topics',
      tests: 15,
      duration: '30 hours',
      difficulty: 'Advanced',
    },
    {
      id: 2,
      title: 'Verbal Ability',
      description: 'Comprehensive practice for verbal sections',
      tests: 12,
      duration: '25 hours',
      difficulty: 'Intermediate',
    },
    {
      id: 3,
      title: 'Logical Reasoning',
      description: 'Master logical and analytical reasoning',
      tests: 10,
      duration: '20 hours',
      difficulty: 'Advanced',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Test Series</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testSeries.map((series) => (
          <div key={series.id} className="bg-white border-2 border-orange-400 rounded-lg shadow-sm overflow-hidden">
            <div className="border-b-2 border-orange-400 p-4">
              <h2 className="text-xl font-semibold text-gray-800">{series.title}</h2>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-600">{series.description}</p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <BookOpen size={16} className="mr-1 text-orange-500" />
                  {series.tests} Tests
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1 text-orange-500" />
                  {series.duration}
                </div>
                <div className="flex items-center">
                  <Star size={16} className="mr-1 text-orange-500" />
                  {series.difficulty}
                </div>
              </div>
              
              <button className="w-full px-4 py-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-md transition-colors">
                Start Series
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestSeries;