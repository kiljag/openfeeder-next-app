
interface FeedsContainerItemProps {
    content: string;
}

export default function FeedsContainerItem(props: FeedsContainerItemProps) {
    return (
        <div className="bg-gray-500 text-slate-200 text-lg min-h-10
        border-slate-900 border">
            <p className="pl-2 py-1 text-lg text-center">
                {props.content}
            </p>            
        </div>
    )
}