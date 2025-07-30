import { ComponentPropsWithoutRef } from "react";
import Container from "../../ui/Container/Container";
import { type InfoCard as InfoCardData } from "../../ui/InfoCard/types";
import { type SectionHeading as SectionHeadingData } from "../../ui/SectionHeading/types";
import { type Image as ImageData } from "../../ui/types";
import InfoCard from "../../ui/InfoCard/InfoCard";
import Image from "next/image";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";


export type ImageInfoProps = {
    sectionHeading: SectionHeadingData; // our custom type
    gridItems: InfoCardData[]; // our custom type
    image: ImageData; // out custom type
    imagePosition: "left" | "right";
} & ComponentPropsWithoutRef<'div'>


export default function ImageInfo({ sectionHeading, gridItems, image, imagePosition, className }: ImageInfoProps) {


    return (
        <Container className={className || ""}>
            <SectionHeading {...sectionHeading} />

            <div className={"mt-14 flex flex-wrap lg:flex-nowrap gap-8" + (imagePosition === 'left' ? ' flex-col-reverse lg:flex-row-reverse' : '') }>
                <div className="flex flex-col gap-6 md:gap-12 w-full lg:w-1/2">
                    {gridItems && gridItems.map((item, index) => <InfoCard key={index} {...item} />)}
                </div>

                <div className="w-full lg:w-1/2">
                    <Image {...image} className="w-full rounded-md shadow-lg" quality={100} />
                </div>
            </div>
        </Container>
    )
}