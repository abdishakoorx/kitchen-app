export const userRole = {
  USER: "USER",
  ADMIN: "ADMIN",
  SUPERADMIN: "SUPERADMIN",
} as const;

export type UserRole = typeof userRole[keyof typeof userRole];