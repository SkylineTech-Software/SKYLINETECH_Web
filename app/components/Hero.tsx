import Image from "next/image";

import { Cursor, useTypewriter } from "react-simple-typewriter";

// Components
import { Slider } from "./Slider";

// Data
import { technologies } from "@/data";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Del desarrollo web", "Del marketing digital", "Del diseño UX/UI"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-full w-full flex justify-center flex-col">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 pt-24 md:pt-36 md:mb-24 lg:pt-16 lg:mb-24">
        {/* Text */}
        <div className="text-primary-white uppercase font-bold text-xl lg:text-4xl xl:text-6xl md:w-[60%] md:text-3xl max-md:w-[100%] max-md:text-center pb-16 md:pb-0">
          <h2>El universo</h2>
          <h1 className="text-primary-orange">
            {text}
            <Cursor cursorColor="#D26B36" />
          </h1>
          <h2>En tu marca</h2>
        </div>
        {/* Image */}
        <Image
          src={"/hero_astronauta.svg"}
          alt="Astronauta"
          width={500}
          height={500}
        />
      </div>
      {/* Slider */}
      <div className="mt-">
        <Slider items={technologies} />
      </div>
    </div>
  );
};

export { Hero };
