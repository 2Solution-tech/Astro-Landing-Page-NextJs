
import  ShuffleHero, {  HeroOne } from "@/component/Carousel";
import Category from "@/component/Category";
import {  Cta } from "@/component/Cta";
import { Faq } from "@/component/Faqs";
import { Feature } from "@/component/Feature";
import { Footer } from "@/component/Footer";
import { Navbar } from "@/component/Navbar";
import Post from "@/component/Post";
import Pricing from "@/component/Pricing";



export default function Home() {
  return (
    <main >
     <Navbar/>
     <ShuffleHero/>
    <Feature/>
    <Cta/>
    <Post/>
    <Pricing/>
    <Category/>
    <Faq/>
    <Footer/>
    </main>
  );
}
