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
export default function ChatbotNew() {
  const loc = useLocation().pathname
  const [load, setLoad] = useState(false)
  const [input, setInput] = useState("")
  const [speehc, setSpeehc] = useState('');
  const [recognition, setRecognition] = useState(null);
  let u
  const [micon, setMicon] = useState(false)

  //input button logic
  const inputQuery = (e) => {
    console.log(input)
    setInput(e.target.value)
  }
  const micClose = () => {
    // SpeechRecognizer.continuous = false
    //   SpeechRecognizer.stop()
    setMicon(false)

  }

  //.................Speech API's Codes SECTION Start.....................................
  var v
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
        v = command

      };

      recognitionInstance.onspeechend = () => {
        console.log(v);

        setTimeout(() => {
          setInput(v)
          // send1(v)
          setMicon(false)
          setSpeehc("")
        }, 2000);
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










  //.................Speech API's Codes SECTION End.....................................


  //.................Backend API's Codes SECTION Start.....................................

  //send function
  const send = async (e) => {
    // e.preventDefault()
    let CHATS_DivUser = document.getElementById("chats");
    let eleU = document.createElement("div")
    eleU.className += "USER float-right  self-end m-4 w-[40%] whitespace-break-spaces break-words bg-[#3FDD79] bordr-2 p-2 shadow-xl rounded-s-2xl rounded-se-2xl "
    eleU.innerHTML = input
    CHATS_DivUser.appendChild(eleU)
    u = input

    setInput("")
    let eleA = document.createElement("div")
    eleA.className += "AVAZ float-left bg-white self-start m-4 w-[40%] whitespace-break-spaces break-words shadow-xl border-2 p-2 rounded-e-2xl rounded-ss-2xl "
    // let a = `AVAZ AI.......${input}`
    eleA.innerText += await fetchPost(u)
    //   eleA.innerHTML += u
    CHATS_DivUser.appendChild(eleA)
  };


  const send1 = async (e) => {
    // e.preventDefault()
    let CHATS_DivUser = document.getElementById("chats");
    let eleU = document.createElement("div")
    eleU.className += "USER float-right self-end m-4 w-[40%] whitespace-break-spaces break-words bg-[#3FDD79] bordr-2 p-2 shadow-xl rounded-s-2xl rounded-se-2xl "
    eleU.innerHTML = e
    CHATS_DivUser.appendChild(eleU)
    u = e

    setInput("")
    let eleA = document.createElement("div")
    eleA.className += "AVAZ float-left self-start m-4 w-[40%] whitespace-break-spaces break-words shadow-xl border-2 p-2 rounded-e-2xl rounded-ss-2xl "
    // let a = `AVAZ AI.......${input}`
    eleA.innerText += await fetchPost(u)
    // eleA.innerHTML += u
    CHATS_DivUser.appendChild(eleA)
  };


  // useEffect(()=>{
  //   // fetch()
  //   spRec.start()
  // },[])


  //get logic
  const fetchGet = async () => {
    try {
      setLoad(true)
      const res = await axios.get("http://localhost:8000/GET")
      setLoad(false)
      console.log(res)
      return res.data
    } catch (error) {
      setLoad(false)
      console.log(error)
    }
  }

  //post logic
  const fetchPost = async (query) => {
    try {
      setLoad(true)
      const res = await axios.post("http://localhost:8000/POST", { query })
      setLoad(false)
      console.log(res)
      return res.data
    } catch (error) {
      setLoad(false)
      console.log(error)
    }
  }

  //.................Backend API's Codes SECTION End.....................................
  return (
    <>
      {<div className=' bordr-4 border-red-800 flex w-full h-dvh overflow-hidden  bg-[rgb(22,23,25)]  '>
        {micon &&
          <div className='    absolute w-full h-full bg-black bg-opacity-40 justify-center items-center flex ' style={{ zIndex: "99" }}>
            <div className=' p-4 rounded-lg w-96 h-96 border-2 bg-white flex flex-col '>
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
        <div className='SIDE-NAV bordr relative z-50 bg-[rgb(22,23,25)]    bordr-black w-[18%] h-full flex flex-col items-center p-4 space-y-8 bg-opacity-80 bg-emerald00 shadw-2xl max-[768px]:hidden'>
          <div className=' w-5/6 grid grid-flow-col items-center font-bold text-[#3FDD79]'>
            <Link to='/'>
              <LuUserCircle2 className='w-full h-full ' />
            </Link>
            <p className=' text-2xl'>AvAz</p>
          </div>
          <div className='SIDE_MENU w-6/6 m-auto text-neutral-500   '>
            <ul className=' w-full p-2 text-xl font-semibld space-y-4 text-whit   max-lg:text-sm '>
              <li><Link to='/' className={` hover:text-white flex text-center items-center gap-2 `}><FaHome /> Home</Link></li>
              <li><Link to='/ai' className={`  text-${loc === "/ai" ? "white" : "black"} hover:text-${loc === "/ai" ? "white" : ""} flex text-center items-center gap-2 `}><BsRobot /> Ai</Link></li>
              <li><Link to='/about' className={` hover:text-white flex text-center items-center gap-2 `}><FcAbout /> About</Link></li>
              <li><Link to='/document' className={` hover:text-white flex text-center items-center gap-2 `}><TiDocumentText /> Document </Link></li>
              <li><Link to='/contact' className={` hover:text-white  flex text-center items-center gap-2 `}> <TiContacts /> Contact</Link></li>
            </ul>
          </div>

          <div className='PROFILE absolute bottom-4 bordr p-4 rounded-xl bg-[rgb(37,38,40)]'>
            <Link to='/'>
              <div className=' flex items-center gap-2 '>
                <LuUserCircle2 className=' w-12 h-full bg-white rounded-full' />
                <div className=' text-sm text-white'>
                  <p>NAME-XYZ</p>
                  <p className=' text-neutral-500'>XYZ@gmail.com</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className=' w-full flex flex-row m-4 rounded-xl borer overflow-hidden'>
        <div className='AI-CHAT bordr bg-[rgb(37,38,40)]  border-green-500 w-[75%] flex flex-col items-center h-full relative  m-auto overflow-auto max-[768px]:w-full  '>
          {load && <div className=' absolute flex top-[50%] '>
            <Loader />
          </div>}
          <div className=' text-center font-bold shadow-sm p-2 w-full  grid-cols-4 max-[768px]:grid grid-flow-row-dense   '>
            <button className=' md:hidden '><FiMenu /></button>
            <p className='col-span-2 text-neutral-400'>CONTENT : CHATS </p>
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
            {/* {load && <Loader />} */}


          </div>
          <div className=' w-full h-36 border-t border-neutral-700 max-md:h-20 items-center flex '>
            <div className='INPUT-BAR bordr-2 bg-[rgb(22,23,25)]     w-[80%] flex flex-row justify-between   px-2 space-x-1 rounded-xl  m-auto p-2 shadow-lg   '>
              <button className=' text-xl  text-white p-2 rounded-2xl hover:bg-neutral-800 ' onClick={VoiceInputQuery}><FaMicrophoneAlt /></button>
              <input type='text' className=' w-[85%] text-xl text-neutral-400 outline-none bg-[rgb(22,23,25)]  ' onChange={inputQuery} value={input} placeholder='Ask Query' />
              <button className=' text-xl text-white p-2 rounded-2xl hover:bg-neutral-800 cursor-pointer ' disabled={input.length == 0} onClick={send}><IoSend /></button>
            </div>
          </div>

          {/* extra design below */}
          {/* <div className='INPUT-BAR border-2 absolute bottom-[5%]   w-[80%] flex flex-row justify-between   px-2 space-x-1 rounded-xl  m-auto p-2 shadow-lg bg-white    '>
            <button className=' text-xl  bg-emerald-400 p-2 rounded-2xl hover:bg-emerald-200 ' onClick={VoiceInputQuery}><FaMicrophoneAlt /></button>
            <input type='text' className=' w-[85%] text-xl outline-none ' onChange={inputQuery} value={input} placeholder='Ask Query' />
            <button className=' text-xl bg-emerald-400 p-2 rounded-2xl hover:bg-emerald-200 ' disabled={input.length == 0} onClick={send} ><IoSend /></button>
          </div> */}

        </div>
        <div className='HISTORY bg-[rgb(37,38,40)] z-50 bordr bordr-blue-500 w-[25%] h-full p-6 border-l border-neutral-700 max-[768px]:hidden'>
          <div className=' bg-[rgb(22,23,25)] text-neutral-400 CHAT_HISTORY w-full h-10 bordr flex items-center justify-between p-2 shadow-lg rounded-xl'>
            <p>New Chat</p>
            <button><IoSearch /></button>
          </div>
          <br/>
          
        </div>

        </div>
      </div>}
    </>
  )
}