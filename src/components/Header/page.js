import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Header() {
    
    const [burgerId, setBurderId] = useState(0)
    
    const nav_burger = useRef(null)
    
    const hide = useRef(null)
    
    const hide2 = useRef(null)
    
    const hide3 = useRef(null)
    
    const fade_in = useRef(null)
    
    const router = useRouter()
    
    const links = [
        {name: "Github", url: "https://github.com/cordy001"},
        {name: "Tikok", url: "https://www.tiktok.com/@cordyph?_t=ZS-8vuj5WgDGeg&_r=1"},
        {name: "Facebook", url: "https://www.facebook.com/share/18adhVjRey/"},
        {name: "LinkedIn", url: "https://www.linkedin.com/in/marc-giestin-louis-cordova-657849276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
    ]
    
    const showBurger = () => {
        
        if (burgerId === 0) {
        
            setBurderId(1)
        
            nav_burger.current.style.width = "100dvw"
            
            nav_burger.current.style.opacity = "1"
        
            hide.current.style.width = "0"
            
            hide3.current.style.width = "0"
              
            
        } else {
            
            setBurderId(0)
            
            nav_burger.current.style.opacity = "0"
        
            nav_burger.current.style.width = "0"
        
            hide.current.style.width = "30px"
        
            hide3.current.style.width = "30px"
            
        }
        
    
        
    }
    
    useEffect(() => {
        setTimeout(() => {
            fade_in.current.style.opacity = "1"
            fade_in.current.style.transform = "translateY(0)"
            
        }, 5000)
        
        window.addEventListener("scroll", () => {
            
            const winY = window.scrollY
            
            if (winY > 80) {
                fade_in.current.style.background = "#0d1117"
            }
            if (winY < 80) {
                fade_in.current.style.background = "transparent"
            }
            
            
        })
        
    }, [])
    
    return(
        <div className="header" ref={fade_in}>
        <div className="header_support">
          
        <div className="nav_bar_fix" ref={nav_burger}>
            
          <div>
            <Image width={50} height={50} src="/assets/logo.png" alt="Image" />
            <h1>Cordy Dev</h1>
          </div>
          
          <ul>
              
          {links.map((link, index) => (
              <li onClick={() => router.push(link.url)} key={index}>
                  {link.name}
              </li>
          ))}
          
          </ul>
          
        </div>
        <div className="nav_bar">
          
          <div onClick={showBurger}>
            <span ref={hide}></span>
            <span ref={hide2}></span>
            <span ref={hide3}></span>
          </div>
          <ul>
          {links.map((link, index) => (
              <li onClick={() => router.push(link.url)} key={index}>
                  {link.name}
              </li>
          ))}
          </ul>
        </div> 
          
        <div className="logo_text">
          
           <Image width={50} height={50} src="/assets/logo.png" alt="Image" />
          
          <h1>Cordy Dev</h1>
        </div>
        
        <div className="button_cons">
          <button type="button">Email Me 📨</button>
        </div>
      </div>
      </div>
    )
    
}
