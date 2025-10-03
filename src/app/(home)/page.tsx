import Image from "next/image";
import Hero from "./sections/Hero";
import InfoPack1 from "./sections/InfoPack1";
import YourProject from "./sections/YourProject";
import InfoPack2 from "./sections/InfoPack2";
import Benefits from "./sections/Benefits";
import NavBar from "@/components/ui/NavBar";
import AchivContact from "./sections/AchivContact";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
        <NavBar/>
        <Hero/>
        <InfoPack1/>
        <YourProject/>
        <InfoPack2/>
        <Benefits/>
        <AchivContact/>
    </div>
  );
}
