import React from "react";

interface Props {
    message: string ,
    mode : string
}
const ErrorHandler : React.FC<Props> = ({message , mode}) =>{
    return (
        <p className={`w-full py-2 px-3 bg-red-200 text-red-500 rounded-lg ${mode}`}> {message}</p>
    )
}
export default  ErrorHandler