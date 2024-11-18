import React from 'react';
import { Mail, Phone, MapPin, Book, Award } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-20 w-20 rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-orange-500">JS</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">John Smith</h1>
                <p className="text-gray-600">Aspiring Master's Student</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-3" />
                <span>john.smith@example.com</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-3" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-3" />
                <span>New York, USA</span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Study Progress</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <Book className="h-5 w-5 text-orange-500" />
                    <h3 className="font-medium text-gray-900">Tests Completed</h3>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <Award className="h-5 w-5 text-orange-500" />
                    <h3 className="font-medium text-gray-900">Average Score</h3>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">78%</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;