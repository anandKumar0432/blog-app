import React, { ChangeEvent,  ChangeEventHandler,  useState } from "react";


interface inputSignup{
    label:string;
    placeholder:string;
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    type?:React.HTMLInputTypeAttribute;
}

export const Input = ({label,placeholder,onChange,type}:inputSignup)=>{
    
    return <div>
        <div >
            <label className="block mb-2 text-md font-bold text-gray-900">{label}</label>
            <input onChange={onChange} type={type || "text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        </div>
    </div>
}