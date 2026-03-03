/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Phone, 
  User, 
  AlertCircle, 
  Code, 
  CheckCircle2, 
  Zap, 
  Search, 
  Settings, 
  Award, 
  CreditCard,
  Globe,
  Layout,
  Smartphone,
  ShieldCheck,
  Clock,
  MessageSquare,
  Handshake,
  Rocket
} from 'lucide-react';

// Slide Components
const Slide1 = () => (
  <div className="flex flex-col md:flex-row items-center justify-between h-full gap-12">
    <div className="flex-1 space-y-6">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-blue-500 font-mono tracking-widest uppercase text-sm">Professional Web Developer</span>
        <h1 className="text-7xl font-black text-white mt-2 leading-tight tracking-tighter">
          BASAVARAJ
        </h1>
        <p className="text-2xl text-zinc-400 font-light italic mt-4">
          “Professional Websites for All Enterprises”
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex items-center gap-3 bg-zinc-900/50 p-4 rounded-xl border border-white/5 w-fit"
      >
        <div className="bg-blue-500 p-2 rounded-lg">
          <Phone className="text-white w-5 h-5" />
        </div>
        <span className="text-xl font-mono text-white tracking-wider">9035438851</span>
      </motion.div>
    </div>
    
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex-1 relative"
    >
      <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="relative bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl aspect-video">
        <img 
          src="https://picsum.photos/seed/web-dev/1200/800" 
          alt="Modern Website Mockup" 
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="h-1 w-24 bg-blue-500 rounded-full mb-2"></div>
          <p className="text-white font-medium">Modern Responsive Design</p>
        </div>
      </div>
    </motion.div>
  </div>
);

const Slide2 = () => (
  <div className="h-full flex flex-col justify-center space-y-12">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <User className="text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white">About Me</h2>
        </div>
        <p className="text-xl text-zinc-400 leading-relaxed">
          A Freelancer Frontend Web developer providing Web Services, Online Presence, and Business tools. 
          I don't just build websites; I build digital solutions that drive growth.
        </p>
        <div className="flex gap-8">
          <div>
            <span className="block text-5xl font-black text-blue-500">2+</span>
            <span className="text-zinc-500 uppercase text-xs tracking-widest">Years Experience</span>
          </div>
          <div>
            <span className="block text-5xl font-black text-white">50+</span>
            <span className="text-zinc-500 uppercase text-xs tracking-widest">Projects Delivered</span>
          </div>
        </div>
      </div>
      <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Globe size={120} />
        </div>
        <h3 className="text-2xl font-semibold text-white mb-4 italic">"Focusing on delivering online presence, not just websites."</h3>
        <p className="text-zinc-500">My mission is to empower small businesses and startups with high-performance digital tools that level the playing field.</p>
      </div>
    </div>
    
    <div className="pt-12 border-t border-white/5">
      <p className="text-zinc-500 text-sm uppercase tracking-[0.3em] mb-6 text-center">Industries Served</p>
      <div className="overflow-hidden relative h-12">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-16 items-center whitespace-nowrap absolute left-0"
        >
          {['TECH', 'RETAIL', 'HEALTH', 'FINANCE', 'EDUCATION', 'FASHION', 'REAL ESTATE', 'FOOD'].map((industry) => (
            <span key={industry} className="text-2xl font-black text-zinc-800 tracking-tighter">{industry}</span>
          ))}
          {['TECH', 'RETAIL', 'HEALTH', 'FINANCE', 'EDUCATION', 'FASHION', 'REAL ESTATE', 'FOOD'].map((industry) => (
            <span key={industry + '-2'} className="text-2xl font-black text-zinc-800 tracking-tighter">{industry}</span>
          ))}
        </motion.div>
      </div>
    </div>
  </div>
);

const Slide3 = () => (
  <div className="h-full flex flex-col justify-center">
    <div className="mb-12">
      <h2 className="text-5xl font-black text-white tracking-tight">Problems Businesses Face</h2>
      <div className="h-1.5 w-32 bg-blue-500 mt-4"></div>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { icon: <Globe />, title: "No Online Presence", desc: "Missing out on 80% of potential customers who search online first." },
        { icon: <Layout />, title: "Outdated Design", desc: "First impressions matter. A 2010 design kills your brand credibility." },
        { icon: <Zap />, title: "Slow Website Speed", desc: "Users leave if a site takes more than 3 seconds to load." },
        { icon: <Search />, title: "Poor Google Ranking", desc: "If you're not on page 1, you're invisible to your market." },
        { icon: <Settings />, title: "No Technical Support", desc: "Websites break. Without support, your business goes offline." },
        { icon: <AlertCircle />, title: "High Maintenance", desc: "Hidden costs and complex updates draining your resources." }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="p-6 bg-zinc-900 border border-white/5 rounded-2xl hover:border-blue-500/50 transition-colors group"
        >
          <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const Slide4 = () => (
  <div className="h-full flex flex-col justify-center">
    <div className="mb-12 flex justify-between items-end">
      <div>
        <h2 className="text-5xl font-black text-white tracking-tight">My Services</h2>
        <p className="text-zinc-400 mt-2">Comprehensive solutions for your digital growth.</p>
      </div>
      <div className="text-blue-500 font-mono text-sm">04 / 10</div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { icon: <Globe />, title: "Custom Business Websites", desc: "Tailored to your specific business goals and brand identity." },
        { icon: <Rocket />, title: "E-Commerce Websites", desc: "Full-featured online stores (Launching Soon!)", badge: "SOON" },
        { icon: <Layout />, title: "Landing Pages", desc: "High-converting pages designed for marketing campaigns." },
        { icon: <User />, title: "Portfolio Websites", desc: "Showcase your work and skills with a professional touch." },
        { icon: <Settings />, title: "Website Redesign", desc: "Modernize your existing site with latest UI/UX trends." },
        { icon: <Smartphone />, title: "Responsive Design", desc: "Perfect viewing experience on mobile, tablet, and desktop." }
      ].map((item, i) => (
        <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-zinc-900 transition-colors">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500">
            {item.icon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              {item.badge && <span className="text-[10px] bg-blue-500 text-white px-1.5 py-0.5 rounded font-bold">{item.badge}</span>}
            </div>
            <p className="text-zinc-500 text-sm mt-1">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Slide5 = () => (
  <div className="h-full flex flex-col justify-center">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <h2 className="text-6xl font-black text-white leading-none">What You Get <br/><span className="text-blue-500">Value Offer</span></h2>
        <div className="space-y-4">
          {[
            "Professional Website Development",
            "Free Domain (1 Year)",
            "Free Hosting (1 Year)",
            "SEO Optimization",
            "1 Year Free Maintenance & Support",
            "Fast Loading & Secure Website",
            "Minimal Update Cost"
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <CheckCircle2 className="text-blue-500 w-6 h-6" />
              <span className="text-xl text-zinc-300">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-10 bg-blue-500/10 blur-3xl rounded-full"></div>
        <div className="bg-zinc-900 border border-white/10 p-12 rounded-[40px] shadow-2xl text-center space-y-6 relative">
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-blue-500/20">
            <Award className="text-white w-10 h-10" />
          </div>
          <h3 className="text-3xl font-bold text-white">All-In-One Solution</h3>
          <p className="text-zinc-400">Everything you need to launch your business online successfully, with zero technical headaches.</p>
          <div className="pt-6">
            <span className="text-zinc-500 text-sm uppercase tracking-widest">Starting at only</span>
            <div className="text-5xl font-black text-white mt-1">₹24,999</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide6 = () => (
  <div className="h-full flex flex-col justify-center">
    <h2 className="text-5xl font-black text-white mb-16 text-center">My Development Process</h2>
    <div className="grid md:grid-cols-4 gap-4 relative">
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-800 -translate-y-1/2 z-0"></div>
      {[
        { step: "01", title: "Discussion", desc: "Understanding your goals and requirements.", icon: <MessageSquare /> },
        { step: "02", title: "Development", desc: "Building your custom solution with precision.", icon: <Code /> },
        { step: "03", title: "Optimization", desc: "Rigorous testing and speed enhancement.", icon: <Zap /> },
        { step: "04", title: "Launch", desc: "Deploying your site to the world.", icon: <Rocket /> }
      ].map((item, i) => (
        <div key={i} className="relative z-10 bg-black p-6 rounded-2xl border border-white/5 text-center space-y-4">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto text-white shadow-xl shadow-blue-500/20">
            {item.icon}
          </div>
          <div className="text-blue-500 font-mono font-bold">{item.step}</div>
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          <p className="text-zinc-500 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
    <div className="mt-16 p-6 bg-zinc-900/50 rounded-2xl border border-blue-500/20 text-center">
      <p className="text-blue-400 font-medium flex items-center justify-center gap-2">
        <Clock size={18} /> Ongoing Support & Maintenance follows every launch
      </p>
    </div>
  </div>
);

const Slide7 = () => (
  <div className="h-full flex flex-col justify-center">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div>
          <h2 className="text-5xl font-black text-white">On-page SEO Setup</h2>
          <p className="text-zinc-400 mt-4 text-lg">Visibility is the key to profitability. I ensure your website is built to be found.</p>
        </div>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-blue-500 border border-white/5">
              <Smartphone />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Mobile Optimization</h3>
              <p className="text-zinc-500">Google prioritizes mobile-friendly sites. Your site will pass every mobile-responsive test.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-blue-500 border border-white/5">
              <Search />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Basic Keyword Optimization</h3>
              <p className="text-zinc-500">Strategic placement of keywords in meta tags, headers, and content for better indexing.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-900 p-8 rounded-3xl border border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="grid grid-cols-10 gap-2 p-4">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="h-4 bg-blue-500 rounded"></div>
            ))}
          </div>
        </div>
        <div className="relative space-y-4">
          <div className="flex items-center justify-between p-4 bg-black/50 rounded-xl border border-white/5">
            <span className="text-zinc-400">Page Speed Score</span>
            <span className="text-emerald-500 font-bold">98/100</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-black/50 rounded-xl border border-white/5">
            <span className="text-zinc-400">SEO Health</span>
            <span className="text-blue-500 font-bold">Excellent</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-black/50 rounded-xl border border-white/5">
            <span className="text-zinc-400">Mobile Friendly</span>
            <span className="text-emerald-500 font-bold">Verified</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide8 = () => (
  <div className="h-full flex flex-col justify-center">
    <div className="mb-12">
      <h2 className="text-5xl font-black text-white">Maintenance & Support</h2>
      <p className="text-blue-500 font-bold text-xl mt-2 italic">(1 Year Free Included)</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { icon: <ShieldCheck />, title: "Bug Fixes", desc: "Immediate resolution of any technical glitches." },
        { icon: <Zap />, title: "Security Updates", desc: "Keeping your site safe from latest digital threats." },
        { icon: <Settings />, title: "Minor Content Changes", desc: "Updating text or images whenever you need." },
        { icon: <Phone />, title: "Technical Support", desc: "Direct access to me for any queries." },
        { icon: <Award />, title: "Backup Management", desc: "Regular backups to ensure data is never lost." },
        { icon: <CheckCircle2 />, title: "Performance Monitoring", desc: "Ensuring your site stays fast and efficient." }
      ].map((item, i) => (
        <div key={i} className="p-6 bg-zinc-900/50 border border-white/5 rounded-2xl space-y-3">
          <div className="text-blue-500">{item.icon}</div>
          <h3 className="text-lg font-bold text-white">{item.title}</h3>
          <p className="text-zinc-500 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const Slide9 = () => (
  <div className="h-full flex flex-col justify-center">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="relative order-2 md:order-1">
        <div className="absolute -inset-4 bg-blue-500/20 blur-2xl rounded-full"></div>
        <img 
          src="https://picsum.photos/seed/partnership/800/600" 
          alt="Why Choose Me" 
          className="rounded-3xl relative z-10 border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="space-y-8 order-1 md:order-2">
        <h2 className="text-5xl font-black text-white">Why Choose Me</h2>
        <div className="space-y-6">
          {[
            { icon: <CreditCard />, title: "Affordable & Transparent Pricing", desc: "No hidden costs. You know exactly what you pay for." },
            { icon: <Clock />, title: "On-Time Delivery", desc: "Respecting deadlines is my top priority." },
            { icon: <MessageSquare />, title: "Clear Communication", desc: "Regular updates throughout the project." },
            { icon: <Handshake />, title: "Business-Focused Approach", desc: "Websites designed to solve business problems." },
            { icon: <Award />, title: "Long-Term Partnership", desc: "I'm your dedicated tech partner for the long run." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 text-blue-500 mt-1">{item.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
                <p className="text-zinc-500 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Slide10 = () => (
  <div className="h-full flex flex-col justify-center items-center">
    <div className="text-center mb-12">
      <h2 className="text-6xl font-black text-white tracking-tighter">Ready to Start?</h2>
      <p className="text-zinc-400 text-xl mt-4">Invest in your digital future today.</p>
    </div>
    
    <div className="w-full max-w-2xl bg-zinc-900 border-2 border-blue-500 rounded-[40px] p-12 relative overflow-hidden shadow-2xl shadow-blue-500/10">
      <div className="absolute top-0 right-0 bg-blue-500 text-white px-8 py-2 rounded-bl-3xl font-bold uppercase tracking-widest text-xs">
        Best Value
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/10 pb-8 mb-8">
        <div>
          <h3 className="text-3xl font-bold text-white">Business Website Package</h3>
          <p className="text-zinc-500 mt-1">Complete digital presence solution</p>
        </div>
        <div className="text-right">
          <div className="text-5xl font-black text-white">₹24,999/-</div>
          <p className="text-blue-500 font-mono text-sm">All-Inclusive Price</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {[
          "1 Year Free Domain",
          "1 Year Free Hosting",
          "SEO Optimization Included",
          "1-Year Maintenance Included",
          "Responsive Design",
          "Fast & Secure Setup"
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-zinc-300">
            <CheckCircle2 size={18} className="text-blue-500" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      
      <div className="space-y-4">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-5 rounded-2xl transition-all shadow-lg shadow-blue-500/20 text-xl">
          Get Started Now
        </button>
        <div className="flex items-center justify-center gap-6 text-zinc-500">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>9035438851</span>
          </div>
          <div className="flex items-center gap-2">
            <User size={16} />
            <span>Basavaraj</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slides = [
    <Slide1 />, <Slide2 />, <Slide3 />, <Slide4 />, <Slide5 />,
    <Slide6 />, <Slide7 />, <Slide8 />, <Slide9 />, <Slide10 />
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500 selection:text-white overflow-hidden flex flex-col">
      {/* Top Bar */}
      <header className="p-6 flex justify-between items-center border-b border-white/5 bg-black/50 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center font-black italic">B</div>
          <span className="font-black tracking-tighter text-xl">BASAVARAJ<span className="text-blue-500">.DEV</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          <span>Strategy</span>
          <span>Design</span>
          <span>Development</span>
          <span>Support</span>
        </div>
        <div className="text-sm font-mono text-blue-500">
          {String(currentSlide + 1).padStart(2, '0')} / {totalSlides}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative overflow-hidden flex items-center justify-center p-6 md:p-12 lg:p-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full max-w-6xl h-full"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <footer className="p-8 flex justify-between items-center z-50">
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1 transition-all duration-500 rounded-full ${
                currentSlide === i ? 'w-8 bg-blue-500' : 'w-4 bg-zinc-800 hover:bg-zinc-700'
              }`}
            />
          ))}
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            className="p-4 bg-zinc-900 border border-white/5 rounded-full hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={nextSlide}
            className="p-4 bg-blue-500 rounded-full hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 text-white"
          >
            <ChevronRight />
          </button>
        </div>
      </footer>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150"></div>
      </div>
    </div>
  );
}
