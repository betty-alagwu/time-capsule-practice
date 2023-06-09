import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"


export default function Recording() {
 const mediaStreamRef = useRef(null)
 const videoPlayerRef = useRef(null)
 const mediarecorderRef = useRef(null)
 const [errorMessage, setErrorMessage] = useState('')

useEffect(() => {
 async function getUserPermission() {
   try{
    const mediaStream = await navigator.mediaDevices.getUserMedia({video: true, audio: true })
    mediaStreamRef.current = mediaStream
    videoPlayerRef.current.srcObject = mediaStream
    const mediaRecorder = new MediaRecorder(mediaStream)
    mediarecorderRef.current = mediaRecorder
 }catch(error){
  setErrorMessage("Please grant permission to use your camera and microphone")
  }
 }
  getUserPermission()
}, [])


 return (
  <>
   <h1>
     Recording page
   </h1>
   {errorMessage && <p>{errorMessage}</p>}
   <video ref={videoPlayerRef} autoPlay muted style={{ width: '500px', height: 'auto' }} ></video>
  </>
 )
}
