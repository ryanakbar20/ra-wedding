import Image from "next/legacy/image";
import ButtonWhatsapp from "./ButtonWhatsapp";
import Title from "./Title";
import { poppins400 } from "@/fonts";

const About = () => {
  return (
    <div
      className="flex flex-col md:flex-row space-y-12 md:space-x-20"
      id="about"
    >
      <div className="flex flex-1 flex-col space-y-4 ">
        <Title>Tentang Kami</Title>
        <p
          className="text-xs md:text-sm text-gray-600 text-justify"
          style={poppins400.style}
        >
          RA Wedding Organizer adalah perusahaan persewaan tenda, Rias
          Pengantin, Catering, Tenda, dan Pelaminan. Kami juga menangani acara
          keluarga dan resepsi pernikahan. Selain menjalani core bisnis kami,
          dalam beberapa event kami juga mengambil bagian dalam pekerjaan total
          produksi event, meliputi pengorganisasian sound system, lighting
          system, power supply, AC, dan alat pendukung event lainnya.
        </p>
        <ButtonWhatsapp />
      </div>

      <div className="flex relative h-80 md:w-96">
        <Image
          src="/assets/images/bride.png"
          alt="bride-image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default About;
