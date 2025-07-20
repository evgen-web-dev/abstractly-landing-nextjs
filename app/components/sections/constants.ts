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
    }
]