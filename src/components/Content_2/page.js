import { useEffect, useRef } from "react"
import Image from "next/image"


export default function Content_2() {
    
    const float1 = useRef(null)
    
    
    useEffect(() => {
         
        const observer1 = new  IntersectionObserver((entries) => {
          
          entries.forEach(entry => {
              if(entry.isIntersecting) {
                  entry.target.classList.add("show")
                  
              } else {
                  entry.target.classList.remove("show")
              }
          })
          
          }, {
              threshold: 0.2
          }) 
         
         if (float1.current) {
             observer1.observe(float1.current)
         }
         
         
         
    }, [])
    
    return (
    <div className="Content_2">
         <h1 className="content_titles_2" ref={float1}>Services</h1>
         <div className="Content_2_object">
             <div>
                 
             </div>
             <div>
                 
             </div>
             <div>
                 
             </div>
             <div>
                 
             </div>
             
         </div>
    </div>
        )
    
    
}