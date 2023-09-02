import Image from "next/image";

import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Del desarrollo web", "Del marketing digital", "Del diseño UX/UI"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex items-center h-full w-full justify-between">
      <div className="text-primary-white uppercase font-bold text-xl lg:text-6xl">
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
  );
};

export { Hero };
