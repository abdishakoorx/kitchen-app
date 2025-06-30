"use server";

import { db } from "@/db";
import { user } from "@/db/Schema";
import { auth } from "@/utils/auth";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function deleteUserAction({ userId }: { userId: string }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/login");
  if (session.user.role !== "ADMIN") redirect("/dashboard");
  if (session.user.id === userId) throw new Error("UNAUTHORIZED");

  try {
    await db.delete(user).where(eq(user.id, userId));
    return { error: null };

  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "Internal server error" };
  }
}
