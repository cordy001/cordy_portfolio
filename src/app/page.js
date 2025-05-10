"use client"
import "@/css/layouts/styles.css"
import "@/css/responsive/styles.css"
import "@/css/hover/styles.css"
import "@/css/paralax/styles.css"
import Header from "@/components/Header/page"
import Banner from "@/components/Banner/page"
import Content_1 from "@/components/Content_1/page"
import Content_2 from "@/components/Content_2/page"
import Content_3 from "@/components/Content_3/page"
import Content_4 from "@/components/Content_4/page"
import Threejs from "@/three3d/page"


export default function Home() {

  return (
  <div className="container">
      <Header/>
      <div className="cons_support">
        <Banner/>
        <Threejs/>
      </div>
      <Content_1/>
      <Content_2/>
      <Content_3/>
      <Content_4/>
  </div>
  )
}
