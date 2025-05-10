import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ThreeScene() {
    
    const mountRef = useRef(null)
    
    
    
    useEffect(() => {
         
         const mount = mountRef.current
         
         //Scene
         const scene = new THREE.Scene()
         
         //Camera
         const camera = new THREE.PerspectiveCamera(
             75,
             window.innerWidth / window.innerHeight,
             0.1,
             1000
         )
         
         camera.position.z = 4
         
         //Image Texture
         const textTure = new THREE.TextureLoader()
         
         const textImage = textTure.load('/assets/CubeTexture.png')
         
         //Renderer
         const renderer = new THREE.WebGLRenderer({
             antialias: true, alpha: true
         })
         
         renderer.setSize(window.innerWidth, window.innerHeight)
         
         mount.appendChild(renderer.domElement)
         
         //Zone Lab =====>
         
         //Cube
         const geomitry = new THREE.BoxGeometry()
         
         const material = new THREE.MeshBasicMaterial({ map: textImage })
          
         const cube = new THREE.Mesh(geomitry, material)
         
         scene.add(cube)
         
         cube.scale.set(2, 2, 2)
         
         cube.position.set(0, -2, 0)
         
         const pointLight = new THREE.PointLight(0xffffff, 1, 10)
         scene.add(pointLight)
         
         
         
         const animate = () => {
             requestAnimationFrame(animate)
             cube.rotation.x += 0.01
             cube.rotation.y += 0.01
             pointLight.position.copy(cube.position)
             renderer.render(scene, camera)
         }
         
         
         animate()
         
         
         return () => {
             mount.removeChild(renderer.domElement)
         } 
         
    }, [])
    
    return (
    <div 
    ref={mountRef} 
    className="Three"  
    
    />
       
        )
    
}