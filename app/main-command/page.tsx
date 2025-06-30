import { auth } from "@/utils/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function MainCommandDashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/dashboard");

  if (session.user?.role !== "ADMIN") redirect("/dashboard");
  
  return (
    <div>
      <p>Reports</p>
      <p>Overview</p>
      <p>Analytics</p>
    </div>
  );
}
