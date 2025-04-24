"use client";

import { useHeader } from "@/contexts/header-context";
import { CategoryPage } from "../category-page";
import { useEffect } from "react";

export default function FreezerPage() {
  const { setHeader } = useHeader();
  
  useEffect(() => {
    setHeader?.("Freezer", "Track and manage your frozen items.");
    // Clean up on unmount
    return () => setHeader?.();
  }, [setHeader]);
  return <CategoryPage categorySlug="freezer" />;
}