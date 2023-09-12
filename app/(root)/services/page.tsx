"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

// Components
import { Nav } from "@/app/components/Nav";

const services = [
  {
    title: "Diseño Web",
    description: "Hacemos que tu estación función 24/7:diseño de páginas web.",
    image: "/logo_apps.png",
  },
  {
    title: "Desarrollo de Aplicaciones",
    description:
      "Desarrollamos aplicaciones web y móviles a la medida de tus necesidades.",
    image: "/logo_apps.png",
  },
  {
    title: "Diseño UX/UI",
    description:
      "Diseñamos interfaces de usuario que se adaptan a las necesidades de tus usuarios.",
    image: "/logo_design.png",
  },
  {
    title: "Marketing Digital",
    description:
      "Creamos estrategias de marketing digital para que tu negocio crezca.",
    image: "/logo_marketing.png",
  },
];

const splitText = (text: string) => {
  const firstLabel = text.split(" ")[0];
  const secondLabel = text.split(" ")[1];
  const thirdLabel = text.split(" ")[2] || "";

  const first = `${firstLabel}`;
  const second = `${secondLabel} ${thirdLabel}`;

  return {
    first,
    second,
  };
};

const Page = () => {
  return (
    <div className="relative h-screen bg-home bg-no-repeat bg-center bg-fixed bg-cover overflow-x-hidden ">
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
          colorClass="text-primary-orange"
          hoverClass="hover:text-primary-blue"
        />
        {/* Nav Mobile */}
      </div>
      <div className="h-full container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-0 w-full flex justify-center items-center flex-col pt-12">
        <div className="flex flex-col lg:flex-row lg:gap-x-4">
          <div className="flex flex-col justify-center items-center lg:items-start md:mb-8 lg:mb-0 lg:w-[50%] xl:w-[40%]">
            <h1 className="uppercase font-bold text-3xl md:text-4xl lg:text-5xl text-primary-blue relative after:h-[4px] after:w-[97px] after:bg-primary-blue after:absolute after:-bottom-4 after:left-0  mb-10">
              nuestros <br /> servicios <br />{" "}
              <span className="text-white font-medium text-xl md:text-2xl lg:text-3xl">
                lo que hacemos.
              </span>{" "}
            </h1>
            <p className="text-white text-sm md:text-md lg:text-lg md:max-w-[70%] lg:max-w-[80%]">
              Nos comprometemos a ofrecer soluciones personalizadas y creativas
              que impulsen la innovación en cada proyecto. <br /> <br />{" "}
              Aprovechamos al máximo cada tecnología y nos esforzamos por
              alcanzar los más altos estándares de calidad en el desarrollo de
              aplicaciones web y móviles.
            </p>
          </div>
          <div className="flex justify-center items-center mt-6 lg:mt-0 gap-3 flex-wrap flex-1">
            {services?.map((service, i) => (
              <div
                key={i}
                className="w-[130px] h-[120px] md:p-6 md:w-[140px] md:h-[140px] lg:w-[210px] lg:h-[180px] xl:w-[310px] xl:h-[250px] p-2 xl:p-4 bg-bg-dark-1/60 rounded-[10px] flex flex-col justify-center items-center text-center gap-y-2"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={50}
                  height={50}
                  className="object-contain w-1/3 h-1/3 "
                />
                <h1 className="text-white text-xs lg:text-md xl:text-lg">
                  {splitText(service.title).first} <br />{" "}
                  {splitText(service.title).second}
                </h1>
                <p className="text-white hidden lg:flex text-xs font-extralight xl:text-md">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
