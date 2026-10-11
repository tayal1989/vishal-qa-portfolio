import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronRight,
  Award,
  Globe2,
  CheckCircle2,
  Building,
  TrendingUp
} from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'One MobiKwik Systems Pvt. Ltd.',
      role: 'Engineering Manager',
      period: 'Apr 2026 – Present',
      location: 'Gurgaon, India',
      domain: 'FinTech · Payments · Mobile & Agentic QA',
      current: true,
      summary:
        'Leading quality engineering and driving AI-first, agent-driven QA transformations across Android, iOS, and backend systems.',
      achievements: [
        'Achieved 95%+ frontend client automation coverage using Appium + Java + TestNG + Jenkins for Android and iOS apps; own and maintain the full Jenkins CI/CD pipeline end-to-end.',
        'Delivered Optics - end-to-end visual automation using Java, AI-assisted scripting, and image comparison libraries, identifying critical UI bugs invisible to functional test suites.',
        'Built Pulse - QA reporting tool auto-publishing daily EOD status to Slack by pulling live Jira data, eliminating manual status updates entirely.',
        'Built Apex - ADB profiling tool measuring cold/hot start time, janky frames, and CPU usage across devices, benchmarking MobiKwik technical performance against competitor apps.',
        'Built Sentry - production monitoring tool that executes CleverTap APIs via REST Assured to validate business-critical reporting pivots every hour against configurable thresholds to stakeholder Slack channels.',
        'Built Prism - structured UX benchmarking framework evaluating MobiKwik’s P0 flows against competitor apps across page transition times, tap counts per flow, and UX disruptions.',
        'Architecting agentic testing pipelines using AI Agents and MCP (Model Context Protocol) to auto-generate and evolve test cases as codebase changes, slashing regression maintenance overhead.'
      ],
      skills: [
        'AI Agents',
        'MCP (Model Context Protocol)',
        'Cursor IDE',
        'Appium',
        'Java',
        'TestNG',
        'Jenkins CI/CD',
        'ADB Profiling',
        'CleverTap API',
        'REST Assured'
      ]
    },
    {
      company: 'Cashgrail Pvt. Ltd. (Zupee)',
      role: 'QA Technical Manager',
      period: 'Feb 2021 – Apr 2026',
      location: 'Gurgaon, India',
      domain: 'Real-Money Gaming · Scale · High Traffic',
      current: false,
      summary:
        'Built and scaled the entire QA organization from scratch to 25 engineers for high-concurrency real-money gaming platforms (Ludo, Snakes & Ladders, Trump Card).',
      achievements: [
        'Built and led the QA function from scratch, growing the team to 25 high-performing engineers with 90%+ automation coverage.',
        'Designed and shipped a self-healing automation framework (Java + Selenium + Appium + REST Assured), powering continuous 6-hour release cycles.',
        'Pioneered AI/ML testing across the org - tested prompt-based AI features, AI-assisted QA systems, and applied RAG for testing framework prototyping.',
        'Implemented performance testing reducing API response time by 30%; enforced strict CI/CD quality gates via Jenkins and SonarQube.',
        'Reduced defect leakage by 40% through robust shift-left quality practices and automated regression suites.',
        'Honored with Zupee Value Champion — Nurturing & Growth (2025) and multiple Outstanding Talent Awards (2021–2024).'
      ],
      skills: [
        'QA Leadership (Team of 25)',
        'Self-Healing Frameworks',
        'Java',
        'Selenium',
        'Appium',
        'REST Assured',
        'RAG Testing',
        'SonarQube',
        'Jenkins',
        'Gaming QA'
      ]
    },
    {
      company: 'Snapdeal Pvt. Ltd.',
      role: 'Lead Software Engineer in Test',
      period: 'May 2019 – Jan 2021',
      location: 'Gurgaon, India',
      domain: 'E-commerce · AdTech & Search',
      current: false,
      summary:
        'Owned QA for high-throughput AdTech and Search platforms with 85% automation coverage and 40% defect leakage reduction.',
      achievements: [
        'Owned end-to-end quality for AdTech and Search platform services.',
        'Integrated functional and load/performance testing using JMeter.',
        'Partnered closely with engineering leads on shift-left quality engineering practices.'
      ],
      skills: ['AdTech QA', 'Search Testing', 'JMeter', 'Java', 'Shift-Left QA', 'Automation']
    },
    {
      company: 'Orange Business Services',
      role: 'Senior Software Engineer',
      period: 'Jan 2017 – Apr 2019',
      location: 'Gurgaon, India & Paris, France',
      domain: 'Enterprise Telecom · Cloud & Big Data',
      current: false,
      summary:
        'Delivered Python + Robot Framework automation for INES & Live Data Hub; completed international engineering assignment in Paris, France.',
      achievements: [
        'Built automated test suites using Python and Robot Framework for INES and Live Data Hub platform.',
        'Constructed Jenkins CI pipelines enabling seamless continuous delivery.',
        'Selected for international assignment in Paris, France, implementing enterprise automation frameworks for global clients.'
      ],
      skills: ['Python', 'Robot Framework', 'Jenkins CI', 'Paris International Assignment', 'Telecom QA']
    },
    {
      company: 'Barco Electronics Pvt. Ltd.',
      role: 'Senior Software Engineer',
      period: 'Jun 2016 – Jan 2017',
      location: 'Noida, India',
      domain: 'Enterprise Collaboration Systems',
      current: false,
      summary:
        'Designed OneRoom API test automation framework using Cucumber + Maven; established API contract testing standards.',
      achievements: [
        'Architected OneRoom API testing framework with Cucumber, Java, and Maven.',
        'Formulated enterprise API contract testing standards adopted across teams.'
      ],
      skills: ['Cucumber', 'Maven', 'API Automation', 'Java']
    },
    {
      company: 'Nokia Networks',
      role: 'R&D Engineer',
      period: 'Apr 2015 – Apr 2016',
      location: 'Bangalore, India',
      domain: 'Telecom R&D Systems',
      current: false,
      summary:
        'Automated the SRT tool in Python, saving ~300 manual engineering hours every month.',
      achievements: [
        'Automated SRT engineering tool using Python, eliminating ~300 manual hours/month.',
        'Reduced overall release timelines by 25% via CI/CD pipeline adoption.'
      ],
      skills: ['Python Automation', 'CI/CD Pipelines', 'Telecom R&D']
    },
    {
      company: 'Mahindra Comviva',
      role: 'Senior Software Engineer',
      period: 'Aug 2011 – Mar 2015',
      location: 'Bangalore, India',
      domain: 'Mobile Financial Services',
      current: false,
      summary:
        'Created the CTAF automation framework (Python + Django); automated Mobiquity financial app with Sahi; won multiple Star Talent and Best Team Awards.',
      achievements: [
        'Architected CTAF automation framework (Python + Django) adopted across core projects.',
        'Automated Mobiquity financial application using Sahi with 90% effort savings.',
        'Awarded Best Team Awards (2x) and Star Talent & Best Talent Awards (2012–2014).'
      ],
      skills: ['Python', 'Django', 'CTAF Framework', 'Mobiquity', 'FinTech']
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-slate-950 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/40 border border-indigo-700/50 text-indigo-300 text-xs font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            15+ Years Track Record
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            From hands-on automation framework engineering to executive QA leadership across FinTech, Gaming, and Global Telecom enterprises.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 sm:pl-10">
              {/* Timeline marker icon */}
              <div
                className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  exp.current
                    ? 'bg-blue-600 border-cyan-400 shadow-lg shadow-blue-500/40'
                    : 'bg-slate-900 border-slate-700'
                }`}
              >
                {exp.current ? (
                  <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping"></span>
                ) : (
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                )}
              </div>

              {/* Experience Card */}
              <Card
                className={`border transition-all duration-300 ${
                  exp.current
                    ? 'bg-slate-900/90 border-blue-500/40 shadow-xl shadow-blue-500/5'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <CardHeader className="space-y-3 pb-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <CardTitle className="text-xl sm:text-2xl font-bold text-white">
                          {exp.role}
                        </CardTitle>
                        {exp.current && (
                          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                            Current Role
                          </span>
                        )}
                      </div>
                      <div className="text-base font-semibold text-blue-400 dark:text-blue-300 mt-1">
                        {exp.company}
                      </div>
                    </div>

                    <div className="text-right text-xs sm:text-sm text-slate-400 space-y-1">
                      <div className="flex items-center gap-1.5 font-medium sm:justify-end text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 sm:justify-end">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-slate-400">
                    {exp.domain}
                  </div>
                  <CardDescription className="text-slate-300 text-sm leading-relaxed">
                    {exp.summary}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 pt-1">
                  <div className="space-y-2 border-t border-slate-800/80 pt-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Key Contributions & Impact:
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start text-xs sm:text-sm text-slate-300 gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
