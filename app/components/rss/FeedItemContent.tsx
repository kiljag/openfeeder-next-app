'use client'

import { useAppSelector } from "@/app/redux/hooks";
import TopNavigation from "../topnav/TopNavigation";
import { selectFeedItemSelected } from "@/app/redux/feedsSlice";

export default function FeedItemContainer() {

    const feedItem = useAppSelector(selectFeedItemSelected);

    return (
        <div className="w-full flex flex-col">
            <TopNavigation />
            {feedItem &&
                <div className="flex flex-col overflow-y-auto mb-6 mt-4 items-center">
                    <div className="w-11/12 text-white text-xl my-4">
                        {feedItem.title}
                    </div>
                    {/* <div className="text-center w-11/12 text-slate-200 text-base">
                        {feedItem.description}
                    </div> */}
                    <div className="text-center w-11/12 text-slate-200 text-base"
                     dangerouslySetInnerHTML={{ 
                        __html: feedItem.description ? feedItem.description : "" 
                        }} />
                    <div className="">
                        <a href={feedItem.link} target="_blank" className="text-slate-400">
                            read more
                        </a>
                    </div>
                </div>
            } 
        </div>
    )
}