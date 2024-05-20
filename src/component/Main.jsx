import React, { useState, useEffect ,useRef} from 'react'
function Main() {
    const [length, setlength] = useState(8)
    const [num, setnum] = useState(false)
    const [char, setchar] = useState(false)
    const [password, setpassword] = useState('')
    const inpref= useRef(null)
    const  copy=()=>{
       const cop=  inpref.current.value
        navigator.clipboard.writeText(cop).then(()=>{
            alert('copied')
        }).catch((err)=>{
            alert('eerr',err)
        })
    }
    
    function generator() {
        let pass = ''
        let str = 'ABCDEFGHIJKLMNOPQRESTUVWXYXabcdefghijklmnopqrestuvwxyz'
        if (num) str += '0123456789'
        if (char) str += '~`!@#$%^&*{}[]?'

      

        for (let i = 0; i < length; i++) {
            const newpass = Math.floor(Math.random() * str.length)
            pass += str[newpass]

        }
        setpassword(pass)
    }
    useEffect(() => {
        generator()
    }, [length, char, num])

    return (
        <div className="container mx-auto text-blue-500 rounded-lg bg-gray-200">
            <div className="container mx-auto  text-black-500 rounded-sm">
                <h1 className="text-4xl font-bold text-center text-blue-600">Password Generator</h1>
                <div className="flex justify-center p-4">

                    <input
                    ref={inpref}
                        value={password}
                        readOnly
                        
                        
                        type="text"
                        placeholder="Enter some text"
                        className=" text-xl mt-1 block w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <button onClick={copy}
                        className="ml-2 px-3 py-2 bg-indigo-500 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                        Copy

                    </button>
                </div>
                <div className="container mx-auto text-blue-50 rounded-lg flex justify-center">
                    <input
                        type="range"
                        min="8"
                        value={length}
                        onChange={(e) => setlength(Number(e.target.value))}
                        max="26"
                        step="1"
                        className="w-auto pr-4"
                    />
                    <label className=' text-blue-500 pr-4 text-xl' > ({length})</label>
                    <input
                        type="checkbox"
                        min="0"
                        max="100"
                        checked={char}
                        step="1"
                        onChange={(e) => setchar(e.target.checked)}
                        className="w-auto pr-5"
                    />
                    <label className=' text-blue-500 pr-4 text-xl' >Character</label>
                    <input
                        type="checkbox"
                        min="0"
                        checked={num}
                        onChange={(e) => setnum(e.target.checked)}
                        max="100"
                        step="1"
                        className="w-auto"

                    />
                    <label className=' text-blue-500 text-xl' >Number</label>
                </div>
            </div>
        </div>
    )

}
export default Main