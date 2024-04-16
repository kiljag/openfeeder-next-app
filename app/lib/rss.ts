import axios from "axios";
import { RssFeed, RssFeedItem } from "../types/rss";
import { store } from "../redux/store";
import { setFeeds, setFeedItems, setFeedsStatus, setFeedItemSelected, addNewFeed, removeFeed } from "../redux/feedsSlice";

export function fetchFeeds() {

    store.dispatch(setFeedsStatus('loading'));
    let url = process.env.NEXT_PUBLIC_API_SERVER + "/feeds"
    axios.get<any>(url).then(res => {
        console.log("/feeds response : ", res.data);
        let feeds: RssFeed[] = []
        let data : any[] = res.data['data']
        for (let i = 0; i < data.length; i++) {
            feeds.push({
                id: data[i]['id'],
                title: data[i]['title'],
                url: data[i]['url'],
                description: data[i]['description']
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
    let url = process.env.NEXT_PUBLIC_API_SERVER + `/feedItems/${feedId}`
    axios.get<any>(url).then(res => {
        console.log("/feedItems response : ", res.data);
        let data: any[] = res.data['data']
        let feedItems: RssFeedItem[] = []
        for (let i = 0; i < data.length; i++) {
            feedItems.push({
                id: data[i]['id'],
                feedId: feedId,
                title: data[i]['title'],
                link: data[i]['link'],
                description: data[i]['description']
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

export function fetchFeedItemContent(feedId: number, feedItemId: number) {
    let url = process.env.NEXT_PUBLIC_API_SERVER + `/feedItem/${feedId}/${feedItemId}`
    axios.get<any>(url).then(res => {
        console.log("/feedItem response : ", res.data);
        let data : any = res.data['data']
        let feedItem: RssFeedItem = {
            id: data['id'],
            feedId: feedId,
            title: data['title'],
            link: data['link'],
            description: data['description']
        }
        store.dispatch(setFeedItemSelected(feedItem))
    }).catch(err => {
        console.error(err);
    })
}

export function postAddFeed(feedUrl: string) {
    let url = process.env.NEXT_PUBLIC_API_SERVER + `/addFeed`
    let payload = {
        "url": feedUrl,
    }
    store.dispatch(setFeedsStatus('loading'));
    axios.post<any>(url, payload).then(res => {
        if (res.data['success']) {
            
            let feed: RssFeed = res.data["data"]["feed"];
            let items: RssFeedItem[] = res.data["data"]["items"];
            store.dispatch(addNewFeed({
                feed: feed,
                items: items,
            }))
        }
        console.log("/addFeed response : ", res.data);
    }).catch(err => {
        console.error(err);
    })
}


export function deleteRssFeed(feedId: number) {
    let url = process.env.NEXT_PUBLIC_API_SERVER + `/deleteFeed/${feedId}`
    let payload = {}
    axios.post<any>(url, payload).then(res => {
        if (res.data['success']) {
            store.dispatch(removeFeed(feedId))
        }
        console.log("/addFeed response : ", res.data);
    }).catch(err => {
        console.error(err);
    })
}
