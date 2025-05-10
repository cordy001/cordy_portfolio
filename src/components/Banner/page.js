import { useEffect, useRef } from "react"
//import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Banner() {
    
    
    const text_slide = useRef(null)
    
    useEffect(() => {
        
         window.addEventListener("scroll", () => {
             
             const winY = window.scrollY
             
             const angle = winY * -1
             
             const scale = 1 - (winY * 0.0003)
             
             console.log(winY)
                 text_slide.current.style.transform = `scale(${scale})`
                 text_slide.current.style.opacity = `${scale}`
                
             
         })
         
    }, [])
    
    return(
        <div className="banner">
          
          <div className="banner_front" >
            <div className="font_con" ref={text_slide}>
             <h1>Cordy Dev</h1>
             <p>Mid-Level Developer</p>
             
            </div>
            
          </div>
        </div>  
    )
    
    
    
}
