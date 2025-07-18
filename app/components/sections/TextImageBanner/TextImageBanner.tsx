import Image from "next/image";
import { type Button as ButtonData } from "../../ui/Button/types";
import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import { type SectionHeading as SectionHeadingData } from "../../ui/SectionHeading/types";
import { type Image as ImageData } from "../../ui/types";
import Button from "../../ui/Button/Button";
import { type BaseSectionData } from "../types";
import { ComponentPropsWithoutRef } from "react";


export type TextImageBannerSectionData = BaseSectionData<typeof TextImageBanner, TextImageBannerProps>

export type TextImageBannerProps = {
    sectionHeading: SectionHeadingData; // our custom type
    firstButton: ButtonData; // our custom type
    secondButton: ButtonData; // our custom type
    image: ImageData; // out custom type
} & ComponentPropsWithoutRef<'div'>

export default function TextImageBanner({ sectionHeading, firstButton, secondButton, image }: TextImageBannerProps) {

    return (
        <Container className="py-12 md:py-18 xl:py-24">
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-12 lg:gap-5">
                <div className="w-full lg:w-[42%]" >
                    <SectionHeading {...sectionHeading} />

                    <div className="flex flex-wrap gap-4 items-center mt-12 lg:mt-7 xl:mt-14">
                        <Button {...firstButton}>{firstButton.title}</Button>
                        <Button {...secondButton}>{secondButton.title}</Button>
                    </div>
                </div>

                <Image className="w-full lg:w-[58%]" {...image} />
            </div>
        </Container>
    )
}