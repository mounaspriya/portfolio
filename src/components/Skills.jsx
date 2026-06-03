const skills = [
  "React.js",
  "Next.js",
  "Redux Toolkit",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "WordPress",
  "Elementor",
  "REST APIs",
  "Git",
  "GitHub",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <p className="text-cyan-400 uppercase tracking-widest">
            My Skills
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Technologies I Work With
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-16">

          {skills.map((skill) => (
            <div
              key={skill}
              className="
                bg-slate-900
                border border-slate-800
                rounded-2xl
                p-8
                text-center
                hover:border-cyan-500
                hover:-translate-y-2
                transition
              "
            >
              <h3 className="text-xl font-semibold">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}