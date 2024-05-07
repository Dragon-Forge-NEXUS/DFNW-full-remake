import Link from "next/link";
import { NavDrawer } from "../navdrawer/home";
import { NavBarBtn } from "../navbarbtn/partners";

export default function Navbar(){
  return(
    <div className=' bg-secondary w-full h-16 flex sticky top-0 z-10'>
      <div className=' basis-1/3 px-4 content-center'>
      <NavDrawer />
      </div>
      <div className=' basis-1/3 p-2 text-center'>
        <Link href={'/'} className="text-3xl hidden md:inline">DragonForgeNEXUS</Link>
        <Link href={'/'} className="text-3xl md:hidden">DFN</Link>
      </div>
      <div className=' basis-1/3 px-4 content-center'>
        <NavBarBtn />
      </div>
    </div>
  )
}