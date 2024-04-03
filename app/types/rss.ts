
export interface RssFeed {
    id: number,
    title: string,
    url: string,
    description: string | null,
}

export interface RssFeedItem {
    id: number,
    feedId: number,
    title: string,
    description: string | null,
    link: string,
    pubDate?: string,
}
