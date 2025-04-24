import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { PantryformSchema } from "@/lib/Validations";


export type PantryItemFormValues = z.infer<typeof PantryformSchema>;

const defaultValues: Partial<PantryItemFormValues> = {
  name: "",
  quantity: 1,
  unit: "items",
  category: "dry goods",
  tags: "",
};

interface AddItemFormProps {
  onSubmit: (values: PantryItemFormValues) => void;
  initialValues?: Partial<PantryItemFormValues>;
}

export function AddItemForm({ onSubmit, initialValues }: AddItemFormProps) {
  const form = useForm<PantryItemFormValues>({
    resolver: zodResolver(PantryformSchema),
    defaultValues: {
      ...defaultValues,
      ...initialValues,
    },
  });

  const units = [
    { label: "Items", value: "items" },
    { label: "Grams", value: "g" },
    { label: "Kilograms", value: "kg" },
    { label: "Milliliters", value: "ml" },
    { label: "Liters", value: "l" },
    { label: "Teaspoons", value: "tsp" },
    { label: "Tablespoons", value: "tbsp" },
    { label: "Cups", value: "cups" },
    { label: "Ounces", value: "oz" },
    { label: "Pounds", value: "lb" },
  ];

  const categories = [
    { label: "Dry Goods", value: "dry goods" },
    { label: "Refrigerated", value: "refrigerated" },
    { label: "Freezer", value: "freezer" },
    { label: "Spices", value: "spices" },
    { label: "Condiments", value: "condiments" },
    { label: "Snacks", value: "snacks" },
    { label: "Canned Goods", value: "canned goods" },
    { label: "Produce", value: "produce" },
    { label: "Beverages", value: "beverages" },
    { label: "Other", value: "other" },
  ];

  const handleSubmit = (values: PantryItemFormValues) => {
    onSubmit(values);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter item name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Enter quantity"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="unit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unit</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {units.map((unit) => (
                      <SelectItem key={unit.value} value={unit.value}>
                        {unit.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="expirationDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Expiration Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Optional: Add an expiration date for tracking
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <Input placeholder="e.g. organic, gluten-free (comma separated)" {...field} />
              </FormControl>
              <FormDescription>
                Optional: Add tags separated by commas
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Add to Pantry
        </Button>
      </form>
    </Form>
  );
}
