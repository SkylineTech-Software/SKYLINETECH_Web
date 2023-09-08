"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

// Components
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <div className="relative h-screen bg-home bg-no-repeat bg-center bg-fixed bg-cover overflow-x-hidden overflow-y-hidden">
      <div className="absolute z-20 top-0 px-7 pt-7 lg:px-12 lg:pt-8 flex justify-between items-center w-full h-[90px]">
        {/* Image */}
        <motion.div
          initial={{
            x: -500,
            opacity: 0.5,
            scaleX: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="my-0"
        >
          <Link href="/">
            <Image
              src={"/logo.png"}
              alt="Logo Skyline"
              height={50}
              width={200}
              layout="responsive"
              className="object-cover"
            />
          </Link>
        </motion.div>
        {/* Nav  */}
        <Nav />
        {/* Nav Mobile */}
      </div>
      <div className="h-full container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-0">
        {/* Hero */}
        <Hero />
      </div>
    </div>
  );
}
