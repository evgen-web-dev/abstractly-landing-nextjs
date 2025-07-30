'use client';


import { type ImageCarousel } from "./types"
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image, { StaticImageData } from "next/image";
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";


type ImageCarouselProps = ImageCarousel & ComponentPropsWithoutRef<'div'>

/*

Slides per view and slide-indent are supposed to be set via:
1. Adding specific class for <ImageCarousel /> in its parent component
2. Adding values to --slides and --slide-indent css vars to control corresponsing params for embla carousel
for specific breakpoints, like here:

  .logos-carousel {
    --slide-indent: 30px;
    --slides: 1;

    @variant md {
      --slide-indent: 60px;
      --slides: 3;
    }
    @variant lg {
      --slide-indent: 80px;
      --slides: 6;
    }
  }

*/

export default function ImageCarousel({ images, autoPlay = false, infinite = false, duration = 25, autoplaySpeed = 4000, className = '' }: ImageCarouselProps) {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: infinite, align: 'start', duration: duration }, (autoPlay ? [Autoplay({
        delay: autoplaySpeed
    })] : []));

    const [adjustedImages, setAdjustedImages] = useState<ImageCarousel['images']>([...images.map(img => ({ ...img }))]);


    function checkIfEnoughContentForInfiniteLoop(): void {
        // Duplicaing images[] into adjustedImages[] until there will be enough content for ebmla engine to built infinite-loop carousel
        if (infinite && emblaApi?.internalEngine()?.options?.loop !== true) {
            setAdjustedImages((prevImages) => [...prevImages, ...images]);
        }
    }


    useEffect(() => {
        if (!emblaApi) return;

        checkIfEnoughContentForInfiniteLoop();
        emblaApi.on('reInit', checkIfEnoughContentForInfiniteLoop);

    }, [emblaApi]);


    return (
        <div className={"embla " + (className || '')} ref={emblaRef}>
            <div className="embla__container">
                {adjustedImages && adjustedImages.map((image, index) =>
                    <Image
                        key={typeof image.src === 'string' ? image.src : image.src.src + '-' + index}
                        className="embla__slide" {...image}
                        quality={100} unoptimized
                    />)}
            </div>
        </div>
    )
}
