import "./globals.css";

const description =
  "RA Wedding Organizer adalah perusahaan persewaan tenda, Rias Pengantin, Catering, Tenda, dan Pelaminan. Kami juga menangani acara keluarga dan resepsi pernikahan. Selain menjalani core bisnis kami, dalam beberapa event kami juga mengambil bagian dalam pekerjaan total produksi event, meliputi pengorganisasian sound system, lighting system, power supply, AC, dan alat pendukung event lainnya.";

export const metadata = {
  title: "RA Wedding Organizer",
  description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="sewa tenda, wedding organizer, dekorasi pernikahan, catering, rias pengantin, undangan pernikahan, acara pernikahan, paket pernikahan, gedung pernikahan, souvenir pernikahan"
        />
        <meta name="author" content="RA Wedding" />
        <meta name="robots" content="index, follow" />
        <meta property="og:image" content="/assets/images/thumbnail.jpeg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
