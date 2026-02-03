import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Github, Database, Server, Layout, 
  Cpu, ExternalLink, FolderOpen, FileCode 
} from 'lucide-react';

// Project Data
const projectsData = {
  sitemate: {
    title: "SiteMate",
    subtitle: "24/7 System Monitoring Architecture",
    type: "Full Stack Application",
    github: "https://github.com/anushka-ksh/SiteMate",
    tech: ["Java", "Spring Boot", "Spring Security", "React", "PostgreSQL", "BCrypt"],
    features: [
      "Built a secure Spring Boot app with BCrypt encryption for user data.",
      "Implemented scheduled background services for automated 24/7 uptime monitoring.",
      "Designed a REST API to serve historical performance data as JSON.",
      "Integrated Chart.js for real-time live performance graphs."
    ],
    color: "bg-blue-50 text-blue-700",
    icon: <Server size={24} />
  },
  cartify: {
    title: "Cartify",
    subtitle: "Point-of-Sale (POS) & Sales Hub",
    type: "Full Stack Sales Platform",
    github: "https://github.com/anushka-ksh/Cartify",
    tech: ["Java", "Spring Boot", "React", "JWT Auth", "MySQL"],
    features: [
      "Architected a POS system with Role-Based Access Control (Admin vs Associate).",
      "Engineered comprehensive CRUD functionalities for inventory management.",
      "Created a real-time analytics dashboard to visualize sales trends.",
      "Automated the generation of printable transaction receipts."
    ],
    color: "bg-orange-50 text-orange-700",
    icon: <Layout size={24} />
  }
};

const Projects = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Default to 'sitemate' if nothing selected
  const initialProject = searchParams.get('project') || 'sitemate';
  const [activeTab, setActiveTab] = useState(initialProject);

  // Update URL when tab changes without reloading
  useEffect(() => {
    navigate(`?project=${activeTab}`, { replace: true });
  }, [activeTab, navigate]);

  const activeData = projectsData[activeTab];

  return (
    <div className="min-h-screen bg-cherryCola p-4 md:p-8 flex items-center justify-center font-sans overflow-hidden">
      
      {/* Back Button */}
      <button 
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-white/80 font-bold bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all backdrop-blur-md"
      >
        <ArrowLeft size={18} /> Dashboard
      </button>

      {/* Main "Folder" Container */}
      <div className="w-full max-w-5xl h-[85vh] bg-[#f0e6d2] rounded-3xl shadow-2xl flex overflow-hidden relative border-8 border-[#e6dac0]">
        
        {/* SIDEBAR (File List) */}
        <div className="w-1/3 bg-[#e6dac0] border-r border-[#d4c8b0] flex flex-col p-6">
          <div className="mb-8 opacity-50">
            <h1 className="font-black text-2xl text-[#5c4a35] tracking-tighter flex items-center gap-2">
              <FolderOpen /> ARCHIVES
            </h1>
            <p className="text-xs font-mono text-[#5c4a35]">CONFIDENTIAL // DEV_ONLY</p>
          </div>

          <div className="space-y-4">
            {Object.keys(projectsData).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`w-full text-left p-4 rounded-xl flex items-center gap-3 transition-all duration-300 ${
                  activeTab === key 
                    ? 'bg-white shadow-lg scale-105 border-l-4 border-cherryCola' 
                    : 'bg-[#dcd0b6] hover:bg-white/50 opacity-70'
                }`}
              >
                <div className={`p-2 rounded-lg ${activeTab === key ? 'bg-cherryCola text-white' : 'bg-[#c8bcff] text-[#5c4a35]'}`}>
                  <FileCode size={20} />
                </div>
                <div>
                  <span className={`block font-bold text-sm ${activeTab === key ? 'text-gray-900' : 'text-[#5c4a35]'}`}>
                    {projectsData[key].title}
                  </span>
                  <span className="text-[10px] uppercase font-mono text-gray-500">
                    {key === 'sitemate' ? 'Monitoring' : 'Sales System'}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT AREA (The Paper) */}
        <div className="w-2/3 bg-[#fffbf2] relative p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col">
          
          {/* Background Texture */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px)', backgroundSize: '100% 24px' }}>
          </div>

          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="h-full flex flex-col"
            >
              {/* Header Badge */}
              <div className="flex justify-between items-start mb-6">
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${activeData.color}`}>
                  {activeData.type}
                </span>
                <span className="font-mono text-xs text-gray-400">REF: {activeTab.toUpperCase()}_2026</span>
              </div>

              {/* Title */}
              <h2 className="text-5xl font-black text-gray-800 mb-2 tracking-tight">{activeData.title}</h2>
              <p className="text-lg text-gray-500 font-medium mb-8 border-b border-gray-200 pb-8">
                {activeData.subtitle}
              </p>

              {/* Tech Stack Chips */}
              <div className="mb-8">
                <h3 className="text-xs font-bold uppercase text-gray-400 mb-3 flex items-center gap-2">
                  <Cpu size={14} /> Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeData.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-md text-xs font-bold text-gray-600">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features List (Resume Content) */}
              <div className="mb-auto">
                <h3 className="text-xs font-bold uppercase text-gray-400 mb-3 flex items-center gap-2">
                  <Database size={14} /> System Specifications
                </h3>
                <ul className="space-y-3">
                  {activeData.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-cherryCola rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* GitHub Button (Bottom) */}
              <a 
                href={activeData.github} 
                target="_blank" 
                rel="noreferrer"
                className="mt-8 group w-full bg-gray-900 text-white rounded-xl p-4 flex items-center justify-between hover:bg-cherryCola transition-colors shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <Github size={24} />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-400 group-hover:text-white/80">SOURCE CODE</span>
                    <span className="font-bold">View Repository</span>
                  </div>
                </div>
                <ExternalLink className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Projects;