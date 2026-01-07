import OurClients from "@/components/home/OurClients";
import Header from "@/components/layout/Header";
import NewFooter from "@/components/layout/NewFooter";
import NewHeader from "@/components/layout/NewHeaderBluebg";

import MiddleWareHero from "@/components/services/MiddleWareHero";
import MiddleWareThree from "@/components/services/MiddleWareThree";
import WouldConnect from "@/components/services/WouldConnect";

export default function ServicesMiddleWare() {
  return (

 
  <>
{/* <Header/> */}
<NewHeader/>
<MiddleWareHero/>
{/* <div>need to do some section here</div> */}
<MiddleWareThree/>
<WouldConnect/>
<OurClients/>
<NewFooter/>
  </>
   )
}