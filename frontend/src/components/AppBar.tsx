import {  useNavigate } from "react-router-dom"
import { Avatar } from "./Avatar"

export const AppBar = ({submit}: {submit: string})=>{
    const navigate = useNavigate();

    return <div className="flex justify-between px-2 md:px-8 lg:px-10 py-2 border-b-1 border-slate-300 text-slate-500 shadow-md bg-gray-100">
                <div className="flex justify-center flex-col font-bold text-slate-800">
                    Medium
                </div>
                <div className="flex ">
                    
                        <div className="pr-5">
                        <button onClick={()=>{
                            navigate("/publish")
                        }} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">{submit}</button>
                        </div>
                   
                    <div>
                        <Avatar name="Anand" size="big"/>
                    </div>
                </div>
            </div>
}