"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import "../../styles/NavBar.css";
import React, { useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import ResponsiveMenu from "./ResponsiveMenu";
import { menuItems } from "./Sidebar2";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { getCookie } from "../../utils/utils";

const NavItems = menuItems;

function NavBar() {
  const router = useRouter();
  
  const pathnamet = usePathname();
  const splited = "/" + pathnamet.split("/")[1] + "/" + pathnamet.split("/")[2];
  const activeMenu = useMemo(
    () => NavItems.find((nav) => nav.link === splited),
    [splited]
  );

  const getIcon = () => {
    if (activeMenu) {
      return activeMenu.icon;
    }
    return null;
  };

  const logout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  const user = decodeURIComponent(getCookie("user"));
  const userObj = JSON.parse(user);

  return (
    <nav className="topnav justify-end sm:flex justify-between p-3">
      <div className="hidden sm:flex justify-between w-70 px-10 items-center gap-10 ">
        {getIcon() && (
          <span className="itemNav">
            {React.createElement(getIcon(), { size: 52 })}
          </span>
        )}
 {activeMenu && <h1 className="text-2xl font-medium">{activeMenu.label}</h1>}
      </div>
      <div className="flex gap-10 justify-end">


        <div className="flex gap-8 sm:justify-end">



 <div className="flex items-center gap-4">
 <p>{userObj && userObj.name}</p>
  <DropdownMenu className="flex items-center">
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><button
                className="w-full text-start"
                onClick={() => {
                  router.push("/ShinyDesk/profile");
                }}
              >Perfil</button></DropdownMenuItem>
              <DropdownMenuItem>Pagos</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  className="w-full text-start"
                  onClick={() => {
                    logout();
                    router.push("/auth/login");
                  }}
                >
                  Cerrar Session
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
 </div>
          <ResponsiveMenu></ResponsiveMenu>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
