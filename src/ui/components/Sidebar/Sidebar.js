import React from "react";
import { NavLink } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import { useState } from "react";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import Logo from "../../../assets/Logo.png"
import ResizedLogo from "../../../assets/ResizedLogo.png"


function Sidebar() {
  

  return (
    <nav
      className={'flex flex-row justify-betwee w-screen p-6 fixed top-0 bg-grayLight shadow-md z-10'}
    >
     {/*  <button
        className={`rounded-full size-7 items-center absolute top-2  ${
          isSidebarOpen
            ? "right-3 hover:bg-gray-300 bg-darkGrey text-darkBlue"
            : "right-2 hover:bg-blue-950 bg-darkBlue text-darkGrey"
        }`}
        onClick={onClickHandler}
      >
        {isSidebarOpen ? (
          <ChevronDoubleLeftIcon className="size-6" />
        ) : (
          <ChevronDoubleRightIcon className="size-6" />
        )}
      </button>
      {isSidebarOpen && (
        <img src={Logo} alt="logo" className="flex p-5"/>
      )} */}
     <img src={Logo} alt="logo" className="flex w-16 h-6"/>
     <ul
        className={`place-content-center flex flex-row  font-bold text-xs text-darkBlue justify-end ml-auto`}
      >
        {SideBarData.map((val, key) => {
          return (
            <li key={key}>
              <NavLink
                to={val.link}
                className={({ isActive }) => {

                  if(isActive ) {
                    return "text-primaryGreen"
                  }

                  else if(!isActive) {
                    return "hover:text-green-700"
                  }
                 
                } 
                }
              >
                
                  <span className="inline-block h-4 justify-center   mx-5 ">
                    {val.title}
                  </span>
                
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Sidebar;