"use client";

import React, { useEffect, useState } from "react";
import { usePantry } from "@/contexts/pantry-context";
import { PantryItem } from "@/components/pantry/pantry-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AddItemForm, PantryItemFormValues } from "@/components/pantry/pantry-form";
import { Search, Plus } from "lucide-react";
import { useHeader } from "@/contexts/header-context";

export default function PantryDashboard() {
  const { state, addItem, removeItem } = usePantry();
  const [searchQuery, setSearchQuery] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const { setHeader } = useHeader();
  
  useEffect(() => {
    setHeader?.("Pantry Overview", "Manage your pantry items all in one place");
    // Clean up on unmount
    return () => setHeader?.();
  }, [setHeader]);

  // Filter items based on search query
  const filteredItems = state.items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Group items by category
  const itemsByCategory = filteredItems.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<string, typeof state.items>);

  // Handle form submission for adding a new item
  const handleAddItem = (values: PantryItemFormValues) => {
    const tagArray = values.tags
      ? values.tags.split(',').map(tag => tag.trim()).filter(Boolean)
      : [];

    addItem({
      name: values.name,
      quantity: values.quantity,
      unit: values.unit,
      category: values.category,
      expirationDate: values.expirationDate?.toISOString(),
      tags: tagArray,
    });
    
    setDialogOpen(false);
  };
  
  // Get stats for the pantry
  const totalItems = state.items.length;
  const expiringSoon = state.items.filter(item => {
    if (!item.expirationDate) return false;
    const expiryDate = new Date(item.expirationDate);
    const today = new Date();
    const diffDays = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return diffDays >= 0 && diffDays <= 7;
  }).length;
  const expired = state.items.filter(item => {
    if (!item.expirationDate) return false;
    const expiryDate = new Date(item.expirationDate);
    const today = new Date();
    return expiryDate < today;
  }).length;

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Pantry Overview</h1>
            <p className="text-muted-foreground mt-1">
              Manage your pantry items all in one place
            </p>
          </div>
          
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Pantry Item</DialogTitle>
              </DialogHeader>
              <AddItemForm onSubmit={handleAddItem} />
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-secondary p-4 rounded-lg">
            <h3 className="text-sm font-medium text-muted-foreground">Total Items</h3>
            <p className="text-3xl font-bold">{totalItems}</p>
          </div>
          <div className="bg-secondary p-4 rounded-lg">
            <h3 className="text-sm font-medium text-muted-foreground">Expiring Soon</h3>
            <p className="text-3xl font-bold text-orange-500">{expiringSoon}</p>
          </div>
          <div className="bg-secondary p-4 rounded-lg">
            <h3 className="text-sm font-medium text-muted-foreground">Expired</h3>
            <p className="text-3xl font-bold text-destructive">{expired}</p>
          </div>
        </div>

        {/* Search bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search items by name, category, or tags..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Items by category */}
        <div className="space-y-8">
          {Object.keys(itemsByCategory).length > 0 ? (
            Object.entries(itemsByCategory).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <h2 className="text-xl font-semibold capitalize">{category}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {items.map((item) => (
                    <PantryItem
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      unit={item.unit}
                      category={item.category}
                      expirationDate={item.expirationDate}
                      tags={item.tags}
                      onDelete={removeItem}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No items found</h3>
              <p className="text-muted-foreground mt-1">
                {state.items.length === 0
                  ? "Your pantry is empty. Add some items to get started!"
                  : "No items match your search. Try a different query."}
              </p>
              {state.items.length === 0 && (
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setDialogOpen(true)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Your First Item
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}