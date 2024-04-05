'use client'

import { useEffect } from "react";
import FeedItemV1 from "./FeedItemV1";
import { fetchFeeds, fetchFeedItems } from "@/app/lib/rss";
import { useSelector } from "react-redux";
import { selectFeeds, selectFeedStatus, setFeedSelected } from "@/app/redux/feedsSlice";
import { useAppDispatch } from "@/app/redux/hooks";

export default function FeedsContainerV1() {

    const feeds = useSelector(selectFeeds)
    const status = useSelector(selectFeedStatus)
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        if (status == 'idle') {
            fetchFeeds();
        }
    }, [status])
    
    const handleFeedClick = (feedId: number) => {
        console.log("feed selected : ", feedId);
        let feed = feeds.find(t => t.id == feedId);
        if (feed) {
            dispatch(setFeedSelected(feed));
        }
        fetchFeedItems(feedId);
    }
    
    return (
        <div className="w-full h-full flex flex-col justify-center">
            <div className="h-12 min-h-12 flex flex-row items-center border-b border-slate-100">
                <h3 className="text-xl font-bold text-white ml-4">
                    RSS Feeds
                </h3>
            </div>
            <div className="h-full overflow-y-auto ">
                {feeds.map(feed => 
                    <FeedItemV1 key={feed.id} 
                        feedId={feed.id}
                        content={feed.title}
                        onclick={handleFeedClick}
                    />
                )}
            </div>
        </div>
    )
}

