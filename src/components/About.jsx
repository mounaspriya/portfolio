export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Avatar */}

        <div className="flex justify-center">
          <div className="relative">

            <div className="absolute inset-0 bg-cyan-500 blur-[80px] opacity-20 rounded-full" />

            <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center text-8xl font-bold">
              👩‍💻
            </div>

          </div>
        </div>

        {/* Content */}

        <div>

          <p className="text-cyan-400 uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Frontend Developer with
            Real Industry Experience
          </h2>

          <p className="text-slate-400 mt-8 leading-8">
            I am a Frontend Developer with 3.5 years of
            experience building scalable ERP systems,
            Inventory Management Platforms, Job Portals
            and Business Websites.
          </p>

          <p className="text-slate-400 mt-4 leading-8">
            My expertise includes React.js, Next.js,
            Redux Toolkit, REST API Integration,
            WordPress and Elementor.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-slate-800 p-5 rounded-2xl">
              <h3 className="text-3xl font-bold text-cyan-400">
                3.5
              </h3>
              <p className="text-slate-400">
                Years Experience
              </p>
            </div>

            <div className="bg-slate-800 p-5 rounded-2xl">
              <h3 className="text-3xl font-bold text-cyan-400">
                10+
              </h3>
              <p className="text-slate-400">
                Projects Delivered
              </p>
            </div>

            <div className="bg-slate-800 p-5 rounded-2xl">
              <h3 className="text-3xl font-bold text-cyan-400">
                React
              </h3>
              <p className="text-slate-400">
                Frontend Specialist
              </p>
            </div>

            <div className="bg-slate-800 p-5 rounded-2xl">
              <h3 className="text-3xl font-bold text-cyan-400">
                Next.js
              </h3>
              <p className="text-slate-400">
                Modern Web Apps
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}