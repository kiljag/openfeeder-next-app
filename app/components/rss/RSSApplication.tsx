import SideBar from "../sidebar/SideBar";
import ContentContainer from "./ContentContainer";
import FeedItemsContainer from "./FeedItemsContainer";
import FeedsContainer from "./FeedsContainer";

export default function RSSApplication() {
    return (
        <div className="flex flex-1 flex-row relative bg-slate-400 min-h-16">
            <div className="flex flex-col flex-shrink-0 h-full w-min-[50px] bg-slate-700">
                <SideBar />
            </div>
            <div className="flex flex-col w-[325px] w-min-[220px] h-full bg-gray-600 border-1px ">
                <FeedsContainer />
            </div>
            <div className="flex flex-col w-[300px] bg-gray-500">
                <FeedItemsContainer />
            </div>
            <div className="flex flex-row flex-1 w-full h-full">
                <ContentContainer />
            </div>
      </div>
    )
}