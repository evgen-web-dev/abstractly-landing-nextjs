import CircleIcon from "../CircleIcon/CircleIcon";
import { type InfoCard } from "./types";



type InfoCardProps = InfoCard;


export default function InfoCard({ icon, heading, text, layoutType = 'vertical' }: InfoCardProps) {

    return (
        <div className={"flex gap-4 lg:gap-6 " + (layoutType === 'horizontal' ? 'flex-row items-start' : 'flex-col items-center text-center')}>
            <CircleIcon {...icon} className="shrink basis-auto" />
            <div className={layoutType ===  'horizontal' ? 'pt-2 lg:pt-3.5 grow basis-auto' : ''}>
                <h2 className="!text-[20px] font-semibold">{heading}</h2>
                <p className="mt-4">{text}</p>
            </div>
        </div>
    )
}