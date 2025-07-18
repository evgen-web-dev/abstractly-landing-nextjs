import TextImageBanner from "./TextImageBanner/TextImageBanner";
import { type SectionData } from "./types";
import heroImage from "@/public/sections/hero-image.png";

export const sectionsDummyDataItems: SectionData[] = [
    {
        elementType: TextImageBanner,
        sectionData: {
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
    }
]