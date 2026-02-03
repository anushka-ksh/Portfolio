import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, Phone, Search, Monitor, Code, 
  GraduationCap, Terminal, User, Clock, Code2, Database, Globe,
  Copy, Check, Cpu, FileText, Download, ArrowUpRight, Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [copied, setCopied] = useState(null);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  
  // Typewriter Animation Text
  const placeholders = [
    "Search for GitHub...",
    "Search for LinkedIn...",
    "Check my LeetCode...",
    "View my Projects..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const searchLinks = [
    { name: "LinkedIn", url: "https://linkedin.com/in/anushka-kshirsagar-7b1740250", icon: <Linkedin size={14} /> },
    { name: "GitHub", url: "https://github.com/anushka-ksh", icon: <Github size={14} /> },
    { name: "LeetCode", url: "https://leetcode.com/", icon: <Code2 size={14} /> },
    { name: "GFG", url: "https://auth.geeksforgeeks.org/", icon: <Code size={14} /> },
    { name: "Codolio", url: "https://codolio.com/", icon: <Database size={14} /> }
  ];

  return (
    <div className="h-screen bg-cherryCola p-4 font-sans text-textBrown flex flex-col overflow-hidden">
      
      {/* MAIN GRID LAYOUT */}
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4">
        
        {/* 1. CLOCK (Top Left) */}
        <div className="md:col-span-1 bg-cream rounded-[2rem] shadow-xl overflow-hidden relative group">
          <img 
            src="/aesthetic.jpg" 
            alt="Aesthetic" 
            className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="relative z-10 p-6 h-full flex flex-col justify-end text-cream">
            <h1 className="text-5xl font-light italic text-white drop-shadow-md">1:00</h1>
            <p className="text-xs tracking-widest opacity-90 font-medium">TUESDAY, 3 FEB</p>
          </div>
        </div>

        {/* 2. INTERACTIVE SEARCH & RESUME (Top Middle - Spans 2) */}
        <div className="md:col-span-2 bg-cream rounded-[2rem] p-6 shadow-xl relative z-50 flex flex-col justify-between overflow-hidden group">
          
          {/* Decorative Background Blob */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-cherryCola/5 rounded-full blur-3xl group-hover:bg-cherryCola/10 transition-colors"></div>

          {/* TOP ROW: Search Bar with Typewriter Effect */}
          <div 
            className="bg-white rounded-2xl px-5 py-4 flex items-center gap-3 shadow-sm cursor-text hover:shadow-md transition-all border border-transparent hover:border-cherryCola/10 relative z-20"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search size={22} className="text-cherryCola animate-pulse" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Quick Find</span>
              <span className="text-lg text-textBrown/60 font-medium select-none w-48 truncate transition-all duration-500">
                {placeholders[placeholderIndex]}
              </span>
            </div>
            <div className="ml-auto bg-gray-100 p-1.5 rounded-lg">
               <Globe size={16} className="text-gray-400" />
            </div>
          </div>

          {/* BOTTOM ROW: Resume & Socials */}
          <div className="flex items-center gap-3 mt-2 relative z-10">
            {/* RESUME BUTTON */}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-cherryCola text-cream rounded-xl p-3 flex items-center justify-between hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-cherryCola/20 cursor-pointer group/resume"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <FileText size={18} />
                </div>
                <div className="flex flex-col">
                   <span className="text-xs opacity-80 uppercase tracking-wider font-bold">My CV</span>
                   <span className="text-sm font-bold leading-none">Resume.pdf</span>
                </div>
              </div>
              <Download size={18} className="opacity-60 group-hover/resume:translate-y-1 transition-transform" />
            </a>

            {/* Quick Link Button */}
            <a 
              href="https://linkedin.com/in/anushka-kshirsagar-7b1740250" 
              target="_blank" 
              rel="noreferrer"
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>

          {/* SEARCH DROPDOWN LOGIC */}
          {isSearchOpen && (
            <div className="absolute top-[85px] left-6 right-6 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
              <div className="px-4 py-2 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Destinations</span>
                 <span className="text-[10px] text-red-400 cursor-pointer hover:underline" onClick={(e) => { e.stopPropagation(); setIsSearchOpen(false); }}>Esc</span>
              </div>
              <div className="py-1 max-h-40 overflow-y-auto">
                {searchLinks.map((link, index) => (
                  <a key={index} href={link.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group border-b border-gray-50 last:border-0">
                    <span className="p-1.5 bg-gray-100 rounded-md text-gray-400 group-hover:text-cherryCola group-hover:bg-cherryCola/10 transition-colors">
                      {link.icon}
                    </span>
                    <span className="font-medium text-sm text-gray-600 group-hover:text-black flex-1">{link.name}</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-40" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 3. LAPTOP 1 (Top Right) */}
        <div className="md:col-span-1 bg-cream rounded-[2rem] shadow-inner border-4 border-cream overflow-hidden relative group">
           <img 
             src="/laptop1.jpg" 
             alt="WS1" 
             className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
           />
           <div className="absolute bottom-4 left-0 right-0 text-center">
             <span className="bg-black/50 text-white text-[10px] px-3 py-1 rounded-full backdrop-blur-md">WORKSTATION 1</span>
           </div>
        </div>

        {/* 4. PROJECTS DIRECTORY (Middle Left - Spans 2) */}
        <div className="md:col-span-2 bg-[#fffbf2] rounded-[2rem] p-6 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-cream/50 flex flex-col justify-center">
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#5C1A1B 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}></div>

          {/* Header */}
          <div className="flex justify-between items-center mb-5 relative z-10">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-cherryCola rounded-lg text-cream shadow-md">
                <Terminal size={18} />
              </div>
              <div>
                <h2 className="text-lg font-black tracking-tight text-textBrown leading-none">PROJECT_DIR</h2>
                <p className="text-[10px] font-mono text-cherryCola/60 font-bold">./select-file</p>
              </div>
            </div>
            <span className="text-[10px] font-mono bg-cherryCola/5 px-2 py-1 rounded text-cherryCola font-bold">v1.0.0</span>
          </div>

          {/* Project Cards */}
          <div className="space-y-3 relative z-10">
            {/* Project 1 Link */}
            <Link to="/projects?project=sitemate" className="block">
              <div className="bg-white p-3 rounded-xl border border-gray-100 hover:border-cherryCola/20 hover:shadow-md transition-all flex justify-between items-center group/item cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Monitor size={18} /></div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-800 leading-tight">SiteMate</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      <p className="text-[10px] text-gray-500 font-mono">System Monitor • Java</p>
                    </div>
                  </div>
                </div>
                <div className="opacity-0 group-hover/item:opacity-100 transform translate-x-2 group-hover/item:translate-x-0 transition-all">
                  <ArrowUpRight size={16} className="text-cherryCola" />
                </div>
              </div>
            </Link>

            {/* Project 2 Link */}
            <Link to="/projects?project=cartify" className="block">
              <div className="bg-white p-3 rounded-xl border border-gray-100 hover:border-cherryCola/20 hover:shadow-md transition-all flex justify-between items-center group/item cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-50 text-orange-600 rounded-lg"><Layers size={18} /></div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-800 leading-tight">Cartify</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      <p className="text-[10px] text-gray-500 font-mono">Sales Hub • React</p>
                    </div>
                  </div>
                </div>
                <div className="opacity-0 group-hover/item:opacity-100 transform translate-x-2 group-hover/item:translate-x-0 transition-all">
                  <ArrowUpRight size={16} className="text-cherryCola" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* 5. LAPTOP 2 (Middle Right) */}
        <div className="md:col-span-1 bg-cream rounded-[2rem] shadow-inner border-4 border-cream overflow-hidden relative group">
           <img 
             src="/laptop2.jpg" 
             alt="WS2" 
             className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
           />
           <div className="absolute bottom-4 left-0 right-0 text-center">
             <span className="bg-black/50 text-white text-[10px] px-3 py-1 rounded-full backdrop-blur-md">WORKSTATION 2</span>
           </div>
        </div>

        {/* 6. ABOUT ME (Middle Right - Stacked) */}
        <Link to="/about" className="md:col-span-1 bg-cream rounded-[2rem] p-6 shadow-xl hover:bg-[#d4c8b5] transition-colors cursor-pointer group flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold">ABOUT</h2>
            <User size={24} className="opacity-50 group-hover:scale-110 transition-transform"/>
          </div>
          <p className="text-sm leading-snug mt-2">
            Final Year CSE @ VIT.
            <span className="block mt-2 text-[10px] font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
              View Stats →
            </span>
          </p>
        </Link>

        {/* 7. ID CARD & TECH STACK (Bottom Left - Spans 2) */}
        <div className="md:col-span-2 bg-cream rounded-[2rem] p-4 shadow-xl flex gap-4 overflow-hidden">
          {/* ID CARD */}
          <div className="w-1/2 bg-white rounded-2xl p-4 relative shadow-sm border border-gray-100 flex flex-col justify-between group">
            <div className="flex justify-between items-start">
              <div>
                 <h3 className="text-sm font-black text-gray-800 uppercase tracking-tight">Anushka Kshirsagar</h3>
                 <p className="text-[10px] text-cherryCola font-bold uppercase tracking-wider mt-0.5">Full Stack Developer</p>
              </div>
              <GraduationCap className="text-gray-200" size={20} />
            </div>
            <div>
              <div className="w-full h-px bg-gray-100 my-2"></div>
              <div className="flex justify-between items-end">
                <div className="w-3/4">
                   <p className="text-[8px] uppercase text-gray-400 mb-0.5">University</p>
                   <p className="text-[10px] font-bold leading-tight text-gray-700">Vellore Institute of Technology</p>
                </div>
                <div className="text-right">
                   <span className="text-xl font-bold text-cherryCola leading-none">8.61</span>
                   <p className="text-[6px] uppercase text-gray-400 text-center">CGPA</p>
                </div>
              </div>
            </div>
          </div>

          {/* SKILL CHIPS */}
          <div className="w-1/2 flex flex-col justify-center gap-2 pl-2 border-l border-textBrown/5">
             <div className="flex items-center gap-2 mb-1">
               <Cpu size={16} className="text-cherryCola" />
               <span className="text-xs font-bold uppercase tracking-widest text-textBrown">Tech Stack</span>
             </div>
             <div className="flex flex-wrap gap-1.5 content-start">
               {['Java', 'Spring Boot','Spring Security','PostgreSQL','MySQL','MongoDB','RESTful API Development','JPA','Hibernate','MVC Architecture','Postman','Maven', 'React', 'PostgreSQL', 'AWS', 'Docker', 'Git'].map(s => (
                  <span key={s} className="bg-cherryCola text-cream px-2 py-1 rounded text-[10px] font-bold shadow-sm hover:scale-105 transition-transform cursor-default">
                    {s}
                  </span>
               ))}
             </div>
          </div>
        </div>

        {/* 8. BUSINESS CARD CONTACTS (Bottom Right - Spans 2) */}
        <div className="md:col-span-2 bg-[#2d2424] rounded-[2rem] p-6 shadow-xl flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-10 bg-white/5 rounded-full blur-2xl"></div>
          <h2 className="text-cream/50 text-xs font-bold uppercase tracking-[0.2em] mb-4">Business Card</h2>
          
          <div className="flex flex-col gap-3">
             {/* PHONE */}
             <div 
               onClick={() => handleCopy('+917666962056', 'phone')}
               className="flex items-center justify-between bg-white/10 p-3 rounded-xl cursor-pointer hover:bg-white/20 transition-all border border-white/5"
             >
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-cream rounded-lg text-cherryCola"><Phone size={16} /></div>
                 <span className="text-cream font-mono text-sm">+91-7666962056</span>
               </div>
               {copied === 'phone' ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-cream/40" />}
             </div>

             {/* EMAIL */}
             <div 
               onClick={() => handleCopy('anushkaakshirsagar@gmail.com', 'email')}
               className="flex items-center justify-between bg-white/10 p-3 rounded-xl cursor-pointer hover:bg-white/20 transition-all border border-white/5"
             >
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-cream rounded-lg text-cherryCola"><Mail size={16} /></div>
                 <span className="text-cream font-mono text-sm truncate w-32 md:w-auto">anushkaakshirsagar...</span>
               </div>
               {copied === 'email' ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-cream/40" />}
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;