import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"
import { Circle} from "./Circle"

interface PostsCardInput{
    authorName: string,
    publishDate: string,
    title: string,
    content: string,
    id: string,
}

export const PostsCard = ({authorName,publishDate,title,content,id} : PostsCardInput)=>{
    return <Link to={`/post/${id}`}>
        <div className="flex justify-center items-center mb-2">
            <div className="pl-2 pt-2  w-xl border-b border-gray-300 pb-2 cursor-pointer">
                <div className="flex ">
                    <div className="">
                        <Avatar name={authorName} size="small"/>
                    </div>
                    <div className="pl-2 font-semibold">
                        {authorName}
                    </div>
                    
                    <div className="flex justify-center flex-cols pt-3 pl-2">
                        <Circle size="small"/>
                    </div>
                    <div className=" text-gray-600 pl-1">
                        {publishDate}
                    </div>
                </div>
                <div className="pt-2 font-bold text-3xl">
                    {title}
                </div>
                <div className="pt-2 font-semibold text-md text-slate-600">
                    {content.slice(0,100) + "..."}
                </div>
                <div className="text-gray-500 pt-3 text-xs">
                    {`${Math.ceil(content.length / 100)} min(s) read`}
                </div>
            </div>
        </div>
    </Link>
}