import { type CircleIcon } from "./types";


type CircleIconProps = CircleIcon;


export default function CircleIcon({ iconUrl, backgroundColor = '#ffffff' }: CircleIconProps) {

    return (
        <>
            <span className="relative inline-block w-10 h-10 lg:w-12 lg:h-12 rounded-full shadow" style={{
                backgroundColor: backgroundColor
            }}>
                <img src={iconUrl} alt="" className="absolute-center max-w-4.5 lg:max-w-6 h-auto" />
            </span>
        </>
    )
}