import OurClients from "@/components/home/OurClients";
import Header from "@/components/layout/Header";
import NewFooter from "@/components/layout/NewFooter";
import NewHeader from "@/components/layout/NewHeaderBluebg";
import DigitalHero from "@/components/services/DigitalHero";
import SoftwareConsultingHero from "@/components/services/SoftwareConsultingHero";
import SoftwareThree from "@/components/services/SoftwareThree";
import WouldConnect from "@/components/services/WouldConnect";

export default function ServicesSoftware() {
  return (

 
  <>
{/* <Header/> */}
<NewHeader/>
{/* <DigitalHero/> */}
<SoftwareConsultingHero/>
{/* <div>need to do some section here</div> */}
<SoftwareThree/>
<WouldConnect/>
<OurClients/>
<NewFooter/>
  </>
   )
}