import { ComponentProps, ComponentPropsWithoutRef } from "react"
import ImageCarousel from "../../ui/ImageCarousel/ImageCarousel"
import { Image } from "../../ui/types"
import Container from "../../ui/Container/Container"


export type LogosCarouselProps = {
    heading: string,
    logos: Image[]
}


export default function LogosCarousel({ heading, logos }: LogosCarouselProps) {


    return (
        <>
            <Container>
                <p className="text-center mb-8 lg:mb-12">{heading}</p>
            </Container>

            {logos && <ImageCarousel
                autoplaySpeed={3000}
                infinite={true}
                images={logos}
                autoPlay={true}
                className="logos-carousel mx-[22vw] md:mx-[10vw] lg:mx-0"
            />}
        </>
    )
}