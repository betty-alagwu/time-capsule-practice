import { useEffect } from "react"
import { useRef } from "react"


export default function Recording() {
 const mediaStreamRef = useRef(null)

useEffect(() => {
 async function getUserPermission() {
   const mediaStream = await navigator.mediaDevices.getUserMedia({video: true, audio: true })
   mediaStreamRef.current = mediaStream
 }
 getUserPermission()
}, [])


 return (
   <h1>
     Recording page
   </h1>
 )
}
