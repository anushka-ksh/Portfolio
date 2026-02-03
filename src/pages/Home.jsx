import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, Linkedin, Search, Monitor, Code, GraduationCap, Terminal, 
  User, Phone, Code2, Database, Check, Download, ArrowUpRight, Layers,
  Briefcase, Sparkles // Added new icons
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [copied, setCopied] = useState(null);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  
  // Typewriter Text Array
  const placeholders = [
    "Search for GitHub...", 
    "Search for LinkedIn...", 
    "Check my LeetCode...", 
    "View my Projects..."
  ];

  // Typewriter Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  // Copy to Clipboard Helper
  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const searchLinks = [
    { name: "LinkedIn", url: "https://linkedin.com/in/anushka-kshirsagar-7b1740250", icon: <Linkedin size={14} /> },
    { name: "GitHub", url: "https://github.com/anushka-ksh", icon: <Github size={14} /> },
    { name: "LeetCode", url: "https://leetcode.com/u/anushkaaa_ksh/", icon: <Code2 size={14} /> },
    { name: "Codolio", url: "https://codolio.com/profile/anushkaksh", icon: <Database size={14} /> }
  ];

  // Animation Variants for "Entrance"
  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
  };

  return (
    <div className="min-h-screen bg-cherryCola text-textBrown font-sans relative overflow-x-hidden selection:bg-cream selection:text-cherryCola">
      
      {/* 1. BACKGROUND TYPOGRAPHY (The "Wow" factor) */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] select-none overflow-hidden z-0">
        <h1 className="text-[20vw] font-black text-cream leading-none tracking-tighter whitespace-nowrap rotate-[-5deg]">
          ANUSHKA K.
        </h1>
      </div>

      {/* 2. THE CURVED SHAPE BACKGROUND */}
      <div className="absolute top-0 left-0 w-full md:w-[60%] h-[55vh] md:h-full bg-cream rounded-br-[80px] md:rounded-br-[250px] shadow-2xl z-0"></div>

      {/* MAIN CONTENT LAYER */}
      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-7xl mx-auto p-4 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16"
      >

        {/* --- LEFT COLUMN (Inside Cream Area) --- */}
        <div className="md:col-span-7 flex flex-col gap-10 md:pt-8">
          
          {/* A. SEARCH & RESUME BAR */}
          <motion.div variants={itemVars} className="relative z-50">
             <div className="bg-white rounded-full p-2 pl-6 shadow-xl flex items-center justify-between gap-4 max-w-xl border border-white/50">
                <div 
                   className="flex-1 flex items-center gap-3 cursor-text group"
                   onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <Search size={22} className="text-cherryCola group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Command Center</span>
                    <span className="text-sm font-medium text-textBrown/70 truncate w-32 md:w-56 transition-all">{placeholders[placeholderIndex]}</span>
                  </div>
                </div>
                
                {/* Resume Pill */}
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-cherryCola text-cream px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-cherryCola/20">
                  <Download size={16} /> Resume
                </a>
             </div>

             {/* Search Dropdown */}
             {isSearchOpen && (
                <div className="absolute top-20 left-4 right-4 md:left-0 md:max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-4 z-50">
                  <div className="p-2">
                    {searchLinks.map((link, index) => (
                      <a key={index} href={link.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors group">
                        <span className="p-2 bg-cream/50 rounded-lg text-cherryCola">{link.icon}</span>
                        <span className="font-bold text-sm text-gray-700">{link.name}</span>
                        <ArrowUpRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-cherryCola" />
                      </a>
                    ))}
                  </div>
                </div>
             )}
          </motion.div>

          {/* B. HERO TEXT */}
          <motion.div variants={itemVars} className="mt-2 md:mt-4 pl-2">
            <h2 className="text-sm md:text-base font-bold text-cherryCola uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-cherryCola"></span> Portfolio
            </h2>
            <h1 className="text-5xl md:text-8xl font-black text-textBrown tracking-tighter leading-[0.9] mb-6">
              FULL STACK<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cherryCola to-red-400">DEVELOPER</span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-600 max-w-md leading-relaxed">
               I build scalable backends with <span className="font-bold text-cherryCola">Spring Boot</span> and interactive experiences with <span className="font-bold text-cherryCola">React</span>.
            </p>
          </motion.div>

          {/* C. ID CARD (Floating Element) */}
          <motion.div variants={itemVars} className="mt-auto max-w-md transform hover:rotate-1 transition-transform duration-500">
             <div className="bg-white rounded-2xl p-5 shadow-2xl border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-cherryCola"></div>
                <div className="absolute top-0 right-0 p-10 bg-cherryCola/5 rounded-full blur-2xl"></div>

                <div className="flex justify-between items-start pl-4 relative z-10">
                   <div>
                      <h3 className="text-xl font-black text-gray-800 uppercase tracking-tight">Anushka Kshirsagar</h3>
                      <p className="text-[10px] font-bold text-cherryCola uppercase tracking-widest mt-1">BTech-Computer Science and Engineering</p>
                   </div>
                   <GraduationCap className="text-gray-200 group-hover:text-cherryCola transition-colors" size={32} />
                </div>
                
                <div className="mt-6 pl-4 relative z-10">
                   {/* Tech Stack Chips */}
                   <div className="flex flex-wrap gap-2 mb-4">
                     {['Java', 'Spring Boot','Spring Security','PostgreSQL','MySQL','MongoDB','RESTful API Development','JPA','Hibernate','MVC Architecture','Postman','Maven', 'React', 'PostgreSQL', 'AWS', 'Docker', 'Git'].map(s => (
                        <span key={s} className="px-2 py-1 bg-gray-100 border border-gray-200 text-gray-600 text-[10px] font-bold uppercase rounded-md">
                          {s}
                        </span>
                     ))}
                   </div>
                   {/* Footer Info */}
                   <div className="pt-4 border-t border-gray-100 flex justify-between items-end">
                      <div>
                        <p className="text-[9px] text-gray-400 uppercase font-bold">University</p>
                        <p className="text-xs font-bold text-gray-800">Vellore Institute of Technology</p>
                      </div>
                      <div className="text-right">
                         <span className="text-2xl font-black text-cherryCola leading-none">8.61</span>
                         <span className="block text-[9px] text-gray-400 font-bold uppercase">CGPA</span>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>

        </div>


        {/* --- RIGHT COLUMN (Floating Elements over Cherry Cola) --- */}
        <div className="md:col-span-5 relative flex flex-col gap-6 md:pt-16">

          {/* D. PROJECTS FOLDER (Tilted Feature) */}
          {/* Note: Clock removed here as requested */}
          <motion.div 
            variants={itemVars}
            className="relative z-20 md:-ml-16 transform md:rotate-[-3deg] hover:rotate-0 transition-transform duration-500 origin-bottom-right"
          >
            <div className="bg-[#fffbf2] rounded-[2.5rem] p-8 shadow-2xl border-4 border-white/10 relative group overflow-hidden">
               {/* Grid Pattern */}
               <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#5C1A1B 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}></div>
               
               {/* Folder Header */}
               <div className="flex justify-between items-center mb-6 relative z-10">
                 <div className="flex items-center gap-3">
                   <div className="p-3 bg-cherryCola text-cream rounded-xl shadow-lg"><Terminal size={20} /></div>
                   <div>
                     <h2 className="text-2xl font-black text-textBrown leading-none">PROJECTS</h2>
                     <p className="text-[10px] font-bold text-cherryCola uppercase tracking-widest mt-1">./selected-works</p>
                   </div>
                 </div>
                 <Link to="/projects" className="bg-cherryCola/10 hover:bg-cherryCola text-cherryCola hover:text-white px-4 py-2 rounded-full text-[10px] font-bold transition-all uppercase tracking-wider">
                    Open Folder
                 </Link>
               </div>

               {/* Project Links */}
               <div className="space-y-3 relative z-10">
                  <Link to="/projects?project=sitemate" className="block bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:border-cherryCola/20 hover:scale-[1.02] transition-all flex items-center gap-4 group/item">
                     <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl"><Monitor size={20}/></div>
                     <div>
                       <h3 className="font-bold text-gray-800 text-sm">SiteMate</h3>
                       <p className="text-[10px] text-gray-400 font-bold uppercase">System Monitor • Java</p>
                     </div>
                     <ArrowUpRight size={16} className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity text-cherryCola"/>
                  </Link>

                  <Link to="/projects?project=cartify" className="block bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:border-cherryCola/20 hover:scale-[1.02] transition-all flex items-center gap-4 group/item">
                     <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl"><Layers size={20}/></div>
                     <div>
                       <h3 className="font-bold text-gray-800 text-sm">Cartify</h3>
                       <p className="text-[10px] text-gray-400 font-bold uppercase">Sales Hub • React</p>
                     </div>
                     <ArrowUpRight size={16} className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity text-cherryCola"/>
                  </Link>
               </div>
            </div>
          </motion.div>

          {/* E. EXPERIENCE TIMELINE (Replaces Laptop Image) */}
          <motion.div 
            variants={itemVars}
            className="md:ml-4 transform rotate-[4deg] hover:rotate-[1deg] transition-transform duration-500 z-10"
          >
             <div className="bg-white p-6 rounded-3xl shadow-2xl relative w-full max-w-sm border-4 border-white/20">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                  <div className="p-2 bg-yellow-100 text-yellow-700 rounded-lg"><Briefcase size={20} /></div>
                  <div>
                    <h3 className="font-black text-gray-800 text-lg leading-none">EXPERIENCE</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Career Timeline</p>
                  </div>
                </div>

                {/* Timeline Items */}
                <div className="space-y-4">
                  {/* Job 1 */}
                  <div className="flex gap-4 relative">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 bg-cherryCola rounded-full mt-1.5"></div>
                      <div className="w-0.5 h-full bg-gray-100 my-1"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">Web Dev Intern</h4>
                      <p className="text-xs text-cherryCola font-bold mb-0.5">Quamin Tech Solutions</p>
                      <p className="text-[10px] text-gray-400 font-mono mb-1">Sep '24 - Mar '25</p>
                      <p className="text-[10px] text-gray-600 leading-tight">
                        Architected backend services & optimized REST APIs along with front-end components for engaging user experiences.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decoration */}
                <Sparkles className="absolute top-4 right-4 text-yellow-400 opacity-50" size={16} />
             </div>
          </motion.div>

          {/* F. ACTION STACK (About + Contact) - KEPT AS IS */}
          <div className="flex gap-4 md:-ml-8 mt-2">
             
             {/* About Me Link */}
             <motion.div variants={itemVars} className="flex-1">
                <Link to="/about" className="block bg-[#2d2424] p-5 rounded-2xl shadow-xl hover:-translate-y-1 transition-transform group text-center relative overflow-hidden h-full flex flex-col justify-center">
                   <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-colors"></div>
                   <User className="mx-auto text-cream/40 group-hover:text-cream transition-colors mb-2" size={24} />
                   <h3 className="text-cream font-bold text-xs uppercase tracking-widest">About Me</h3>
                   <p className="text-[10px] text-cream/30 mt-1 group-hover:text-cream/60 transition-colors">View "The Diary"</p>
                </Link>
             </motion.div>

             {/* Contact Card */}
             <motion.div variants={itemVars} className="flex-1">
                <div 
                   onClick={() => handleCopy('+917666962056', 'phone')}
                   className="bg-cream p-5 rounded-2xl shadow-xl hover:-translate-y-1 transition-transform cursor-pointer group text-center border-4 border-white/10 h-full flex flex-col justify-center"
                >
                   {copied === 'phone' ? <Check className="mx-auto text-green-600 mb-2" size={24} /> : <Phone className="mx-auto text-cherryCola mb-2" size={24} />}
                   <h3 className="text-cherryCola font-bold text-xs uppercase tracking-widest">Contact</h3>
                   <p className="text-[10px] text-cherryCola/50 mt-1 group-hover:text-cherryCola/80 transition-colors">
                      {copied === 'phone' ? 'Copied!' : 'Copy Number'}
                   </p>
                </div>
             </motion.div>
          </div>

        </div>

      </motion.div>
    </div>
  );
};

export default Home;