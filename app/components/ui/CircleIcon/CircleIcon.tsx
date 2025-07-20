import { ComponentPropsWithoutRef } from "react";
import { type CircleIcon } from "./types";


type CircleIconProps = CircleIcon & ComponentPropsWithoutRef<'span'>;


export default function CircleIcon({ iconUrl, backgroundColor = '#ffffff', className }: CircleIconProps) {

    return (
        <>
            <span className={"relative inline-block w-10 h-10 min-w-10 min-h-10 lg:w-12 lg:h-12 lg:min-w-12 lg:min-h-12 rounded-full shadow" + (className ? (' ' + className) : '')} style={{
                backgroundColor: backgroundColor
            }}>
                <img src={iconUrl} alt="" className="absolute-center max-w-4.5 lg:max-w-6 h-auto" />
            </span>
        </>
    )
}