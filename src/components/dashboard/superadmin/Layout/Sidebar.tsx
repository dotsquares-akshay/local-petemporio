"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "../Layout/SidebarContext";
import BrandLogo from "@/assets/images/logo.png";
import { CtaPawIcon } from "@/assets/Svgicons";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
  {
    icon: CtaPawIcon,
    name: "Dashboard",
    path: "/Dashboard",
  },
  {
    icon: "CtaPawIcon",
    name: "Calendar",
    path: "/calendar",
  },
  {
    icon: "CtaPawIcon",
    name: "User Profile",
    path: "/profile",
  },

  {
    name: "Forms",
    icon: "CtaPawIcon",
    subItems: [{ name: "Form Elements", path: "/form-elements", pro: false }],
  },
  {
    name: "Tables",
    icon: "CtaPawIcon",
    subItems: [{ name: "Basic Tables", path: "/basic-tables", pro: false }],
  },
  {
    name: "Pages",
    icon: "CtaPawIcon",
    subItems: [
      { name: "Blank Page", path: "/blank", pro: false },
      { name: "404 Error", path: "/error-404", pro: false },
    ],
  },
];

const othersItems: NavItem[] = [
  {
    icon: "CtaPawIcon",
    name: "Charts",
    subItems: [
      { name: "Line Chart", path: "/line-chart", pro: false },
      { name: "Bar Chart", path: "/bar-chart", pro: false },
    ],
  },
  {
    icon: "CtaPawIcon",
    name: "UI Elements",
    subItems: [
      { name: "Alerts", path: "/alerts", pro: false },
      { name: "Avatar", path: "/avatars", pro: false },
      { name: "Badge", path: "/badge", pro: false },
      { name: "Buttons", path: "/buttons", pro: false },
      { name: "Images", path: "/images", pro: false },
      { name: "Videos", path: "/videos", pro: false },
    ],
  },
  {
    icon: "CtaPawIcon",
    name: "Authentication",
    subItems: [
      { name: "Sign In", path: "/signin", pro: false },
      { name: "Sign Up", path: "/signup", pro: false },
    ],
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const renderMenuItems = (navItems: NavItem[], menuType: "main" | "others") => (
  <ul className="menu-list">
    {navItems.map((nav, index) => (
      <li key={nav.name}>
        {nav.subItems ? (
          <button
            onClick={() => handleSubmenuToggle(index, menuType)}
            className={`menu-item group cursor-pointer ${
              openSubmenu?.type === menuType && openSubmenu?.index === index
                ? "menu-item-active"
                : "menu-item-inactive"
            } ${!isExpanded && !isHovered ? "lg:justify-center" : "lg:justify-start"}`}
          >
            <span
              className={`${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-icon-active"
                  : "menu-item-icon-inactive"
              }`}
            >
              {nav.icon}
            </span>
            {(isExpanded || isHovered || isMobileOpen) && (
              <span className="menu-item-text">{nav.name}</span>
            )}
            {(isExpanded || isHovered || isMobileOpen) && (
              <ChevronDownIcon
                className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "rotate-180 text-brand-500"
                    : ""
                }`}
              />
            )}
          </button>
        ) : (
          nav.path && (
            <Link
              href={nav.path}
              className={`menu-item group ${
                isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
              }`}
            >
              <span
                className={`${
                  isActive(nav.path)
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                }`}
              >
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className="menu-item-text">{nav.name}</span>
              )}
            </Link>
          )
        )}
        {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
          <div
            ref={(el) => {
              subMenuRefs.current[`${menuType}-${index}`] = el;
            }}
            className="overflow-hidden transition-all duration-300"
            style={{
              height: openSubmenu?.type === menuType && openSubmenu?.index === index
                ? `${subMenuHeight[`${menuType}-${index}`]}px`
                : "0px",
            }}
          >
            <ul className="mt-2 space-y-1 ml-9">
              {nav.subItems.map((subItem) => (
                <li key={subItem.name}>
                  <Link
                    href={subItem.path}
                    className={`menu-dropdown-item ${
                      isActive(subItem.path)
                        ? "menu-dropdown-item-active"
                        : "menu-dropdown-item-inactive"
                    }`}
                  >
                    {subItem.name}
                    <span className="flex items-center gap-1 ml-auto">
                      {subItem.new && (
                        <span
                          className={`${
                            isActive(subItem.path)
                              ? "menu-dropdown-badge-active"
                              : "menu-dropdown-badge-inactive"
                          } menu-dropdown-badge`}
                        >
                          new
                        </span>
                      )}
                      {subItem.pro && (
                        <span
                          className={`${
                            isActive(subItem.path)
                              ? "menu-dropdown-badge-active"
                              : "menu-dropdown-badge-inactive"
                          } menu-dropdown-badge`}
                        >
                          pro
                        </span>
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    ))}
  </ul>
);


  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Check if the current path is active (consider `/` as `/Dashboard` by default)
const isActive = useCallback((path: string) => {
  if (path === "/") {
    return pathname === "/Dashboard" || pathname === "/";
  }

  // Check if the current path matches the given path
  if (path === pathname) {
    return true;
  }

  // If there are sub-items, check if any of them match the current path
  return navItems.some(nav =>
    nav.subItems?.some(subItem => subItem.path === pathname)
  );
}, [pathname]);


  useEffect(() => {
    let submenuMatched = false;

    // Set default active state for the Dashboard (if at root)
    if (pathname === "/" || pathname === "/Dashboard") {
      setOpenSubmenu({
        type: "main",
        index: 0, // Dashboard is the first item in the `navItems` array
      });
      submenuMatched = true;
    }

    // Check if any submenu item matches the current path
    ["main", "others"].forEach((menuType) => {
      const items = menuType === "main" ? navItems : othersItems;
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({
                type: menuType as "main" | "others",
                index,
              });
              submenuMatched = true;
            }
          });
        }
      });
    });

    // If no submenu item matches, close the open submenu
    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [pathname, isActive]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[364px]"
            : isHovered
            ? "w-[364px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-[30px] flex  ${
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
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>{renderMenuItems(navItems, "main")}</div>
            <div>{renderMenuItems(othersItems, "others")}</div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
