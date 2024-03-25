import FeedsContainerItem from "./FeedsContainerItem";

export default function FeedsContainer() {
    return (
        <div className="w-full bg-gray-600 flex flex-col justify-center">
            <div className="m-auto h-16 flex flex-col justify-center">
                <div className="text-2xl text-white text-center">
                    RSS Feeds
                </div>
            </div>
            <div className="flex flex-col overflow-hidden">
                <FeedsContainerItem content="This is feed-1"/>
                <FeedsContainerItem content="This is feed-2"/>
                <FeedsContainerItem content="This is feed-3"/>
                <FeedsContainerItem content="This is feed-4"/>
                <FeedsContainerItem content="This is feed-5"/>
            </div>
        </div>
    )
    
}