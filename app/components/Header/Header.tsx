import { PropsWithChildren } from "react"
import Container from "@/app/components/Container/Container";
import logoImage from "@/public/Logo.svg";
import Image from "next/image";
import { type NavLink } from "@/app/components/NavLink/types";
import Button from "../Button/Button";
import NavMenu from "../NavMenu/NavMenu";


type HeaderProps = PropsWithChildren<{
    navItems: NavLink[]
}>


export default function Header({ navItems }: HeaderProps) {

    return (
        <>
            <header className="py-5">
                <Container>
                    <div className="flex items-center gap-10 xl:gap-[96px]">
                        <Image src={logoImage} alt="logo" priority={true} />
                    
                        <NavMenu className="flex items-center gap-3 xl:gap-8 mr-auto" menuItems={navItems} />

                        <div className="flex gap-4">
                            <Button buttonType="formButton" actionType="button" styleType="secondary">Learn More</Button>
                            <Button buttonType="formButton" actionType="button">See More</Button>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    )

}


