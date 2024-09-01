"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { menuItems as items } from "./Sidebar2";
import "../../styles/sidebar.css";
import Link from "next/link";
import classNames from "classnames";
import React, { useState, useMemo } from "react";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa6";

function ResponsiveMenu({}) {
  const menuItems = items

  const pathnamet = usePathname();
  const splited = "/" + pathnamet.split("/")[1] + "/" + pathnamet.split("/")[2];
  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === splited),
    [splited]
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["item"]: activeMenu.id === menu.id,
      }
    );
  };

  return (
    <Sheet>
      <SheetTrigger className="ResponsiveSidebar items-center">
        <FaBars />
      </SheetTrigger>
      <SheetContent side="right" className="min-w-[100%]">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div>
          {menuItems.map((menu) => (
            <Link href={menu.link} key={menu.id}>
              <div className={getNavItemClasses(menu)}>
                <div className="flex items-center justify-center w-16 h-16 text-2xl text-light">
                  <menu.icon />
                </div>
                <div className="flex-grow text-light text-lg font-medium px-4">
                  {menu.label}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default ResponsiveMenu;
