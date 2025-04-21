import { AppBar } from "../components/AppBar"
import { PostsCard } from "../components/PostsCard"
import { usePosts } from "../hooks"

export const Posts = ()=>{
    const {loading,posts} = usePosts();

    if(loading){
        return <div>
            loading...
        </div>
    }
    return (
        <div>
            <AppBar submit="new"/>
           {posts.map(post =>  <PostsCard
             id = {post.id}
             title={post.title}
             authorName={post.author.name || "anand"} 
             content={post.content} 
             publishDate="Apr19, 2025"
             /> 
          )}
        </div>
    )
}