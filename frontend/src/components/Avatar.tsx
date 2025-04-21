export const Avatar = ({name,size}:{name:string; size: "small" | "big" })=>{
    return <div>
        <div className={`${size == "small"? "w-6 h-6":"w-10 h-10"} relative inline-flex items-center justify-center  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 `} >
        <span className={`font-medium text-gray-600 dark:text-gray-300 ${size === "small" ? "text-xs" : "text-md"}`}>{name[0].toUpperCase()}</span>
        </div>
    </div>
}