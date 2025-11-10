import Image from "next/image";
import NavLogo from "../sections/NavLogo";

const NavBar = () => {
  return (
    <nav>
      <NavLogo />
      <Image
        width={50}
        height={50}
        src="/images/menu.svg"
        className="w-10"
        alt="hamberger menu"
      />
    </nav>
  );
};

export default NavBar;
