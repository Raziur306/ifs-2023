import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import ResponsiveDrawer from "@/components/ResponsiveDrawer";

import { 
  Brand, 
  FranchiseManagement,
  Taxes, 
  Actions,
  ValueAddedService,
  HelpCenter,
  AiChat,
  Wallet,
 } from "@/components";

const  Home = ()=> {
  const router = useRouter();
  useEffect(()=>{
    const value = localStorage.getItem('loggedIn') 
    if(value!='1'){
      router.push('/sign_in');
    }

  },[])

  const [selectedDrawer, setSelectedDrawer] = useState(0);
  const drawerComponentList = [<Brand/>,  <FranchiseManagement/>, <Taxes/>, <Actions/>, <ValueAddedService/>, <HelpCenter/>, <AiChat/>, <Wallet/> ]


  const handleDrawerSelected= (index:number)=>{
    setSelectedDrawer(index);
  }

  return (
    <>
    <ResponsiveDrawer onDrawerSelected={handleDrawerSelected}>
      {drawerComponentList[selectedDrawer]}
    </ResponsiveDrawer>

    </>
  )
}
export default Home;