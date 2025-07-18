"use server";
import { auth } from "@/utils/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { userRole, type UserRole } from "@/lib/constants";
import { db } from "@/db";
import { user } from "@/db/Schema";
import { eq } from "drizzle-orm";

export async function updateUserRoleAction({
  userId,
  newRole,
}: {
  userId: string;
  newRole: UserRole;
}) {
  const headerList = await headers();
  const session = await auth.api.getSession({
    headers: headerList,
  });

  if (!session) redirect("/login");

  // Only SUPERADMIN can update roles
  if (session.user.role !== userRole.SUPERADMIN) {
    throw new Error("UNAUTHORIZED: Only superadmins can update roles");
  }

  // Cannot update own role
  if (session.user.id === userId) {
    throw new Error("UNAUTHORIZED: Cannot update your own role");
  }

  // Validate the new role
  if (!Object.values(userRole).includes(newRole)) {
    throw new Error("Invalid role specified");
  }

  // Get the target user
  const targetUser = await db
    .select()
    .from(user)
    .where(eq(user.id, userId))
    .limit(1);

  if (!targetUser.length) {
    throw new Error("User not found");
  }

  // Cannot change another SUPERADMIN's role
  // if (targetUser[0].role === userRole.SUPERADMIN) {
  //   throw new Error("UNAUTHORIZED: Cannot change another superadmin's role");
  // }

  try {
    await db
      .update(user)
      .set({
        role: newRole,
        updatedAt: new Date(),
      })
      .where(eq(user.id, userId));

    return { error: null };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "Internal server error" };
  }
}
