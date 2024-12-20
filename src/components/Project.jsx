import ProjectCard from "./ProjectCard";

const works = [
  {
    img: {},
    title: "1759 Estore",
    tags: ["API", "Development", "Ecommerce"],
    projectLink: "https://www.google.com",
    classes: "",
  },
  {
    img: {},
    title: "WCU Campus",
    tags: ["API", "Development", "Academics"],
    projectLink: "https://www.google.com",
    classes: "",
  },
  {
    img: "",
    title: "Farm Management",
    tags: ["API", "Development"],
    projectLink: "https://www.google.com",
    classes: "",
  },
  {
    img: "",
    title: "Ticketbritte",
    tags: ["API", "Development", "Sales", "Technology", "Events"],
    projectLink: "https://www.google.com",
    classes: "",
  },
];

function Work() {
  return (
    <div className="section" id="projects">
      <div className="container">
        <h2 className="headline-2 mb-8">My Portfolio Highlights</h2>

        <div className=" grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
          {works.map(({ img, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              img={img}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
