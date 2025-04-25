'use client';

import { useState } from 'react';

// Mock data for budget planning
const mockBudgetData = {
  monthlyBudget: 600,
  spent: 420,
  remaining: 180,
  categories: [
    { id: 1, name: 'Fruits & Vegetables', budget: 150, spent: 120 },
    { id: 2, name: 'Meat & Fish', budget: 200, spent: 160 },
    { id: 3, name: 'Dairy & Eggs', budget: 100, spent: 70 },
    { id: 4, name: 'Grains & Pasta', budget: 50, spent: 30 },
    { id: 5, name: 'Snacks & Treats', budget: 50, spent: 40 },
    { id: 6, name: 'Beverages', budget: 50, spent: 0 }
  ],
  recentTransactions: [
    { id: 1, date: '2025-04-22', store: 'Whole Foods', amount: 85.47 },
    { id: 2, date: '2025-04-19', store: 'Trader Joe\'s', amount: 65.12 },
    { id: 3, date: '2025-04-15', store: 'Farmers Market', amount: 42.50 },
    { id: 4, date: '2025-04-10', store: 'Costco', amount: 192.36 },
    { id: 5, date: '2025-04-05', store: 'Local Grocery', amount: 34.89 }
  ]
};

export default function BudgetPlannerPage() {
  const [budgetData, setBudgetData] = useState(mockBudgetData);
  
  const calculatePercentage = (spent: number, budget: number) => {
    return Math.min(Math.round((spent / budget) * 100), 100);
  };

  const getProgressColor = (spent: number, budget: number) => {
    const percentage = (spent / budget) * 100;
    if (percentage < 60) return 'bg-green-500';
    if (percentage < 85) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Budget Planner</h2>
      
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Monthly Budget</h3>
            <p className="text-3xl font-bold text-gray-800">${budgetData.monthlyBudget}</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Spent</h3>
            <p className="text-3xl font-bold text-blue-600">${budgetData.spent}</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Remaining</h3>
            <p className="text-3xl font-bold text-green-600">${budgetData.remaining}</p>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="flex justify-between mb-1">
            <span>Overall Progress</span>
            <span>{calculatePercentage(budgetData.spent, budgetData.monthlyBudget)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`${getProgressColor(budgetData.spent, budgetData.monthlyBudget)} h-2 rounded-full`} 
              style={{ width: `${calculatePercentage(budgetData.spent, budgetData.monthlyBudget)}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Budget by Category</h3>
          
          <div className="space-y-4">
            {budgetData.categories.map(category => (
              <div key={category.id}>
                <div className="flex justify-between mb-1">
                  <span>{category.name}</span>
                  <span>${category.spent} / ${category.budget}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`${getProgressColor(category.spent, category.budget)} h-2 rounded-full`} 
                    style={{ width: `${calculatePercentage(category.spent, category.budget)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Adjust Categories
            </button>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Recent Transactions</h3>
          
          <div className="overflow-y-auto max-h-64">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Store</th>
                  <th className="px-4 py-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {budgetData.recentTransactions.map(transaction => (
                  <tr key={transaction.id} className="border-t">
                    <td className="px-4 py-3">{transaction.date}</td>
                    <td className="px-4 py-3">{transaction.store}</td>
                    <td className="px-4 py-3 text-right">${transaction.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-center">
            <button className="text-blue-600 hover:underline">Add Transaction</button>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Budget Tips</h3>
        
        <ul className="space-y-2">
          <li className="flex items-start">
            <svg className="w-5 h-5 mr-2 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Consider buying in bulk for staples like rice, beans, and pasta to save 20-30%</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 mr-2 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Based on your recent purchases, switching to frozen vegetables could save approximately $25 monthly</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 mr-2 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Your meat spending is 30% above average. Consider incorporating more plant-based protein sources</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 mr-2 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Local farmers market prices are typically lower on weekdays than weekends</span>
          </li>
        </ul>
        
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Generate Budget Report
          </button>
        </div>
      </div>
    </div>
  );
}