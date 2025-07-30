import { ComponentProps } from "react";
import AccordionSection from "./AccordionSection/AccordionSection";
import ContactForm from "./ContactForm/ContactForm";
import ImageInfo from "./ImageInfo/ImageInfo";
import InfoGrid from "./InfoGrid/InfoGrid";
import LogosCarousel from "./LogosCarousel/LogosCarousel";
import SubscribeToUpdates from "./SubscribeToUpdates/SubscribeToUpdates";
import TextImageBanner from "./TextImageBanner/TextImageBanner";
import TiersInfo from "./TiersInfo/TiersInfo";



type SectionId = 'home' | 'features' | 'pricing' | 'about-us' | 'contact';




// ------------- NOTE ABOUT ADDING NEW SECTION ------------------
/*
    To add support for new section - just add it to sectionComponents object - all other types
    will update automatically.
*/
// ------------- NOTE ABOUT ADDING NEW SECTION ------------------




export const sectionComponents = {
    TextImageBanner,
    LogosCarousel,
    InfoGrid,
    ImageInfo,
    TiersInfo,
    AccordionSection,
    SubscribeToUpdates,
    ContactForm,
} as const;



export type AllSectionComponentsNames = keyof typeof sectionComponents;



export type AllSectionsPropsType = {
    [K in AllSectionComponentsNames]: ComponentProps<typeof sectionComponents[K]>
} 



export type AllSectionsElementsType = {
    [K in AllSectionComponentsNames]: typeof sectionComponents[K]
} 




// This is a shell for defining section's "raw"-data type for props for each of sections.
// With using AllSectionsPropsType and AllSectionsElementsType types we will be able to 
// create universal ("polimorphic") <BaseSection /> component to render ONLY section-related components specifically
type BaseSectionData<C extends AllSectionComponentsNames> = {
    elementType: C,
    sectionData: AllSectionsPropsType[C],
    sectionCssClasses?: string,
    sectionId?: SectionId
}



// In this type -> types for "raw"-data for props for each of sections should be merged together - 
// to correctly type and "type-guard" sectionsDummyDataItems[] (or any other data-containers which are of SectionData / SectionData[] and supposed to be 
// data-source for section-related components)
export type SectionData = {
    [K in AllSectionComponentsNames]: BaseSectionData<K>
} [ AllSectionComponentsNames ]