import { z } from "zod";

export const PantryformSchema = z.object({
    name: z.string().min(2, {
      message: "Item name must be at least 2 characters.",
    }),
    quantity: z.coerce.number().positive({
      message: "Quantity must be a positive number.",
    }),
    unit: z.string().min(1, {
      message: "Please select a unit.",
    }),
    category: z.string().min(1, {
      message: "Please select a category.",
    }),
    expirationDate: z.date().optional(),
    tags: z.string().optional(),
  });