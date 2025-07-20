import { ComponentProps, PropsWithChildren } from "react";
import { type Container } from "./types";

  

type ContainerProps = PropsWithChildren<Container> & ComponentProps<'div'>;

export default function Container({ children, isFullWidth, className }: ContainerProps) {



    return (
        <>
            <div className={(className ? (className + ' ') : '') + ' ' +(isFullWidth ? '' : 'max-w-[1248px] ') + "mx-auto px-4"}>{children}</div>
        </>
    )
}
