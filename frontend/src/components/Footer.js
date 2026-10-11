import React from 'react';
import { Github, Linkedin, Mail, MapPin, FileDown, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-14 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white tracking-tight">
                Vishal Agarwal
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-950 text-blue-400 border border-blue-800">
                MobiKwik
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Chief Agentic Quality Architect & QA Engineering Leader with 15+ years experience architecting AI-augmented quality ecosystems, mobile frameworks, and CI/CD quality gates across FinTech & Gaming.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                Gurgaon, India
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                tayal1989@gmail.com
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-blue-400 transition-colors">
                  Tools & Frameworks
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors">
                  Skills & AI Competencies
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-blue-400 transition-colors">
                  Achievements
                </a>
              </li>
              <li>
                <a href="#articles" className="hover:text-blue-400 transition-colors">
                  Articles & Publications
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Resume */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
              Connect
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href="https://linkedin.com/in/vishal-agarwal-8b3363a9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/tayal1989"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>GitHub Repositories</span>
              </a>
              <a
                href="https://medium.com/@tayal1989"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <span className="font-bold">M</span>
                <span>Medium Tech Articles</span>
              </a>
              <a
                href="/Vishal_Agarwal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-blue-400 hover:text-blue-300 font-medium pt-1"
              >
                <FileDown className="h-4 w-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {currentYear} Vishal Agarwal. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Engineered with React, Vite & Tailwind CSS · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;