// import React from 'react';
// import { Github, Linkedin, Mail, Phone, Search, Monitor, Code, GraduationCap } from 'lucide-react';

// const App = () => {
//   return (
//     <div className="min-h-screen bg-cherryCola p-4 md:p-8 font-sans text-textBrown">
//       {/* Grid Container */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(160px,auto)]">
        
//         {/* Clock Section */}
//         <div className="md:col-span-1 bg-cream rounded-[2.5rem] p-8 flex flex-col justify-end shadow-2xl">
//           <h1 className="text-6xl font-light italic">11:50</h1>
//           <p className="text-sm tracking-widest opacity-70">TUESDAY, 3 FEB</p>
//         </div>

//         {/* Search & Socials */}
//         <div className="md:col-span-2 bg-cream rounded-[2.5rem] p-8 shadow-2xl flex flex-col justify-between">
//           <div className="bg-white/40 rounded-full px-6 py-3 flex items-center justify-between">
//             <span className="font-medium italic">Search me at...</span>
//             <Search size={20} className="opacity-60" />
//           </div>
//           <div className="flex gap-10 mt-6 px-4">
//             <a href="https://linkedin.com/in/anushka-kshirsagar-7b1740250" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform"><Linkedin size={35} /></a>
//             <a href="https://github.com/anushka-ksh" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform"><Github size={35} /></a>
//           </div>
//         </div>

//         {/* Laptop 1 Placeholder */}
//         <div className="md:col-span-1 bg-cream/90 rounded-[2.5rem] flex items-center justify-center shadow-inner overflow-hidden">
//            <div className="text-center">
//              <Monitor size={48} className="mx-auto opacity-30" />
//              <p className="text-xs mt-2 font-bold uppercase tracking-tighter">Laptop 1</p>
//            </div>
//         </div>

//         {/* Projects (Replaces To-Do List) */}
//         <div className="md:col-span-2 bg-cream rounded-[2.5rem] p-8 shadow-2xl">
//           <h2 className="text-xl font-bold mb-6 border-b border-textBrown/20 pb-2">PROJECTS</h2>
//           <div className="space-y-4">
//             <div>
//               <h3 className="font-bold text-lg leading-none">SiteMate [cite: 17]</h3>
//               <p className="text-xs opacity-70 italic">Full-stack monitoring application [cite: 17]</p>
//             </div>
//             <div>
//               <h3 className="font-bold text-lg leading-none">Cartify [cite: 24]</h3>
//               <p className="text-xs opacity-70 italic">Full Stack Sales Hub / POS [cite: 24, 26]</p>
//             </div>
//           </div>
//         </div>

//         {/* Laptop 2 Placeholder */}
//         <div className="md:col-span-1 bg-cream/90 rounded-[2.5rem] flex items-center justify-center shadow-inner">
//            <div className="text-center">
//              <Code size={48} className="mx-auto opacity-30" />
//              <p className="text-xs mt-2 font-bold uppercase tracking-tighter">Laptop 2</p>
//            </div>
//         </div>

//         {/* About Me (Replaces Calendar) */}
//         <div className="md:col-span-1 md:row-span-1 bg-cream rounded-[2.5rem] p-8 shadow-2xl">
//           <h2 className="text-xl font-bold mb-4">ABOUT ME</h2>
//           <p className="text-sm leading-relaxed">
//             Final Year B.Tech CSE Student at VIT[cite: 14, 15]. 
//             I focus on high-performance web applications using Java and React[cite: 5, 6].
//           </p>
//         </div>

//         {/* Education & Tech Stack (Replaces Notes/Date) */}
//         <div className="md:col-span-2 bg-cream rounded-[2.5rem] p-8 shadow-2xl">
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
//                 <GraduationCap size={18}/> EDUCATION
//               </h2>
//               <p className="text-xs font-bold">Vellore Institute of Tech [cite: 14]</p>
//               <p className="text-xs">CGPA: 8.61 [cite: 15]</p>
//             </div>
//             <div>
//               <h2 className="text-lg font-bold mb-2">TECH STACK</h2>
//               <p className="text-[10px] leading-tight flex flex-wrap gap-1">
//                 {['Java', 'Spring Boot', 'React.js', 'AWS', 'Docker', 'MongoDB'].map(s => (
//                   <span key={s} className="bg-white/40 px-2 py-1 rounded">{s}</span>
//                 ))} [cite: 9, 10, 11, 12]
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Contacts (Replaces Reminders) */}
//         <div className="md:col-span-2 bg-cream rounded-[2.5rem] p-8 shadow-2xl flex items-center justify-around">
//           <div className="flex items-center gap-4 text-sm font-bold">
//             <Phone size={24} /> <span>+91-7666962056 [cite: 2]</span>
//           </div>
//           <div className="flex items-center gap-4 text-sm font-bold">
//             <Mail size={24} /> <span className="truncate">anushkaakshirsagar@gmail.com [cite: 2]</span>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Move your current dashboard code here
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;