import { ComponentPropsWithoutRef } from "react";


type IconListProps = {
    listItems: string[];
} & ComponentPropsWithoutRef<'ul'>;


export default function IconList({ listItems, className }: IconListProps) {

    const iconSvg = (
        <svg className="max-w-8/10 block absolute-center" width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9004 2.39258L7 12.292L1.34375 6.63477L2.05078 5.92773L7.00098 10.8779L16.1934 1.68555L16.9004 2.39258Z" fill="#6366F1" stroke="#6366F1" />
        </svg>
    )


    return (
        <>
            {
                listItems && (
                    <ul className={"flex flex-col gap-4.5" + (className ? (' ' + className) : '')}>
                        {listItems.map((item, index) => (
                            <li key={index} className="inline-flex items-center gap-3 text-dark-secondary">
                                <span className="relative w-5 h-5 min-w-5 min-h-5 inline-flex rounded-full md:w-6 md:h-6 md:min-w-6 md:min-h-6 bg-indigo-50">{iconSvg}</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                )
            }
        </>
    )
}