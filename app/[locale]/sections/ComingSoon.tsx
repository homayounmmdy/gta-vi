import Image from "next/image";
import GameConsolesIcon from "../components/GameConsolesIcon";
import GradientComingDate from "../components/GradientComingDate";

const ComingSoon = () => {
  return (
    <section className="entrance-message">
      <div className="h-full col-center gap-8">
        <Image
          width={198}
          height={132}
          src="/images/logo.webp"
          alt="logo"
          className="entrance-logo"
        />

        <div className="text-wrapper">
          <GradientComingDate />
        </div>

        <GameConsolesIcon />
      </div>
    </section>
  );
};

export default ComingSoon;
