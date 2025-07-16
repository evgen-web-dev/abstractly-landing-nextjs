"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { type NavLink } from "./types";



type NavLinkProps = PropsWithChildren<NavLink>;

export default function NavLink({ href, title, ignoreIsActive}: NavLinkProps) {

    const path = usePathname();
    const isLinkActive = !ignoreIsActive && path.startsWith(href);

    return (
        <>
            <Link className={(isLinkActive ? 'active' : '') + " text-neutral-600 hover:text-black focus:text-black anchor-button-focus py-0.5 px-1"} href={href}>{title}</Link>
        </>
    )
}
