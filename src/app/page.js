
import AnnimationsFooter from "@/component/AnnimationFooter";
import Annimations, { SwipeCarousel } from "@/component/Annimations";
import  ShuffleHero, {  HeroOne } from "@/component/Carousel";
import Category from "@/component/Category";
import Features, {  Cta } from "@/component/Cta";
import { Faq } from "@/component/Faqs";
import FixedCallButton from "@/component/FixedCall";
import Footer2, { Footer } from "@/component/Footer";
import { Navbar } from "@/component/Navbar";
import Post from "@/component/Post";
import Pricing from "@/component/Pricing";
import { TextParallaxContentExample } from "@/component/Scrollable";



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
    <Faq/>
    <AnnimationsFooter/>
    <Footer2/>
    </main>
  );
}
