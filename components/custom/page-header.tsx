"use client";
import React from "react";
import { usePathname } from "next/navigation";

interface PageHeaderProps {
  title?: string;
  description?: string;
  className?: string;
}

export function PageHeader({
  title,
  description,
  className = "",
}: PageHeaderProps) {
  const pathname = usePathname();
  
  // Generate default title based on current route if no title is provided
  const getDefaultTitle = () => {
    if (title) return title;
    // Get the last segment of the path
    const segments = pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    if (!lastSegment) return "Dashboard";
    // Convert kebab-case or snake_case to Title Case
    return lastSegment
      .replace(/-|_/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className={`${className}`}>
      <h1 className="text-base font-bold tracking-tight text-gray-900 md:text-xl">
        {getDefaultTitle()}
      </h1>
      {description && (
        <p className="text-sm text-gray-500 md:text-xs">{description}</p>
      )}
    </div>
  );
}