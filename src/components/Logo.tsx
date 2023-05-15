import Image from "next/legacy/image";
import Link from "next/link";

const Logo = ({
  className,
  color = "",
}: {
  className?: string;
  color?: string;
}) => (
  <Link
    href="https://api.whatsapp.com/send?phone=6285883267106&text=Halo Admin, mau nanya nih tentang layanan di RA Wedding.."
    rel="noopener noreferrer"
    target="_blank"
  >
    <div className={`relative w-14 h-14 ${className}`}>
      <Image
        className="text-white"
        style={{ color: "white" }}
        src={`/assets/icons/logo-outline${color && "-" + color}.svg`}
        alt="logo"
        layout="fill"
      />
    </div>
  </Link>
);

export default Logo;
