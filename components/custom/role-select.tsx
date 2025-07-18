"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { type UserRole } from "@/lib/constants";
import { toast } from "sonner";
import { updateUserRoleAction } from "@/app/actions/update-role-action";
import { getRoleDisplayName } from "@/utils/role-utils";

interface RoleSelectProps {
  userId: string;
  userName: string;
  currentRole: UserRole;
  canUpdateRole: boolean;
  availableRoles: UserRole[];
}

export function RoleSelect({
  userId,
  userName,
  currentRole,
  canUpdateRole,
  availableRoles,
}: RoleSelectProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleRoleChange = (newRole: UserRole) => {
    if (newRole === currentRole) return;
    setSelectedRole(newRole);
    setShowConfirmDialog(true);
  };

  const handleConfirmRoleChange = async () => {
    if (!selectedRole) return;

    setIsUpdating(true);
    try {
      const result = await updateUserRoleAction({
        userId,
        newRole: selectedRole,
      });

      if (result.error) {
        toast.error("Error Updating Role", {
          description: result.error,
        });
      } else {
        toast.success("Role Updated", {
          description: `${userName}'s role has been updated to ${getRoleDisplayName(
            selectedRole
          )}`,
        });
        // Refresh the page to show updated role
        window.location.reload();
      }
    } catch (error) {
      toast.error("Error Updating Role", {
        description: "Failed to update role. Please try again.",
      });
      console.log(error);
    } finally {
      setIsUpdating(false);
      setShowConfirmDialog(false);
      setSelectedRole(null);
    }
  };

  const handleCancelRoleChange = () => {
    setShowConfirmDialog(false);
    setSelectedRole(null);
  };

  if (!canUpdateRole) {
    return (
      <div className="text-sm font-medium">
        {getRoleDisplayName(currentRole)}
      </div>
    );
  }

  return (
    <>
      <Select value={currentRole} onValueChange={handleRoleChange}>
        <SelectTrigger className="w-[140px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {availableRoles.map((role) => (
            <SelectItem key={role} value={role}>
              {getRoleDisplayName(role)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Role Change</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to change {userName}&apos;s role to{" "}
              <strong>
                {selectedRole && getRoleDisplayName(selectedRole)}
              </strong>
              ?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={handleCancelRoleChange}
              className="bg-destructive text-white border-none hover:bg-destructive/90"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmRoleChange}
              disabled={isUpdating}
              className="bg-secondary text-white hover:bg-secondary/90"
            >
              {isUpdating ? "Updating..." : "Continue"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
