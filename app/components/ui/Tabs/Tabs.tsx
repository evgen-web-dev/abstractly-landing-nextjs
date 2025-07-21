import { type ComponentPropsWithoutRef } from "react";
import Button from "../Button/Button";
import { type Tab } from "./types";


export type TabsProps<T extends string> = {
    tabs: Tab<T>[];
    onTabChange: (tabId: T) => void;
} & ComponentPropsWithoutRef<'ul'>;


export default function Tabs<K extends string>({ tabs, onTabChange, className }: TabsProps<K>) {

    return (
        <>
            {tabs
                && (
                    <ul className={"flex flex-wrap gap-5" + (className ? (' ' + className) : '')}>
                        {tabs.map(tab => (
                            <li key={tab.id}>
                                <Button onClick={() => onTabChange(tab.id)} 
                                    className={tab.isSelected ? '' : 'button--reset-style'}
                                    styleType="secondary" 
                                    buttonType="formButton" 
                                    actionType="button">{tab.text}</Button>
                            </li>
                        ))}
                    </ul>
                )
            }
        </>
    )
}