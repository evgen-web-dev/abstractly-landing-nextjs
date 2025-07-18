import TextImageBanner, { TextImageBannerSectionData, type TextImageBannerProps } from "./TextImageBanner/TextImageBanner";

// in this type -> all sections component's props types should be merged to define a union type of props for all sections
export type AllSectionsPropsType = TextImageBannerProps;



// in this type -> all sections component's definitions should be merged to define a union type of props for all sections
export type AllSectionsElementsType = typeof TextImageBanner;



// This is a shell for defining section's "raw"-data type for props for each of sections.
// With using AllSectionsPropsType and AllSectionsElementsType types we will be able to 
// create universal ("polimorphic") <BaseSection /> component to render ONLY sections specifically
export type BaseSectionData<E extends AllSectionsElementsType, S extends AllSectionsPropsType> = {
    elementType: E,
    sectionData: S
}


// in this type -> types for "raw"-data for props for each of sectios should be merged together
export type SectionData = TextImageBannerSectionData;