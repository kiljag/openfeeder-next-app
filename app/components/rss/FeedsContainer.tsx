import FeedsContainerItem from "./FeedsContainerItem";

export default function FeedsContainer() {
    return (
        <div className="w-full flex flex-col justify-center">
            <div className="h-12 min-h-12 flex flex-row items-center border-b border-slate-100">
                <h3 className="text-xl font-bold text-white ml-4">
                    RSS Feeds
                </h3>
            </div>
            <div className="h-full">
                <div className="flex flex-col w-full">
                    <FeedsContainerItem content="This is feed-1"/>
                    <FeedsContainerItem content="This is feed-2"/>
                    <FeedsContainerItem content="This is feed-3"/>
                    <FeedsContainerItem content="This is feed-4"/>
                    <FeedsContainerItem content="This is feed-5"/>
                </div>
            </div>
        </div>
    )
    
}