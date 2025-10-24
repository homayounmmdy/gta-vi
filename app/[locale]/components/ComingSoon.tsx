import Image from "next/image";

const ComingSoon = () => {
  return (
    <section className="entrance-message">
      <div className="h-full col-center gap-10">
        <Image width={198} height={132} src="/images/logo.webp" alt="logo" className="entrance-logo" />

        <div className="text-wrapper">
          <h3 className="gradient-title">
            Coming <br />
            May 26th <br /> 2026
          </h3>
        </div>

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
      </div>
    </section>
  );
};

export default ComingSoon;
