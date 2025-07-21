
export function formatPrice(price: number, currency: string = 'USD') {
    return new Intl.NumberFormat("en-EN", { style: "currency", currency: currency }).format(
        price,
    );
}