'use client'

import FeedItemV2 from "./FeedItemV2";
import { selectFeedItems, selectFeedSelected } from "@/app/redux/feedsSlice";
import { useAppSelector } from "@/app/redux/hooks";

export default function FeedItemsContainer() {

    const feed = useAppSelector(selectFeedSelected);
    const feedItems = useAppSelector(selectFeedItems);

    return (
        <div className="w-full flex flex-col justify-center">
            <div className="h-12 min-h-12 flex flex-row items-center border-b border-slate-100">
                <h3 className="text-base font-bold text-white ml-4">
                    {feed ? feed.title : "Rss Feeds"}
                </h3>
            </div>
            <div>
                { feedItems && feedItems.map(item => 
                    <FeedItemV2 key={item.id} content={item.title}/>
                )}
            </div>
        </div>
    )
}