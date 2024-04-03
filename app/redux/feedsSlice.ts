import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store";
import { RssFeed, RssFeedItem } from "../types/rss";

type FeedStatus = "idle" | "loading" | "succeeded" | "failed"

interface FeedState {
    feeds: RssFeed[],
    feedIdSelected: number,
    feedItemsMap: Record<number, RssFeedItem[]>,
    status: FeedStatus,
    error: string | null,
}

const initialState : FeedState = {
    feeds: [],
    feedIdSelected: -1,
    feedItemsMap: {},
    status: "idle",
    error: null,
}

interface SetFeedsPayload {
    feeds: RssFeed[],
    status: FeedStatus,
    error?: string,
}

interface SetFeedItemsPayload {
    feedId: number,
    feedItems: RssFeedItem[],
}

export const feedSlice = createSlice({
    name: "feeds",
    initialState, 
    reducers: {
        setFeeds: (state, action: PayloadAction<SetFeedsPayload>) => {
            state.feeds = action.payload.feeds;
            state.status = action.payload.status;
            if (action.payload.error) {
                state.error = action.payload.error;
            }
        },
        setFeedsStatus: (state, action: PayloadAction<FeedStatus>) => {
            state.status = action.payload;
        },
        setFeedSelected: (state, action: PayloadAction<number>) => {
            state.feedIdSelected = action.payload;
        },
        setFeedItems: (state, action: PayloadAction<SetFeedItemsPayload>) => {
            state.feedItemsMap[action.payload.feedId] = action.payload.feedItems;
        }
    }
})

// export reducer action builders
export const {setFeeds, setFeedsStatus, setFeedSelected, setFeedItems} = feedSlice.actions

// export selectors
export const selectFeeds = (state : RootState) => state.feeds.feeds;
export const selectFeedIdSelected = (state : RootState) => state.feeds.feedIdSelected;
export const selectFeedSelected = (state : RootState) => {
    return state.feeds.feeds.find(feed => feed.id == state.feeds.feedIdSelected)
} 
export const selectFeedItems = (state : RootState) => state.feeds.feedItemsMap[state.feeds.feedIdSelected];
export const selectFeedStatus = (state : RootState) => state.feeds.status;

// export feeds reducer
export default feedSlice.reducer