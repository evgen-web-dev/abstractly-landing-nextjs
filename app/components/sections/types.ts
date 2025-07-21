import AccordionSection, { AccordionSectionProps } from "./AccordionSection/AccordionSection";
import ImageInfo, { ImageInfoProps } from "./ImageInfo/ImageInfo";
import InfoGrid, { InfoGridProps } from "./InfoGrid/InfoGrid";
import LogosCarousel, { type LogosCarouselProps } from "./LogosCarousel/LogosCarousel";
import TextImageBanner, { type TextImageBannerProps } from "./TextImageBanner/TextImageBanner";
import TiersInfo, { TiersInfoProps } from "./TiersInfo/TiersInfo";

// in this type -> all sections component's props types should be merged to define a union type of props for all sections
export type AllSectionsPropsType = TextImageBannerProps
    | LogosCarouselProps
    | InfoGridProps
    | ImageInfoProps
    | TiersInfoProps
    | AccordionSectionProps



// in this type -> all sections component's definitions should be merged to define a union type of props for all sections
export type AllSectionsElementsType = typeof TextImageBanner
    | typeof LogosCarousel
    | typeof InfoGrid
    | typeof ImageInfo
    | typeof TiersInfo
    | typeof AccordionSection



// This is a shell for defining section's "raw"-data type for props for each of sections.
// With using AllSectionsPropsType and AllSectionsElementsType types we will be able to 
// create universal ("polimorphic") <BaseSection /> component to render ONLY section-related components specifically
export type BaseSectionData<E extends AllSectionsElementsType, S extends AllSectionsPropsType> = {
    elementType: E,
    sectionData: S
}



// In this type -> types for "raw"-data for props for each of sections should be merged together - 
// to correctly type and "type-guard" sectionsDummyDataItems[] (or any other data-containers which are of SectionData / SectionData[] and supposed to be 
// data-source for section-related components)
export type SectionData = BaseSectionData<typeof TextImageBanner, TextImageBannerProps>
    | BaseSectionData<typeof LogosCarousel, LogosCarouselProps>
    | BaseSectionData<typeof InfoGrid, InfoGridProps>
    | BaseSectionData<typeof ImageInfo, ImageInfoProps>
    | BaseSectionData<typeof TiersInfo, TiersInfoProps>
    | BaseSectionData<typeof AccordionSection, AccordionSectionProps>