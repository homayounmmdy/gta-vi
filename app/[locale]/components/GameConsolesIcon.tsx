import Image from "next/image";

const GameConsolesIcon = () => {
  return (
    <div className="flex-center gap-10">
      <Image
        src="/images/ps-logo.svg"
        alt="ps logo"
        width={93}
        height={20}
        className="md:w-32 w-20"
      />
      <Image
        src="/images/x-logo.svg"
        alt="x box logo"
        width={158}
        height={20}
        className="md:w-52 w-40"
      />
    </div>
  );
};

export default GameConsolesIcon;
