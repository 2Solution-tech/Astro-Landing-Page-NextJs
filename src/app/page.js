
import AnnimationsFooter from "@/component/AnnimationFooter";
import Annimations  from "@/component/Annimations";
import  ShuffleHero from "@/component/Carousel";
import Category from "@/component/Category";
import Features from "@/component/Cta";
import { Faq } from "@/component/Faqs";
import Footer2 from "@/component/Footer";

import { Navbar } from "@/component/Navbar";
import Post from "@/component/Post";
import Pricing from "@/component/Pricing";
import { TextParallaxContentExample } from "@/component/Scrollable";
import Testimonial from "@/component/Testimonial";



export default function Home() {
  return (
    <main className="relative " >
     
     <Navbar/>  
     <Annimations/>
     <ShuffleHero/>  
    <Features/>
    <Post/>
    <Pricing/>
    <TextParallaxContentExample/>
    <Category/>
    <Testimonial/>
    <Faq/>
    <AnnimationsFooter/>
    <Footer2/>
    </main>
  );
}
