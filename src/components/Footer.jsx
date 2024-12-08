import {
  ArrowDownIcon,
  FacebookIcon,
  GithubIcon,
  XIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import { ButtonPrimary } from "./Button";

function Footer() {
  return (
    <div className="section">
      <div className="container">
        <div className="lg:grid  lg:grid-cols-2">
          <div className="mb-10 ">
            <h2 className="headline-1 mb-8 lg:max-w[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>

            <ButtonPrimary
              href=""
              label="Start project"
              icon={<ArrowDownIcon />}
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            {/* Sitemap */}
            <div>
              <p className="mb-2 reveal-up text-xl text-blue-500"> Sitemap</p>
              <ul>
                <li>
                  {" "}
                  <a
                    href="#hero"
                    className="block text-sm text-zinc-800 py-1 transition-colors `"
                  >
                    Home
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="#about"
                    className="block text-sm text-zinc-800 py-1 transition-colors `"
                  >
                    About
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="#projects"
                    className="block text-sm text-zinc-800 py-1 transition-colors `"
                  >
                    Project
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href=""
                    className="block text-sm text-zinc-800 py-1 transition-colors `"
                  >
                    Reviews
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="#review"
                    className="block text-sm text-zinc-00 py-1 transition-colors `"
                  >
                    Contact
                  </a>{" "}
                </li>
              </ul>
            </div>

            {/*  */}

            <div>
              <p className="mb-2 reveal-up text-xl text-blue-500"> Socials</p>
              <ul>
                <li>
                  {" "}
                  <a
                    href="dfc.vocc"
                    className="flex text-sm text-zinc-800 py-1 transition-colors `"
                  >
                    <FacebookIcon />
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href=""
                    className="flex text-sm text-zinc-800 py-1 transition-colors `"
                  >
                    <InstagramIcon />
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href=""
                    className="flex text-sm text-zinc-800 py-1 transition-colors `"
                  >
                    <GithubIcon />
                  </a>{" "}
                </li>
                <li> 
                  {" "}
                  <a
                    href=""
                    className="flex text-sm text-zinc-800 py-1 transition-colors `"
                  >
                    <LinkedinIcon />
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href=""
                    className="flex text-sm text-zinc-800 py-1 transition-colors `"
                  >
                    <XIcon />
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-10 mb-8 ">
          <a href="" className="reveal-up logo">
            <h2>Mah Fuzzy</h2>
          </a>

          <p href="" className="text-zinc-500  reveal-uptext-sm">
            &copy; 2024
            <span className="text-zinc-200">fuzzycodes</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
