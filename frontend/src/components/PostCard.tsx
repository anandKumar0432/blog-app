import { AppBar } from "./AppBar";
import { Circle } from "./Circle";

interface PostInput{
    title: string | undefined;
    content: string | undefined;
    published: string | undefined;
    name:string | undefined;
    about?: string | undefined;
}

export const PostCard = ({title,content,published,name,about} : PostInput)=>{
    return <div>
        <div>
            <AppBar submit="New"/>
        </div>
        <div className="grid grid-cols-12 px-5 md:px-24  md:w-full justify-between pt-2 border-b border-slate-300 pb-8">
            <div className="pr-10 col-span-12 md:col-span-8">
                <div className="font-bold text-5xl pb-3">
                    {title}
                </div>
                <div className="text-slate-500 pb-2">
                    Posted on {published}
                </div>
                <div className="text-lg font-medium">
                    {content}
                </div>
            </div>
            <div className="col-end-1 md:col-span-4">
                    <div className=" pb-1 pt-2 text-slate-500 ">
                        Author
                    </div>
                <div className="flex ">
                    <div className="pt-4 pr-2">
                        <Circle size="big"/>
                    </div>
                    <div>
                        <div className="text-xl font-bold text-slate-950">
                            {name}
                        </div>
                        <div className="text-sm text-slate-500 font">
                            {about}
                        </div>
                    </div>
                </div>
        </div>
    </div>
    </div>
}