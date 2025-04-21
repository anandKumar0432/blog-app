import { Input } from "./Input"
import { Button } from "./Button"
import { SigninInput} from "@anand188/medium-common"
import { useState } from "react"
import { Header } from "./Header";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";



export const SigninAuth = ({type} : {type: "signin"})=>{
    const navigate = useNavigate();
    const [postInput,setPostInput] = useState<SigninInput>({
        email:"",
        password:"",
    })

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInput);
            const {jwt} = response.data;
            
            if(!jwt){
                throw new Error("jwt not found");
            }

            localStorage.setItem("token",jwt);
            navigate("/posts")
        }catch(e){
            alert("error while signing in !");
        }
    }
  
    return <div className="h-screen flex justify-center items-center">
        {/* {JSON.stringify(postInput)} */}
        <div className="w-80 border-1 shadow-amber-50 rounded-2xl">
            <div className="m-5">
            <Header headerText={"Login to your account"} subHeaderText={"Don't have an account?"} to={"/signup"} redirectText={"sign up"}/ >
                    <div>
                    <Input label="Username" placeholder="example@gmail.com" onChange={(e)=>{
                        setPostInput({
                            ...postInput,
                            email:e.target.value
                        })
                    }} />
                    </div>
                    <div>
                    <Input label="Password" type="password" placeholder="Password" onChange={(e)=>{
                        setPostInput({
                            ...postInput,
                            password:e.target.value
                        })
                    }} />
                    </div>
                    <div className="mt-6">
                        <Button onClick={sendRequest} label={type}/>
                    </div>
            </div>
        </div>
    </div>
}