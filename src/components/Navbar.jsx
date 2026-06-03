// import { useState } from "react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
//       <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
//         <h1 className="text-white text-2xl font-bold">
//           Priya<span > Singh</span>
//         </h1>

//         <div className="hidden md:flex gap-8 text-slate-300">
//           <a href="#about" className="hover:text-cyan-400">
//             About
//           </a>
//           <a href="#skills" className="hover:text-cyan-400">
//             Skills
//           </a>
//           <a href="#projects" className="hover:text-cyan-400">
//             Projects
//           </a>
//           <a href="#contact" className="hover:text-cyan-400">
//             Contact
//           </a>
//         </div>

//         <button
//           className="md:hidden text-white"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {menuOpen && (
//         <div className="md:hidden bg-slate-900 p-5 flex flex-col gap-4 text-white">
//           <a href="#about">About</a>
//           <a href="#skills">Skills</a>
//           <a href="#projects">Projects</a>
//           <a href="#contact">Contact</a>
//         </div>
//       )}
//     </nav>
//   );
// }

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">
          Priya<span className="text-cyan-400"> Singh</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#experience" className="hover:text-cyan-400 transition">
            Experience
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-5 flex flex-col gap-5 text-white">

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            Skills
          </a>

          <a
            href="#experience"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            Experience
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400 transition"
          >
            Contact
          </a>

        </div>
      )}
    </nav>
  );
}