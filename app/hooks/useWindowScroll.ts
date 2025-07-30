import { useEffect, useState } from "react";



type WindowScrollPosition = {
    x: number, y: number
}


export default function useWindowScroll(): WindowScrollPosition {

    const [scrollPos, setScrollPos] = useState<WindowScrollPosition>({x: 0, y: 0});

    function handleScroll() {
        setScrollPos({x: window.scrollX, y: window.scrollY});
    }


    useEffect(() => {
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return scrollPos;
}