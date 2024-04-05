import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store";
import { RssFeed, RssFeedItem } from "../types/rss";

type FeedStatus = "idle" | "loading" | "succeeded" | "failed"

interface FeedState {
    feeds: RssFeed[],
    feedSelected: RssFeed | null,
    feedItemsMap: Record<number, RssFeedItem[]>,
    feedItemSelected: RssFeedItem | undefined,
    status: FeedStatus,
    error: string | null,
}

const initialState : FeedState = {
    feeds: [],
    feedSelected: null,
    feedItemsMap: {},
    feedItemSelected: undefined,
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

interface SetFeedItemSelectedPayload {
    feedId: number,
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
        setFeedSelected: (state, action: PayloadAction<RssFeed>) => {
            state.feedSelected = action.payload;
        },
        setFeedItems: (state, action: PayloadAction<SetFeedItemsPayload>) => {
            state.feedItemsMap[action.payload.feedId] = action.payload.feedItems;
        },
        setFeedItemSelected: (state, action: PayloadAction<RssFeedItem>) => {
            state.feedItemSelected = action.payload;
        }
    }
})

// export reducer action builders
export const {setFeeds, setFeedsStatus,
    setFeedSelected, setFeedItems, setFeedItemSelected} = feedSlice.actions

// export selectors
export const selectFeeds = (state : RootState) => state.feeds.feeds;
export const selectFeedSelected = (state : RootState) => state.feeds.feedSelected;
export const selectFeedItems = (state : RootState) => {
    if (state.feeds.feedSelected) return state.feeds.feedItemsMap[state.feeds.feedSelected.id];
    else return [];
}
export const selectFeedStatus = (state : RootState) => state.feeds.status;
export const selectFeedItemSelected = (state: RootState) => state.feeds.feedItemSelected;

// export feeds reducer
export default feedSlice.reducer