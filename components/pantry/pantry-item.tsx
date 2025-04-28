import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trash } from "lucide-react";

export interface PantryItemProps {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  category: string;
  expirationDate?: string;
  tags?: string[];
  className?: string;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
}

export function PantryItem({
  id,
  name,
  quantity,
  unit,
  category,
  expirationDate,
  tags = [],
  className,
  onDelete,
  onEdit,
}: PantryItemProps) {
  // Calculate days until expiration
  const getDaysUntilExpiration = (): number | null => {
    if (!expirationDate) return null;
   
    const today = new Date();
    const expiry = new Date(expirationDate);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
   
    return diffDays;
  };
 
  const daysUntilExpiration = getDaysUntilExpiration();
 
  const getExpiryColor = () => {
    if (daysUntilExpiration === null) return "";
    if (daysUntilExpiration < 0) return "text-destructive";
    if (daysUntilExpiration <= 7) return "text-orange-500";
    return "text-green-600";
  };

  const getExpiryText = () => {
    if (daysUntilExpiration === null) return "No date";
    if (daysUntilExpiration === 0) return "Today";
    if (daysUntilExpiration < 0) return `${Math.abs(daysUntilExpiration)} days ago`;
    return `${daysUntilExpiration} days`;
  };

  return (
    <Card className={cn("w-full h-full", className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{name}</CardTitle>
          {onDelete && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-destructive"
              onClick={() => onDelete(id)}
            >
              <Trash className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid gap-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Quantity:</span>
            <span>
              {quantity} {unit}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-muted-foreground">Category:</span>
            <span className="capitalize">{category}</span>
          </div>
         
          {expirationDate && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Expires:</span>
              <span className={getExpiryColor()}>
                {getExpiryText()}
              </span>
            </div>
          )}
         
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        {onEdit && (
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => onEdit(id)}
          >
            Edit
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}