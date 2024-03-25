
interface ContentItemProps {
    content: string
}

export default function ContentItem(props: ContentItemProps) {
    return (
        <div className="flex flex-col">
            <div className="text-center text-xl">
                {props.content}
            </div>
        </div>
    )
}