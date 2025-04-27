// app/community/discussion-forums/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import {
  MessageSquare,
  Search,
  MessageCircle,
  Heart,
  Pin,
  Eye,
  Plus,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useHeader } from "@/contexts/header-context";

export default function DiscussionForumsPage() {
  const { setHeader } = useHeader();

  useEffect(() => {
    setHeader?.("Discussion Forums", "Ask questions, share ideas, get advice.");
    // Clean up on unmount
    return () => setHeader?.();
  }, [setHeader]);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("trending");

  // Mock data for trending discussions
  const trendingDiscussions = [
    {
      id: 1,
      title: "Best ways to meal prep for a family of four?",
      author: "Michelle K.",
      authorAvatar: "/marble-texture.jpg",
      category: "meal-prep",
      replies: 48,
      views: 1245,
      likes: 93,
      isPinned: true,
      isNew: false,
      lastActivity: "23 minutes ago",
      excerpt:
        "I'm looking for efficient ways to meal prep for my family while keeping everyone happy with the menu choices...",
    },
    {
      id: 2,
      title: "How to reduce food waste in your kitchen",
      author: "James W.",
      authorAvatar: "/marble-texture.jpg",
      category: "budget",
      replies: 36,
      views: 872,
      likes: 67,
      isPinned: false,
      isNew: true,
      lastActivity: "1 hour ago",
      excerpt:
        "Looking for creative ways to use up leftovers and reduce what ends up in the trash. What are your best strategies?",
    },
    {
      id: 3,
      title: "Plant-based protein sources that actually taste good",
      author: "Samira H.",
      authorAvatar: "/marble-texture.jpg",
      category: "nutrition",
      replies: 82,
      views: 2145,
      likes: 156,
      isPinned: false,
      isNew: false,
      lastActivity: "3 hours ago",
      excerpt:
        "Let's compile a list of plant-based protein options that are both nutritious and delicious. Share your favorites!",
    },
    {
      id: 4,
      title: "Batch cooking basics for beginners",
      author: "Thomas R.",
      authorAvatar: "/marble-texture.jpg",
      category: "meal-prep",
      replies: 27,
      views: 941,
      likes: 42,
      isPinned: false,
      isNew: true,
      lastActivity: "5 hours ago",
      excerpt:
        "I'm new to batch cooking and feeling overwhelmed. What are the essential recipes and techniques I should master first?",
    },
    {
      id: 5,
      title: "One-pan dinner recipes thread",
      author: "Aisha M.",
      authorAvatar: "/marble-texture.jpg",
      category: "recipes",
      replies: 64,
      views: 1892,
      likes: 134,
      isPinned: false,
      isNew: false,
      lastActivity: "8 hours ago",
      excerpt:
        "Let's share our favorite one-pan dinner recipes! I'll start with my go-to sheet pan chicken and vegetables...",
    },
    {
      id: 6,
      title: "Budget meal planning for students",
      author: "Kyle P.",
      authorAvatar: "/marble-texture.jpg",
      category: "budget",
      replies: 43,
      views: 1236,
      likes: 87,
      isPinned: false,
      isNew: false,
      lastActivity: "12 hours ago",
      excerpt:
        "College student here on a tight budget. Looking for meal planning tips that won't break the bank but still provide variety.",
    },
    {
      id: 7,
      title: "How do you organize your pantry?",
      author: "Lisa T.",
      authorAvatar: "/marble-texture.jpg",
      category: "recipes",
      replies: 31,
      views: 732,
      likes: 29,
      isPinned: false,
      isNew: false,
      lastActivity: "1 day ago",
      excerpt:
        "I need help organizing my chaotic pantry! Looking for systems that actually work for a busy household.",
    },
  ];

  // Mock data for active users
  const activeUsers = [
    {
      id: 101,
      name: "Alex J.",
      avatar: "/marble-texture.jpg",
      posts: 312,
      expertise: "Meal Prep",
    },
    {
      id: 102,
      name: "Maria S.",
      avatar: "/marble-texture.jpg",
      posts: 287,
      expertise: "Plant-based",
    },
    {
      id: 103,
      name: "Robert L.",
      avatar: "/marble-texture.jpg",
      posts: 254,
      expertise: "Budget",
    },
    {
      id: 104,
      name: "Diana K.",
      avatar: "/marble-texture.jpg",
      posts: 219,
      expertise: "Nutrition",
    },
    {
      id: 105,
      name: "Wei C.",
      avatar: "/marble-texture.jpg",
      posts: 196,
      expertise: "Baking",
    },
  ];

  // Mock data for featured discussion
  const featuredDiscussion = {
    id: 201,
    title: "Kitchen organization hacks that actually work",
    author: "Elena R.",
    authorAvatar: "/marble-texture.jpg",
    date: "April 18, 2025",
    category: "recipes",
    replies: 124,
    views: 3572,
    excerpt:
      "After years of struggling with a small kitchen, I've finally found organization solutions that make cooking enjoyable again. Let's share our best organizational hacks!",
    topReplies: [
      {
        author: "Michael T.",
        authorAvatar: "/marble-texture.jpg",
        content:
          "Magnetic knife strips and spice racks on the inside of cabinet doors have been game changers for me.",
        likes: 47,
      },
      {
        author: "Sarah K.",
        authorAvatar: "/marble-texture.jpg",
        content:
          "Clear containers for everything in the pantry, plus labels! Makes inventory checks so easy.",
        likes: 36,
      },
    ],
  };

  // Filter discussions based on selected category
  const filteredDiscussions = trendingDiscussions.filter((discussion) => {
    // Filter by search query
    if (
      searchQuery &&
      !discussion.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  // Sort discussions based on selected sort method
  const sortedDiscussions = [...filteredDiscussions].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;

    if (sortBy === "trending") {
      // Sort by engagement (likes + replies)
      return b.likes + b.replies - (a.likes + a.replies);
    } else if (sortBy === "recent") {
      // In a real app, we'd sort by timestamp
      // Here we're simulating by just using the array order
      return a.id < b.id ? 1 : -1;
    } else if (sortBy === "popular") {
      return b.views - a.views;
    }

    return 0;
  });

  return (
    <div className="container">
      <div className="flex justify-end items-end">
        <Button className="mb-4 px-6">
          <Plus /> New Discussion
        </Button>
      </div>

      {/* Search and filters */}
      <div className="p-4 rounded-lg border mb-6">
        <div className="sm:flex items-center">
          <div className="relative flex-1 mb-4 sm:mb-0">
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <div className="sm:ml-4 flex space-x-2">
            <button
              onClick={() => setSortBy("trending")}
              className={`px-3 py-2 rounded-md text-sm ${
                sortBy === "trending"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Trending
            </button>
            <button
              onClick={() => setSortBy("recent")}
              className={`px-3 py-2 rounded-md text-sm ${
                sortBy === "recent"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Recent
            </button>
            <button
              onClick={() => setSortBy("popular")}
              className={`px-3 py-2 rounded-md text-sm ${
                sortBy === "popular"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Popular
            </button>
          </div>
        </div>
      </div>

      {/* Featured Discussion */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg mb-6 overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-blue-800">
              Featured Discussion
            </h2>
            <span className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded font-medium">
              Hot Topic
            </span>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">
              {featuredDiscussion.title}
            </h3>
            <p className="text-gray-600">{featuredDiscussion.excerpt}</p>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Image
                height={40}
                width={40}
                src={featuredDiscussion.authorAvatar}
                alt={featuredDiscussion.author}
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="text-sm font-medium">
                {featuredDiscussion.author}
              </span>
              <span className="mx-2 text-gray-500">•</span>
              <span className="text-sm text-gray-500">
                {featuredDiscussion.date}
              </span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-1" />
                <span>{featuredDiscussion.replies}</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                <span>{featuredDiscussion.views}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 p-4 rounded-md mb-4">
            {featuredDiscussion.topReplies.map((reply, index) => (
              <div key={index} className="flex">
                <Image
                  height={32}
                  width={32}
                  src={reply.authorAvatar}
                  alt={reply.author}
                  className="w-8 h-8 rounded-full mr-3 mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <span className="font-medium text-sm">{reply.author}</span>
                    <span className="ml-auto flex items-center text-xs text-gray-500">
                      <Heart className="h-3 w-3 mr-1 text-red-500" />
                      {reply.likes}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm">{reply.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <button className="text-blue-600 font-medium text-sm hover:underline">
              Join the discussion →
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Discussions list */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border overflow-hidden">
            {sortedDiscussions.length > 0 ? (
              sortedDiscussions.map((discussion) => (
                <div
                  key={discussion.id}
                  className="border-b border-gray-100 last:border-0"
                >
                  <div className="p-5">
                    <div className="flex items-start mb-2">
                      <Image
                        height={32}
                        width={32}
                        src={discussion.authorAvatar}
                        alt={discussion.author}
                        className="w-10 h-10 rounded-full mr-3 mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center">
                          <h3 className="font-medium">
                            {discussion.isPinned && (
                              <Pin className="h-3 w-3 text-blue-600 inline mr-1" />
                            )}
                            {discussion.title}
                          </h3>
                          {discussion.isNew && (
                            <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">
                              New
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          <span className="font-medium text-gray-700">
                            {discussion.author}
                          </span>
                          <span className="mx-1">•</span>
                          <span>Active {discussion.lastActivity}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-3">
                      {discussion.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
                        <div className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          <span>{discussion.replies}</span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          <span>{discussion.views}</span>
                        </div>
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 mr-1" />
                          <span>{discussion.likes}</span>
                        </div>
                      </div>

                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md capitalize">
                        {discussion.category.replace("-", " ")}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center">
                <MessageSquare className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  No discussions found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </div>

          {sortedDiscussions.length > 0 && (
            <div className="mt-6 flex justify-center">
              <button className="text-blue-600 border border-blue-200 px-6 py-2 rounded-md font-medium hover:bg-blue-50">
                Load more discussions
              </button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Active users */}
          <div className="rounded-lg border overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-lg">
                Active Community Members
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {activeUsers.map((user) => (
                  <div key={user.id} className="flex items-center">
                    <Image
                      height={40}
                      width={40}
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{user.name}</h3>
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {user.posts} posts
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        Expert in {user.expertise}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <button className="text-blue-600 text-sm font-medium">
                  View all members →
                </button>
              </div>
            </div>
          </div>

          {/* Join community */}
          <div className="bg-gradient-to-br from-secondary to-secondary/70 rounded-lg border text-white p-6">
            <h3 className="font-bold text-xl mb-2">Join Our Community</h3>
            <p className="mb-4 text-blue-100">
              Connect with fellow cooking enthusiasts and share your culinary
              journey
            </p>
            <Button className="w-full py-2">Join a group →</Button>
          </div>

          {/* Forum rules */}
          <div className="rounded-lg border overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-lg">Forum Guidelines</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Be respectful to other community members</span>
                </li>
                <li className="flex">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Stay on topic in discussion threads</span>
                </li>
                <li className="flex">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Credit sources when sharing recipes</span>
                </li>
                <li className="flex">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>No promotional content without permission</span>
                </li>
                <li className="flex">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Have fun and happy cooking!</span>
                </li>
              </ul>
              <div className="mt-4 text-center">
                <button className="text-blue-600 text-sm font-medium">
                  Read full guidelines
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
