'use client';


import { ComponentPropsWithoutRef, useId, useRef } from "react";
import { AccordionItem } from "./types";


export type AccordionProps<T extends string> = {
    items: AccordionItem<T>[];
    onItemToggle: (itemId: T, isOpen: boolean) => void;
} & ComponentPropsWithoutRef<'div'>





export default function Accordion<K extends string>({ items, onItemToggle, className }: AccordionProps<K>) {


    return (
        <div className={"w-full flex flex-col" + (className ? ' ' + className : '')}>

            {items && (
                <dl className="w-full">
                    {items.map((item) => (
                        <div key={item.id} className="border-b-secondary-border border-b last:border-none mb-8 last:mb-0 pb-8 last:pb-0">
                            <dt className="font-semibold relative">
                                <button
                                    className="cursor-pointer text-left pr-10"
                                    onClick={() => onItemToggle(item.id, !item.isOpened)}
                                    aria-expanded={item.isOpened}
                                    aria-controls={`answer-${item.id}`}
                                    id={`question-${item.id}`} type="button">

                                    <span>{item.title}</span>

                                    <span className="absolute right-0 top-0.5 w-5 h-5">

                                        {/*close (minus) icon*/}
                                        <svg className={"max-w-full" + (item.isOpened ? ' block' : ' hidden')} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM5 9H15V11H5V9Z" fill="#A3A3A3" />
                                        </svg>

                                        {/*open (plus) icon*/}
                                        <svg className={"max-w-full" + (item.isOpened ? ' hidden' : ' block')} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="10" y1="15" x2="10" y2="5" stroke="#A3A3A3" strokeWidth="2" />
                                            <line x1="5" y1="10" x2="15" y2="10" stroke="#A3A3A3" strokeWidth="2" />
                                            <circle cx="10" cy="10" r="9" stroke="#A3A3A3" strokeWidth="2" />
                                        </svg>

                                    </span>
                                </button>
                            </dt>

                            <dd
                                role="region"
                                aria-labelledby={`question-${item.id}`}
                                id={`answer-${item.id}`}
                                className={"mt-4" + (item.isOpened ? '' : ' hidden')}>{item.content}</dd>
                        </div>
                    ))}
                </dl>
            )}

        </div>
    )
}