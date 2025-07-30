import { ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from "react"
import Container from "@/app/components/ui/Container/Container";
import { type NavLink } from "@/app/components/ui/NavLink/types";
import { type IconNavLink } from "./types";
import NavMenu from "../NavMenu/NavMenu";
import IconNavMenu from "../IconsNavMenu/IconsNavMenu";


type FooterProps = PropsWithChildren<{
    navItems: NavLink[],
    socialLinks: IconNavLink[],
    bottomElement: ReactNode
}> & ComponentPropsWithoutRef<'footer'>


export default function Footer({ navItems, socialLinks, bottomElement, className }: FooterProps) {

    return (
        <>
            <footer className={"py-15 lg:p-24" + (className ? (' ' + className) : '')} >
                <Container>
                    <NavMenu className="flex flex-col lg:flex-row items-center justify-center gap-3 xl:gap-8" menuItems={navItems} />
                    <IconNavMenu className="mt-18 flex flex-wrap max-w-3/4 mx-auto items-center justify-center gap-5" menuItems={socialLinks} />
                    {bottomElement}
                </Container>
            </footer>
        </>
    )

}


