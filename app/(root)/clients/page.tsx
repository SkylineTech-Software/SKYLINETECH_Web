"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

// Components
import { Nav } from "@/app/components/Nav";

const Page = () => {
  return (
    <div className="relative h-screen bg-clients bg-no-repeat bg-center bg-fixed bg-cover overflow-x-hidden">
      <div className="fixed z-20 top-0 px-7 pt-7 lg:px-12 lg:pt-8 flex justify-between items-center w-full">
        {/* Image */}
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
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
        <Nav
          colorClass="text-primary-blue"
          hoverClass="hover:text-primary-orange"
        />
        {/* Nav Mobile */}
      </div>
      <div className="h-full container mx-auto w-full">
        <p>Clientes</p>
      </div>
    </div>
  );
};

export default Page;
