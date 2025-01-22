

import SkillCard from "./SkillCard";

const skillItem = [
    {
      imgSrc: '../images/html5.svg',
      label: 'HTML5',
      desc: 'Markup Language'
    },
    {
      imgSrc: '../images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '../images/js.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '../images/python.svg',
      label: 'Python',
      desc: 'Programming Language'
    },
    {
      imgSrc: '../images/c++.svg',
      label: 'C++',
      desc: 'Programming Language'
    },
    {
      imgSrc: '../images/mysql.svg',
      label: 'mysql',
      desc: 'Database'
    },
    {
      imgSrc: '../images/postgresql.svg',
      label: 'Postgresql',
      desc: 'Database'
    },
    {
      imgSrc: '../images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '../images/Tailwindcss.png',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '../images/github.webp',
      label: 'Github',
      desc: 'Version Control'
    },
  ];


const Skill = () => {
    return (

        <section id="skills" className="section">
            <div className="container">

                <h2 className="headline-2 reveal-up">
                  Essential Tools I Use 
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[100ch] reveal-up">
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & 
                applications.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc }, key) =>
                        (
                            <SkillCard 
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                                classes="reveal-up"
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skill