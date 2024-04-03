'use client'

import SideBar from "../sidebar/SideBar";
import ContentContainer from "./ContentContainer";
import FeedItemsContainer from "./FeedsContainerV2";
import FeedsContainerV1 from "./FeedsContainerV1";

export default function RSSApplication() {
    return (
        <div className="flex flex-1 flex-row relative bg-stone-900 min-h-16">
            <div className="flex flex-col flex-shrink-0 h-full w-min-[48px] bg-stone-600 
            box-border border-r-1 border-r-slate-100">
                <SideBar />
            </div>
            <div className="flex flex-col w-[325px] w-min-[220px] h-full bg-stone-700 
            box-border border-r border-r-slate-100">
                <FeedsContainerV1 />
            </div>
            <div className="flex flex-col w-[325px] w-min-[220px] h-full bg-stone-800
            box-border border-r border-r-slate-100">
                <FeedItemsContainer />
            </div>
            <div className="flex flex-row flex-1 w-full h-full bg-stone-800">
                <ContentContainer />
            </div>
      </div>
    )
}