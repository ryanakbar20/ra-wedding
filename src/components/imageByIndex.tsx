export const images: string[] = [
  "/assets/images/tent-1.png",
  "/assets/images/tent-2.png",
  "/assets/images/tent-3.png",
];

const texts: string[] = [
  "Tenda Pengantin Premium",
  "Perlengkapan dan Alat Pesta",
  "Pelaminan Pengantin Mewah",
];

const imageByIndex = (index: number): string => images[index % images.length];
export const textByIndex = (index: number): string =>
  texts[index % texts.length];

export default imageByIndex;
