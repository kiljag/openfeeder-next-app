import TopNavigation from "../topnav/TopNavigation";
import ContentItem from "./ContentItem";

export default function ContentContainer() {
    return (
        <div className="w-full bg-gray-700 flex flex-col">
            <TopNavigation />
            <ContentItem content="This is Content Item 1"/>
            <ContentItem content="This is Content Item 2"/>
        </div>
    )
}