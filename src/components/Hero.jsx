import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-cyan-400 text-lg mb-4">
            👋 Hello, I'm Priya Singh
          </p>

          {/* <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Priya
            <br />
            Singh
          </h1> */}

          <h2 className="text-2xl text-slate-300 mt-6">
            Frontend Developer
          </h2>

          <p className="text-slate-400 mt-6 leading-8 max-w-xl">
            Frontend Developer with 3.5 years of experience building
            ERP systems, Inventory Platforms, Job Portals and
            Business Websites using React.js, Next.js and WordPress.
          </p>
          <div className="mt-6">
  <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
    Open To Full-Time Opportunities
  </span>
</div>

          {/* <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl font-semibold">
              View Projects
            </button>

            <button className="border border-slate-600 px-6 py-3 rounded-xl">
              Download Resume
            </button>
          </div> */}
          <div className="flex gap-4 mt-8">
  <a
    href="/Priya_Singh_Resume.pdf"
    target="_blank"
    rel="noreferrer"
    className="bg-cyan-500 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 transition"
  >
    View Resume
  </a>

  <a
    href="/Priya_Singh_Resume.pdf"
    download
    className="border border-slate-600 px-6 py-3 rounded-xl hover:bg-slate-800 transition"
  >
    Download Resume
  </a>
</div>
<div className="flex gap-4 mt-6">
  <a
    href="https://www.linkedin.com/in/priya-singh-98b1801b3"
    target="_blank"
    rel="noreferrer"
    className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl font-semibold"
  >
    LinkedIn Profile
  </a>
</div>

          {/* <div className="flex gap-6 mt-8 text-3xl">
            <FaGithub className="cursor-pointer hover:text-cyan-400" />
            <FaLinkedin className="cursor-pointer hover:text-cyan-400" />
          </div> */}
        </div>

        <div className="flex justify-center">
          <div className="relative">

            <div className="absolute inset-0 bg-cyan-500 blur-[120px] opacity-30 rounded-full" />

            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400 to-blue-700 flex items-center justify-center text-8xl font-bold">
              P
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}