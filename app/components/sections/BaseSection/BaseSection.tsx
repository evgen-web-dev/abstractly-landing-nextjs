import { ComponentPropsWithoutRef, ReactNode } from "react";
import { type AllSectionsElementsType } from "../types";


// Narrowing generic type here 
// to not use ElementType to extend T (which will allow "as" prop to accept any valid JSX identifier (name) - either 
// <BaseSection as="span" />, BaseSection as={TextImageBanner} />)

// BUT

// to force ourselves to use ONLY sections-related components, so "as" accepts only 
// our section-related components like BaseSection as={TextImageBanner}

type BaseSectionProps<T extends AllSectionsElementsType> = {
    as?: T,
    children?: ReactNode
} & ComponentPropsWithoutRef<T>;


export default function BaseSection<C extends AllSectionsElementsType>({ as, children, className, ...props }: BaseSectionProps<C>) {

    // 'div' is a fallback to ensure Ts that we always will have valid instance of AllSectionsElementsType passed in "as" prop 
    const SectionComponent = as || 'div';

    return (
        <section className={className}>
            <SectionComponent {...props}>{children}</SectionComponent>
        </section>
    )
}