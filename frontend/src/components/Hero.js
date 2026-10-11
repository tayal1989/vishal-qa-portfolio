import React from 'react';
import {
  ArrowRight,
  FileDown,
  Mail,
  MapPin,
  Sparkles,
  Bot,
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
  Award
} from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const keyStats = [
    {
      value: '15+',
      label: 'Years Experience',
      subtext: 'FinTech, Gaming & Telecom',
      icon: <Award className="w-5 h-5 text-blue-500" />
    },
    {
      value: '98%+',
      label: 'FE Automation Coverage',
      subtext: 'Client apps at MobiKwik',
      icon: <Zap className="w-5 h-5 text-amber-500" />
    },
    {
      value: '25',
      label: 'Engineers Led',
      subtext: 'QA scaled from scratch @ Zupee',
      icon: <Layers className="w-5 h-5 text-indigo-500" />
    },
    {
      value: '6 hrs',
      label: 'Continuous Releases',
      subtext: 'Automated CI/CD quality gates',
      icon: <Cpu className="w-5 h-5 text-emerald-500" />
    },
    {
      value: '40%',
      label: 'Defect Leakage Reduction',
      subtext: 'Shift-left test strategies',
      icon: <ShieldCheck className="w-5 h-5 text-rose-500" />
    }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-16 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 overflow-hidden"
    >
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-8 animate-fadeIn">
          {/* Top Pill / Status Tag */}
          <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/80 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-xs font-semibold text-slate-200">
              Engineering Manager @ One MobiKwik Systems
            </span>
            <span className="text-slate-500 text-xs hidden sm:inline">•</span>
            <span className="text-xs text-blue-400 font-medium hidden sm:inline-flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Architecting AI-First & Agentic Quality
            </span>
          </div>

          {/* Name & Titles */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Vishal Agarwal
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent py-2 leading-normal tracking-tight inline-block">
              Chief Agentic Quality Architect & QA Engineering Leader
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 dark:text-slate-300 max-w-3xl leading-relaxed">
              15+ years architecting scalable quality systems across <span className="text-white font-medium">FinTech</span>,{' '}
              <span className="text-white font-medium">Gaming</span>, and <span className="text-white font-medium">Telecom</span>.
              Pioneering the shift to AI-augmented, agent-driven QA ecosystems using{' '}
              <span className="text-cyan-400 font-mono text-sm bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">Cursor IDE</span>,{' '}
              <span className="text-cyan-400 font-mono text-sm bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">Claude AI Agents</span>, and{' '}
              <span className="text-cyan-400 font-mono text-sm bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">MCP (Model Context Protocol)</span>{' '}
              to autonomously generate, maintain, and heal test pipelines at scale.
            </p>
          </div>

          {/* Quick Contact & Location Badges */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>Gurgaon, India</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <a
              href="mailto:tayal1989@gmail.com"
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>tayal1989@gmail.com</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              type="button"
              onClick={() => scrollToSection('#tools')}
              className="h-12 px-6 rounded-lg font-semibold text-sm inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/25 group transition-all"
            >
              <Bot className="mr-2 h-5 w-5 text-cyan-300" />
              Explore Tools & Frameworks
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/Vishal_Agarwal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 rounded-lg font-semibold text-sm inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600 transition-all shadow-sm"
            >
              <FileDown className="mr-2 h-5 w-5 text-blue-400" />
              Download Resume (PDF)
            </a>

            <button
              type="button"
              onClick={() => scrollToSection('#experience')}
              className="h-12 px-6 rounded-lg font-semibold text-sm inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600 transition-all shadow-sm"
            >
              Experience History
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('#contact')}
              className="h-12 px-6 rounded-lg font-semibold text-sm inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600 transition-all shadow-sm"
            >
              <Mail className="mr-2 h-5 w-5 text-blue-400" />
              Contact
            </button>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center space-x-5 pt-2">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
              Profiles:
            </span>
            <a
              href="https://linkedin.com/in/vishal-agarwal-8b3363a9"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-blue-600/20 text-slate-300 hover:text-blue-400 border border-slate-700/60 transition-all"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a
              href="https://github.com/tayal1989"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-blue-600/20 text-slate-300 hover:text-blue-400 border border-slate-700/60 transition-all"
              aria-label="GitHub Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://medium.com/@tayal1989"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-blue-600/20 text-slate-300 hover:text-blue-400 border border-slate-700/60 transition-all"
              aria-label="Medium Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
            </a>
          </div>

          {/* Key Achievements Stat Banner */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 items-stretch">
            {keyStats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700/80 backdrop-blur-sm transition-all duration-300 shadow-sm flex flex-col justify-between h-full min-h-[110px]"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </div>
                  {stat.icon}
                </div>
                <div className="text-xs font-semibold text-slate-200">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;