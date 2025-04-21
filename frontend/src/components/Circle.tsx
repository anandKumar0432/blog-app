
export const Circle = ({size} : {size: "small" | "big"})=>{
    return <div className={`${size === "small"? "w-1 h-1":"w-5 h-5" } rounded-full bg-slate-300 `}>
        
    </div>
}