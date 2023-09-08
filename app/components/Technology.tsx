import Image from "next/image";

const Technology = ({ technology }: any) => {
  const { name, image } = technology;

  return (
    // <div className="h-20">
    <div className="w-full rounded-md bg-slider text-primary-white gap-4 h-16 px-4 flex justify-center items-center relative">
      <Image src={image} alt={`Image ${name}`} width={30} height={30} />
      <p>{name}</p>
    </div>
    // </div>
  );
};

export { Technology };
