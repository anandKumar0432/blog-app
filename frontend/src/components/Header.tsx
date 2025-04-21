import { Link } from "react-router-dom"

interface HeaderInput{
    headerText:string;
    subHeaderText:string;
    to:string;
    redirectText:string
}

export const Header = ({headerText,subHeaderText,to,redirectText} : HeaderInput)=>{
    return <div>
        <div className="text-center mb-3">
                <div className="text-2xl font-extrabold ">
                {headerText}
                </div> 
                <div className="text-sm font-bold text-gray-600">
                {subHeaderText}
                <Link className="underline hover:text-blue-800" to={to}>{redirectText}</Link>
                </div> 
            </div>
        </div>
}