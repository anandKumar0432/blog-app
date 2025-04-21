import { useParams } from "react-router-dom";
import { PostCard } from "../components/PostCard";
import { usePost } from "../hooks"



export const Post = ()=>{
    const { id } = useParams();
    const {loading, post} = usePost({
        id : id || ""
    });

    if(loading){
        return <div>
            loading...
        </div>
    }
    return <div>
        <PostCard 
        title={post?.title}
        published="April 20, 2023"
        content={post?.content}
        name={post?.author.name || "Anand"}
        about="Hii Im a software engineer" 
        />
    </div>
}