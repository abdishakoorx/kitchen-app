'use client';

import { useState } from 'react';

// Mock data for nutrition tracking
const mockNutritionData = {
  daily: {
    calories: 1850,
    protein: 85,
    carbs: 220,
    fat: 60,
    fiber: 25,
    sugar: 35
  },
  goals: {
    calories: 2000,
    protein: 100,
    carbs: 250,
    fat: 65,
    fiber: 30,
    sugar: 40
  },
  recentMeals: [
    { id: 1, name: 'Breakfast', calories: 450, protein: 22, carbs: 65, fat: 12, time: '8:30 AM' },
    { id: 2, name: 'Lunch', calories: 680, protein: 35, carbs: 85, fat: 22, time: '12:45 PM' },
    { id: 3, name: 'Snack', calories: 180, protein: 8, carbs: 15, fat: 6, time: '3:30 PM' },
    { id: 4, name: 'Dinner', calories: 540, protein: 30, carbs: 55, fat: 20, time: '7:00 PM' }
  ]
};

export default function NutritionTrackerPage() {
  const [nutritionData, setNutritionData] = useState(mockNutritionData);
  
  const calculatePercentage = (current: number, goal: number) => {
    return Math.min(Math.round((current / goal) * 100), 100);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Nutrition Tracker</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Daily Summary</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Calories</span>
                <span>{nutritionData.daily.calories} / {nutritionData.goals.calories} kcal</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: `${calculatePercentage(nutritionData.daily.calories, nutritionData.goals.calories)}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>Protein</span>
                <span>{nutritionData.daily.protein} / {nutritionData.goals.protein} g</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{ width: `${calculatePercentage(nutritionData.daily.protein, nutritionData.goals.protein)}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>Carbs</span>
                <span>{nutritionData.daily.carbs} / {nutritionData.goals.carbs} g</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-yellow-500 h-2 rounded-full" 
                  style={{ width: `${calculatePercentage(nutritionData.daily.carbs, nutritionData.goals.carbs)}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>Fat</span>
                <span>{nutritionData.daily.fat} / {nutritionData.goals.fat} g</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-red-500 h-2 rounded-full" 
                  style={{ width: `${calculatePercentage(nutritionData.daily.fat, nutritionData.goals.fat)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Nutrition Insights</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-green-600">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Protein intake on track for muscle maintenance
            </li>
            <li className="flex items-center text-yellow-600">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Sugar intake slightly higher than recommended
            </li>
            <li className="flex items-center text-blue-600">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
              Based on your activity, consider increasing water intake
            </li>
            <li className="flex items-center text-purple-600">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
              Try to add more leafy greens for additional fiber
            </li>
          </ul>
          
          <div className="mt-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Set Nutrition Goals
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-lg font-medium mb-4">Recent Meals</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">Meal</th>
                <th className="px-4 py-2 text-left">Time</th>
                <th className="px-4 py-2 text-left">Calories</th>
                <th className="px-4 py-2 text-left">Protein</th>
                <th className="px-4 py-2 text-left">Carbs</th>
                <th className="px-4 py-2 text-left">Fat</th>
              </tr>
            </thead>
            <tbody>
              {nutritionData.recentMeals.map(meal => (
                <tr key={meal.id} className="border-t">
                  <td className="px-4 py-3">{meal.name}</td>
                  <td className="px-4 py-3">{meal.time}</td>
                  <td className="px-4 py-3">{meal.calories} kcal</td>
                  <td className="px-4 py-3">{meal.protein} g</td>
                  <td className="px-4 py-3">{meal.carbs} g</td>
                  <td className="px-4 py-3">{meal.fat} g</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-center">
          <button className="text-blue-600 hover:underline">Add New Meal</button>
        </div>
      </div>
    </div>
  );
}