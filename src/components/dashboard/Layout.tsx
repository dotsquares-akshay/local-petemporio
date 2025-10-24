"use client";
import React from "react";
import { useSidebar } from "../dashboard/superadmin/Layout/SidebarContext"; // Ensure correct import path
import AppHeader from "../dashboard/superadmin/Layout/Header";
import AppSidebar from "../dashboard/superadmin/Layout/Sidebar";
import Backdrop from "../dashboard/superadmin/Layout/Backdrop";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[364px]" // Expanded state
    : "lg:ml-[90px]"; // Collapsed state

  return (
    <div className="min-h-screen xl:flex">
      <AppSidebar />
      <Backdrop />
      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}>
        <AppHeader />
        <main className="p-4 w-full bg-[#F9FAFB] md:p-6 h-full">{children}</main>
      </div>
    </div>
  );
}