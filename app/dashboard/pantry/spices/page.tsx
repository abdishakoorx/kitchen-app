"use client";

import { useHeader } from "@/contexts/header-context";
import { CategoryPage } from "../category-page";
import { useEffect } from "react";

export default function SpicesPage() {
  const { setHeader } = useHeader();
  
  useEffect(() => {
    setHeader?.("Spices & Seasonings", "Your collection of spices, herbs, and seasonings.");
    // Clean up on unmount
    return () => setHeader?.();
  }, [setHeader]);
  return <CategoryPage categorySlug="spices" />;
}