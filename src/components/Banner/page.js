import "@/css/layouts/styles.css"
import "@/css/responsive/styles.css"
import "@/css/hover/styles.css"
import "@/css/paralax/styles.css"
import { useRef, useState } from "react"
//import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Banner() {
    
    
    
    return(
        <div className="banner">
          <div className="banner_back">
            
              <Image className="banner_back_img" src="/assets/logoneon.png" alt="Image" width={200} height={200}/>
            
            
          </div>
          <div className="banner_front">
            <>
             <h1>Cordy Dev</h1>
             <p>Mid-Level Developer</p>
             
            </>
            
            <span className="globe">
                
                 <Image className="globe_img" src="/assets/Globe3.png" fill alt="Globe"/>
                
            </span>
            
          </div>
        </div>  
    )
    
    
    
}