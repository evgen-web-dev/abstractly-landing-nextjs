import LogosCarousel from "./LogosCarousel/LogosCarousel";
import TextImageBanner from "./TextImageBanner/TextImageBanner";
import { type SectionData } from "./types";
import heroImage from "@/public/sections/hero-image.png";
import wanNain from "@/public/sections/logos/win-nain.svg";
import swapdo from "@/public/sections/logos/swapdo.svg";
import robinwood from "@/public/sections/logos/robinwood.svg";
import makroHard from "@/public/sections/logos/makro-hard.svg";
import diamond from "@/public/sections/logos/diamond.svg";
import airCar from "@/public/sections/logos/air-car.svg";
import InfoGrid from "./InfoGrid/InfoGrid";

export const sectionsDummyDataItems: SectionData[] = [
    {
        elementType: TextImageBanner,
        sectionData: {
            className: "py-12 md:py-18 xl:py-24",
            sectionHeading: {
                heading: {
                    headingTag: 'h1',
                    text: 'Well crafted abstract images'
                },
                subheading: 'High quality abstract images for your projects, wallpaper and presentations.',
                alignment: 'left'
            },
            firstButton: {
                buttonType: 'anchor',
                href: '#learn-more',
                styleType: 'secondary',
                title: 'Learn More'
            },
            secondButton: {
                buttonType: 'anchor',
                href: '#see-pricing',
                styleType: 'primary',
                title: 'See Pricing'
            },
            image: {
                src: heroImage,
                alt: 'hero image'
            }
        }
    },
    {
        elementType: LogosCarousel,
        sectionData: {
            className: "py-12 md:py-18 xl:py-24",
            heading: 'Used by teams that you love',
            logos: [
                { src: wanNain, alt: '' }, 
                { src: robinwood, alt: '' },
                { src: swapdo, alt: '' },
                { src: diamond, alt: '' },
                { src: airCar, alt: '' },
                { src: makroHard, alt: '' }
            ],
        }
    },
    {
        elementType: InfoGrid,
        sectionData: {
            className: "py-12 md:py-18 xl:py-24",
            sectionHeading: {
                heading: {
                    headingTag: 'h2',
                    text: "Easy access to top quality image"
                },
                eyebrow: "Premium abstract images",
                subheading: "In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence.",
                alignment: "center"
            },
            gridItems: [
                { 
                    heading: "Infinite Download", 
                    text: "Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.", 
                    icon: {iconUrl: "/sections/icons/download.svg"} 
                },
                { 
                    heading: 'Purely Handcrafted', 
                    text: "No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.", 
                    icon: {iconUrl: "/sections/icons/brush.svg"} 
                },
                { 
                    heading: 'All Are Under licensed', 
                    text: "The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).", 
                    icon: {iconUrl: "/sections/icons/copyright.svg"} 
                },
                { 
                    heading: 'Cancel Anytime', 
                    text: "Subscribe at your own pace, and cancel when you feel it's enough.", 
                    icon: {iconUrl: "/sections/icons/refund.svg"} 
                },
                { 
                    heading: 'Empowering For Team', 
                    text: "We support multiple seats at once, requiring only a single payment.", 
                    icon: {iconUrl: "/sections/icons/team.svg"} 
                },
                { 
                    heading: 'No Limitations', 
                    text: "Use as many as you want, from Dribbble presentations to PowerPoint presentations.", 
                    icon: {iconUrl: "/sections/icons/refresh.svg"} 
                }
            ]
        }
    }
]