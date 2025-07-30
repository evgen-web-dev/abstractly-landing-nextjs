import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { AllSectionComponentsNames, sectionComponents } from "../types";


// Narrowing generic type here 
// to not use ElementType to extend T (which will allow "as" prop to accept any valid JSX identifier (name) - either 
// <BaseSection as="span" />, BaseSection as={TextImageBanner} />)

// BUT

// to force ourselves to use ONLY sections-related components, so "as" accepts only 
// our section-related components like BaseSection as={TextImageBanner}

type BaseSectionProps<T extends AllSectionComponentsNames> = {
    as: T,
    children?: ReactNode,
    sectionId?: string,
    cssClasses?: string
} & Omit<ComponentPropsWithoutRef<'section'>, 'id' | 'className'>;


export default function BaseSection<C extends AllSectionComponentsNames>({ as, children, cssClasses, sectionId, ...props }: BaseSectionProps<C>) {

    // We are type-guarding element that can be passed via "as" props with the help of AllSectionsElementsType type, so
    // we can type-cast "as" as ElementType to convinse TS that we know what element SectionComponent is 
    // and what exact props SectionComponent is accepting

    const SectionComponent = sectionComponents[as] as ElementType;

    return (
        <section id={sectionId} className={cssClasses}>
            <SectionComponent {...props}>{children}</SectionComponent>
        </section>
    )
}