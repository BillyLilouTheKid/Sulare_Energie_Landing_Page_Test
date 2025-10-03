'use client'

import Image from "next/image";
import RegularButton from "./RegularButton";
import { navbarLink } from "@/constants/navbar";
import { useState } from "react";

export default function NavBar() {
    const [currentLinkSelected, setCurrentLinkSelected] = useState<string>("");

    const handleNav = (link: string) => {
        setCurrentLinkSelected(link);
    }


    return (
        <div className="w-screen px-4 flex flex-row justify-between items-center top-0 fixed overflow-hidden mt-6 z-10">
            <Image
              className="dark:invert"
              src="/images/sulare_energia_logo.png"
              alt="Sulare Energia logomark"
              width={136}
              height={46}
            />
            <div className="flex-1 flex flex-row justify-evenly items-center bg-yankees-blue/10 rounded-full py-3 uppercase mx-16 text-white font-LTflodneue font-normal">
                {
                    navbarLink.map((nav)=>
                        <a 
                            key={nav.title} 
                            href={nav.href}
                            className={`cursor-pointer ${nav.title === currentLinkSelected && "text-russian-green font-bold"}`}
                            onClick={()=>handleNav(nav.title)}
                        >
                            {nav.title}
                        </a>
                    )
                }
            </div>
            <RegularButton text="DEMANDER UN DEVIS"/>
        </div>
    );
}