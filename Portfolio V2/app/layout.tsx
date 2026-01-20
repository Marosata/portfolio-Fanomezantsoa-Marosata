import "./globals.css";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Space_Grotesk, Poppins } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap"
});

export const metadata = {
  title: "Marosata Fanomezantsoa – Personal portfolio",
  description:
    "Portfolio de Marosata Fanomezantsoa, développeur Web & Mobile spécialisé en Next.js, Laravel, Flutter et solutions full‑stack scalables.",
  icons: '/assets/pictures/FanoLogo.png'
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${poppins.variable} min-h-screen bg-background-dark text-gray-100 font-sans`}
      >
        <ThemeProvider>{props.children}</ThemeProvider>
      </body>
    </html>
  );
}


