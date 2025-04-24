"use client";

import { useHeader } from "@/contexts/header-context";
import { CategoryPage } from "../category-page";
import { useEffect } from "react";

export default function RefrigeratedPage() {
  const { setHeader } = useHeader();
  
  useEffect(() => {
    setHeader?.("Refrigerated", "Your refrigerated products.");
    // Clean up on unmount
    return () => setHeader?.();
  }, [setHeader]);
  return <CategoryPage categorySlug="refrigerated" />;
}