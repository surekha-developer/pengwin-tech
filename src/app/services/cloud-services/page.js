import OurClients from "@/components/home/OurClients";
import Header from "@/components/layout/Header";
import NewFooter from "@/components/layout/NewFooter";
import NewHeader from "@/components/layout/NewHeaderBluebg";
import CloudHero from "@/components/services/CloudHero";
import CloudThree from "@/components/services/CloudThree";
import DigitalHero from "@/components/services/DigitalHero";
import WouldConnect from "@/components/services/WouldConnect";

export default function ServicesCloud() {
  return (

 
  <>
{/* <Header/> */}
<NewHeader/>
{/* <DigitalHero/> */}
<CloudHero/>
{/* <CloudHero/>
<CloudHero/> */}
{/* <div>need to do some section here</div> */}
<CloudThree/>
<WouldConnect/>
<OurClients/>
<NewFooter/>
  </>
   )
}