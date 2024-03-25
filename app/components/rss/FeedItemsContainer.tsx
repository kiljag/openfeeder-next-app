import FeedItem from "./FeedItem";


export default function FeedItemsContainer() {
    return (
        <div className="w-full bg-gray-500 flex flex-col justify-center">
            <div className="m-atuo h-16">
                <div className="text-white text-center">
                    RBI Feed
                </div>
            </div>
            <FeedItem content="RBI Feed item 1"/>
            <FeedItem content="RBI Feed item 2"/>
            <FeedItem content="RBI Feed item 3"/>
            <FeedItem content="RBI Feed item 4"/>
        </div>
    )
}