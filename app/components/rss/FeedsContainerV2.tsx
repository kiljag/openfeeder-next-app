'use client'

import { fetchFeedItemContent } from "@/app/lib/rss";
import FeedItemV2 from "./FeedItemV2";
import { selectFeedItems, selectFeedSelected } from "@/app/redux/feedsSlice";
import { useAppSelector } from "@/app/redux/hooks";

export default function FeedItemsContainer() {

    const feed = useAppSelector(selectFeedSelected);
    const feedItems = useAppSelector(selectFeedItems);

    function handleFeedItemClick(feedItemId: number) {
        console.log("feed item selected : ", feedItemId);
        if (feed) {
            fetchFeedItemContent(feed.id, feedItemId);
        }
    }

    return (
        <div className="w-full h-full flex flex-col justify-center">
            <div className="h-12 min-h-12 flex flex-row items-center border-b border-slate-100">
                <h3 className="text-base font-bold text-white ml-4">
                    {feed ? feed.title : "Rss Feeds"}
                </h3>
            </div>
            <div className="h-full overflow-y-auto mb-4">
                { feedItems && feedItems.map(item => 
                    <FeedItemV2 key={item.id} 
                        id={item.id} 
                        title={item.title} 
                        onclick={handleFeedItemClick}
                    />
                )}
            </div>
        </div>
    )
}