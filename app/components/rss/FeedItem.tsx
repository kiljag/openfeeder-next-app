
interface FeedItemProps {
    content: string,
}

export default function FeedItem(props: FeedItemProps) {
    return (
        <div className="w-full bg-gray-400 text-slate-200 text-lg min-h-20 border-slate-800 border">
            <p className="pl-2 py-1 text-base">
                {props.content}
            </p>
        </div>
    )
}