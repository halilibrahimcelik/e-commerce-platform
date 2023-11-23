import Wrapper from "../wrapper";
import Image from "next/image";
import logo from "@/assets/logo-beta.png";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <header>
      <Wrapper component="nav" customClass={"py-10"}>
        <ul>
          <li>
            <Image src={logo} alt="beta logo" width={100} height={50} />
          </li>
          <li></li>
        </ul>
      </Wrapper>
    </header>
  );
};

export default Navbar;
