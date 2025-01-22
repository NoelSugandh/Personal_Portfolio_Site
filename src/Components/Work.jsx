import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "../images/Tenzies.webp",
    title: "Tenzies Game",
    tags: ["Game", "Development"],
    projectLink: "https://github.com/NoelSugandh/Tenzies/tree/master",
  },
  {
    imgSrc: "../images/meme.png",
    title: "Meme Generator App",
    tags: ["Development", "API"],
    projectLink: "https://github.com/NoelSugandh/Meme_Generator/tree/master",
  },
  {
    imgSrc: "../images/Recipe Finder.webp",
    title: "Recipe App",
    tags: ["Development", "API"],
    projectLink: "https://github.com/NoelSugandh/Chef_Claude",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Projects</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
