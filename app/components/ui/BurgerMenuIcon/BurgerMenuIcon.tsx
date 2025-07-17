import { ComponentProps } from "react";
import styles from './BurgerMenuIcon.module.css';


type BurgerMenuIconProps = {
    open: boolean,
    title: string
} & ComponentProps<'button'>


export default function BurgerMenuIcon({ title, open, className, onClick }: BurgerMenuIconProps) {



    return (
        <button type="button" onClick={onClick} aria-label={title} className={styles.menuIcon + ' ' + (open ? (styles.opened + ' ') : '') + className}>
            <span></span>
        </button>
    )
}