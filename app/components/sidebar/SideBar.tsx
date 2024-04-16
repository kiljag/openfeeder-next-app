import React from "react"
import { FaHome } from "react-icons/fa";
import { FaRss } from "react-icons/fa";
import SideBarIcon from "./SideBarIcon";
import SideBarDivider from "./SideBarDivider";


export default function SideBar() {
    return (
        <div className="w-[48px] flex flex-col">
            <div className="fixed top-0 left-0 w-[48px] bg-stone-600">
                <SideBarIcon icon={<FaHome size="28" color="white" />} tooltip="Home"/>
                <SideBarDivider />
                <SideBarIcon icon={<FaRss size="28" color="white" />} tooltip="RSS" />
            </div>            
        </div>
    )
}