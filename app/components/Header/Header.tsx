'use client';

import { PropsWithChildren, useState } from "react"
import Container from "@/app/components/Container/Container";
import logoImage from "@/public/Logo.svg";
import Image from "next/image";
import { type NavLink } from "@/app/components/NavLink/types";
import Button from "../Button/Button";
import NavMenu from "../NavMenu/NavMenu";
import BurgerMenuIcon from "../BurgerMenuIcon/BurgerMenuIcon";
import Link from "next/link";


type HeaderProps = PropsWithChildren<{
    navItems: NavLink[]
}>


export default function Header({ navItems }: HeaderProps) {

    const [menuOpened, setMenuOpened] = useState<boolean>(false);

    const commonGapClasses = 'gap-6 lg:gap-10 xl:gap-[96px]';

    return (
        <>
            <header className="py-5">
                <Container>
                    <div className={"relative flex flex-wrap lg:flex-nowrap lg:items-center " + commonGapClasses}>
                        <Link href="/"><Image src={logoImage} alt="logo" priority={true} /></Link>

                        <div className="absolute right-2 top-2 lg:!hidden">
                            <BurgerMenuIcon title="Menu" open={menuOpened} onClick={() => setMenuOpened((prevMenuOpened) => !prevMenuOpened)} />
                        </div>

                        <div className={"hidden flex-col w-full grow lg:flex lg:w-auto lg:items-center lg:flex-row " + commonGapClasses + (menuOpened ? ' !flex' : '')}>
                            <NavMenu className={"flex flex-col flex-wrap lg:flex lg:flex-row lg:items-center gap-3 lg:gap-x-8 lg:gap-y-2 mr-auto"} menuItems={navItems} />

                            <div className={"flex gap-4"}>
                                <Button buttonType="formButton" actionType="button" styleType="secondary">Learn More</Button>
                                <Button buttonType="formButton" actionType="button">See More</Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    )

}


