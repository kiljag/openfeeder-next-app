'use client'

import { useEffect, useState } from "react";
import FeedItemV1 from "./FeedItemV1";
import { fetchFeeds, fetchFeedItems, postAddFeed } from "@/app/lib/rss";
import { useSelector } from "react-redux";
import { selectFeeds, selectFeedStatus, setFeedSelected } from "@/app/redux/feedsSlice";
import { useAppDispatch } from "@/app/redux/hooks";

export default function FeedsContainerV1() {

    const feeds = useSelector(selectFeeds)
    const status = useSelector(selectFeedStatus)
    const dispatch = useAppDispatch()
    const [addButtonActive, setAddButtonActive] = useState<boolean>(false);
    const [rssUrl, setRssUrl] = useState<string>("")

    useEffect(() => {
        setAddButtonActive(false);
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

    const handleAddFeed = () => {
        console.log("adding feed : ", rssUrl)
        postAddFeed(rssUrl);
        setRssUrl("")
    }

    const handleClose = () => {
        setAddButtonActive(false)
        setRssUrl("")
    }

    return (
        <>
            <div className="w-full h-full flex flex-col justify-center">
                <div className="h-16 min-h-16 flex flex-row items-center border-b border-slate-100">
                    <h3 className="text-xl font-bold text-white ml-4">
                        RSS Feeds
                    </h3>
                    <div className="ml-auto mr-10 p-1 border-slate-200 border rounded">
                        <button className="text-white font-bold px-4"
                            onClick={(e) => setAddButtonActive(true)}>
                            + Add
                        </button>
                    </div>
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
            {addButtonActive ?
                (<div className="absolute flex h-full w-full items-center justify-center z-10">
                    <div className="flex flex-col items-center m-auto w-8/12 min-h-40 bg-stone-900
                     hover:bg-stone-800 border border-slate-100 rounded-md">
                        <input className="text-slate-200 bg-stone-600 text-lg min-h-12 w-11/12 rounded-md mt-4 cursor-auto"
                            value={rssUrl} placeholder="Input rss url here.." onChange={e => setRssUrl(e.target.value)} />
                        <div className="flex flex-row gap-4 items-center justify-center mt-4">
                            <button className="text-white px-4 py-2 text-lg font-bold border border-slate-200 rounded"
                                onClick={e => handleAddFeed()}>
                                ADD
                            </button>
                            <button className="text-white px-4 py-2 text-lg font-bold border border-slate-200 rounded"
                                onClick={e => handleClose()}>
                                CLOSE
                            </button>
                        </div>
                    </div>
                </div>)
                : null}
        </>
    )
}

