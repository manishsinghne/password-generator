import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
 
function Password() {
    const [password,setpassword]=useState(false)
    function hid(){
        setpassword(!password)
    }
    return (
        <div className=''>
        <div className='flex'>Password
            <input
            
                type={password ? 'text':'password'}
                placeholder="Enter some text"
                className="  text-xl mt-1 block w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

            />{password?
            <FaEyeSlash className=' flex items-center' onClick={hid} />:
            <FaEye className=""onClick={hid} b  />}



        </div>
        </div>
    )
}

export default Password