import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

// Components
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// Styles
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skyline Tech",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Skylinetech</title>
        <meta name="description" content="Skylinetech Web" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <body className={inter.className}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
