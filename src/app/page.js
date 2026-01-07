
import EmpoweringSection from "@/components/home/Empowering";


import NeedConsultation from "@/components/home/NeedConsultation";
import NewAboutHome from "@/components/home/NewAboutHome";

import NewHeroSection from "@/components/home/NewHero";


import NewServicesTimeline from "@/components/home/NewServicesTimeLine";
import OurClients from "@/components/home/OurClients";




import NewFooter from "@/components/layout/NewFooter";
import NewHeader from "@/components/layout/NewHeaderBluebg";

export default function Home() {
  return (
    
    <>


       <NewHeader/>
      <NewHeroSection/>
      <NewAboutHome/>
       
       <NewServicesTimeline/>
       <NeedConsultation/>
        <EmpoweringSection/>
         
         <OurClients/>
        
         <NewFooter/>

      </>

      
  
  );
}
