import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/Modal";

import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "AirBNB",
  description: "AirBNB Clone App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RegisterModal />
          <Navbar />  
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
