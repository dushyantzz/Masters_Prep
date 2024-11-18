import React from 'react';
import { BookOpen, Brain, MessageCircle, Trophy, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Test Series',
    description: 'Access a vast collection of mock tests designed by experts',
  },
  {
    icon: Brain,
    title: 'Adaptive Learning',
    description: 'Personalized practice questions based on your performance',
  },
  {
    icon: MessageCircle,
    title: 'AI-Powered Chat Support',
    description: '24/7 doubt resolution with our intelligent chatbot',
  },
  {
    icon: Trophy,
    title: 'Performance Analytics',
    description: 'Detailed insights and progress tracking',
  },
  {
    icon: Users,
    title: 'Peer Comparison',
    description: 'Compare your performance with other aspirants',
  },
  {
    icon: Clock,
    title: 'Timed Practice',
    description: 'Improve your speed with timed mock tests',
  },
];

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Master Your Entrance Exam Preparation
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive test series, real-time analytics, and AI-powered support to help you ace your master's entrance exams.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="feature-card">
              <Icon className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Join Thousands of Successful Students
        </h2>
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
          alt="Students studying"
          className="rounded-xl shadow-lg max-w-3xl mx-auto"
        />
      </div>
    </div>
  );
};

export default Home;