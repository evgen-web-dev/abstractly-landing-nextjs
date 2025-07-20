import { ComponentPropsWithoutRef } from "react";
import Container from "../../ui/Container/Container";
import InfoCard from "../../ui/InfoCard/InfoCard";
import { type InfoCard as InfoCardData } from "../../ui/InfoCard/types";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import { type SectionHeading as SectionHeadingData } from "../../ui/SectionHeading/types";


export type InfoGridProps = {
    sectionHeading: SectionHeadingData;
    gridItems: InfoCardData[];
} & ComponentPropsWithoutRef<'div'>


export default function InfoGrid({ sectionHeading, gridItems, className }: InfoGridProps) {

    return (
        <Container className={className || ''}>
            <SectionHeading {...sectionHeading} />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-11 lg:gap-y-15 mt-10 lg:mt-14">
                {gridItems && gridItems.map((item, index) => <InfoCard key={index} {...item} />)}
            </div>
        </Container>
    )
}