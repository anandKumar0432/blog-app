
import { Input } from "./Input"
import { Button } from "./Button"
import { SignupInput } from "@anand188/medium-common"
import { useState } from "react"
import { Header } from "./Header";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";



export const SignupAuth = ({type} : {type: "signup"})=>{
    const navigate = useNavigate();
    const [postInput,setPostInput] = useState<SignupInput>({
        email:"",
        name:"",
        password:"",
    })

    async function sendRequest() {
        try{
            const response =await axios.post(`${BACKEND_URL}/api/v1/user/signup`,postInput)
            const { jwt } = response.data;
            if(!jwt){
                throw new Error("jwt not found");
            }
            localStorage.setItem("token",jwt);
            navigate("/posts");
        }catch(e){
            alert("error while signing up")
        }
    }
  
    return <div className="h-screen flex justify-center items-center">
        {/* {JSON.stringify(postInput)} */}
        <div className="w-80 border-1 shadow-amber-50 rounded-2xl">
            <div className="m-5">
            <Header headerText={"Create your account"} subHeaderText={"Already have an account? "} to={"/signin"} redirectText={"Sign in"}/>
                    <div>
                    <Input label="Username" placeholder="example@gmail.com" onChange={(e)=>{
                        setPostInput({
                            ...postInput,
                            email:e.target.value
                        })
                    }} />
                    </div>
                   {type === "signup"? <div>
                    <Input label="Name" placeholder="John Doe" onChange={(e)=>{
                        setPostInput({
                            ...postInput,
                            name:e.target.value
                        })
                    }} />
                    </div> : null}
                    <div>
                    <Input label="Password" type="password" placeholder="Password" onChange={(e)=>{
                        setPostInput({
                            ...postInput,
                            password:e.target.value
                        })
                    }} />
                    </div>
                    <div className="mt-5">
                        <Button onClick={ sendRequest } label={"Sign up"}/>
                    </div>
            </div>
        </div>
    </div>
}