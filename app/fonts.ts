import { Open_Sans, Montserrat } from "next/font/google";

export const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["500", "600", "700", "800", "900"],
});
