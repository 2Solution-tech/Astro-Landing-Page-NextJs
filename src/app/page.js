
import  { AuroraHero } from "@/component/Carousel";
import Category from "@/component/Category";
import {  Cta } from "@/component/Cta";
import { Faq } from "@/component/Faqs";
import { Feature } from "@/component/Feature";
import { Footer } from "@/component/Footer";
import { Navbar } from "@/component/Navbar";
import Post from "@/component/Post";



export default function Home() {
  return (
    <main >
     <Navbar/>
     <AuroraHero/>
    <Feature/>
    <Cta/>
    <Post/>
    <Category/>
    <Faq/>
    <Footer/>
    </main>
  );
}
