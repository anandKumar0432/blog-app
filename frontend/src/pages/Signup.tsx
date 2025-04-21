import { Quote } from "../components/Quote"
import { SignupAuth } from "../components/SignupAuth"

export const Signup = ()=>{
    return (
        <div className="grid grid-cols md:grid-cols-2">
            <div className="">
                <SignupAuth type="signup"/>
            </div>
            <div className="none md:block">
                <Quote/>
            </div>
        </div>
    )
}