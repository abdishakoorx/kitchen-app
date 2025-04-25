'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function MacroCalculatorPage() {
  const [age, setAge] = useState(30);
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [goal, setGoal] = useState('maintain');
  const [showResults, setShowResults] = useState(false);

  // Mock calculation - in a real app, this would be more sophisticated
  const calculateMacros = () => {
    // Base metabolic rate calculation (Harris-Benedict formula)
    let bmr;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Activity level multiplier
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };
    
    const tdee = bmr * activityMultipliers[activityLevel];
    
    // Adjust based on goal
    let calories;
    if (goal === 'lose') {
      calories = tdee - 500;
    } else if (goal === 'gain') {
      calories = tdee + 500;
    } else {
      calories = tdee;
    }
    
    // Macro distribution (can be adjusted based on preferences)
    let proteinPercentage, carbPercentage, fatPercentage;
    
    if (goal === 'lose') {
      proteinPercentage = 0.4;
      carbPercentage = 0.3;
      fatPercentage = 0.3;
    } else if (goal === 'gain') {
      proteinPercentage = 0.3;
      carbPercentage = 0.5;
      fatPercentage = 0.2;
    } else {
      proteinPercentage = 0.3;
      carbPercentage = 0.4;
      fatPercentage = 0.3;
    }
    
    const protein = Math.round((calories * proteinPercentage) / 4);
    const carbs = Math.round((calories * carbPercentage) / 4);
    const fat = Math.round((calories * fatPercentage) / 9);
    
    return {
      calories: Math.round(calories),
      protein,
      carbs,
      fat
    };
  };

  const macros = calculateMacros();

  const handleCalculate = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/nutrition-budget" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Nutrition & Budget
        </Link>
        <h1 className="text-3xl font-bold">Macro Calculator</h1>
        <p className="text-gray-600 mt-2">Calculate your daily macronutrient needs based on your goals and body composition.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleCalculate}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    min="18"
                    max="100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(parseInt(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    min="40"
                    max="200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(parseInt(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    min="120"
                    max="220"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Activity Level</label>
                <select
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="sedentary">Sedentary (little or no exercise)</option>
                  <option value="light">Light (exercise 1-3 days/week)</option>
                  <option value="moderate">Moderate (exercise 3-5 days/week)</option>
                  <option value="active">Active (exercise 6-7 days/week)</option>
                  <option value="veryActive">Very Active (hard exercise daily)</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Goal</label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="lose">Lose Weight</option>
                  <option value="maintain">Maintain Weight</option>
                  <option value="gain">Gain Weight</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Calculate
              </button>
            </form>
          </div>
        </div>

        <div>
          {showResults && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Your Daily Macros</h3>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-700">Calories</span>
                  <span className="font-semibold">{macros.calories} kcal</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-700">Protein</span>
                  <span className="font-semibold">{macros.protein}g ({Math.round(macros.protein * 4 / macros.calories * 100)}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full" 
                    style={{ width: `${Math.round(macros.protein * 4 / macros.calories * 100)}%` }}
                  ></div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-700">Carbs</span>
                  <span className="font-semibold">{macros.carbs}g ({Math.round(macros.carbs * 4 / macros.calories * 100)}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${Math.round(macros.carbs * 4 / macros.calories * 100)}%` }}
                  ></div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-700">Fat</span>
                  <span className="font-semibold">{macros.fat}g ({Math.round(macros.fat * 9 / macros.calories * 100)}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-yellow-500 h-2 rounded-full" 
                    style={{ width: `${Math.round(macros.fat * 9 / macros.calories * 100)}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-md">
                <h4 className="font-semibold text-sm mb-2">Recommendation</h4>
                <p className="text-sm text-gray-700">
                  Based on your information, we recommend focusing on a {goal === 'lose' ? 'calorie deficit' : goal === 'gain' ? 'calorie surplus' : 'balanced diet'} 
                  with adequate protein intake to {goal === 'lose' ? 'preserve muscle while losing fat' : goal === 'gain' ? 'support muscle growth' : 'maintain your current physique'}.
                </p>
              </div>
            </div>
          )}

          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-lg font-semibold mb-3">Tips for Meeting Your Macros</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Prioritize whole foods rich in protein, complex carbs, and healthy fats</li>
              <li>• Plan your meals ahead to distribute macros throughout the day</li>
              <li>• Consider meal prepping to stay consistent with your nutrition goals</li>
              <li>• Track your intake with our Smart Cooking feature</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}