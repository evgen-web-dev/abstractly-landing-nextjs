import { StaticImageData } from "next/image";

type VariativeSourceImage = {
    src: string | StaticImageData;
    width: number;
    height: number;
} | {
    src: StaticImageData
}

export type Image = VariativeSourceImage & { alt: string };