import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import micGif from './googleVoice.gif'


export default function Voicec() {

    const [input,setInput]=useState("")
    let speech = window.webkitSpeechRecognition || window.SpeechRecognition, speechText
    let SpeechRecognizer = new speech()
    SpeechRecognizer.continuous = true
    SpeechRecognizer.interimResults = true
    SpeechRecognizer.onresult = (e) => {
      speechText = Array.from(e.results).map((r) => { return r[0] }).map((t) => { return t.transcript }).join("")
      console.log(speechText)

    //   send(speechText)
    //   setInput(speechText)
    
}
let ss=speechText
setInput(ss)

// setInput(speechText)
// setInterval(() => {
//     console.log(input.length);
// }, 1000);
const Mstart=()=>{
    SpeechRecognizer.start()
}

SpeechRecognizer.onspeechend=()=>{
    console.log("end");
}
const Mstop=()=>{
    SpeechRecognizer.stop()
}

function send(p) {
    setInput(p)
}


    
  return (
    <div>
    
         <div className=' absolute w-full h-full bg-black bg-opacity-40 justify-center items-center flex transition ease-in duration-150 delay-300 '>
            <div className=' w-96 h-96 border-2 bg-white flex flex-col '>
              <button className='w-full flex justify-end' onClick={Mstop}><IoClose></IoClose></button>
              <div className=' flex flex-col items-center'>
            <button onClick={Mstart}> start</button>
                <p>Listening.... </p>
                <img src={micGif} className=' w-20' />
              </div>
              <div className='bordr w-full p-2 flex justify-center'>
                <p className='bordr w-[70%] '>{input}</p>
              </div>
            </div>
          </div>
    </div>
  )
}
