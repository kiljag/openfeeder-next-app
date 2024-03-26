import FeedItem from "./FeedItem";


export default function FeedItemsContainer() {
    return (
        <div className="w-full flex flex-col justify-center">
            <div className="h-12 min-h-12 flex flex-row items-center border-b border-slate-100">
                <h3 className="text-base font-bold text-white ml-4">
                    RBI Feed
                </h3>
            </div>
            <div>
                <FeedItem content="RBI Feed item 1"/>
                <FeedItem content="RBI Feed item 2"/>
                <FeedItem content="RBI Feed item 3"/>
                <FeedItem content="RBI Feed item 4"/>
            </div>
        </div>
    )
}