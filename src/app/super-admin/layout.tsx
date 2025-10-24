"use client";

import React from "react";
import { SidebarProvider } from "@/components/dashboard/superadmin/Layout/SidebarContext";
import AdminLayout from "@/components/dashboard/Layout";

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AdminLayout>{children}</AdminLayout>
    </SidebarProvider>
  );
}
