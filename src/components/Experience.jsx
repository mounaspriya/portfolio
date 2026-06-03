export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-widest">
            Experience
          </p>

          <h2 className="text-5xl font-bold mt-4">
            My Professional Journey
          </h2>
        </div>

        <div className="space-y-10">

          <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800">
            <h3 className="text-2xl font-bold">
              Software Developer
            </h3>

            <p className="text-cyan-400 mt-2">
              ATPL • Aug 2021 – Nov 2023
            </p>

            <p className="text-slate-400 mt-5 leading-8">
              Worked on Agorae ERP, Inventory Management System
              and Jobs In Education Portal.
            </p>

            <div className="flex flex-wrap gap-3 mt-5">
              <span className="bg-slate-800 px-4 py-2 rounded-xl">
                React.js
              </span>

              <span className="bg-slate-800 px-4 py-2 rounded-xl">
                Next.js
              </span>

              <span className="bg-slate-800 px-4 py-2 rounded-xl">
                Redux Toolkit
              </span>

              <span className="bg-slate-800 px-4 py-2 rounded-xl">
                Material UI
              </span>
            </div>
          </div>

          <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800">
            <h3 className="text-2xl font-bold">
              Web Developer (Contract/Freelance)
            </h3>

            <p className="text-cyan-400 mt-2">
              Zappr Digital Solution • Jan 2024 – Nov 2025
            </p>

            <p className="text-slate-400 mt-5 leading-8">
              Developed and maintained business websites
              including Wercor, Xpogen, GBIT Inc and
              Jaipur Pet Hospital.
            </p>

            <div className="flex flex-wrap gap-3 mt-5">
              <span className="bg-slate-800 px-4 py-2 rounded-xl">
                WordPress
              </span>

              <span className="bg-slate-800 px-4 py-2 rounded-xl">
                Elementor
              </span>

              <span className="bg-slate-800 px-4 py-2 rounded-xl">
                Next.js
              </span>

              <span className="bg-slate-800 px-4 py-2 rounded-xl">
                Responsive Design
              </span>
            </div>
          </div>

          <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800">
            <h3 className="text-2xl font-bold">
              Career Pause
            </h3>

            <p className="text-cyan-400 mt-2">
              Dec 2025 – Present
            </p>

            <p className="text-slate-400 mt-5 leading-8">
              Took a planned career break to focus on
              motherhood and family responsibilities.
              Continued learning modern frontend technologies
              and currently seeking a full-time Frontend
              Developer opportunity.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}