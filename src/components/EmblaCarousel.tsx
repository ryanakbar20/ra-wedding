"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import {
  DotButton,
  PrevButton,
  NextButton,
} from "./EmblaCarouselArrowsDotsButtons";
import imageByIndex, { textByIndex } from "./imageByIndex";
import Image from "next/legacy/image";
import ButtonWhatsapp from "./ButtonWhatsapp";
import { poppins600 } from "@/fonts";
import Autoplay from "embla-carousel-autoplay";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 4000 }),
  ]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="w-full h-96 bg-gray-100 relative">
                  <Image
                    src={imageByIndex(index)}
                    alt="hero-image"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center space-y-4"
                    style={{ background: "rgba(0, 0, 0, 0.25)" }}
                  >
                    <h2
                      className="text-white text-xl md:text-3xl px-0.5"
                      style={{
                        background: "rgba(0, 0, 0, 0.15)",
                        ...poppins600.style,
                      }}
                    >
                      {textByIndex(index)}
                    </h2>
                    <ButtonWhatsapp />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};

export default EmblaCarousel;
