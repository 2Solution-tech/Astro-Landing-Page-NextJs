
import Annimations, { SwipeCarousel } from "@/component/Annimations";
import  ShuffleHero, {  HeroOne } from "@/component/Carousel";
import Category from "@/component/Category";
import {  Cta } from "@/component/Cta";
import { Faq } from "@/component/Faqs";
import { Footer } from "@/component/Footer";
import { Navbar } from "@/component/Navbar";
import Post from "@/component/Post";
import Pricing from "@/component/Pricing";
import { TextParallaxContentExample } from "@/component/Scrollable";



export default function Home() {
  return (
    <main >
     <Navbar/>
     <Annimations/>
     <ShuffleHero/>
   
    <Cta/>
    <Post/>
    <Pricing/>
    <TextParallaxContentExample/>
    <Category/>
    <Faq/>
    <Annimations/>
    <Footer/>
    </main>
  );
}
