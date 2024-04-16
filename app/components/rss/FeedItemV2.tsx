'use client'

interface FeedItemV2Props {
    id: number,
    title: string,
    description: string,
    onclick: (id: number) => void;
}

export default function FeedItemV2(props: FeedItemV2Props) {
    let title = props.title
    if (title && title.length > 64) {
        title = title.substring(0, 62) + ".."
    }

    let description = props.description;
    if (description && description.length > 40) {
        description = description.substring(0, 60)
    }

    return (
        <div className="w-full min-h-20 
        border-b dark:border-slate-100 dark:hover:bg-stone-600"
        onClick={e => props.onclick(props.id)}>
            <p className="pl-2 py-1 text-small font-medium dark:text-slate-300 line-clamp-2">
                {props.title}
            </p>
        </div>
    )
}