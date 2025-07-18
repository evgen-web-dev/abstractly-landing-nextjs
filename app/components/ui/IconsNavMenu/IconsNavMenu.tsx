import { ComponentProps, PropsWithChildren } from "react"
import { type IconNavLink } from "./types"
import Link from "next/link"
import Image from "next/image";



type IconsNavMenuProps = PropsWithChildren<{
    menuItems: IconNavLink[]
} & ComponentProps<'div'>>


export default function IconsNavMenu({ menuItems, className }: IconsNavMenuProps) {

    return (
        <>
            <div className={className}>
                {menuItems && menuItems.map((curMenuItem: IconNavLink, index: number) => (
                    <Link href={curMenuItem.linkHref} key={index}>
                        <Image className="h-auto aspect-square" src={curMenuItem.iconUrl} alt="" width={22} height={22} />
                    </Link>
                ))}
            </div>
        </>
    )

}


