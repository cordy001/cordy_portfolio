import "@/css/layouts/styles.css"
import "@/css/responsive/styles.css"
import "@/css/hover/styles.css"
import "@/css/paralax/styles.css"
import { useEffect, useRef } from "react"
//import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Banner() {
    
    const effect1 = useRef(null)
    
    const banner_f1 = useRef(null)
    
    const banner_f2 = useRef(null)
    
    const effect2 = useRef(null)
    
    useEffect(() => {
         setTimeout(() => {
             effect1.current.style.transform = "translateX(0) rotate(360deg) scale(1)"
             effect2.current.style.transform = "translateX(0) rotate(360deg) scale(1)"
                    
         }, 1000)
         setTimeout(() => {
             banner_f1.current.style.opacity = "1"
             banner_f1.current.style.transform = "translateY(0)"
             setTimeout(() => {
                 banner_f2.current.style.opacity = "1"
                 banner_f2.current.style.transform = "translateY(0)"
             }, 500)
             
         }, 5500)
    }, [])
    
    return(
        <div className="banner">
          
          <div className="banner_back">
            
            <span></span>
            <span></span>

            </div>
          
          <div className="banner_effects">
            <span className="banner_effect1" ref={effect1}></span>
            <span className="banner_effect2" ref={effect2}></span>
            
          </div>
          
          <div className="banner_front">
            <>
             <h1 ref={banner_f1}>Cordy Dev</h1>
             <p ref={banner_f2}>Mid-Level Developer</p>
             
            </>
            
          </div>
        </div>  
    )
    
    
    
}