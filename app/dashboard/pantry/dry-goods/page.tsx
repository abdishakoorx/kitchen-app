"use client";

import { useHeader } from "@/contexts/header-context";
import { CategoryPage } from "../category-page";
import { useEffect } from "react";

export default function DryGoodsPage() {
  const { setHeader } = useHeader();
  
  useEffect(() => {
    setHeader?.("Dry Goods", "Manage your pantry staples and non-perishable items.");
    // Clean up on unmount
    return () => setHeader?.();
  }, [setHeader]);
  return <CategoryPage categorySlug="dry-goods" />;
}