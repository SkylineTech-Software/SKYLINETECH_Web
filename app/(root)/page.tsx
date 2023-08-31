import Image from "next/image";
import Link from "next/link";

// Icons
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Home() {
  return (
    <div className="h-screen bg-hero bg-cover bg-no-repeat bg-center w-full ">
      <div className="relative">
        <div className="main-container">
          <Image src="/logo.png" alt="Logo" width={130} height={130} />
          <h2 className="mt-5 text-gray-1  font-bold text-[0.7rem] uppercase tracking-[.20rem] md:tracking-[.30rem]">
            Estamos preparando motores
          </h2>
          <h1 className="text-white mt-3 text-md md:text-2xl lg:text-[1.3rem] font-bold uppercase tracking-[.2rem]  md:tracking-[.4rem] text-center">
            Pronto descubrirás un nuevo universo digital
          </h1>
          <div className="bg-transparent border border-gray-400/80 w-64 h-4 mt-12 rounded-full">
            <div className="w-44 bg-gradient-to-r from-[#E4732C] to-[#1FBDB5] rounded-full h4 text-center text-xs text-transparent ml-[-2px] mt-[-1px]">
              .
            </div>
          </div>
          <p className="mt-1 text-white text-sm font-semibold">65 %</p>
        </div>
        <div className="font-primary absolute bottom-5 w-full flex justify-center items-center flex-col text-white gap-5">
          <div className="flex gap-4 text-2xl ">
            <Link
              href={"https://www.instagram.com/skylinetech.soft/?hl=es-la"}
              target="_blank"
            >
              <AiOutlineInstagram className="hover:text-primary-orange cursor-pointer" />
            </Link>
            <AiOutlineTwitter className="hover:text-primary-orange  cursor-pointer" />
            <AiFillLinkedin className="hover:text-primary-orange cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
