import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Hero = () => {
  return (
    <div className="pt-16 md:pt-20" id="home">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default Hero;
