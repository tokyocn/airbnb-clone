// import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";
import Navbar from "@/app/components/navbar/Navbar";
import RegisterModal from "@/app/components/modals/RegisterModal";

import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />
        <Navbar />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
