import IoTHero from "@/components/home/IoTHero";
import OurClients from "@/components/home/OurClients";
import Header from "@/components/layout/Header";
import NewFooter from "@/components/layout/NewFooter";
import NewHeader from "@/components/layout/NewHeaderBluebg";
import DigitalHero from "@/components/services/DigitalHero";
import IoTThree from "@/components/services/IotThree";
import WouldConnect from "@/components/services/WouldConnect";

export default function ServicesIOT() {
  return (

 
  <>
{/* <Header/> */}
<NewHeader/>
{/* <DigitalHero/> */}
<IoTHero/>
{/* <div>need to do some section here</div> */}
< IoTThree/>

<WouldConnect/>
<OurClients/>
<NewFooter/>
  </>
   )
}