"use server";
import { auth } from "@/utils/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { canDeleteUser } from "@/utils/role-utils";
import { type UserRole } from "@/lib/constants";

export async function deleteUserAction({ userId }: { userId: string }) {
  const headerList = await headers();
  const session = await auth.api.getSession({
    headers: headerList,
  });

  if (!session) redirect("/login");

  const currentUserRole = session.user.role as UserRole;

  // Check basic permissions
  if (currentUserRole === "USER") {
    redirect("/dashboard");
  }

  // Users cannot delete themselves
  if (session.user.id === userId) {
    throw new Error("UNAUTHORIZED: Cannot delete yourself");
  }

  try {
    // Get target user using Better Auth's listUsers API
    const { users } = await auth.api.listUsers({
      headers: headerList,
      query: {
        // If Better Auth supports filtering by ID, use it
        // Otherwise, we'll filter the results
      },
    });

    const targetUser = users.find((user) => user.id === userId);

    if (!targetUser) {
      throw new Error("User not found");
    }

    const targetUserRole = targetUser.role as UserRole;

    // Use the role-utils function for permission checking
    if (!canDeleteUser(currentUserRole, targetUserRole)) {
      throw new Error(
        "UNAUTHORIZED: Insufficient permissions to delete this user"
      );
    }

    // Delete the user using Better Auth
    await auth.api.removeUser({
      headers: headerList,
      body: {
        userId: userId,
      },
    });

    return { error: null };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "Internal server error" };
  }
}
