import DiscoverButton from "@/components/ui/DiscoverButton";
import RegularButton from "@/components/ui/RegularButton";
import { benefitsData } from "@/constants/benefits";
import { benefitsType } from "@/types/benefits";
import Image from "next/image";

export default function Benefits() {


    const BenefitsItems = ({srcIcon, text} : benefitsType) => {
        return (
            <div className="rounded-xl bg-gray-400/30 backdrop-blur-xs flex flex-col items-center justify-center gap-y-1 text-white">
                <Image
                    src={srcIcon}
                    alt={`Icon ${srcIcon}`}
                    width={40}
                    height={50}
                    className="w-8 h-9"
                />
                <p className="font-ultramega-test font-normal text-xl text-center break-all whitespace-pre-line">{text}</p>
            </div>
        );
    }

    return (
        <div id="aide" className="w-screen h-screen bg-benefits bg-cover bg-[center_55%] grid grid-rows-5 p-6">
            <div className="row-start-1 row-span-4 py-10 px-14">
                <div className="w-full h-full flex flex-col justify-between items-center rounded-md bg-gray-400/30 backdrop-blur-xs p-14">
                    <p className="font-ultramega-test font-medium text-5xl text-white">En toute transparence</p>
                    <div className="flex flex-col items-center justify-end px-8">
                        <p className="font-LTflodneue font-normal text-sm text-white">TITRE RÉFÉRENCEMENT</p>
                        <p className="font-LTflodneue font-light text-sm text-white/50 tracking-wide mt-8 text-balance text-center">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                        </p>
                    </div>
                    <div className="flex flex-row justify-evenly items-center gap-6">
                        <DiscoverButton/>
                        <RegularButton text="Contact"/>
                    </div>
                </div>
            </div>
            <div className="row-span-1 grid grid-cols-5 gap-x-14">
                {
                    benefitsData.map((data)=>
                        <BenefitsItems key={data.srcIcon} {...data}/>
                    )
                }
            </div>
        </div>
    );
}