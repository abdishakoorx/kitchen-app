"use client";

import React, { useEffect, useState } from "react";
import {
  Users,
  Award,
  Calendar,
  Clock,
  Medal,
  TrendingUp,
  Filter,
  Plus,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useHeader } from "@/contexts/header-context";

export default function CookingChallengesPage() {
  const { setHeader } = useHeader();

  useEffect(() => {
    setHeader?.("Cooking Challenges", "Test your skills with weekly tasks.");
    // Clean up on unmount
    return () => setHeader?.();
  }, [setHeader]);

  const [challengeFilter, setChallengeFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");

  // Mock data for active challenges
  const activeChallenges = [
    {
      id: 1,
      title: "Spring Seasonal Cooking Challenge",
      description:
        "Create amazing dishes using spring produce! Share your creations and win prizes.",
      startDate: "April 15, 2025",
      endDate: "May 15, 2025",
      participants: 1247,
      submissions: 378,
      difficulty: "Medium",
      sponsor: "FreshFarm Markets",
      prizes: ["$250 Gift Card", "Premium Knife Set", "Featured in App"],
      image: "/wooden-texture.jpg",
      tags: ["seasonal", "produce", "spring"],
      categories: ["featured", "seasonal"],
    },
    {
      id: 2,
      title: "Plant-Based Protein Challenge",
      description:
        "Discover delicious ways to incorporate plant-based proteins into your meals.",
      startDate: "April 10, 2025",
      endDate: "April 30, 2025",
      participants: 824,
      submissions: 205,
      difficulty: "Easy",
      sponsor: "GreenEats",
      prizes: ["$150 Gift Card", "Cookbook Collection", "Premium Subscription"],
      image: "/wooden-texture.jpg",
      tags: ["vegan", "protein", "plant-based"],
      categories: ["nutrition", "trending"],
    },
    {
      id: 3,
      title: "One-Pot Wonders Challenge",
      description:
        "Create an entire meal using just one pot or pan! Show off your efficiency.",
      startDate: "April 1, 2025",
      endDate: "April 28, 2025",
      participants: 976,
      submissions: 412,
      difficulty: "Easy",
      sponsor: "KitchenPro",
      prizes: ["Cast Iron Set", "$100 Gift Card", "Featured Recipe"],
      image: "/wooden-texture.jpg",
      tags: ["one-pot", "efficiency", "quick-meals"],
      categories: ["weeknight", "beginner"],
    },
    {
      id: 4,
      title: "Global Cuisine Challenge: Mediterranean",
      description:
        "Explore the diverse flavors of Mediterranean cuisine with your own creative twist.",
      startDate: "April 20, 2025",
      endDate: "May 20, 2025",
      participants: 632,
      submissions: 87,
      difficulty: "Medium",
      sponsor: "Olive & Vine",
      prizes: [
        "Mediterranean Ingredient Box",
        "$200 Gift Card",
        "Online Cooking Class",
      ],
      image: "/wooden-texture.jpg",
      tags: ["mediterranean", "global", "cuisine"],
      categories: ["cultural", "featured"],
    },
    {
      id: 5,
      title: "Budget Gourmet Challenge",
      description: "Create restaurant-quality meals for under $5 per serving.",
      startDate: "April 5, 2025",
      endDate: "May 5, 2025",
      participants: 1105,
      submissions: 326,
      difficulty: "Hard",
      sponsor: "SmartSaver App",
      prizes: [
        "$300 Gift Card",
        "Budget Cooking Masterclass",
        "Feature in Blog",
      ],
      image: "/wooden-texture.jpg",
      tags: ["budget", "gourmet", "affordable"],
      categories: ["budget", "trending"],
    },
    {
      id: 6,
      title: "Professional Pastry Techniques",
      description:
        "Master professional pastry techniques and create stunning desserts.",
      startDate: "April 22, 2025",
      endDate: "May 27, 2025",
      participants: 418,
      submissions: 42,
      difficulty: "Hard",
      sponsor: "Sweet Creations",
      prizes: [
        "Professional Baking Kit",
        "$200 Gift Card",
        "Online Masterclass",
      ],
      image: "/wooden-texture.jpg",
      tags: ["pastry", "baking", "desserts"],
      categories: ["advanced", "skills"],
    },
  ];

  // Mock data for past challenges
  const pastChallenges = [
    {
      id: 101,
      title: "Winter Comfort Foods Challenge",
      participants: 1423,
      winner: "Emily Chang",
      winnerAvatar: "/marble-texture.jpg",
      winningDish: "Truffle Mushroom Risotto",
      image: "/wooden-texture.jpg",
      date: "March 2025",
    },
    {
      id: 102,
      title: "30-Minute Meal Challenge",
      participants: 982,
      winner: "Marcus Johnson",
      winnerAvatar: "/marble-texture.jpg",
      winningDish: "Quick Salmon Bowl",
      image: "/wooden-texture.jpg",
      date: "February 2025",
    },
    {
      id: 103,
      title: "Creative Leftovers Challenge",
      participants: 765,
      winner: "Sofia Rodriguez",
      winnerAvatar: "/marble-texture.jpg",
      winningDish: "Thanksgiving Remix Pie",
      image: "/wooden-texture.jpg",
      date: "January 2025",
    },
  ];

  // Mock data for leaderboard
  const leaderboardData = [
    {
      id: 201,
      name: "Alex Kim",
      avatar: "/marble-texture.jpg",
      points: 8750,
      badges: 12,
      challenges: 15,
    },
    {
      id: 202,
      name: "Maya Patel",
      avatar: "/marble-texture.jpg",
      points: 7340,
      badges: 10,
      challenges: 11,
    },
    {
      id: 203,
      name: "Jason Wright",
      avatar: "/marble-texture.jpg",
      points: 6590,
      badges: 8,
      challenges: 9,
    },
    {
      id: 204,
      name: "Leila Hassan",
      avatar: "/marble-texture.jpg",
      points: 5820,
      badges: 7,
      challenges: 8,
    },
    {
      id: 205,
      name: "Thomas Chen",
      avatar: "/marble-texture.jpg",
      points: 4950,
      badges: 6,
      challenges: 7,
    },
  ];

  // Filter challenges based on selected filters
  const filteredChallenges = activeChallenges.filter((challenge) => {
    if (
      challengeFilter !== "all" &&
      !challenge.categories.includes(challengeFilter)
    )
      return false;
    if (
      difficultyFilter !== "all" &&
      challenge.difficulty.toLowerCase() !== difficultyFilter
    )
      return false;
    return true;
  });

  return (
    <div className="container">
      <div className="flex justify-end items-end">
        <Button className="mb-4 py-2 px-6">
          <Plus />
          Create Challenge
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="p-4 rounded-lg border">
          <div className="flex items-center mb-1">
            <Award className="h-5 w-5 text-orange-500 mr-2" />
            <h3 className="text-gray-600 text-sm">Active Challenges</h3>
          </div>
          <p className="text-2xl font-bold">6</p>
        </div>
        <div className="p-4 rounded-lg border">
          <div className="flex items-center mb-1">
            <Users className="h-5 w-5 text-blue-500 mr-2" />
            <h3 className="text-gray-600 text-sm">Participants</h3>
          </div>
          <p className="text-2xl font-bold">5,202</p>
        </div>
        <div className="p-4 rounded-lg border">
          <div className="flex items-center mb-1">
            <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
            <h3 className="text-gray-600 text-sm">Submissions</h3>
          </div>
          <p className="text-2xl font-bold">1,450</p>
        </div>
        <div className="p-4 rounded-lg border">
          <div className="flex items-center mb-1">
            <Medal className="h-5 w-5 text-yellow-500 mr-2" />
            <h3 className="text-gray-600 text-sm">Prizes Awarded</h3>
          </div>
          <p className="text-2xl font-bold">$5,750</p>
        </div>
      </div>

      {/* Featured Challenge */}
      <div className="bg-gradient-to-r from-secondary to-secondary/70 rounded-lg shadow-lg mb-8 overflow-hidden">
        <div className="md:flex md:items-center">
          <div className="md:w-3/5 p-6 text-white">
            <div className="mb-2 inline-block bg-yellow-500 text-xs text-gray-900 font-bold px-2 py-1 rounded">
              FEATURED CHALLENGE
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Spring Seasonal Cooking Challenge
            </h2>
            <p className="mb-4">
              Create amazing dishes using spring produce! Share your creations
              and win prizes from our sponsor FreshFarm Markets.
            </p>
            <div className="flex flex-wrap gap-4 my-4">
              <div>
                <div className="text-blue-200 text-xs mb-1">Start Date</div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>April 15, 2025</span>
                </div>
              </div>
              <div>
                <div className="text-blue-200 text-xs mb-1">End Date</div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>May 15, 2025</span>
                </div>
              </div>
              <div>
                <div className="text-blue-200 text-xs mb-1">Participants</div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>1,247 joined</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button variant={"link"} className="text-white py-2 px-4">
                Join Challenge
              </Button>
              <Button className="py-2 px-4">Learn More</Button>
            </div>
          </div>
          <div className="md:w-2/5 h-full">
            <div className="h-full md:h-64 lg:h-80">
              <Image
                height={300}
                width={500}
                src="/wooden-texture.jpg"
                alt="Spring Seasonal Cooking Challenge"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Filters */}
      <div className="p-4 rounded-lg border mb-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center">
            <Filter className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-700 font-medium">
              Filter Challenges:
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setChallengeFilter("all")}
              className={`px-3 py-1 rounded-md text-sm ${
                challengeFilter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setChallengeFilter("featured")}
              className={`px-3 py-1 rounded-md text-sm ${
                challengeFilter === "featured"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setChallengeFilter("trending")}
              className={`px-3 py-1 rounded-md text-sm ${
                challengeFilter === "trending"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Trending
            </button>
            <button
              onClick={() => setChallengeFilter("seasonal")}
              className={`px-3 py-1 rounded-md text-sm ${
                challengeFilter === "seasonal"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Seasonal
            </button>
            <button
              onClick={() => setChallengeFilter("budget")}
              className={`px-3 py-1 rounded-md text-sm ${
                challengeFilter === "budget"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Budget
            </button>
          </div>

          <div className="ml-auto flex items-center">
            <span className="text-sm text-gray-700 mr-2">Difficulty:</span>
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 text-sm"
            >
              <option value="all">All Levels</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
      </div>

      {/* Active Challenges */}
      <h2 className="text-xl font-semibold mb-4">Active Challenges</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {filteredChallenges.map((challenge) => (
          <div
            key={challenge.id}
            className="rounded-lg border overflow-hidden transition-shadow"
          >
            <div className="relative">
              <Image
                height={300}
                width={500}
                src={challenge.image}
                alt={challenge.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium">
                {challenge.difficulty}
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
              <p className="text-gray-600 text-sm mb-3">
                {challenge.description}
              </p>

              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Clock className="h-4 w-4 mr-1" />
                <span>
                  {challenge.startDate} - {challenge.endDate}
                </span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  <span>
                    {challenge.participants.toLocaleString()} participants
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  {challenge.submissions} submissions
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Top Prize</div>
                  <div className="font-medium text-green-600">
                    {challenge.prizes[0]}
                  </div>
                </div>
                <button className="bg-blue-600 text-white py-1 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Past Challenges */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Past Challenges</h2>
          <div className="rounded-lg border overflow-hidden">
            {pastChallenges.map((challenge, index) => (
              <div
                key={challenge.id}
                className={`p-4 flex items-center ${
                  index !== pastChallenges.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <Image
                  height={300}
                  width={500}
                  src={challenge.image}
                  alt={challenge.title}
                  className="w-24 h-16 object-cover rounded mr-4"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{challenge.title}</h3>
                  <div className="text-sm text-gray-500">
                    {challenge.date} • {challenge.participants} participants
                  </div>
                </div>
                <div className="ml-4">
                  <div className="text-xs text-gray-500 mb-1">Winner</div>
                  <div className="flex items-center">
                    <Image
                      height={300}
                      width={500}
                      src={challenge.winnerAvatar}
                      alt={challenge.winner}
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span className="text-sm font-medium">
                      {challenge.winner}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {challenge.winningDish}
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-gray-50 p-3 text-center">
              <button className="text-blue-600 text-sm font-medium hover:underline">
                View All Past Challenges
              </button>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Challenge Leaderboard</h2>
          <div className="rounded-lg border overflow-hidden">
            <div className="p-4 bg-blue-50 border-b border-blue-100">
              <h3 className="font-medium text-blue-800">
                Top Challengers This Month
              </h3>
            </div>
            {leaderboardData.map((user, index) => (
              <div
                key={user.id}
                className="p-4 flex items-center border-b border-gray-100"
              >
                <div className="w-6 font-bold text-gray-500 mr-3">
                  {index + 1}
                </div>
                <Image
                  height={300}
                  width={500}
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div className="flex-1">
                  <div className="font-medium">{user.name}</div>
                  <div className="text-xs text-gray-500">
                    {user.challenges} challenges completed
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-blue-600">
                    {user.points.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500">
                    {user.badges} badges
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-gray-50 p-3 text-center">
              <button className="text-blue-600 text-sm font-medium hover:underline">
                See Full Leaderboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
