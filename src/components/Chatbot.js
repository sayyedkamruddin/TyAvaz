import React from 'react'
import { FiMenu } from "react-icons/fi";
import { LuUserCircle2 } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { BsRobot } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { IoMdDocument } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
export default function () {
  return (
    <div className=' border-4 border-red-800 flex w-full h-screen '>
      <div className='SIDE-NAV border border-black w-[5%] h-full p-2'>
        <div className=' w-5/6 h-1/12 border rounded-full m-auto '>
          <Link to='/'>
            <LuUserCircle2 className='w-full h-full' />
          </Link>
        </div>
        <div className='SIDE_MENU'>
          <ul className=' '>
            <li><Link to='/' className=' hover:text-red-500 '>Home</Link></li>
            <li><Link to='/ai' className=' hover:text-red-500'>Ai</Link></li>
            <li><Link to='/about' className=' hover:text-red-500'>About</Link></li>
            <li><Link to='/document' className=' hover:text-red-500'>Document</Link></li>
            <li><Link to='/contact' className=' hover:text-red-500'>Contact</Link></li>

          </ul>
        </div>

      </div>
      <div className='AI-CHAT border border-green-500 w-[75%] h-full'>


      </div>
      <div className='HISTORY border border-blue-500 w-[20%] h-full'>

      </div>
    </div>
  )
}
