import { ComponentProps } from "react";
import { AllHeadingTags, type HeadingType } from "./types"


type HeadingProps = HeadingType & ComponentProps<AllHeadingTags>;


export default function Heading({ text, headingTag: headingLevel }: HeadingProps) {

    const HeadingComponent = headingLevel;

    return (
        <HeadingComponent>{text}</HeadingComponent>
    )
}