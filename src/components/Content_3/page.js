import { useEffect, useRef } from "react"
import Image from "next/image"


export default function Content_3() {
    
    const float1 = useRef(null)
    
    const float2 = useRef(null)
    
    const float3 = useRef(null)
    
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
              threshold: 0.1
        }) 
        
        if (float1.current) {
            observer1.observe(float1.current)
        }
         
        if (float2.current) {
            observer1.observe(float2.current)
        }
        
        if (float3.current) {
            observer1.observe(float3.current)
        }
         
    }, [])
    
    
    
    return (
    <div className="content_3">
        <div className="content_3_left">
            <Image ref={float1} className="image_1" width={300} height={300} src="/assets/coreDoa.png" alt="Image" />
        </div>
        <div className="content_3_right">
            <h1 ref={float2} className="my_info">Blockchain & Cloud Tech Involvement</h1> 
            <p ref={float3} className="my_info">Aside from web development, I’m also a Core DAO Tech Ambassador, where I explore and advocate the power of smart contracts, blockchain validators, and decentralized cloud infrastructure. This has expanded my understanding of how modern apps interact with Web3 technologies and scalable cloud systems. </p>
        </div>
    </div>
        )
    
    
}
