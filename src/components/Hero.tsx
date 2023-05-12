import Image from "next/legacy/image";
import ButtonWhatsapp from "./ButtonWhatsapp";
import { poppins600 } from "@/fonts";

const Hero = () => {
  return (
    <div className="pt-16 md:pt-20" id="home">
      <div className="w-full h-96 bg-gray-100 relative">
        <Image
          src="/assets/images/hero.png"
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
            style={{ background: "rgba(0, 0, 0, 0.15)", ...poppins600.style }}
          >
            Tenda Pengantin Premium
          </h2>
          <ButtonWhatsapp />
        </div>
      </div>
    </div>
  );
};

export default Hero;
