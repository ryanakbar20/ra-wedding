import { poppins400 } from "@/fonts";
import Contact from "./Contact";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-yellow-100">
      <div className="md:container mx-auto flex justify-between space-x-8 px-4 md:px-0 py-8 ">
        <Logo className="h-20 w-20" />
        <div className="flex flex-col space-y-4" style={poppins400.style}>
          <h3 className="text-base md:text-lg">Kontak Kami</h3>
          <div className="flex flex-col space-y-2">
            <Contact>0858 8326 7106 - Ibu Ajeng</Contact>
            <Contact>0813 1076 9798 - Pak Ahmad</Contact>
          </div>
          <Link
            href={`https://www.google.com/maps/search/?api=1&query=-6.315990,107.006781`}
          >
            <p className="text-xs md:text-base text-gray-600 max-w-sm cursor-pointer">
              Jl. Perempatan Telkom No. 120 RT 003/006 Kel. Padurenan Kec.
              Mustika Jaya, Kota Bekasi
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
