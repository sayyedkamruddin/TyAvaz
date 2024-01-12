import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
export default function() {
    // const windowSize = useRef([window.innerWidth, window.innerHeight]);

    const location=useLocation();
    const [bgcolor, setbgcolor] = useState("red")
    const [fgcolor, setfgcolor] = useState("white")
    const [path,setPath]=useState(true)
    console.log(location.pathname==="/ai")
    const hovered = () => {
        setbgcolor(() => {
            return "transparent"
        })
        setfgcolor(() => {
            return "black"
        })
    }
    const unhovered = () => {
        setbgcolor(() => {
            return "red"
        })
        setfgcolor(() => {
            return "white"
        })
    }

    const [open, setopen] = useState(false)
    const Clicks = () => {
        setopen(!open)
    }
    return (
        <>
        {
            location.pathname!="/ai" &&
            <div className=''>
                <div className='NAVBAR flex justify-between  px-10 text-xl h-16  shadow-md items-center w-full max-[768px]:px-8 relative'>
                    <div className='LOGO text-3xl font-bold  '>
                        <Link to='/'>AvAz</Link>
                    </div>
                    
                    <div className='NAVLIST max-[768px]:hidden'>
                        <ul className=' flex gap-10'>
                            <li><Link to='/' className=' hover:text-red-500 '>Home</Link></li>
                            <li><Link to='/ai' className=' hover:text-red-500'>Ai</Link></li>
                            <li><Link to='/about' className=' hover:text-red-500'>About</Link></li>
                            <li><Link to='/document' className=' hover:text-red-500'>Document</Link></li>
                            <li><Link to='/contact' className=' hover:text-red-500'>Contact</Link></li>

                        </ul>
                    </div>
                    <div className='BTNS max-[768px]:hidden  '>
                        <ul className=' flex gap-4'>
                            <li className={`w-32 h-10 leading-8 bg-${bgcolor === "transparent" ? "red" : "transparent"}-500 text-${fgcolor === "black" ? "white" : "black"} border-2 text-center rounded-full hover:bg-red-500 hover:text-white transition  delay-100 duration-200 ease-in `} onMouseOver={hovered} onMouseOut={unhovered}><Link to='/login'>Log In</Link></li>
                            <li className={` w-32 h-10 leading-8 bg-${bgcolor}-500  text-center border-2 rounded-full text-${fgcolor} transition  delay-100 duration-200 ease-in`} onMouseOver={hovered} onMouseOut={unhovered} ><Link to='/getStarted'>Get Started</Link></li>
                        </ul>
                    </div>
               
                    {open &&
                        < >
                            <div className=' absolute'>
                                {console.log("drop down")}
                            </div>
                            <button className='text-4xl hidden max-[768px]:block' onClick={Clicks}> <IoClose /></button>
                        </>
                    }

                    {!open &&
                        <button className='text-4xl hidden max-[768px]:block' onClick={Clicks}> <FiMenu /></button>
                    }
                    { open &&

                    <div className={` z-50 absolute hidden max-[768px]:block  top-[100%] left-0 bg-red-500 text-white w-full p-10 transition ease-in-out delay-200 duration-300 `}  >
                    <ul className=' flex gap-4 flex-col  text-center '>
                            <li><Link to='/' className='  hover:underline' onClick={()=>{setopen(!open)}}>Home</Link></li>
                            <li><Link to='/about' className=' hover:underline' onClick={()=>{setopen(!open)}}>About</Link></li>
                            <li><Link to='/document' className=' hover:underline'onClick={()=>{setopen(!open)}}>Document</Link></li>
                            <li><Link to='/contact' className=' hover:underline'onClick={()=>{setopen(!open)}}>Contact</Link></li>
                        </ul>
                    </div>
                    }

                </div>
           
            </div>
        }

        </>
    )
}
