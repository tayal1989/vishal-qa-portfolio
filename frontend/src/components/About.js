import React from 'react';
import { Card } from './ui/card';
import {
  Sparkles,
  Bot,
  Layers,
  GraduationCap,
  Award,
  Globe2,
  FileCheck,
  CheckCircle2,
  Cpu
} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-slate-950 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700/50 text-blue-700 dark:text-blue-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Executive Profile & Philosophy
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            <p className="text-lg text-slate-800 dark:text-slate-200">
              I am a visionary <span className="font-semibold text-blue-600 dark:text-blue-400">Chief Agentic Quality Architect & QA Engineering Leader</span> with{' '}
              <span className="font-semibold text-slate-900 dark:text-white">15+ years</span> of experience architecting resilient quality systems across{' '}
              <span className="text-slate-900 dark:text-white font-medium">FinTech</span>, <span className="text-slate-900 dark:text-white font-medium">Real-Money Gaming</span>,{' '}
              <span className="text-slate-900 dark:text-white font-medium">E-commerce</span>, and <span className="text-slate-900 dark:text-white font-medium">Telecom</span>.
            </p>

            <p>
              Currently, I am driving the <span className="text-cyan-700 dark:text-cyan-300 font-medium">AI-first quality transformation at MobiKwik</span>, where I leverage{' '}
              <span className="text-slate-900 dark:text-white font-semibold">Cursor IDE, Claude AI Agents, and Model Context Protocol (MCP)</span> to autonomously generate, evolve, and maintain test suites at scale, reducing regression overhead significantly.
            </p>

            <p>
              At MobiKwik, I have created multiple proprietary tools including <strong className="text-slate-900 dark:text-white">Optics</strong> (AI-assisted visual regression),{' '}
              <strong className="text-slate-900 dark:text-white">Pulse</strong> (automated daily Jira-to-Slack EOD reporting),{' '}
              <strong className="text-slate-900 dark:text-white">Apex</strong> (deep Android ADB device profiling benchmarking cold/hot starts vs competitors),{' '}
              <strong className="text-slate-900 dark:text-white">Sentry</strong> (hourly CleverTap telemetry & production quality gates), and{' '}
              <strong className="text-slate-900 dark:text-white">Prism</strong> (structured UX benchmarking framework evaluating P0 user flows).
            </p>

            <p>
              Previously at <span className="text-indigo-600 dark:text-indigo-300 font-medium">Zupee</span>, I built and led the entire QA organization from scratch to a team of <span className="text-slate-900 dark:text-white font-semibold">25 engineers</span> with 90%+ automation coverage, shipping self-healing frameworks (Java, Appium, Selenium, REST Assured) and delivering rapid <span className="text-slate-900 dark:text-white font-semibold">6-hour continuous release cycles</span>.
            </p>

            <p>
              Beyond technical architecture, I am deeply committed to mentoring engineers, nurturing strong automation mindsets, speaking at engineering forums, and authoring in-depth articles on Medium on release engineering, TestNG mechanics, and Selenium internals.
            </p>

            {/* Quick Education Card */}
            <div className="pt-3">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                    Education & Credentials
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    B.Tech. in Electronics & Communication Engineering
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Technological Institute of Textile & Science, 2011 · Aggregate: 76.4%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Card */}
          <div className="lg:col-span-5">
            <Card className="p-6 bg-slate-50/70 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-5 shadow-sm dark:shadow-xl">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200 dark:border-slate-800">
                <Cpu className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Leadership & Strategic Pillars
                </h3>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-500 dark:text-cyan-400 font-bold mt-0.5">▹</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Agentic AI & MCP:</strong> Pioneering autonomous test authoring pipelines with Claude and Cursor.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-500 dark:text-cyan-400 font-bold mt-0.5">▹</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Team Building & Scale:</strong> Proven record hiring, mentoring, and leading QA squads up to 25 engineers.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-500 dark:text-cyan-400 font-bold mt-0.5">▹</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">FinTech & Gaming Reliability:</strong> Protecting mission-critical payment gateways, wallets, and real-money gaming transactions.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-500 dark:text-cyan-400 font-bold mt-0.5">▹</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Visual & Device Profiling:</strong> Built Optics for visual diffs and Apex for ADB cold/hot start benchmarking.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-500 dark:text-cyan-400 font-bold mt-0.5">▹</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Continuous Delivery Velocity:</strong> CI/CD quality gates enabling 6-hour release cycles with 40% defect reduction.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-500 dark:text-cyan-400 font-bold mt-0.5">▹</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Global Enterprise Experience:</strong> International assignment in Paris, France implementing automation frameworks.
                  </div>
                </li>
              </ul>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 font-medium">
                  MobiKwik
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 font-medium">
                  Zupee
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 font-medium">
                  Snapdeal
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 font-medium">
                  Orange (Paris)
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;