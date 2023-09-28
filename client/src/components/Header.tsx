import { FC } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

const Header: FC = () => {
  return (
    <header className="bg-white w-full flex justify-between items-center sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="Logo" className="w-28 object-contain" />
      </Link>
      <Link
        to="createpost"
        className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
      >Create</Link>
    </header>
  );
};

export default Header;
