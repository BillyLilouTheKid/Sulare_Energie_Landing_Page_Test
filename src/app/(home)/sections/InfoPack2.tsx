import DiscoverButton from "@/components/ui/DiscoverButton";
import RegularButton from "@/components/ui/RegularButton";
import Image from "next/image";

export default function InfoPack2() {
    return (
        <div className="bg-white px-16 flex flex-col items-center w-full">
            <div className="w-full h-[400px] grid grid-cols-6 gap-x-12 my-20">
                <div className="h-full col-start-1 col-span-4 flex flex-row justify-end mr-4">
                    <div className="w-[500px] h-full mr-4 relative">
                        <Image
                            src="/images/documents.png"
                            alt="Documents"
                            fill
                            className="mr-2"
                        />
                    </div>
                    <div className="w-[400px] h-full relative">
                        <Image
                            src="/images/nuit.png"
                            alt="Nuit"
                            fill
                        />
                    </div>
                </div>
                <div className="h-full col-span-2 flex flex-col items-start pr-2 text-black">
                    <p className="font-ultramega-test font-medium text-5xl/14">L&apos;avenir En Pleine <span className="text-artic-green">Lumière</span></p>
                    <p className="font-LTflodneue font-normal mt-8">TITRE RÉFÉRENCEMENT</p>
                    <p className="font-LTflodneue font-light text-xs tracking-wide my-8 text-balance">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    </p>
                    <div className="flex flex-row justify-start items-center">
                        <DiscoverButton/>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row justify-center items-center shadow-[0_0_5px_rgb(0_0_0_/_20%)] p-4 my-8">
                <div className="w-full h-[400px] grid grid-cols-6 gap-x-12 my-20">
                    <div className="col-start-1 col-span-4 w-full h-8/10 mr-4 relative">
                        <Image
                            src="/images/sulare_color_logo.png"
                            alt="Sulare Color Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="h-full col-span-2 flex flex-col items-start pr-2 text-black">
                        <p className="font-ultramega-test font-medium text-5xl/14">Sulare<span className="text-artic-green">Energia</span></p>
                        <p className="font-LTflodneue font-normal mt-8">TITRE RÉFÉRENCEMENT</p>
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
                </div>
            </div>
        </div>
    );
}