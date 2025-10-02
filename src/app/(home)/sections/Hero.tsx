import Image from "next/image";

export default function Hero() {


    const TinyLink = ({text} : {text:string}) => {
        return (
            <div className="w-full flex flex-col text-white font-LTflodneue font-normal text-xs uppercase">
                <p>{text}</p>
                <div className="h-0.5 w-full bg-white/50"/>
            </div>
        );
    }

    return (
        <div id="accueil" className="w-screen h-screen bg-hero bg-cover bg-[center_40%] mb-8">
            <Image
                src="/images/hero_title.png"
                alt="Sulare Energie Title"
                width={1920}
                height={1020}
                className="absolute w-full h-full bottom-0 left-0 right-0 top-[-28px] animate-titleFadeIn"
            />
            <div className="w-full h-full flex flex-col justify-end px-16 z-10">
                <div className="grid grid-rows-1 grid-cols-2 mb-20 px-20">
                    <div className="flex flex-col items-start pr-2">
                        <p className="font-LTflodneue font-normal text-sm text-white">TITRE RÉFÉRENCEMENT</p>
                        <p className="font-LTflodneue font-light text-sm text-white/50 tracking-wide my-8 text-balance">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        </p>
                    </div>
                    <div className="w-60 h-50 grid grid-cols-1 grid-rows-6 bg-gray-400/30 backdrop-blur-xs p-6 justify-self-end">
                        <div className="row-start-1 row-span-1 flex flex-row justify-between items-center mb-6">
                            <p className="font-ultramega-test font-normal text-white text-lg">Notre Solution</p>
                            <Image width={20} height={20} src="/icons/arrow-top-right.svg" alt="Arrow top Right"/>
                        </div>
                        <div className="row-span-5 flex flex-col items-start gap-y-2 pr-6">
                            {
                                ["étude","installation","financement","maintenance","exploitation"].map((text)=>
                                    <TinyLink key={text} text={text}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}