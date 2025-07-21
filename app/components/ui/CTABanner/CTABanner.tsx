import { ComponentPropsWithoutRef } from "react";
import { CTABannerData } from "./types";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";


export type CTABannerProps = CTABannerData & ComponentPropsWithoutRef<'div'>;


export default function CTABanner({ bannerTitle, text, button, className }: CTABannerProps) {
    return (
        <div className={"flex items-center justify-between gap-6 flex-wrap lg:flex-nowrap border border-secondary-border rounded-lg shadow-md p-5 lg:p-8" + (className ? (' ' + className) : '')}>
            <div>
                <Heading headingTag={bannerTitle.headingTag} text={bannerTitle.text} className="!text-xl font-semibold" />
                {text && <p className="mt-2">{text}</p>}
            </div>

            <Button {...button}>{button.title}</Button>
        </div>
    )
}