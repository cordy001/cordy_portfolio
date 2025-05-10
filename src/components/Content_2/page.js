import { useEffect, useRef } from "react"
import Image from "next/image"


export default function Content_2() {
    
    const float1 = useRef(null)
    
    const float2 = useRef(null)
    
    const float3 = useRef(null)
    
    const float4 = useRef(null)
    
    const float5 = useRef(null)
    
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
         
         if (float4.current) {
             observer1.observe(float4.current)
         }
         
         if (float5.current) {
             observer1.observe(float5.current)
         }
         
         
    }, [])
    
    return (
    <div className="Content_2">
         <h1 className="Content_titles_2" ref={float1}>Services</h1>
         <div className="Content_2_object">
             <div className="Content_2_object_left">
                 <div className="Content_2_object_left_1" ref={float2}>
                    <span className="image_1">
                        <Image width={150} height={150} src="/assets/react.png" alt="Image" />
                    </span>
                    
                    <span className="info_1">
                        <h1>Front-End</h1>
                        <p>I craft dynamic UIs using React, with smooth animations and interactive elements. I manage state with useState, trigger side effects with useEffect, and control the DOM using useRef — all to create responsive, engaging experiences and have a bunos of Threejs for 3d effects. </p>
                    </span>
                 </div>
                 <div className="Content_2_object_left_2" ref={float3}>
                     <span className="image_2">
                         <Image width={150} height={150} src="/assets/node.png" alt="Image" />
                     </span>
                     
                    <span className="info_2">
                        <h1>Back-End</h1>
                        <p>I build fast, scalable APIs with Node.js and Express, handle data with PHP, and ensure smooth database interactions. I focus on clean server-side logic and optimizing performance for seamless integration with the front-end.</p>
                    </span>
                 </div>
             </div>
             
             <div className="Content_2_object_right">
                 <div className="Content_2_object_right_1" ref={float4}>
                     <span className="image_3">
                         <Image width={100} height={100} src="/assets/sql.png" alt="Image" />
                     </span>
                     
                    <span className="info_3">
                        <h1>Database</h1>
                        <p>I set up and manage databases with MariaDB, PostgreSQL, and NoSQL systems like MongoDB. From structured data to flexible storage, I ensure your databases are fast, reliable, and secure.</p>
                    </span>
                 </div>
                 <div className="Content_2_object_right_2" ref={float5}>
                     <span className="image_4">
                         <Image width={100} height={100} src="/assets/kali.png" alt="Image" />
                     </span>
                      
                    <span className="info_4">
                        <h1>Security</h1>
                        <p>My go-to work environment is Kali Linux, where I use tools like Metasploit, Nmap, and Burp Suite to perform penetration testing and security assessments. </p>
                    </span>
                 </div>
             </div>
             
             
             
         </div>
    </div>
        )
    
    
}