
interface FeedsContainerItemProps {
    content: string;
}

export default function FeedsContainerItem(props: FeedsContainerItemProps) {
    return (
        <div className="w-full hover:bg-stone-500 text-slate-200 text-lg min-h-10">
            <p className="pl-2 py-1 text-lg">
                {props.content}
            </p>            
        </div>
    )
}