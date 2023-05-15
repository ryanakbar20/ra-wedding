import Image from "next/legacy/image";
import Link from "next/link";
import { poppins500 } from "@/fonts";

const ButtonWhatsapp = () => {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=6285883267106&text=Halo Admin, mau nanya nih tentang layanan di RA Wedding.."
      rel="noopener noreferrer"
      target="_blank"
    >
      <button
        className="flex items-center space-x-2 bg-green-500 text-white px-2 py-1 md:px-3 md:py-1.5 rounded-md"
        style={{ width: "fit-content", ...poppins500.style }}
      >
        <Image
          style={{ color: "white" }}
          src="/assets/icons/whatsapp.svg"
          alt="whatsapp-icon"
          width={24}
          height={24}
        />
        <p className="text-sm md:text-base">Hubungi Kami</p>
      </button>
    </Link>
  );
};

export default ButtonWhatsapp;
