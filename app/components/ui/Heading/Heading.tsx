import { ComponentProps } from "react";
import { type AllHeadingTags, type Heading as HeadingData } from "./types"


type HeadingProps = HeadingData & ComponentProps<AllHeadingTags>;


export default function Heading({ text, headingTag }: HeadingProps) {

    const HeadingComponent = headingTag || 'h2';

    return (
        <HeadingComponent>{text}</HeadingComponent>
    )
}