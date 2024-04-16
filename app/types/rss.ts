
export interface RssFeed {
    id: number,
    title: string,
    url: string,
    description: string,
}

export interface RssFeedItem {
    id: number,
    feedId: number,
    title: string,
    description: string,
    link: string,
    pubDate?: string,
}
