import Empowering from "@/components/home/Empowering";
import Hero from "@/components/home/Hero";
import OurClients from "@/components/home/OurClients";


import ServicesList from "@/components/home/ServicesList";
import StrengthCard from "@/components/home/StrengthCard";
import StrengthsSection from "@/components/home/StrengthSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";



export default function Home() {
  return (
    
    <>
   <Header/>
     <Hero/>
      
      <ServicesList />
      <Empowering/>
      <StrengthsSection/>
      <OurClients/>
      <Footer/>
      
    </>
  );
}
