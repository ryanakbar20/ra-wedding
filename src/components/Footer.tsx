import { poppins400 } from "@/fonts";
import Contact from "./Contact";
import Logo from "./Logo";
import Link from "next/link";
import Animation from "./Animation";

const Footer = () => {
  return (
    <footer className="bg-emerald-500 text-white">
      <div className="md:container mx-auto flex justify-between space-x-8 px-4 md:px-0 py-8 ">
        <Animation>
          <Logo className="h-20 w-20 md:h-28 md:w-28" color="white" />
        </Animation>

        <Animation>
          <div className="flex flex-col space-y-4" style={poppins400.style}>
            <h3 className="text-base md:text-lg">Kontak Kami</h3>
            <div className="flex flex-col space-y-8">
              <div className="flex flex-col space-y-2">
                <h4 className="text-sm md:text-base">Cabang Bekasi</h4>
                <Contact>0858 8326 7106 - Ibu Ajeng</Contact>
                <Link
                  href={`https://www.google.com/maps/search/?api=1&query=-6.315990,107.006781`}
                >
                  <p className="text-xs md:text-base max-w-sm cursor-pointer">
                    Jl. Perempatan Telkom No. 120, Padurenan, Kec. Mustika Jaya,
                    Kota Bekasi.
                  </p>
                </Link>
              </div>
              <div className="flex flex-col space-y-2">
                <h4 className="text-sm md:text-base">Cabang Depok</h4>
                <Contact>0813 1076 9798 - Pak Ahmad</Contact>
                <Link
                  href={`https://www.google.com/maps/search/?api=1&query=-6.3771100,106.8882290`}
                >
                  <p className="text-xs md:text-base max-w-sm cursor-pointer">
                    Jl. Putri Tunggal, Harjamukti, Kec. Cimanggis, Kota Depok.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </Animation>
      </div>
    </footer>
  );
};

export default Footer;
