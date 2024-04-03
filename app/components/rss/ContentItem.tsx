'use client'

interface ContentItemProps {
    content: string
}

export default function ContentItem(props: ContentItemProps) {
    return (
        <div className="flex flex-col min-h-36 justify-center shadow-lg">
            <div className="text-center text-white text-xl">
                {props.content}
            </div>
        </div>
    )
}