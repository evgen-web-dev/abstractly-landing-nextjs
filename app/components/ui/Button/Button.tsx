
'use client';

import { ComponentProps, MouseEvent, MouseEventHandler, PropsWithChildren } from "react";
import { type Button } from "./types";

  

type ButtonProps = PropsWithChildren<Button> & ComponentProps<'button' | 'a'>;

export default function Button({ ...props }: ButtonProps) {

    let classes = `${props.className || ''} button button--${props?.styleType || 'primary'} font-medium py-3 px-7 anchor-button-focus whitespace-nowrap`;
    
    function handleClick<T>(e: MouseEvent<T>) {
        const onButtonClick = props.onClick as MouseEventHandler<T>;
        onButtonClick(e);
    }
    
    if (props.buttonType === "anchor") {
        // TODO: think of refactor <a> to <Link />
       return <a onClick={handleClick<HTMLAnchorElement>} className={classes} href={props.href} title={props.title}>{props.children}</a>
    } 

    return <button onClick={handleClick<HTMLButtonElement>} className={classes} type={props.actionType} title={props.title}>{props.children}</button>
}
