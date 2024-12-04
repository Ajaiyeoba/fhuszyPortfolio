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
                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                  >
                    Home
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="#about"
                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                  >
                    About
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="#projects"
                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                  >
                    Project
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href=""
                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                  >
                    Reviews
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="#review"
                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
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
                    className="flex text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                  >
                    <FacebookIcon />
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href=""
                    className="flex text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                  >
                    <InstagramIcon />
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href=""
                    className="flex text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                  >
                    <GithubIcon />
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href=""
                    className="flex text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                  >
                    <LinkedinIcon />
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href=""
                    className="flex text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
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
