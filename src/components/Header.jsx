import { useState } from "react";
import Navbar from "./Navbar";
import { MenuIcon, XIcon } from "lucide-react";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="fixed text-inter top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid-cols-[1fr,3fr,1fr]">
        <h1 className="text-4xl text-sky-400">
          <a href="" className="logo">
            Liadi Mahfus
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="icons">{navOpen ? <XIcon /> : <MenuIcon />}</span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Header;
