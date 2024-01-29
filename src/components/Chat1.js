import React, { useEffect, useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { LuUserCircle2 } from "react-icons/lu";
import { Link, useLocation } from 'react-router-dom';
import { BsRobot } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { TiDocumentText } from "react-icons/ti";
import { FcAbout } from "react-icons/fc";
import { FaMicrophoneAlt } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import axios from "axios"
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import Loader from './Loader';
import micGif from './googleVoice.gif'
export default function Chat1() {
  const loc = useLocation().pathname
  const [load, setLoad] = useState(false)
  const [input, setInput] = useState("")
  const [s,sets]=useState("")
const [speehc, setSpeehc] = useState('')

  let u
  const [micon, setMicon] = useState(false)
  const [recognition, setRecognition] = useState(null);

  const inputQuery = (e) => {
    console.log(input)
    setInput(e.target.value)
  }
//   const VoiceInputQuery = () => {
//     SpeechRecognizer.start()
//     setMicon(true)
//   }
  const micClose = () => {
    // SpeechRecognizer.continuous = false
    // SpeechRecognizer.stop()
    setMicon(false)

  }

    useEffect(() => {
        const initializeSpeechRecognition = () => {
          const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
          const recognitionInstance = new SpeechRecognition();
          recognitionInstance.lang = 'en-US';
          recognitionInstance.interimResults = true;
        //   recognitionInstance.continuous = true;

          recognitionInstance.onresult = (event) => {
            const last = event.results.length - 1;
            const command = event.results[last][0].transcript;
            setSpeehc(command);
            sets(command)
          };

          recognitionInstance.onspeechend=()=>{
            console.log("ended")
            console.log(s);
          
          }

          setRecognition(recognitionInstance);
        };
    
        initializeSpeechRecognition();
    
        return () => {
          if (recognition) {
            recognition.abort();
          }
        };
      }, []);
    
      const VoiceInputQuery = () => {
    setMicon(true)
        if (recognition) {
          recognition.start();
        }
      };
      const send=()=>{
        console.log("hh");
    }

      return (
        <>
          {<div className=' borde-4 border-red-800 flex w-full h-dvh overflow-hidden  '>
            {micon &&
              <div className='    absolute w-full h-full bg-black bg-opacity-40 justify-center items-center flex ' style={{zIndex:"99"}}>
                <div className='p-4 rounded-lg w-96 h-96 border-2 bg-white flex flex-col '>
                  <button className='w-full flex justify-end' onClick={micClose}><IoClose></IoClose></button>
                  <div className=' flex flex-col items-center'>
                    <p>Listening.... </p>
                    <img src={micGif} className=' w-20' />
                  </div>
                  <div className='bordr w-full p-2 flex justify-center'>
                    <p className='bordr w-[70%] '>{speehc}</p>
                  </div>
                </div>
              </div>}
            <div className='SIDE-NAV bordr z-50 border-black w-[12%] h-full p-2 py-6 space-y-10 bg-opacity-80 bg-emerald-300 shadow-2xl max-[768px]:hidden'>
              <div className=' w-3/6  border rounded-full m-auto bg-white  '>
                <Link to='/'>
                  <LuUserCircle2 className='w-full h-full ' />
                </Link>
              </div>
              <div className='SIDE_MENU w-6/6 m-auto   '>
                <ul className=' w-full p-2 text-xl font-semibold space-y-5 text-whit   max-lg:text-sm '>
                  <li><Link to='/' className={` hover:text-red-500 flex text-center items-center gap-2 `}> Home</Link></li>
                  <li><Link to='/ai' className={` text-${loc === "/ai" ? "red" : "black"}-500 hover:text-${loc === "/ai" ? "black" : "red"} flex text-center items-center gap-2 `}>Ai</Link></li>
                  <li><Link to='/about' className={` hover:text-red-500 flex text-center items-center gap-2 `}>About</Link></li>
                  <li><Link to='/document' className={` hover:text-red-500 flex text-center items-center gap-2 `}>Document </Link></li>
                  <li><Link to='/contact' className={` hover:text-red-500 flex text-center items-center gap-2 `}>Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className='AI-CHAT bordr border-green-500 w-[68%] flex flex-col items-center h-full relative  m-auto overflow-auto max-[768px]:w-full  '>
              <div className=' text-center font-bold shadow-sm p-2 w-full  grid-cols-4 max-[768px]:grid grid-flow-row-dense   '>
                <button className=' md:hidden '><FiMenu /></button>
                <p className='col-span-2'>CONTENT : CHATS </p>
              </div>
              <div className='CHATS  w-full h-full bordr-8 flex flex-col pb-[10%]   scroll-auto overflow-auto space-y-8 p-4 ' id='chats'>
    
                {/* <div className='USER float-right m-4 w-[40%]  border-2 p-2 rounded-s-2xl rounded-se-2xl bg-red-500 text-white '>
                Hii how are you and where are you from
              </div> */}
                {/* <div className='USER float-right m-4 w-[40%]  border-2 p-2 rounded-s-2xl rounded-se-2xl bg-red-500 text-white '>
                {input}
              </div>
              <div className='AVAZ float-left m-4 w-[40%]   border-2 p-2 rounded-e-2xl rounded-ss-2xl bg-red-500 text-white'>
                Hii I am fine i am a Artificial Language
              </div> */}
                {/* <div className='USER float-right m-4 w-[40%] self-end break-words  border-2 p-2 rounded-s-2xl rounded-se-2xl bg-red-500 text-white'>
    hii how are you
              </div>
              <div className='AVAZ float-left m-4 w-[40%] self-start break-words  border-2 p-2 rounded-e-2xl rounded-ss-2xl bg-red-500 text-white'>
    youHello! I'm an AI language model, so I don't have feelings, but I'm here to assist you. How can I help you today?
              </div>
              <div className='USER float-right m-4 w-[40%] self-end break-words  border-2 p-2 rounded-s-2xl rounded-se-2xl bg-red-500 text-white'>
    slfljljwlkegjlewrjgl
              </div>
              <div className='AVAZ float-left m-4 w-[40%] self-start break-words  border-2 p-2 rounded-e-2xl rounded-ss-2xl bg-red-500 text-white'>
    I'm sorry, I couldn't understand what you said. Can you please rephrase your statement or ask a question?
              </div>
              <div className='USER float-right m-4 w-[40%] self-end break-words  border-2 p-2 rounded-s-2xl rounded-se-2xl bg-red-500 text-white'>
              hii how are you
              </div>
              <div className='AVAZ float-left m-4 w-[40%] self-start break-words  border-2 p-2 rounded-e-2xl rounded-ss-2xl bg-red-500 text-white'>
              youHello! I'm an AI language model, so I don't have feelings, but I'm here to assist you. How can I help you today?
              </div> */}
                {load && <Loader />}
              </div>
              <div className=' w-full h-36 borde max-md:h-20 '>
                <div className='INPUT-BAR border-2     w-[80%] flex flex-row justify-between   px-2 space-x-1 rounded-xl  m-auto p-2 shadow-lg bg-white    '>
                  <button className=' text-xl  bg-emerald-400 p-2 rounded-2xl hover:bg-emerald-200 ' onClick={VoiceInputQuery}><FaMicrophoneAlt /></button>
                  <input type='text' className=' w-[85%] text-xl outline-none ' onChange={inputQuery} value={input} placeholder='Ask Query' />
                  <button className=' text-xl bg-emerald-400 p-2 rounded-2xl hover:bg-emerald-200 ' disabled={input.length == 0} ><IoSend /></button>
                </div>
              </div>
    
              {/* extra design below */}
              {/* <div className='INPUT-BAR border-2 absolute bottom-[5%]   w-[80%] flex flex-row justify-between   px-2 space-x-1 rounded-xl  m-auto p-2 shadow-lg bg-white    '>
                <button className=' text-xl  bg-emerald-400 p-2 rounded-2xl hover:bg-emerald-200 ' onClick={VoiceInputQuery}><FaMicrophoneAlt /></button>
                <input type='text' className=' w-[85%] text-xl outline-none ' onChange={inputQuery} value={input} placeholder='Ask Query' />
                <button className=' text-xl bg-emerald-400 p-2 rounded-2xl hover:bg-emerald-200 ' disabled={input.length == 0} onClick={send} ><IoSend /></button>
              </div> */}
    
            </div>
            <div className='HISTORY z-50 bordr bordr-blue-500 w-[20%] h-full p-6  shadow-2xl max-[768px]:hidden'>
              <div className=' CHAT_HISTORY w-full h-10 border flex items-center justify-between p-2 shadow-lg rounded-xl'>
                <p>New Chat</p>
                <button><IoSearch /></button>
              </div>
            </div>
          </div>}
        </>
      )
}
