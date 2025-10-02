import { ContactNav } from "@/types/contact";

export const achievementsImageSrc: string[] = [
    "/images/solar_panel1.png",
    "/images/solar_panel3.png",
    "/images/solar_panel2.png",
    "/images/bulb.png",
    "/images/solar_panel4.png"
];

export const contactNavLinks: ContactNav[] = [
    {
        title: "Informations",
        links: [
            "accueil",
            "bureau d'étude",
            "photovoltaïque",
            "bornes de recharges",
            "aides",
            "réalisation",
            "contact"
        ],
        uppercase: true
    },
    {
        title: "Contact",
        links: [
            "1356 via de suvale",
            "chemin de torra 20290",
            "Lucciana",
            "\u00A0",
            "06 25 85 39 68",
            "\u00A0",
            "contact-enr@sastpa.fr"
        ],
        uppercase: true
    },
    {
        title: "Réalisation",
        links: [
            {
                height: 50,
                width: 310,
                src: "/images/Edition_Corses_Logo.png",
                alt: "Les éditions Corses Logo"
            },
            "© 2025 - Les Editions Corses\nMarque déposée\ncertifié google analytics",
            "Mentions légales"
        ]
    }
];