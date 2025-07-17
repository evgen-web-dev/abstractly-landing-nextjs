import { ComponentProps, PropsWithChildren, ReactNode } from "react";
import { type Button, } from "./types";

  

type ButtonProps = PropsWithChildren<Button> & ComponentProps<'button' | 'a'>;

export default function Button({ ...props }: ButtonProps) {

    let classes = `${props.className || ''} button button--${props?.styleType || 'primary'} font-medium py-3 px-7 anchor-button-focus whitespace-nowrap`;
    
    if (props.buttonType === "anchor") {
       return <a className={classes} href={props.href} title={props.title}>{props.children}</a>
    } 

    return <button className={classes} type={props.actionType} title={props.title}>{props.children}</button>
}
