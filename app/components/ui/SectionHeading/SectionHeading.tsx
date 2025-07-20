import { ComponentProps } from "react";
import Heading from "../Heading/Heading"
import { type SectionHeading as SectionHeadingData } from "./types";

type SectionHeadingAlignment = 'center' | 'left' | 'right';

type SectionHeadingProps = SectionHeadingData & ComponentProps<'div'>


export default function SectionHeading({ heading, subheading, eyebrow, alignment = 'center', className }: SectionHeadingProps) {

    const alignmentClasses: Record<SectionHeadingAlignment, string> = {
        'center': 'items-center text-center ',
        'left': 'items-start text-left heading-adjust--left ',
        'right': 'items-end text-right heading-adjust--right ',
    }

    return (
        <div className={'flex flex-col ' + (alignmentClasses[alignment] || '') + (className || '')}>
            {eyebrow && <span className="text-primary text-base mt-5 font-semibold block mb-3">{eyebrow}</span>}
            <Heading {...heading} />
            {subheading && <p className="text-base mt-5 max-w-[700px]">{subheading}</p>}
        </div>
    )
}