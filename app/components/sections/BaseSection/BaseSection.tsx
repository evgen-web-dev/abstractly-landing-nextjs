import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { type AllSectionsElementsType } from "../types";


// Narrowing generic type here 
// to not use ElementType to extend T (which will allow "as" prop to accept any valid JSX identifier (name) - either 
// <BaseSection as="span" />, BaseSection as={TextImageBanner} />)

// BUT

// to force ourselves to use ONLY sections-related components, so "as" accepts only 
// our section-related components like BaseSection as={TextImageBanner}

type BaseSectionProps<T extends AllSectionsElementsType> = {
    as: T,
    children?: ReactNode
} & ComponentPropsWithoutRef<'section'>;


export default function BaseSection<C extends AllSectionsElementsType>({ as, children, className, ...props }: BaseSectionProps<C>) {

    // We are type-guarding element that can be passed via "as" props with the help of AllSectionsElementsType type, so
    // we can type-cast "as" as ElementType to convinse TS that we know what element SectionComponent is 
    // and what exact props SectionComponent is accepting

    const SectionComponent = as as ElementType;

    return (
        <section className={className}>
            <SectionComponent {...props}>{children}</SectionComponent>
        </section>
    )
}