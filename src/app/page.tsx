import Navbar from "~/components/nav/navbar/home";
import NavBtn from "~/components/nav/navbuttons/nexus";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <div className="flex md:gap-2 gap-5 flex-wrap md:container md:mx-auto p-5">
        <NavBtn href="/" title='Code' description='DFC has coding tutorials, refrences, cheat sheets, APIs and more!'  variant={'code'}/>
        <NavBtn href="/" title='Gaming' description='DFG contains articals on games, game reviews, gaming news, and more!'  variant={'gaming'}/>
        {/* <NavBtn href="/" title='Media' description='DFM runs all of our media accounts.'  variant={'media'}/> */}
        {/* <NavBtn href="/" title='News' description='DFNews has news on the tech, gaming, and programing worlds!'  variant={'news'}/> */}
        {/* <NavBtn href="/" title='network' description='this is a network navbtn!'  variant={'network'}/> */}
        <NavBtn href="/partners" title='Partners' description="All of DFN's partners are listed here!"  variant={'nexus'}/>
        <NavBtn href="/blog" title='Blog' description="DFN's Blog."  variant={'nexus'}/>
      </div>
    </main>
  );
}
