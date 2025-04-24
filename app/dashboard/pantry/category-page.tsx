"use client";

import React, { useState } from "react";
import { usePantry } from "@/contexts/pantry-context";
import { PantryItem } from "@/components/pantry/pantry-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AddItemForm, PantryItemFormValues } from "@/components/pantry/pantry-form";
import { Search, Plus } from "lucide-react";

// Map URL parameters to category values
export const categoryMap: Record<string, string> = {
  "dry-goods": "dry goods",
  "refrigerated": "refrigerated",
  "freezer": "freezer",
  "spices": "spices",
};

// Map category values to display names
export const categoryDisplayNames: Record<string, string> = {
  "dry goods": "Dry Goods",
  "refrigerated": "Refrigerated Items",
  "freezer": "Freezer Items",
  "spices": "Spices & Seasonings",
};

interface CategoryPageProps {
  categorySlug: string;
}

export function CategoryPage({ categorySlug }: CategoryPageProps) {
  const { state, addItem, removeItem, updateItem } = usePantry();
  const [searchQuery, setSearchQuery] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editItem, setEditItem] = useState<typeof state.items[0] | null>(null);

  // Get the category from the URL parameter
  const category = categorySlug ? categoryMap[categorySlug] : "";
  const categoryDisplayName = category ? categoryDisplayNames[category] : "";

  // Filter items by category and search query
  const filteredItems = state.items.filter(
    (item) =>
      item.category === category &&
      (searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  // Sort items by expiration date (expired first, then expiring soon)
  const sortedItems = [...filteredItems].sort((a, b) => {
    // Items without expiration date go last
    if (!a.expirationDate && !b.expirationDate) return 0;
    if (!a.expirationDate) return 1;
    if (!b.expirationDate) return -1;
    
    return new Date(a.expirationDate).getTime() - new Date(b.expirationDate).getTime();
  });

  // Handle form submission for adding a new item
  const handleAddItem = (values: PantryItemFormValues) => {
    const tagArray = values.tags
      ? values.tags.split(',').map(tag => tag.trim()).filter(Boolean)
      : [];

    if (editItem) {
      // Update existing item
      updateItem({
        ...editItem,
        name: values.name,
        quantity: values.quantity,
        unit: values.unit,
        category: values.category,
        expirationDate: values.expirationDate?.toISOString(),
        tags: tagArray,
      });
    } else {
      // Add new item
      addItem({
        name: values.name,
        quantity: values.quantity,
        unit: values.unit,
        category: category || values.category,
        expirationDate: values.expirationDate?.toISOString(),
        tags: tagArray,
      });
    }
    
    setDialogOpen(false);
    setEditItem(null);
  };

  const handleEditItem = (id: string) => {
    const item = state.items.find(item => item.id === id);
    if (item) {
      setEditItem(item);
      setDialogOpen(true);
    }
  };

  // Prepare initial values for form when editing
  const getInitialValues = () => {
    if (!editItem) return undefined;
    
    return {
      name: editItem.name,
      quantity: editItem.quantity,
      unit: editItem.unit,
      category: editItem.category,
      expirationDate: editItem.expirationDate ? new Date(editItem.expirationDate) : undefined,
      tags: editItem.tags.join(", "),
    };
  };

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{categoryDisplayName || "Category"}</h1>
            <p className="text-muted-foreground mt-1">
              {filteredItems.length} items in your {categoryDisplayName.toLowerCase()}
            </p>
          </div>
          
          <Dialog open={dialogOpen} onOpenChange={(open) => {
            setDialogOpen(open);
            if (!open) setEditItem(null);
          }}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {editItem ? "Edit Pantry Item" : "Add New Pantry Item"}
                </DialogTitle>
              </DialogHeader>
              <AddItemForm 
                onSubmit={handleAddItem} 
                initialValues={getInitialValues()}
              />
            </DialogContent>
          </Dialog>
        </div>

        {/* Search bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search items by name or tags..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Items grid */}
        {sortedItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sortedItems.map((item) => (
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
                onEdit={handleEditItem}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium">No items found</h3>
            <p className="text-muted-foreground mt-1">
              {state.items.some(item => item.category === category)
                ? "No items match your search. Try a different query."
                : `Your ${categoryDisplayName.toLowerCase()} is empty. Add some items to get started!`}
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setDialogOpen(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Item
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}