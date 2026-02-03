import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Briefcase, Heart, Coffee, Zap, Atom } from 'lucide-react';

export default function About() {
  const navigate = useNavigate();

  // Floating Animation for stickers
  const floatAnim = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    // The "Table" (Cherry Cola Background)
    <main className="min-h-screen bg-cherryCola p-4 md:p-8 flex items-center justify-center overflow-hidden relative font-sans">
      
      {/* BACKGROUND DECORATIONS (Floating Stickers) */}
      <motion.div variants={floatAnim} animate="animate" className="absolute top-10 left-10 text-white/20 text-6xl select-none">🌸</motion.div>
      <motion.div variants={floatAnim} animate="animate" className="absolute bottom-20 right-20 text-white/20 text-6xl select-none">✨</motion.div>
      <motion.div variants={floatAnim} animate="animate" className="absolute top-1/2 right-10 text-white/20 text-4xl select-none">⭐</motion.div>

      {/* BACK BUTTON */}
      <button 
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-cherryCola font-bold bg-cream px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all"
      >
        <ArrowLeft size={18} /> Back to Dashboard
      </button>

      {/* THE BOOK CONTAINER */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl h-auto md:h-[650px] gap-4 md:gap-0 z-10">
        
        {/* LEFT PAGE: PROFILE */}
        <motion.div 
          initial={{ rotateY: -90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#fffdf5] w-full md:w-1/2 p-8 shadow-2xl rounded-l-2xl md:rounded-r-none relative flex flex-col items-center text-center border-r border-gray-200"
          style={{ transformOrigin: "right center" }}
        >
          {/* Tape Effect */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-pink-200/50 rotate-2 backdrop-blur-sm shadow-sm opacity-80"></div>

          {/* Profile Photo */}
            <div className="w-40 h-40 bg-gray-100 rounded-2xl mt-8 mb-4 border-4 border-white shadow-lg rotate-2 overflow-hidden relative group">
            <img 
                src="/me.png"   /* <--- Make sure this matches your file name in the public folder */
                alt="Anushka K." 
                className="w-full h-full object-cover"
            />
            </div>

          <h1 className="text-4xl font-black text-gray-800 mb-1 tracking-tight">Anushka K.</h1>
          <p className="text-pink-500 font-bold tracking-widest uppercase text-xs mb-8 bg-pink-50 px-3 py-1 rounded-full">
            Java Developer 
          </p>
          
          <div className="text-gray-600 text-base leading-relaxed px-6 text-left font-medium">
            <p className="mb-4">
              <span className="text-2xl mr-2">👋</span>
              I'm a final-year student at <strong>VIT</strong> obsessed with building scalable backends using <strong>Spring Boot</strong>.
            </p>
            <p>
              When I'm not debugging Java code, I'm writing content for <em>The Cyber Warriors Club</em> or probably playing basketball or badminton.
            </p>
          </div>

          <div className="mt-auto flex gap-6 text-cherryCola opacity-70">
             <Heart className="animate-pulse fill-current" /> 
             <Coffee size={24} strokeWidth={2.5} /> {/* Java Rep */}
             <Zap size={24} strokeWidth={2.5} />    {/* Spring Rep */}
             <Atom size={24} strokeWidth={2.5} />   {/* React Rep */}
          </div>
        </motion.div>

        {/* RIGHT PAGE: TIMELINE */}
        <motion.div 
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#fffdf5] w-full md:w-1/2 p-8 shadow-2xl rounded-r-2xl md:rounded-l-none relative border-l border-gray-100"
          style={{ transformOrigin: "left center" }}
        >
          {/* Tape Effect */}
          <div className="absolute -top-3 right-20 w-32 h-8 bg-blue-200/50 -rotate-1 backdrop-blur-sm shadow-sm opacity-80"></div>

          <h2 className="text-3xl font-black text-gray-800 mb-8 border-b-4 border-pink-100 inline-block px-2 pb-1">
            My Journey
          </h2>

          <div className="space-y-10 pl-4 border-l-2 border-pink-200 ml-2">
            

            {/* Education Item */}
            <div className="relative pl-8">
              <span className="absolute -left-[21px] top-1 bg-blue-100 text-blue-500 p-2 rounded-full text-xs shadow-sm ring-4 ring-[#fffdf5]">
                <GraduationCap size={16} />
              </span>
              <h3 className="font-bold text-lg text-gray-800">B.Tech Computer Science and Engineering</h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Vellore Institute of Technology | 2026</p>
              <p className="text-sm text-gray-600 leading-relaxed">Current CGPA: <span className="text-green-600 font-bold">8.61/10</span></p>
            </div>

            {/* Club Item */}
            <div className="relative pl-8">
              <span className="absolute -left-[21px] top-1 bg-yellow-100 text-yellow-600 p-2 rounded-full text-xs shadow-sm ring-4 ring-[#fffdf5]">
                <Heart size={16} />
              </span>
              <h3 className="font-bold text-lg text-gray-800">Co-Lead : Content and Editorial Department</h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">The Cyber Warriors Club</p>
              <p className="text-sm text-gray-600 leading-relaxed">Managed editorial deadlines & anchored multiple live events.</p>
              <p className="text-sm text-gray-600 leading-relaxed">Responsible for content creation for sponsorship proposals, event reports, emails and scripts.</p>
              
            </div>

            {/* Experience Item 1 */}
            <div className="relative pl-8">
              <span className="absolute -left-[21px] top-1 bg-pink-100 text-pink-500 p-2 rounded-full text-xs shadow-sm ring-4 ring-[#fffdf5]">
                <Briefcase size={16} />
              </span>
              <h3 className="font-bold text-lg text-gray-800">Web Development Intern</h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Quamin Tech Solutions | 2024-25</p>
              <p className="text-sm text-gray-600 leading-relaxed">Architected backend services & optimized REST APIs for high performance.</p>
              <p className="text-sm text-gray-600 leading-relaxed">Designed and delivered interactive, data-driven dashboard UI using React, improving usability and
user engagement</p>
              <p className="text-sm text-gray-600 leading-relaxed">Tech Stack- Java, React, Spring Boot, REST APIs, MySQL</p>
            </div>

          </div>
          
          {/* Sticker at the bottom */}
          <div className="absolute bottom-6 right-6 rotate-12 opacity-80 text-6xl select-none">
            🍄
          </div>

        </motion.div>
      </div>
    </main>
  );
}