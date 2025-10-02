import DiscoverButton from "@/components/ui/DiscoverButton";
import RegularButton from "@/components/ui/RegularButton";
import ProjectCarousel from "@/features/ProjectCarousel";
import Image from "next/image";

export default function YourProject() {
    return (
        <div className="bg-gradientPlusImage bg-no-repeat bg-cover bg-center flex flex-col items-center w-full mb-8 p-4">
            <div id="bornes_de_recharges" className="w-8/10 h-[400px] grid grid-cols-6 gap-x-12 my-20">
                <div className="h-full col-start-1 col-span-3 flex flex-col justify-end items-end pl-2 text-white text-right">
                    <p className="font-ultramega-test font-medium text-5xl/14">Borne de<br/> recharges</p>
                    <p className="font-LTflodneue font-normal mt-8 tracking-wider">TITRE RÉFÉRENCEMENT</p>
                    <p className="font-LTflodneue font-light text-xs tracking-wide my-8 text-balance">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    </p>
                    <div className="flex flex-row justify-start items-center gap-6">
                        <DiscoverButton/>
                        <RegularButton text="Contact"/>
                    </div>
                </div>
                <div className="h-full col-span-3 flex flex-row justify-center">
                    <div className="w-[500px] h-full mr-4 relative">
                        <Image
                            src="/images/charging_station.png"
                            alt="Charging Station"
                            fill
                            className="object-contain scale-x-[-1]"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row justify-center items-center my-10">
                <ProjectCarousel/>
            </div>
        </div>
    );
}