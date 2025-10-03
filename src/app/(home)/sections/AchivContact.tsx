import DiscoverButton from "@/components/ui/DiscoverButton";
import { achievementsImageSrc, contactNavLinks } from "@/constants/contact";
import { ContactNav } from "@/types/contact";
import Image from "next/image";

export default function AchivContact() {

    const ContactNavBox = ({title, links, uppercase} : ContactNav) => {
        return (
            <div className="h-full w-80 pt-10">
                <div className="w-full flex flex-col items-start justify-start text-white gap-y-2">
                    <p className="font-ultramega-test font-normal text-2xl">{title}</p>
                    <div className="h-0.5 w-full bg-white/50"/>
                    {  
                        links.map((link, index)=> {
                            if (typeof link === 'object') {
                                return <Image key={link.alt} {...link} alt={link.alt}/>
                            }
                            else {
                                return <p key={link + index} className={`font-mundial-narrow font-light tracking-wide text-xs text-white/50 whitespace-pre-line ${uppercase && "uppercase"} tracking-widest`}>{link}</p>;
                            }
                        })
                    }
                </div>
            </div>
        );
    }

    return (
            <div className="w-screen h-screen bg-gradientPlusImage bg-cover bg-[center_55%] grid grid-rows-10 p-8">
                <div id="réalisation" className="row-start-1 row-span-6 bg-white grid grid-rows-4 p-20">
                    <div className="row-start-1 row-span-1 flex flex-row justify-between items-center mb-20">
                        <p className="font-ultramega-test font-normal text-black text-4xl">Découvrez nos <span className="text-hooker-green">réalisations</span></p>
                        <DiscoverButton/>
                    </div>
                    <div className="row-span-4 flex flex-row justify-between items-center">
                        {
                            achievementsImageSrc.map((src)=>
                                <div key={src} className="relative w-44 h-44">
                                    <Image
                                        key={src}
                                        src={src}
                                        alt={`src: ${src}`}
                                        fill
                                    />
                                </div>
                            )
                        }
                    </div>
                </div>
                <div id="contact" className="row-span-4 flex flex-row justify-between items-center">
                    <Image
                        src={"/images/sulare_energia_logo.png"}
                        alt="Sulare Energia logo"
                        width={330}
                        height={110}
                    />
                    {
                        contactNavLinks.map((contactData) => 
                            <ContactNavBox key={contactData.title} {...contactData}/>
                        )
                    }
                </div>
            </div>
    );
}