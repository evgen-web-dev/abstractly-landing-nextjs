'use client';


import { ComponentPropsWithoutRef, useId, useState } from "react";
import { AccordionItem } from "../../ui/Accordion/types";
import Container from "../../ui/Container/Container";
import { CTABannerData } from "../../ui/CTABanner/types";
import { type SectionHeading as SectionHeadingData } from "../../ui/SectionHeading/types";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import Accordion from "../../ui/Accordion/Accordion";
import CTABanner from "../../ui/CTABanner/CTABanner";



export type AccordionSectionProps = {
    sectionHeading: SectionHeadingData;
    accordionItems: AccordionItem<string>[];
    ctaBannerData: CTABannerData;
} & ComponentPropsWithoutRef<'div'>


export default function AccordionSection({ sectionHeading, accordionItems, ctaBannerData, className }: AccordionSectionProps) {

    const accordionId = useId();
    const [items, setItems] = useState<AccordionItem<string>[]>(accordionItems.map((item, index) => ({...item, id: item.id + '-i-' + index + '-' + accordionId})));

    return (
        <Container className={className || ''}>
            <SectionHeading {...sectionHeading} />
            <Accordion
                className="mt-18"
                items={items}
                onItemToggle={(itemId, isOpen) => setItems(prevItems => prevItems.map(item => (item.id === itemId ? { ...item, isOpened: isOpen } : item)))} 
            />
            <CTABanner className="mt-10" {...ctaBannerData} />
        </Container>
    )
}