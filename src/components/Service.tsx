import Image from "next/legacy/image";
import Title from "./Title";
import { poppins400 } from "@/fonts";
import Link from "next/link";

const serviceContents = [
  { label: "Rias Pengantin", imageUrl: "/assets/images/bride-2.png" },
  { label: "Catering", imageUrl: "/assets/images/catering.png" },
  { label: "Tenda", imageUrl: "/assets/images/tent-2.png" },
  { label: "Pelaminan", imageUrl: "/assets/images/tent-3.png" },
];

const Service = () => {
  return (
    <div className="flex flex-col space-y-12" id="service">
      <Title className="text-center">Layanan</Title>
      <div className="grid grid-rows-4 md:grid-rows-2 grid-flow-col gap-4">
        {serviceContents?.map((item, index) => (
          <Link
            key={index}
            href={`https://api.whatsapp.com/send?phone=6285883267106&text=Halo Admin, mau nanya nih tentang layanan ${item.label} di RA Wedding..`}
          >
            <div className="relative h-52 cursor-pointer">
              <Image
                src={item.imageUrl}
                alt={item.label}
                layout="fill"
                objectFit="cover"
              />
              <div
                className="absolute left-0 bottom-0 p-2"
                style={{ background: "rgba(255, 251, 213, 0.8)" }}
              >
                <p className="text-sm md:text-base" style={poppins400.style}>
                  {" "}
                  {item.label}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Service;
