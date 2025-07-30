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
import ImageInfo from "./ImageInfo/ImageInfo";
import infoImage from "@/public/sections/info-image.png";
import infoImage2 from "@/public/sections/info-image-2.png";
import TiersInfo from "./TiersInfo/TiersInfo";
import AccordionSection from "./AccordionSection/AccordionSection";
import SubscribeToUpdates from "./SubscribeToUpdates/SubscribeToUpdates";
import subscribeToUpdatesImage from "@/public/sections/subscribe-to-updates.png";
import ContactForm from "./ContactForm/ContactForm";

export const sectionsDummyDataItems: SectionData[] = [
    {
        elementType: 'TextImageBanner',
        sectionId: 'home',
        sectionCssClasses: "py-12 md:py-18 xl:py-24",
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
                href: '#features',
                styleType: 'secondary',
                title: 'Learn More'
            },
            secondButton: {
                buttonType: 'anchor',
                href: '#pricing',
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
        elementType: 'LogosCarousel',
        sectionCssClasses: "py-12 md:py-18 xl:py-24",
        sectionData: {
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
        elementType: 'InfoGrid',
        sectionId: 'features',
        sectionCssClasses: "py-12 md:py-18 xl:py-24",
        sectionData: {
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
                    icon: { iconUrl: "/sections/icons/download.svg" }
                },
                {
                    heading: 'Purely Handcrafted',
                    text: "No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.",
                    icon: { iconUrl: "/sections/icons/brush.svg" }
                },
                {
                    heading: 'All Are Under licensed',
                    text: "The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).",
                    icon: { iconUrl: "/sections/icons/copyright.svg" }
                },
                {
                    heading: 'Cancel Anytime',
                    text: "Subscribe at your own pace, and cancel when you feel it's enough.",
                    icon: { iconUrl: "/sections/icons/refund.svg" }
                },
                {
                    heading: 'Empowering For Team',
                    text: "We support multiple seats at once, requiring only a single payment.",
                    icon: { iconUrl: "/sections/icons/team.svg" }
                },
                {
                    heading: 'No Limitations',
                    text: "Use as many as you want, from Dribbble presentations to PowerPoint presentations.",
                    icon: { iconUrl: "/sections/icons/refresh.svg" }
                }
            ]
        }
    },
    {
        elementType: 'ImageInfo',
        sectionId: 'about-us',
        sectionCssClasses: "py-12 md:py-18 xl:py-24",
        sectionData: {
            sectionHeading: {
                heading: {
                    headingTag: 'h2',
                    text: 'For designers, by designers'
                },
                subheading: 'Unleash boundless creativity with a large repository of images optimized for designers',
                eyebrow: 'High quality images',
                alignment: 'center'
            },
            gridItems: [
                {
                    layoutType: 'horizontal',
                    heading: "5K resolution support",
                    text: "All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.",
                    icon: { iconUrl: "/sections/icons/hd-quality.svg" }
                },
                {
                    layoutType: 'horizontal',
                    heading: 'From water to glass',
                    text: "We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector.",
                    icon: { iconUrl: "/sections/icons/water-percent.svg" }
                },
                {
                    layoutType: 'horizontal',
                    heading: 'Portrait or landscape',
                    text: "Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories.",
                    icon: { iconUrl: "/sections/icons/rainbow.svg" }
                },
            ],
            image: {
                src: infoImage,
                alt: 'info image'
            },
            imagePosition: 'right'
        }
    },
    {
        elementType: 'ImageInfo',
        sectionCssClasses: "py-12 md:py-18 xl:py-24",
        sectionData: {
            sectionHeading: {
                heading: {
                    headingTag: 'h2',
                    text: "Convenience and licensing that empowers"
                },
                subheading: "In a world where storytelling constantly evolves,don't let licensing and poor support hold you down.",
                eyebrow: "Best-in-class support",
                alignment: "center"
            },
            gridItems: [
                {
                    layoutType: 'horizontal',
                    heading: "Faster downloads",
                    text: "Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience.",
                    icon: { iconUrl: "/sections/icons/rocket.svg" }
                },
                {
                    layoutType: 'horizontal',
                    heading: "Convenience for teams",
                    text: "Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity.",
                    icon: { iconUrl: "/sections/icons/p2p.svg" }
                },
                {
                    layoutType: 'horizontal',
                    heading: 'Royalty-free licensing',
                    text: "Our straightforward, royalty-free licensing means your chosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project.",
                    icon: { iconUrl: "/sections/icons/copyright.svg" }
                },
            ],
            image: {
                src: infoImage2,
                alt: 'info image 2'
            },
            imagePosition: 'left'
        }
    },
    {
        elementType: 'TiersInfo',
        sectionId: 'pricing',
        sectionCssClasses: "py-12 md:py-18",
        sectionData: {
            sectionHeading: {
                heading: {
                    headingTag: 'h2',
                    text: "Fit for all your needs"
                },
                subheading: "Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out.",
                eyebrow: "Pricing Tiers",
                alignment: 'center'
            },
            tiers: [
                {
                    id: 'basic-plan',
                    name: 'Basic Plan', description: 'Access to a curated selection of abstract images',
                    featuresList: [
                        'Standard quality images',
                        'Limited to personal use',
                        'Email support'
                    ],
                    prices: {
                        'monthly': { amount: 9.99, currency: "USD", type: "monthly" },
                        'annual': { amount: 98.99, currency: "USD", type: "annual" },
                    },
                    isFeatured: false
                },
                {
                    id: 'standard-plan',
                    name: 'Standard Plan', description: 'Next-level Integrations, priced economically',
                    featuresList: [
                        'Expanded library with more diverse abstract images',
                        'High-resolution images available',
                        'Suitable for commercial use',
                        'Priority email support',
                        'Advanced analytics',
                    ],
                    prices: {
                        'monthly': { amount: 19.99, currency: "USD", type: "monthly" },
                        'annual': { amount: 148.99, currency: "USD", type: "annual" },
                    },
                    isFeatured: true,
                },
                {
                    id: 'premium-plan',
                    name: 'Premium Plan', description: 'Access to a curated selection of abstract images',
                    featuresList: [
                        'Full access to the entire image library, including exclusive content',
                        'Highest quality images, including premium collections',
                        'Commercial and resale rights',
                        'Dedicated customer support line',
                        '24/7 support response time',
                        'Advanced analytics and insights'
                    ],
                    prices: {
                        'monthly': { amount: 39.99, currency: "USD", type: "monthly" },
                        'annual': { amount: 189.99, currency: "USD", type: "annual" },
                    },
                    isFeatured: false
                }
            ]
        }
    },
    {
        elementType: 'AccordionSection',
        sectionCssClasses: "py-12 md:py-18",
        sectionData: {
            sectionHeading: {
                heading: {
                    headingTag: 'h2',
                    text: 'Frequently asked questions'
                },
                subheading: 'Choose any questions you need',
                alignment: 'center'
            },
            accordionItems: [
                {
                    id: 'item-1',
                    title: "What types of images are available on your platform?",
                    content: "Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes.",
                    isOpened: true
                },
                {
                    id: 'item-2',
                    title: "How can I access and download images from your platform?",
                    content: "Accessing and downloading images from our platform is simple. Upon signing up and logging in, users can browse through our curated collection and download their chosen images directly to their devices with just a few clicks.",
                    isOpened: false
                },
                {
                    id: 'item-3',
                    title: "Do you offer free images, or is there a subscription required?",
                    content: "We provide both free and premium images on our platform. Users can explore a selection of free images without any subscription. For access to our entire library and additional features, we offer subscription plans tailored to different user needs.",
                    isOpened: false
                },
                {
                    id: 'item-4',
                    title: "Do you offer free images, or is there a subscription required?",
                    content: "We accept a variety of payment methods, including credit/debit cards and online payment gateways, to make the subscription process convenient for our users.",
                    isOpened: false
                },
                {
                    id: 'item-5',
                    title: "Can I cancel or modify my subscription at any time?",
                    content: "Yes, absolutely. You have the flexibility to cancel or modify your subscription at any time through your account settings. Changes will take effect immediately, ensuring you have full control over your subscription preferences.",
                    isOpened: false
                },
                {
                    id: 'item-6',
                    title: "How frequently do you update your image collection?",
                    content: "We regularly update our image collection with fresh and captivating content to keep our users inspired and engaged. New images are added consistently to ensure there's always something new to discover on our platform.",
                    isOpened: false
                }
            ],
            ctaBannerData: {
                bannerTitle: {
                    headingTag: 'h2',
                    text: "Can't find the answer you're looking for?"
                },
                button: {
                    buttonType: 'anchor',
                    href: '#contact',
                    styleType: 'primary',
                    title: 'Get in touch'
                },
                text: "Reach out to our customer support team."
            }
        }
    },
    {
        elementType: 'SubscribeToUpdates',
        sectionCssClasses: "py-12 md:py-18 xl:py-24",
        sectionData: {
            sectionHeading: {
                alignment: 'left',
                heading: {
                    headingTag: 'h2',
                    text: "Get the finest curated abstracts delivered weekly to your inbox"
                },
            },
            listItems: [
                "Exclusive access to new abstract images and collections",
                "Unlock special promotions only for subscribers",
                "Regular doses of artistic inspiration",
            ],
            formData: {
                fields: [
                    {
                        fieldElement: 'input',
                        fieldProps: {
                            placeholder: 'example@example.com',
                            autoComplete: 'off',
                            type: 'email',
                        },
                        fieldConfig: {
                            name: 'email',
                            label: 'Email',
                            showLabel: false,
                            registerOptions: {
                                value: '',
                                required: {
                                    value: true, message: 'This field is required'
                                }
                            },
                        },
                    },
                ],
                fieldsContainerClass: "grow",
                formContainerClass: "flex gap-4 md:gap-2.5 items-center flex-wrap md:flex-nowrap",
                submitButtonData: { cssClasses: '!py-2 !px-4', caption: 'Subscribe' },
            },
            image: {
                src: subscribeToUpdatesImage,
                alt: 'subscibe to updates'
            }
        }
    },
    {
        elementType: 'ContactForm',
        sectionId: 'contact',
        sectionCssClasses: "py-12 md:py-18 xl:py-24",
        sectionData: {
            sectionHeading: {
                alignment: 'left',
                heading: {
                    headingTag: 'h2',
                    text: "Talk to our team",
                },
                subheading: "We're committed to delivering the support you require to make your experience as smooth as possible."
            },
            contactDataRows: [
                { icon: { iconUrl: "/sections/icons/building.svg" }, content: "123 Maple Street, Springfield, IL, USA" },
                { icon: { iconUrl: "/sections/icons/phone.svg" }, content: "+1 (650) 555-0198" },
                { icon: { iconUrl: "/sections/icons/mail.svg" }, content: "hello@abstractly.com" }
            ],
            formData: {
                fieldsContainerClass: "lg:grid-cols-2 gap-7 lg:gap-9",
                submitButtonData: {
                    caption: 'Submit', cssClasses: "w-full mt-10 lg:mt-18 text-center justify-center"
                },
                fields: [
                    {
                        fieldElement: 'input',
                        fieldProps: {
                            placeholder: 'Name',
                            autoComplete: 'off',
                            type: 'text'
                        },
                        fieldConfig: {
                            name: 'fullName',
                            label: 'Name',
                            registerOptions: {
                                value: '',
                                required: {
                                    value: true, message: 'This field is required'
                                }
                            }
                        }
                    },
                    {
                        fieldElement: 'input',
                        fieldProps: {
                            placeholder: 'example@example.com',
                            autoComplete: 'off',
                            type: 'email'
                        },
                        fieldConfig: {
                            name: 'email',
                            label: 'Email',
                            registerOptions: {
                                value: '',
                                required: {
                                    value: true, message: 'This field is required'
                                }
                            }
                        }
                    },
                    {
                        fieldElement: 'textarea',
                        fieldProps: {
                            placeholder: 'Message',
                            autoComplete: 'off',
                        },
                        fieldConfig: {
                            name: 'message',
                            label: 'Message',
                            registerOptions: {
                                value: '',
                                maxLength: {
                                    value: 500, message: 'Maximum length for this field is 500 symbols'
                                }
                            }
                        },
                        cssClassName: "lg:col-span-2"
                    },
                ],
                
            },
            
        }
    }
]