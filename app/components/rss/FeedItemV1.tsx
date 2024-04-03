'use client'

interface FeedItemV1Props {
    feedId: number,
    content: string,
    onclick: (feedId: number) => void,
}

export default function FeedsContainerItem(props: FeedItemV1Props) {
    return (
        <div className="w-full hover:bg-stone-500 text-slate-200 
        text-lg min-h-10 border-b border-b-slate-100"
        onClick={(e) => props.onclick(props.feedId)}>
            <p className="pl-2 py-1 text-lg">
                {props.content}
            </p>            
        </div>
    )
}