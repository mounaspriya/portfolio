const projects = [
  {
    title: "Wercor",
    tech: "React.js • Express.js",
    desc: "Developed modern responsive UI and business-focused web experiences.",
    link: "https://wercor.com/",
  },
  {
    title: "Xpogen",
    tech: "WordPress • Elementor • Custom CSS",
    desc: "Created responsive layouts, custom styling and optimized performance.",
    link: "https://xpogen.com/",
  },
  {
    title: "GBIT Inc",
    tech: "WordPress • Elementor",
    desc: "Business website focused on performance, responsiveness and branding.",
    link: "https://gbitinc.com/",
  },
  {
    title: "Jaipur Pet Hospital",
    tech: "WordPress • Elementor",
    desc: "Healthcare website with modern responsive design.",
    link: "https://jaipurpethospital.com/",
  },
  {
    title: "Agorae ERP",
    tech: "React.js • Redux Toolkit • Material UI",
    desc: "School and College Management ERP platform.",
    link: "https://agorae.app/",
  },
  {
    title: "Jobs In Education",
    tech: "React.js • Formik • Material UI",
    desc: "Education recruitment and job portal platform.",
    link: "https://www.jobsineducation.net/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <p className="text-cyan-400 uppercase tracking-widest">
            Featured Work
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Projects I've Worked On
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {projects.map((project) => (
            <div
              key={project.title}
              className="
                bg-slate-950
                border
                border-slate-800
                rounded-3xl
                p-8
                hover:border-cyan-500
                hover:-translate-y-2
                transition
              "
            >
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-cyan-400 mt-3">
                {project.tech}
              </p>

              <p className="text-slate-400 mt-5 leading-7">
                {project.desc}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-block
                  mt-6
                  text-cyan-400
                "
              >
                Visit Website →
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}