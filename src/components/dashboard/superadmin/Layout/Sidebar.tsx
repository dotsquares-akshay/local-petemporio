"use client";

import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "../Layout/SidebarContext";
import BrandLogo from "@/assets/images/logo.png";
import { CtaPawIcon } from "@/assets/Svgicons";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

type SubItem = {
  name: string;
  path?: string;
  children?: SubItem[];
};

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: SubItem[];
};

const navItems: NavItem[] = [
  {
    icon: CtaPawIcon,
    name: "Dashboard",
    path: "/Dashboard",
  },
  {
    icon: CtaPawIcon,
    name: "UI Elements",
    subItems: [
      { name: "Buttons", path: "/buttons" },
      { name: "Alerts", path: "/alerts" },
    ],
  },
  {
    icon: CtaPawIcon,
    name: "User Management",
    subItems: [
      {
        name: "All Users",
        path: "/users",
        children: [
          { name: "Active Users", path: "/users/active" },
          { name: "Blocked Users", path: "/users/blocked" },
        ],
      },
      {
        name: "Roles",
        path: "/roles",
        children: [
          { name: "Admin Roles", path: "/roles/admin" },
          { name: "User Roles", path: "/roles/user" },
        ],
      },
    ],
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const [openKeys, setOpenKeys] = useState<Record<string, boolean>>({});
  const [selectedKey, setSelectedKey] = useState<string>("main-Dashboard");

  const toggleKey = (key: string) => {
    setOpenKeys((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSelect = (key: string) => {
    setSelectedKey(key);
    expandParents(key);
  };

  const expandParents = (key: string) => {
    const parts = key.split("-");
    let currentKey = "";
    const newOpenKeys: Record<string, boolean> = {};
    for (let i = 0; i < parts.length - 1; i++) {
      currentKey = currentKey ? `${currentKey}-${parts[i]}` : parts[i];
      newOpenKeys[currentKey] = true;
    }
    setOpenKeys((prev) => ({ ...prev, ...newOpenKeys }));
  };

  const isActive = useCallback(
    (item: NavItem | SubItem, key: string): boolean => {
      if (selectedKey === key) return true;
      if ("path" in item && item.path === pathname) return true;
      if ("subItems" in item)
        return item.subItems?.some((sub) => isActive(sub, `${key}-${sub.name}`)) ?? false;
      if ("children" in item)
        return item.children?.some((child) => isActive(child, `${key}-${child.name}`)) ?? false;
      return false;
    },
    [pathname, selectedKey]
  );

  const renderSubItems = (subItems: SubItem[], parentKey: string) => {
    return subItems.map((subItem) => {
      const key = `${parentKey}-${subItem.name}`;
      const active = isActive(subItem, key);
      const hasChildren = subItem.children?.length! > 0;
      const isOpen = openKeys[key] || false;

      return (
        <li key={key}>
          <button
            onClick={() => {
              hasChildren ? toggleKey(key) : handleSelect(key);
            }}
            className={`w-full flex items-center justify-between text-left py-1 px-2 rounded transition-colors duration-300 ${
              active ? "bg-orange-100 dark:bg-orange-600" : "hover:bg-gray-100 dark:hover:bg-gray-800"
            } text-gray-700`}
          >
            <span>{subItem.name}</span>
            {hasChildren && (
              <ChevronDownIcon
                className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {hasChildren && (
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ml-5 ${
                isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <ul className="space-y-1">{renderSubItems(subItem.children!, key)}</ul>
            </div>
          )}
        </li>
      );
    });
  };

  const renderMenuItems = (items: NavItem[], parentKey: string) => {
    return items.map((item) => {
      const key = `${parentKey}-${item.name}`;
      const active = isActive(item, key);
      const hasSub = item.subItems?.length! > 0;
      const isOpen = openKeys[key] || false;

      return (
        <li key={key}>
          {hasSub ? (
            <>
              <button
                onClick={() => toggleKey(key)}
                className={`w-full flex items-center justify-between py-2 px-3 rounded transition-colors duration-300 ${
                  active ? "bg-orange-100 dark:bg-orange-600" : "hover:bg-gray-100 dark:hover:bg-gray-800"
                } text-gray-700`}
              >
                <span
                  className="flex items-center gap-2"
                  onClick={() => handleSelect(key)}
                >
                  {item.icon}
                  {(isExpanded || isHovered || isMobileOpen) && item.name}
                </span>
                <ChevronDownIcon
                  className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ml-5 ${
                  isOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <ul className="space-y-1">{renderSubItems(item.subItems!, key)}</ul>
              </div>
            </>
          ) : (
            <Link
              href={item.path!}
              onClick={() => handleSelect(key)}
              className={`flex items-center gap-2 py-2 px-3 rounded transition-colors duration-300 ${
                active ? "bg-orange-100 dark:bg-orange-600" : "hover:bg-gray-100 dark:hover:bg-gray-800"
              } text-gray-700`}
            >
              {item.icon}
              {(isExpanded || isHovered || isMobileOpen) && item.name}
            </Link>
          )}
        </li>
      );
    });
  };

  // Ensure Dashboard is active on initial load if pathname doesn't match anything
  useEffect(() => {
    if (!pathname || pathname === "/") {
      setSelectedKey("main-Dashboard");
    }
  }, [pathname]);

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 ${
        isExpanded || isMobileOpen
          ? "w-[364px]"
          : isHovered
          ? "w-[364px]"
          : "w-[90px]"
      } ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-[30px] flex ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link href="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <Image
                className="dark:hidden"
                src={BrandLogo}
                alt="Logo"
                width={150}
                height={40}
              />
              <Image
                className="hidden dark:block"
                src="/images/logo/logo-dark.svg"
                alt="Logo"
                width={150}
                height={40}
              />
            </>
          ) : (
            <Image src={BrandLogo} alt="Logo" width={32} height={32} />
          )}
        </Link>
      </div>

      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6 flex flex-col gap-4">
          {renderMenuItems(navItems, "main")}
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
