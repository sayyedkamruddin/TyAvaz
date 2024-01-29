import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
export default function 
() {

    const {transcript,listening,browserSupportsSpeechRecognition} = useSpeechRecognition();

    
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  
//   console.log(arr[0])

// setInterval(() => {
//     console.log(transcript)
// }, 1000);

  let p=document.getElementById("ok")
  const startListening = () => SpeechRecognition.startListening({ continuous: true });
        const ans=transcript
        // let d=p.innerText
        // console.log(ans);
        if (ans.length===transcript.length) {
        // console.log(p.innerText);
        }
  return (
    <div>
         <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <p id='ok'>{transcript}</p>
    </div>
    </div>
  )
}
