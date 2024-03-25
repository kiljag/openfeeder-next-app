import React from "react"
import { FaHome } from "react-icons/fa";
import { FaRss } from "react-icons/fa";
import SideBarIcon from "./SideBarIcon";
import SideBarDivider from "./SideBarDivider";


export default function SideBar() {
    return (
        <div className="w-16 flex flex-col shadow-lg">
            <div className="fixed top-0 left-0 bg-slate-700 w-16">
                <SideBarIcon icon={<FaHome size="28" />} tooltip="Home"/>
                <SideBarDivider />
                <SideBarIcon icon={<FaRss size="32" />} tooltip="RSS" />
            </div>            
        </div>
    )
}