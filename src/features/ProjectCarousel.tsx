'use client'

import { carouselTitles } from "@/constants/features";
import { carouselContentBoxList } from "@/constants/yourProjects";
import { CarouselNavModeEnum } from "@/types/features";
import { useState } from "react";

export default function ProjectCarousel() {
    const [carouselIndex, setCarouselIndex] = useState<number>(0);
    const [carouselNavMode, setCarouselNavMode] = useState<CarouselNavModeEnum>(CarouselNavModeEnum.Init)

    const changeIndex = (value:number) => {
        const newIndex = carouselIndex + value;
        const newMode = newIndex > carouselIndex ? CarouselNavModeEnum.Incr : CarouselNavModeEnum.Decr;
        if (newIndex >= 0 && newIndex < carouselTitles.length) {
            setCarouselIndex(newIndex);
            setCarouselNavMode(newMode);
        }
    };

    const getAnimationForContentBox = (index:number) => {
        if (carouselIndex === 0 && carouselNavMode === CarouselNavModeEnum.Init) {
            return index === carouselIndex ? "contentBoxVisible" : "contentBoxInvisible"
        }

        if (index === carouselIndex) {
            return carouselNavMode === CarouselNavModeEnum.Incr ? "animate-fromFadeOutToCenter" : "animate-fromBackToCenter";
        }
        else if (index === carouselIndex - 1) {
            return carouselNavMode === CarouselNavModeEnum.Incr ? "animate-fromCenterToBack" : "animate-fromFadeOutToBack";
        }
        else if (index === carouselIndex - 2 && carouselNavMode === CarouselNavModeEnum.Incr) {
            return "animate-fromBackToFadeOut";
        }
        else if (index === carouselIndex + 1 && carouselNavMode === CarouselNavModeEnum.Decr) {
            return "animate-fromCenterToFadeOut";
        }
        
        return index === carouselIndex ? "contentBoxVisible" : "contentBoxInvisible";
    };

    const SelectTitle = ({title, index} : {title:string, index:number}) => {
        return (
            <div className="w-full flex flex-col justify-evenly items-center">
                <p className={`font-ultramega-test font-bold text-3xl uppercase ${index === carouselIndex ? "text-white" : "text-gray-500"} transition-colors select-none my-8`}>
                    <span className="font-Cantry font-normal text-[18px]">0{index + 1}.</span>&nbsp;&nbsp;&nbsp;&nbsp;{title}
                </p>
                {
                    index < carouselTitles.length -1 && <div className="w-full h-0.5 bg-gray-300"/>
                }
            </div>
        );
    };

    const ContentBox = ({title, text, index} : {title?:string, text?:string, index:number}) => {

        return (
            <div className={`bg-water-park/80 p-18 flex flex-row justify-end items-center tracking-wide text-balance font-LTflodneue font-light absolute w-full backdrop-blur-md ${getAnimationForContentBox(index)}`}>
                <div className={`flex flex-col items-start justify-center pr-2 transition-opacity ${index === carouselIndex ? "opacity-100" : "opacity-0"}`}>
                    <p className="font-LTflodneue font-normal text-sm text-white tracking-widest">{title}</p>
                    <p className="font-LTflodneue font-light text-sm text-white/50 tracking-wide mt-8 text-balance">{text}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="w-full h-full grid grid-cols-5 gap-x-26">
            <div className="col-start-1 col-span-2 flex flex-row justify-end items-center gap-x-10">
                <div className="flex flex-col justify-center items-center gap-y-2">
                    <svg viewBox="0 0 24 24" className={`w-5 h-5 text-white cursor-pointer hover:w-5.5 hover:h-5.5 transition-all`} onClick={()=>changeIndex(-1)}>
                        <path d="M5 16h14L12 5z" fill="currentColor" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                    </svg>
                    <svg viewBox="0 0 24 24" className={`w-5 h-5 text-white cursor-pointer hover:w-5.5 hover:h-5.5 transition-all`} onClick={()=>changeIndex(1)}>
                        <path d="M5 8h14L12 19z" fill="currentColor" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="flex flex-col justify-center items-center">
                    {
                        carouselTitles.map((title,index)=>
                            <SelectTitle key={title + index} title={title} index={index}/>
                        )
                    }
                </div>
            </div>
            <div className="col-span-3 flex flex-row justify-center items-center relative">
                {
                    carouselContentBoxList.map((content, index)=> 
                        <ContentBox key={content.title + index} {...content} index={index}/>
                    )
                }
            </div>
        </div>
    );
}
