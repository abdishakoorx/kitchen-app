"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useHeader } from "@/contexts/header-context";

export default function CommunityPage() {
  const { setHeader } = useHeader();

  useEffect(() => {
    setHeader?.("Community", "Connect, share, and grow together.");
    // Clean up on unmount
    return () => setHeader?.();
  }, [setHeader]);

  // Mock data for featured community content
  const featuredContent = [
    {
      id: 1,
      type: "challenge",
      title: "Spring Seasonal Cooking Challenge",
      author: "Chef Maria Rodriguez",
      authorAvatar: "/marble-texture.jpg",
      date: "April 20, 2025",
      engagement: "1.2k participants",
      image: "/wooden-texture.jpg",
      excerpt:
        "Create amazing dishes using spring produce! Share your creations and win prizes.",
      tags: ["seasonal", "challenge", "prizes"],
      url: "/dashboard/community/cooking-challenges",
    },
    {
      id: 2,
      type: "forum",
      title: "Meal Prep Strategies for Busy Professionals",
      author: "Alex Kim",
      authorAvatar: "/marble-texture.jpg",
      date: "April 23, 2025",
      engagement: "87 comments",
      image: "/wooden-texture.jpg",
      excerpt:
        "Let's share our time-saving meal prep techniques that don't sacrifice nutrition or taste!",
      tags: ["meal prep", "time-saving", "discussion"],
      url: "/dashboard/community/discussion-forums",
    },
    {
      id: 3,
      type: "expert",
      title: "Nutritional Myths Debunked",
      author: "Dr. Sarah Johnson, RD",
      authorAvatar: "/marble-texture.jpg",
      date: "April 18, 2025",
      engagement: "542 bookmarks",
      image: "/wooden-texture.jpg",
      excerpt:
        "Separating fact from fiction in the world of nutrition science.",
      tags: ["nutrition", "expert", "health"],
      url: "/dashboard/community/expert-tips",
    },
    {
      id: 4,
      type: "learning",
      title: "Mastering Knife Skills: A Complete Guide",
      author: "Chef Thomas Wang",
      authorAvatar: "/marble-texture.jpg",
      date: "April 15, 2025",
      engagement: "4.3k views",
      image: "/wooden-texture.jpg",
      excerpt:
        "Learn the essential knife techniques every home cook should know.",
      tags: ["skills", "tutorial", "basics"],
      url: "/dashboard/community/learning-center",
    },
  ];

  // Mock data for active community members
  const activeMembers = [
    {
      id: 101,
      name: "Elena C.",
      avatar: "/marble-texture.jpg",
      badge: "Top Contributor",
      contributions: 86,
    },
    {
      id: 102,
      name: "Marcus T.",
      avatar: "/marble-texture.jpg",
      badge: "Recipe Master",
      contributions: 54,
    },
    {
      id: 103,
      name: "Priya K.",
      avatar: "/marble-texture.jpg",
      badge: "Challenge Winner",
      contributions: 47,
    },
    {
      id: 104,
      name: "David W.",
      avatar: "/marble-texture.jpg",
      badge: "Budget Guru",
      contributions: 39,
    },
    {
      id: 105,
      name: "Sophia L.",
      avatar: "/marble-texture.jpg",
      badge: "New Member",
      contributions: 12,
    },
  ];

  // Mock data for upcoming events
  const upcomingEvents = [
    {
      id: 201,
      title: "Live Q&A: Budget-Friendly Meal Planning",
      date: "April 28, 2025",
      time: "7:00 PM EST",
      host: "Emma Richards",
      attendees: 156,
      type: "Live Session",
    },
    {
      id: 202,
      title: "Virtual Cooking Class: Italian Classics",
      date: "May 2, 2025",
      time: "6:30 PM EST",
      host: "Chef Giovanni Russo",
      attendees: 98,
      type: "Cooking Class",
    },
    {
      id: 203,
      title: "Nutrition Panel: Eating for Energy",
      date: "May 5, 2025",
      time: "12:00 PM EST",
      host: "Various Experts",
      attendees: 73,
      type: "Panel Discussion",
    },
  ];

  // Mock data for recent activity
  const recentActivity = [
    {
      id: 301,
      user: "Aisha M.",
      avatar: "/marble-texture.jpg",
      action: "shared a recipe",
      content: "Quick Weeknight Pasta",
      time: "23 minutes ago",
    },
    {
      id: 302,
      user: "Carlos R.",
      avatar: "/marble-texture.jpg",
      action: "commented on",
      content: "Budget-Friendly Protein Sources",
      time: "47 minutes ago",
    },
    {
      id: 303,
      user: "Taylor K.",
      avatar: "/marble-texture.jpg",
      action: "joined challenge",
      content: "Spring Seasonal Cooking",
      time: "1 hour ago",
    },
    {
      id: 304,
      user: "Liam J.",
      avatar: "/marble-texture.jpg",
      action: "bookmarked article",
      content: "Fermentation Basics",
      time: "2 hours ago",
    },
    {
      id: 305,
      user: "Natalie P.",
      avatar: "/marble-texture.jpg",
      action: "earned badge",
      content: "Meal Prep Pro",
      time: "3 hours ago",
    },
  ];

  return (
    <div className="">
      {/* Main content */}
      <div className="flex-1 container mx-auto px-4 py-8">
        {/* Featured Content */}
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredContent.map((content) => (
              <Link href={content.url} key={content.id}>
                <div className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      height={400}
                      width={400}
                      src={content.image}
                      alt={content.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium uppercase">
                      {content.type}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2">
                      {content.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{content.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Image
                          height={100}
                          width={100}
                          src={content.authorAvatar}
                          alt={content.author}
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <span className="text-sm text-gray-700">
                          {content.author}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {content.engagement}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Community Members */}
          <div className="rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Active Members</h2>
              <Link href="" className="text-blue-600 text-sm hover:underline">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {activeMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <Image
                      height={100}
                      width={100}
                      src={member.avatar}
                      alt={member.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {member.badge}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {member.contributions} posts
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Upcoming Events</h2>
              <Link href="" className="text-blue-600 text-sm hover:underline">
                View Calendar
              </Link>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="border-b border-gray-100 pb-3 last:border-0"
                >
                  <h3 className="font-medium">{event.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>
                      {event.date} • {event.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                      {event.type}
                    </span>
                    <span className="text-xs text-gray-500">
                      {event.attendees} attending
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4 py-2">Create Event</Button>
          </div>

          {/* Recent Activity */}
          <div className="rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Recent Activity</h2>
              <Link href="" className="text-blue-600 text-sm hover:underline">
                See All
              </Link>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start">
                  <Image
                    height={100}
                    width={100}
                    src={activity.avatar}
                    alt={activity.user}
                    className="w-8 h-8 rounded-full mr-3 mt-1"
                  />
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{" "}
                      <span className="text-gray-600">{activity.action}</span>{" "}
                      <span className="font-medium">{activity.content}</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white">
            <h3 className="text-3xl font-bold">12,450</h3>
            <p className="text-blue-100">Community Members</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white">
            <h3 className="text-3xl font-bold">5,280</h3>
            <p className="text-green-100">Shared Recipes</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg text-white">
            <h3 className="text-3xl font-bold">856</h3>
            <p className="text-purple-100">Active Discussions</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 rounded-lg text-white">
            <h3 className="text-3xl font-bold">48</h3>
            <p className="text-yellow-100">Live Events This Month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
