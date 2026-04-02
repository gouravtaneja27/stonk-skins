
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});
export const metadata = {
  title: "Stonk Skins",
  description: "",
  openGraph: {
    title: "Stonk Skins",
    description: "",
    images: ["/hero.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}