import axios from "axios";
import { RssFeed, RssFeedItem } from "../types/rss";
import { store } from "../redux/store";
import { setFeeds, setFeedItems, setFeedsStatus } from "../redux/feedsSlice";

export function fetchFeeds() {

    store.dispatch(setFeedsStatus('loading'));
    let url = process.env.NEXT_PUBLIC_API_SERVER + "/feeds"
    axios.get<any[]>(url).then(res => {
        let feeds: RssFeed[] = []
        for (let i = 0; i < res.data.length; i++) {
            feeds.push({
                id: res.data[i]['Id'],
                title: res.data[i]['Title'],
                url: res.data[i]['Url'],
                description: res.data[i]['Description']
            })
        }
        store.dispatch(setFeeds({
            feeds: feeds,
            status: 'succeeded',
        }))
    }).catch(err => {
        console.error(err)
        store.dispatch(setFeeds({
            feeds: [],
            status: 'failed',
            error: err
        }))
    })
}

export function fetchFeedItems(feedId: number) {
    let url = process.env.NEXT_PUBLIC_API_SERVER + `/feeds/${feedId}`
    axios.get<any[]>(url).then(res => {
        let feedItems: RssFeedItem[] = []
        console.log("feedItems response : ", res.data);
        for (let i = 0; i < res.data.length; i++) {
            feedItems.push({
                id: res.data[i]['Id'],
                feedId: feedId,
                title: res.data[i]['Title'],
                link: res.data[i]['Link'],
                description: res.data[i]['Description']
            })
        }
        store.dispatch(setFeedItems({
            feedId: feedId,
            feedItems: feedItems,
        }))
    }).catch(err => {
        console.error(err);
        store.dispatch(setFeedItems({
            feedId: feedId,
            feedItems: [],
        }))
    })
}
