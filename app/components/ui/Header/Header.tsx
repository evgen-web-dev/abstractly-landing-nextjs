'use client';

import { ComponentPropsWithoutRef, PropsWithChildren, useEffect, useRef, useState } from "react"
import Container from "@/app/components/ui/Container/Container";
import logoImage from "@/public/Logo.svg";
import Image from "next/image";
import { type NavLink } from "@/app/components/ui/NavLink/types";
import Button from "../Button/Button";
import NavMenu from "../NavMenu/NavMenu";
import BurgerMenuIcon from "../BurgerMenuIcon/BurgerMenuIcon";
import Link from "next/link";
import useWindowScroll from "@/app/hooks/useWindowScroll";
import { scrollToElement } from "@/app/utils/utils";


type HeaderProps = PropsWithChildren<{
    navItems: NavLink[]
}> & ComponentPropsWithoutRef<'header'>


export default function Header({ navItems, className }: HeaderProps) {

    const [menuOpened, setMenuOpened] = useState<boolean>(false);

    const { y: yScroll } = useWindowScroll();
    const headerHeight = useRef<number>(0);
    const headerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        headerHeight.current = headerRef.current?.getBoundingClientRect().height || 0;
    }, [headerRef.current]);




    const commonGapClasses = 'gap-6 lg:gap-10 xl:gap-[96px]';

    return (
        <>
            <header ref={headerRef} className={"py-5" + (className ? ' ' + className : '') + (yScroll > headerHeight.current ? ' bg-white/90 shadow-md' : '')}>
                <Container>
                    <div className={"relative flex flex-wrap lg:flex-nowrap lg:items-center " + commonGapClasses} >
                        <Link href="#home"><Image src={logoImage} alt="logo" priority={true} /></Link>

                        <div className="absolute right-2 top-2 lg:!hidden">
                            <BurgerMenuIcon title="Menu" open={menuOpened} onClick={() => setMenuOpened((prevMenuOpened) => !prevMenuOpened)} />
                        </div>

                        <div className={"hidden flex-col w-full grow lg:flex lg:w-auto lg:items-center lg:flex-row " + commonGapClasses + (menuOpened ? ' !flex' : '')}
                            onClick={() => /* closing opened menu for responsive screens using event-bubbling after click on <Link /> anchor link */ setMenuOpened(false)}>

                            <NavMenu className={"flex flex-col flex-wrap lg:flex lg:flex-row lg:items-center gap-3 lg:gap-x-8 lg:gap-y-2 mr-auto"} menuItems={navItems} />

                            <div className={"flex gap-4"}>
                                <Button buttonType="anchor" href="#features" styleType="secondary">Learn More</Button>
                                <Button buttonType="anchor" href="#about-us">See More</Button>
                            </div>

                        </div>
                    </div>
                </Container>
            </header>
        </>
    )

}


