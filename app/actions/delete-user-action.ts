"use server";

import { auth } from "@/utils/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function deleteUserAction({ userId }: { userId: string }) {
  const headerList = await headers();
  const session = await auth.api.getSession({
    headers: headerList,
  });

  if (!session) redirect("/login");
  if (session.user.role !== "ADMIN") redirect("/dashboard");
  if (session.user.id === userId) throw new Error("UNAUTHORIZED");

  try {
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
