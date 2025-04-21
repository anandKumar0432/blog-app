import {  useState } from "react"
import { AppBar } from "../components/AppBar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = ()=>{
    const [title,setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const sendRequest = async ()=>{
        try{
            const res = await axios.post(`${BACKEND_URL}/api/v1/post/create`,{
                title: title,
                content: content,
            },{
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })

            // const postId = res.data?.id;
            // alert("post Id"+postId)
            // if(!postId){
            //     throw new Error("post id doesn't found")
            // }
            console.log(res.data);
            navigate(`/post/${res.data?.id}`);
        }catch(e){
            alert("something went wrong !")
        }
    }

    return <div className="max-w-full">
        <div>
        <AppBar submit="New post"/>
        </div>
            <div className="flex justify-center">
                <div className="w-2xl">
                    <div className="pt-3">
                        <textarea onChange={(e)=>{
                            setTitle(e.target.value);
                        }} rows={2} className="block pt-2 pb-2 w-full pl-1 pr-1 text-xl font-medium text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none " placeholder="Title..."></textarea>
                    </div>
                    <div className="pt-5">
                    <TextArea 
                    onChange={(e)=>{
                        setContent(e.target.value);
                    }}
                    onClick={sendRequest}
                    />
                    </div>
                </div>
            </div>
    </div>
}
interface TextAreaInput{
    onChange: (e:React.ChangeEvent<HTMLTextAreaElement>)=>void;
    onClick: ()=>void;
}

export const TextArea = ({onChange, onClick}: TextAreaInput)=>{
    return <div className="">
            <div>
                <div className="w-full border-gray-200 rounded-lg">
                    <div className=" bg-white rounded-t-lg ">
                        <textarea onChange={onChange} rows={16} className="w-full px-0 pl-1 pr-1 text-lg text-gray-900 bg-gray-50  border-1 border-slate-200 rounded-md focus:outline-none" placeholder="Write a blog....."></textarea>
                    </div>
                    <div className="pt-2 pl-1">
                        <button onClick={onClick} className="flex items-center py-2.5 px-4  text-md font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-2 focus:ring-blue-200 ">
                            Post Blog
                        </button>
                    </div>
                </div>
            </div>
    </div>
}