import { useEffect } from "react"


export default function Recording() {

useEffect(() => {
 async function getUserPermission() {
   const mediaStream = await navigator.mediaDevices.getUserMedia({video: true, audio: true })
 }
 getUserPermission()
}, [])

 return (
   <h1>
     Recording page
   </h1>
 )
}
