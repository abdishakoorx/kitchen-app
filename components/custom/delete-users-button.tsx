"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Trash2Icon } from "lucide-react";
import { toast } from "sonner";
import { deleteUserAction } from "@/app/actions/delete-user-action";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { useRouter } from "next/navigation";

interface DeleteUsersButtonProps {
  userId: string;
}

export const DeleteUsersButton = ({ userId }: DeleteUsersButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const deleteUser = async () => {
    setIsLoading(true);
    const { error } = await deleteUserAction({ userId });
    if (error) {
      toast.error(error);
    } else {
      toast.success("User deleted successfully");
    }
    setIsLoading(false);
    setIsOpen(false);
    router.refresh();
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button size={"icon"} variant={"destructive"} disabled={isLoading}>
          <span className="sr-only">Delete user</span>
          <Trash2Icon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the user
            and remove their data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-secondary text-white hover:bg-secondary/90">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={deleteUser}
            disabled={isLoading}
            className="bg-destructive hover:bg-destructive/90"
          >
            {isLoading ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const PlaceholderDeleteUsersButton = () => {
  return (
    <Button size={"icon"} variant={"destructive"} disabled>
      <span className="sr-only">Delete user</span>
      <Trash2Icon />
    </Button>
  );
};
