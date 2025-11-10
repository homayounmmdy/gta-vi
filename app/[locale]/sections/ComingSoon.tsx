import Image from "next/image";
import GameConsolesIcon from "../components/GameConsolesIcon";

const ComingSoon = () => {
  return (
    <section className="entrance-message">
      <div className="h-full col-center gap-10">
        <Image
          width={198}
          height={132}
          src="/images/logo.webp"
          alt="logo"
          className="entrance-logo"
        />

        <div className="text-wrapper">
          <h3 className="gradient-title">
            Coming <br />
            May 26th <br /> 2026
          </h3>
        </div>

        <GameConsolesIcon />
      </div>
    </section>
  );
};

export default ComingSoon;
