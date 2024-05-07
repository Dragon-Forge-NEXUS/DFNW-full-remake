import Navbar from "~/components/nav/navbar/partners";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <div className="flex md:gap-2 gap-5 flex-wrap md:container md:mx-auto p-5">
        <h1 className="text-2xl">DragonForgeNEXUS Partnerships</h1>
        <p>DragonForgeNEXUS partnerships are FYTS members and sponserships.<br />As of now we do not have any sponsors, thus the page is not available.</p>
      </div>
    </main>
  );
}
