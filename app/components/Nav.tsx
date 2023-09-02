import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  colorClass?: string;
  hoverClass?: string;
}

const Nav = ({ colorClass, hoverClass }: Props) => {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{
        x: 500,
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
      className="text-white text-md lg:text-xl flex gap-6 lg:gap-11 max-md:hidden"
    >
      <Link
        href="/about"
        className={`${pathname === "/about" ? colorClass : hoverClass}`}
      >
        Nosotros
      </Link>
      <Link
        href="/services"
        className={`${pathname === "/services" ? colorClass : hoverClass}`}
      >
        Servicios
      </Link>
      <Link
        href="/clients"
        className={`${pathname === "/clients" ? colorClass : hoverClass}`}
      >
        Clientes
      </Link>
      <Link
        href="/contact"
        className={`${pathname === "/contact" ? colorClass : hoverClass}`}
      >
        Contacto
      </Link>
      {/* <Link href="/about">
        <a>About
      </Link> */}
    </motion.nav>
  );
};

export { Nav };
