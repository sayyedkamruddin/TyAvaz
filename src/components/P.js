import React from 'react'

export default function P() {
    
  return (
    <div>

// Access necessary elements
const audioElement = document.getElementById('audio');
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
const canvas = document.getElementById('audioSpectrum');
const ctx = canvas.getContext('2d');
const startRecordingButton = document.getElementById('startRecording');
const stopRecordingButton = document.getElementById('stopRecording');

// Set up audio processing
navigator.mediaDevices.getUserMedia({ audio: true })
  .then((stream) => {
    const source = audioContext.createMediaStreamSource(stream);
    source.connect(analyser);
    analyser.connect(audioContext.destination);
  })
  .catch((error) => console.error('Error accessing microphone:', error));

// Set up canvas for spectrum visualization
analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

// Draw audio spectrum
function draw() {
  analyser.getByteFrequencyData(dataArray);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const barWidth = (canvas.width / bufferLength) * 2.5;
  let barHeight;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];

    ctx.fillStyle = rgb(50, ${barHeight + 100}, 50);
    ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);

    x += barWidth + 1;
  }

  requestAnimationFrame(draw);
}

// Event listeners for recording buttons
startRecordingButton.addEventListener('click', () => {
  audioContext.resume().then(() => {
    startRecordingButton.disabled = true;
    stopRecordingButton.disabled = false;

    // Start drawing audio spectrum
    draw();
  });
});

stopRecordingButton.addEventListener('click', () => {
  startRecordingButton.disabled = false;
  stopRecordingButton.disabled = true;
});
    </div>
  )
}
