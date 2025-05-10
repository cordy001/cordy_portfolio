import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Content_1() {
    
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
      
      if (float1.current) observer1.observe(float1.current)
      
     
     
      if (float2.current) observer1.observe(float2.current)
          
         
      if (float3.current) observer1.observe(float3.current)
      
    }, [])
         
    
    
    return (
    <div className="contents_1">
        <div className="content_titles" ref={float1}>
            <h1>Who am I?</h1>
        </div>
        <div className="paralax1">
          <span className="box_1" ></span>
          <span className="box_2" ></span>
          <span className="box_3" ></span>
          <Image className="vscode_c1" width={120} height={120} src="/assets/vscode.png" alt="Image" />
        </div>
        
        <div className="contents_cons">
            
            <div className="contents_1_left">
                
           <div>
             <Image className="profile_pic" width={300} height={300} src="/assets/profile.png" alt="Image" ref={float2}/>
           </div>
           
            </div>
         
            <div className="contents_1_right">
           
              <div className="my_info" ref={float3}>
             <h1>I am Marc Giestin Louis Cordova</h1>
             <div className="to_skill">
             <p>I can</p>
             <div className="to_skill_slide">
               <div>
                 <p>Code</p>
                 <p>Deploy</p>
                 <p>Adapt</p>
               </div>
             </div>
             </div>
           </div>
         </div>
         
        </div>
         
         
    </div>
        )
    
}
