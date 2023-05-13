import Image from "next/legacy/image";
import ButtonWhatsapp from "./ButtonWhatsapp";
import Title from "./Title";
import { poppins400, poppins500 } from "@/fonts";
import Animation from "./Animation";

const excellents = [
  {
    label: "Profesional",
    description: "Kami memiliki tim ahli yang berpengalaman",
    icon: "/assets/icons/certificate.svg",
  },
  {
    label: "Hemat Biaya",
    description: "Dapatkan harga serta pelayanan terbaik kami",
    icon: "/assets/icons/money.svg",
  },
  {
    label: "Pilihan Lengkap",
    description: "Berbagai macam dekorasi dan alat pesta",
    icon: "/assets/icons/task.svg",
  },
  {
    label: "Kualitas Terbaik",
    description: "Dekorasi dan alat pesta kualitas terbaik",
    icon: "/assets/icons/complete.svg",
  },
];

const About = () => {
  return (
    <div className="flex flex-col space-y-12">
      <div
        className="flex flex-col md:flex-row space-y-12 md:space-x-20"
        id="about"
      >
        <Animation>
          <div className="flex flex-1 flex-col space-y-4 ">
            <Title>Tentang Kami</Title>
            <p
              className="text-xs md:text-sm text-gray-600 text-justify"
              style={poppins400.style}
            >
              RA Wedding Organizer adalah perusahaan persewaan tenda, Rias
              Pengantin, Catering, Tenda, dan Pelaminan. Kami juga menangani
              acara keluarga dan resepsi pernikahan. Selain menjalani core
              bisnis kami, dalam beberapa event kami juga mengambil bagian dalam
              pekerjaan total produksi event, meliputi pengorganisasian sound
              system, lighting system, power supply, AC, dan alat pendukung
              event lainnya.
            </p>
            <ButtonWhatsapp />
          </div>
        </Animation>

        <Animation>
          <div className="flex relative h-80 md:w-96">
            <Image
              src="/assets/images/bride.png"
              alt="bride-image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Animation>
      </div>

      <div className="flex flex-col space-y-12">
        <Title>Keunggulan Kami</Title>
        <div className="grid grid-rows-4 md:grid-rows-2 grid-flow-col gap-12 md:gap-4">
          {excellents?.map((item, index) => {
            return (
              <Animation key={index}>
                <div className="flex flex-col items-center text-center space-y-2 shadow-md border-1 border-gray-100 rounded-md p-4">
                  <div className="relative h-14 w-14 md:h-20 md:w-20">
                    <Image
                      src={item.icon}
                      alt="flat-icon"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <h3 className="text-sm md:text-base" style={poppins500.style}>
                    {item.label}
                  </h3>
                  <p
                    className="text-xs md:text-sm text-gray-700"
                    style={poppins400.style}
                  >
                    {item.description}
                  </p>
                </div>
              </Animation>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
