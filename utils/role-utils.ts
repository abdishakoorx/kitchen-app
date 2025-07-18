import { userRole, type UserRole } from "@/lib/constants";

export const roleHierarchy = {
  [userRole.USER]: 0,
  [userRole.ADMIN]: 1,
  [userRole.SUPERADMIN]: 2,
} as const;

export function canDeleteUser(
  currentUserRole: UserRole,
  targetUserRole: UserRole
): boolean {
  // SUPERADMIN can delete USER and ADMIN
  if (currentUserRole === userRole.SUPERADMIN) {
    return true;
  }

  // ADMIN can only delete USER
  if (currentUserRole === userRole.ADMIN) {
    return targetUserRole === userRole.USER;
  }

  // USER cannot delete anyone
  return false;
}

export function canUpdateRole(
  currentUserRole: UserRole
  // targetUserRole: UserRole
): boolean {
  // Only SUPERADMIN can update roles
  if (currentUserRole !== userRole.SUPERADMIN) {
    return false;
  }

  // SUPERADMIN can update any role (including other SUPERADMINs)
  return true;
}

export function getSelectableRoles(
  currentUserRole: UserRole,
  targetUserRole: UserRole
): UserRole[] {
  if (currentUserRole !== userRole.SUPERADMIN) {
    return [];
  }

  // SUPERADMIN can change USER and ADMIN to any role except SUPERADMIN
  if (targetUserRole === userRole.SUPERADMIN) {
    return [userRole.SUPERADMIN]; // Can't change SUPERADMIN role
  }

  return [userRole.USER, userRole.ADMIN, userRole.SUPERADMIN];
}

export function getRoleDisplayName(role: UserRole): string {
  switch (role) {
    case userRole.USER:
      return "User";
    case userRole.ADMIN:
      return "Admin";
    case userRole.SUPERADMIN:
      return "Super Admin";
    default:
      return "Unknown";
  }
}
