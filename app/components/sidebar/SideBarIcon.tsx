
interface SideBarIconProps {
    icon: any,
    tooltip: string,
}

export default function SideBarIcon(props: SideBarIconProps) {
    return (
        <div className="relative flex items-center justify-center
        h-12 w-12 mt-2 mb-2 mx-auto
        bg-gray-400 hover:bg-green-600 dark:bg-gray-800
        text-green-500 hover:text-white hover:rounded-xl rounded-3xl 
        transition-all duration-300 ease-linear
        cursor-pointer shadow-lg group">
            {props.icon}
            <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md
            text-white bg-gray-900 text-xs font-bold transition-all duration-100
            origin-left scale-0 group-hover:scale-100">
                {props.tooltip}            
            </span>
        </div>
    )

}