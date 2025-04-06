
"use client";
import { useHeader } from "@/context/header-context";
import React from "react";
import { PageHeader } from "./page-header";



export function HeaderSection() {
  const { title, description } = useHeader();
  return <PageHeader title={title} description={description} className="py-0 flex-1" />;
}