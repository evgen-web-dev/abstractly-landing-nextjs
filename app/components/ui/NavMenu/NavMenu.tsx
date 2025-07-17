import { ComponentProps, PropsWithChildren } from "react"
import { NavLink as NavLinkType } from "../NavLink/types"
import NavLink from "../NavLink/NavLink"



type NavMenuProps = PropsWithChildren<{
    menuItems: NavLinkType[]
} & ComponentProps<'ul'>>


export default function NavMenu({ menuItems, className }: NavMenuProps) {

    return (
        <>
            <ul className={className}>
                {menuItems && menuItems.map((curMenuItem: NavLinkType, index: number) => (
                    <li key={index}><NavLink ignoreIsActive={true} title={curMenuItem.title} href={curMenuItem.href}>{curMenuItem.title}</NavLink></li>
                ))}
            </ul>
        </>
    )

}


