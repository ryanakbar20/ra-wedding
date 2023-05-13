import Image from "next/legacy/image";
import Link from "next/link";

const Contact = ({ children }: { children: string }) => (
  <Link href="https://api.whatsapp.com/send?phone=6285883267106&text=Halo Admin, mau nanya nih tentang layanan di RA Wedding..">
    <div className="flex space-x-2 cursor-pointer">
      <Image
        className="text-white"
        style={{ color: "white" }}
        src="/assets/icons/whatsapp.svg"
        alt="whatsapp-icon"
        width={24}
        height={24}
      />
      <p className="text-xs md:text-base">{children}</p>
    </div>
  </Link>
);

export default Contact;
