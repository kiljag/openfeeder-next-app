'use client'

interface FeedItemV2Props {
    id: number,
    title: string,
    onclick: (id: number) => void;
}

export default function FeedItemV2(props: FeedItemV2Props) {
    return (
        <div className="w-full text-slate-200 text-lg min-h-20 
        border-b border-slate-100"
        onClick={e => props.onclick(props.id)}>
            <p className="pl-2 py-1 text-base">
                {props.title}
            </p>
        </div>
    )
}