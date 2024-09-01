"use client";
import "../../styles/sidebar.css";
import Link from "next/link";
import { BiHomeHeart, BiBarChartAlt2 } from "react-icons/bi";
import { PiUsersThreeFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import classNames from "classnames";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import LocoIcon from "@/assets/SmileFlowLogo.svg";
import { usePathname, } from "next/navigation";
import { getCookie } from "../../utils/utils";
import { AccessEnum } from "../enums/AccessEnums";
import { LuCalendarHeart } from "react-icons/lu";
import { FaPeopleGroup } from "react-icons/fa6";
const user = decodeURIComponent(getCookie("user"));
const userObj = JSON.parse(user);

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const menu = [
  { key: 1, id: 1, label: "General", icon: BiHomeHeart, link: "/ShinyDesk/General", class: true, roles: AccessEnum.FullAccess },
  { key: 2, id: 2, label: "Calendario", icon: LuCalendarHeart, link: "/ShinyDesk/calendar", class: true, roles: AccessEnum.FullAccess },
  { key: 3, id: 3, label: "Pacientes", icon: FaPeopleGroup, link: "/ShinyDesk/patients", class: true, roles: AccessEnum.DentistAccess },
  { key: 4, id: 4, label: "Balance", icon: BiBarChartAlt2, link: "/ShinyDesk/balance", class: true, roles: AccessEnum.FullAccess },
  { key: 5, id: 5, label: "Ajustes", icon: IoMdSettings, link: "/ShinyDesk/settings", class: true, roles: AccessEnum.FullAccess },
  { key: 6, id: 6, label: "Cuenta", icon: VscAccount, link: "/ShinyDesk/profile", class: false, roles: AccessEnum.FullAccess }
];


export const menuItems = userObj && userObj.role
  ? menu.filter(item => item.roles.includes(userObj.role))
  : [];
function Sidebar2() {
  const [toggleCollapse, setToggleCollapse] = useState(true);
  const [isCollapsible, setIsCollapsible] = useState(false);



  const pathnamet = usePathname()
  const splited = '/' + pathnamet.split("/")[1] + '/' + pathnamet.split("/")[2];
  const activeMenu = useMemo(() => menuItems.find(menu => menu.link === splited),
    [splited]);


  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["item"]: activeMenu.id === menu.id,
      }
    );
  };


  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 flex justify-between flex-col nav",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );



  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };



  return (
    <TooltipProvider>
      <div
        className={wrapperClasses}
        onMouseEnter={onMouseOver}
        onMouseLeave={onMouseOver}
        style={{ transition: "width 300ms cubic-bezier(0.2,0,0,1)0s" }}>
        <div className="flex flex-col">
          <div className="flex items-center justify-between relative">
            <div className="flex items-center pl-1 gap-4">

              <Image alt="LogoOdontologia" onClick={handleSidebarToggle} src={LocoIcon} width={70} height={70}></Image>
              <h3
                className={classNames(`text-2xl font-medium text-text tittlespan`, {
                  hidden: toggleCollapse,
                })}
              >
                SmileFlow
              </h3>
            </div>
          </div>


          <div className="flex flex-col items-start mt-12">
            {menuItems.map(({ icon: Icon, ...menu }) => {
              const classes = getNavItemClasses(menu);
              return (
                <Tooltip key={menu.key} className="text-principalBlue" placement="right" isDisabled={!toggleCollapse} content={menu.label}>
                  <div className={`${classes} ${menu.class ? 'block' : 'hidden'}`} key={menu.key}>
                    <TooltipTrigger>
                      <Link href={menu.link}>
                        <div className="flex py-4 px-3 items-center w-full h-full">
                          <div style={{ width: "2.5rem" }}>
                            <Icon className="icon-menu" />
                          </div>
                          {!toggleCollapse && (
                            <span
                              className={classNames(
                                "text-md font-medium text-text-light text-lg"
                              )}
                            >
                              {menu.label}
                            </span>
                          )}
                        </div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Add to library</p>
                    </TooltipContent>
                  </div>
                </Tooltip>
              )

            })}
          </div>

        </div>
        <div></div>
      </div>

    </TooltipProvider>
  );
}

export default Sidebar2;
