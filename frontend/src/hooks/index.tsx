import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Post{
    title: string;
    content:string;
    author: {
        name: string;
    }
    id:string;
}

export const usePosts = ()=>{
    const [loading,setLoading] = useState(true);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/post/bulk`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
            })
            .then(res =>{
                 setPosts(res.data.allPost); 
                setLoading(false);
            })
    },[])

    return {
        loading,
        posts
    }
}

export const usePost = ({id} : {id: string})=>{
    const [loading,setLoading] = useState(true);
    const [post , setPost] = useState<Post>();

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/post/${id}`,{
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(res => {
                setPost(res.data.post);
                setLoading(false);
            })
    })

    return {
        loading,
        post
    }
}