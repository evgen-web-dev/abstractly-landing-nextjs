import { type Image } from "../types"

export type ImageCarousel = {
    images: Image[],
    autoPlay?: boolean,
    infinite?: boolean,
    duration?: number,
    autoplaySpeed?: number,
}