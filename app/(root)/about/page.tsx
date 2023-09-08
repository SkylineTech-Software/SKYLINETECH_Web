"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

// Components
import { Nav } from "@/app/components/Nav";

const Page = () => {
  return (
    <div className="relative h-screen bg-about bg-no-repeat bg-center bg-fixed bg-cover overflow-x-hidden">
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
      <div className="h-full container mx-auto w-full flex justify-center items-center flex-col">
        <h1 className="text-primary-white uppercase font-bold text-xl lg:text-[56px]">
          SOBRE NOSOTROS <span>POR QUE ELEGIRNOS?</span>
        </h1>
        <div className="flex justify-between w-full gap-36">
          <p className="w-1/2">
            Sed in mauris egestas, iaculis nibh eu, cursus diam. Suspendisse
            potenti. Nam at tincidunt ipsum, in sagittis sapien. Nulla nisl
            ipsum, accumsan et lobortis nec, feugiat quis sapien. Donec mollis
            sit amet mi ut aliquet. Quisque vitae tincidunt metus. In velit
            lectus, varius vitae ornare at, placerat ac nisi.Sed convallis odio
            consequat dui tristique, et mollis massa blandit. Cras vitae orci id
            nunc ultricies tincidunt. Donec ultrices euismod enim, non vehicula
            orci tempus sit amet. Sed placerat lorem risus, ac ullamcorper nisl
            vehicula vitae.
          </p>
          <div className="w-1/2">
            <div>Entrega continua</div>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto py-5">
        <h1 className="mt-5 text-2xl text-primary-white">HOLA MUNDO</h1>
        <p className="text-xl text-white">
          Sed in mauris egestas, iaculis nibh eu, cursus diam. Suspendisse
          potenti. Nam at tincidunt ipsum, in sagittis sapien. Nulla nisl ipsum,
          accumsan et lobortis nec, feugiat quis sapien. Donec mollis sit amet
          mi ut aliquet. Quisque vitae tincidunt metus. In velit lectus, varius
          vitae ornare at, placerat ac nisi.Sed convallis odio consequat dui
          tristique, et mollis massa blandit. Cras vitae orci id nunc ultricies
          tincidunt. Donec ultrices euismod enim, non vehicula orci tempus sit
          amet. Sed placerat lorem risus, ac ullamcorper nisl vehicula vitae.
        </p>
      </div>
      <div className="container mx-auto py-5">
        <h1 className="mt-5 text-2xl text-primary-white">HOLA MUNDO</h1>
        <p className="text-xl text-white">
          Sed in mauris egestas, iaculis nibh eu, cursus diam. Suspendisse
          potenti. Nam at tincidunt ipsum, in sagittis sapien. Nulla nisl ipsum,
          accumsan et lobortis nec, feugiat quis sapien. Donec mollis sit amet
          mi ut aliquet. Quisque vitae tincidunt metus. In velit lectus, varius
          vitae ornare at, placerat ac nisi.Sed convallis odio consequat dui
          tristique, et mollis massa blandit. Cras vitae orci id nunc ultricies
          tincidunt. Donec ultrices euismod enim, non vehicula orci tempus sit
          amet. Sed placerat lorem risus, ac ullamcorper nisl vehicula vitae.
        </p>
      </div> */}
    </div>
  );
};

export default Page;
