'use client'

interface FeedItemV2Props {
    content: string,
}

export default function FeedItemV2(props: FeedItemV2Props) {
    return (
        <div className="w-full text-slate-200 text-lg min-h-20 border-b border-slate-100">
            <p className="pl-2 py-1 text-base">
                {props.content}
            </p>
        </div>
    )
}