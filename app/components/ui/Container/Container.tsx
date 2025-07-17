import { ComponentProps, PropsWithChildren, ReactNode } from "react";
import { type Container } from "./types";

  

type ContainerProps = PropsWithChildren<Container> & ComponentProps<'div'>;

export default function Container({ children, isFullWidth }: ContainerProps) {



    return (
        <>
            <div className={(isFullWidth ? '' : 'max-w-[1232px] ') + "mx-auto px-4"}>{children}</div>
        </>
    )
}
