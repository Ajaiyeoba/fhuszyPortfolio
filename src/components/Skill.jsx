import SkillCard from "./SkillCard";
import reactLogo from '../assets/react-2.svg';
import wpLogo from '../assets/wordpress-icon.svg';
import jsLogo from "../assets/logo-javascript.svg"
import twcLogo from "../assets/tailwind-css-2.svg";

const skillItem = [
  { label: "Html", desc: "Web Design", imgSrc: reactLogo,  },
  { label: "Css", desc: "Styling", imgSrc: twcLogo, },
  { label: "Javascript", desc: "FrInteractionamework", imgSrc: jsLogo },
  { label: "Wordpress", desc: "CMS",   imgSrc: wpLogo,},
  { label: "Capcut", desc: "Video", imgSrc: twcLogo, },
  { label: "Canva", desc: "Fliers" },
  { label: "Corel Draw", desc: "Graphics Design" },
];

function Skill() {
  return (
    <div className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools i use</h2>
        <p className="text-zinc-900 reveal=up mt-3 mb-8 max-w-[50ch]">
        Creative Digital Solution: Web Design, Social Media, Content creation, Videograpgy and Graphic Design with Html, Css, Js Wordpress, Canva, Capcut and Corel Draw.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ label, desc , imgSrc}, key) => (
            <SkillCard
              key={key}
              label={label}
              desc={desc}
              imgSrc={imgSrc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
