
export function formatPrice(price: number, currency: string = 'USD') {
    return new Intl.NumberFormat("en-EN", { style: "currency", currency: currency }).format(
        price,
    );
}


export function hasValue(...values: any[]): boolean {
    for (const val of values) {
        if (val === null || val === undefined) return false;
    }
    return true;

}


export function hasNumericValue(...values: any[]): boolean {
    for (const val of values) {
        if (!hasValue(val) || isNaN(val)) return false;
    }
    return true;
}



export function scrollToElement(target: HTMLElement | Element | number, topIndent: number = 0) {

    if (hasValue(target)) {
        let targetScrollToNumber: number | undefined;

        if (typeof target === "number") {
            targetScrollToNumber = target;
        }
        else if (hasValue(target) && "getBoundingClientRect" in target) {
            const elTopIndent = target.getBoundingClientRect().top;
            const pageScrollOffset = document.documentElement.scrollTop;
            targetScrollToNumber = pageScrollOffset + elTopIndent;
        }


        if (hasNumericValue(targetScrollToNumber)) {
            window.scrollTo({
                top: targetScrollToNumber! - (topIndent ?? 0),
                behavior: 'smooth'
            });
        }
    }
}