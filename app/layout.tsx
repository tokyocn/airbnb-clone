// import { Inter } from "next/font/google";
import { Suspense } from "react";
import { Nunito } from "next/font/google";
import Navbar from "@/app/components/navbar/Navbar";
import LoginModal from "@/app/components/modals/LoginModal";
import RegisterModal from "@/app/components/modals/RegisterModal";
import SearchModal from "@/app/components/modals/SearchModal";
import RentModal from "@/app/components/modals/RentModal";

import ToasterProvider from "@/app/providers/ToasterProvider";

import "./globals.css";
import getCurrentUser from "./actions/getCurrentUser";

// const inter = Inter({ subsets: ["latin"] });
const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <Suspense>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <SearchModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </Suspense>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
