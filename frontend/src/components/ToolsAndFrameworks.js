import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  Eye,
  BellRing,
  Activity,
  ShieldAlert,
  Compass,
  Bot,
  Smartphone,
  RefreshCw,
  Sparkles,
  Layers,
  CheckCircle2,
  Cpu,
  BarChart3,
  Terminal,
  Zap,
  ArrowUpRight
} from 'lucide-react';

const ToolsAndFrameworks = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const tools = [
    {
      id: 'mobikwik-mobile',
      name: 'MobiKwik Client Automation',
      company: 'One MobiKwik Systems',
      category: 'mobile',
      categoryLabel: 'Mobile Framework',
      tagline: '95%+ Mobile Client Automation (Android & iOS)',
      description:
        'Architected and scaled client automation infrastructure for Android and iOS apps using Appium, Java, and TestNG. Own and maintain the full Jenkins CI/CD pipeline end-to-end powering automated regressions and pull-request build gates.',
      icon: <Smartphone className="h-6 w-6 text-cyan-400" />,
      color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30',
      badgeColor: 'bg-cyan-50 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700/60',
      tech: ['Appium', 'Java', 'TestNG', 'Jenkins CI/CD', 'Maven', 'Android & iOS'],
      highlights: [
        '95%+ frontend client test automation coverage achieved and maintained',
        'Parallel cross-device execution integrated into Jenkins CI/CD pipelines',
        'End-to-end pipeline ownership from code commit to test report delivery'
      ],
      impact: 'Achieved 95%+ client test automation coverage with full CI/CD pipeline reliability.'
    },
    {
      id: 'optics',
      name: 'Optics',
      company: 'One MobiKwik Systems',
      category: 'visual-ai',
      categoryLabel: 'Visual AI Automation',
      tagline: 'End-to-End AI-Assisted Visual Regression Suite',
      description:
        'Engineered an enterprise visual automation framework utilizing Java, AI-assisted scripting, and image comparison diff engines. Accurately detects pixel-level UI regressions, banner clipping, and layout deformities across diverse screen resolutions that functional suites miss.',
      icon: <Eye className="h-6 w-6 text-cyan-400" />,
      color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30',
      badgeColor: 'bg-cyan-50 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700/60',
      tech: ['Java', 'AI-Assisted Scripting', 'Image Diffing Libraries', 'Appium', 'Jenkins CI/CD'],
      highlights: [
        'Automated pixel-level comparison across multi-density device viewports',
        'Identifies critical UI glitches undetectable by traditional functional assertions',
        'Directly integrated into CI/CD build gates to block visually broken builds'
      ],
      impact: 'Prevented critical UI regressions on high-traffic fintech transaction screens.'
    },
    {
      id: 'agentic-mcp',
      name: 'Agentic Testing & MCP',
      company: 'MobiKwik & R&D',
      category: 'ai-agentic',
      categoryLabel: 'Agentic AI Systems',
      tagline: 'Autonomous AI Test Pipelines with Claude & Cursor IDE',
      description:
        'Architecting next-generation agentic testing workflows using Claude AI Agents and Model Context Protocol (MCP) in Cursor IDE. Analyzes codebase changes, autonomously authors test cases, updates regression matrices, and self-heals broken locators.',
      icon: <Bot className="h-6 w-6 text-blue-400" />,
      color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30',
      badgeColor: 'bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700/60',
      tech: ['Model Context Protocol (MCP)', 'Cursor IDE', 'Claude AI Agents', 'Appium MCP', 'Self-Healing Tests'],
      highlights: [
        'Autonomous test generation triggered by code commits and feature PRs',
        'MCP tool integration connecting AI agents directly to Appium and local simulators',
        'Substantially cuts down continuous regression maintenance overhead'
      ],
      impact: 'Pioneering AI-first quality transformation; reduces manual test scripting hours by 60%+.'
    },
    {
      id: 'pulse',
      name: 'Pulse',
      company: 'One MobiKwik Systems',
      category: 'operations',
      categoryLabel: 'QA Ops & Slack Engine',
      tagline: 'Automated EOD Status & Jira Live Telemetry Publisher',
      description:
        'Architected an automated QA operations tool that queries live Jira sprint endpoints, aggregates test execution, defect metrics, and squad blockers, and auto-publishes formatted daily EOD status reports straight to stakeholder Slack channels.',
      icon: <BellRing className="h-6 w-6 text-amber-400" />,
      color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30',
      badgeColor: 'bg-amber-50 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-700/60',
      tech: ['Jira REST API', 'Slack Bot / Webhooks', 'Python / Java', 'Scheduled Cron', 'JSON ETL'],
      highlights: [
        'Live sprint and defect ETL extraction from Jira REST API',
        'Zero manual intervention needed from QA leads or engineers for EOD updates',
        'Customizable squad channels and executive rollup summaries'
      ],
      impact: 'Eliminated manual status reporting entirely across engineering squads.'
    },
    {
      id: 'apex',
      name: 'Apex',
      company: 'One MobiKwik Systems',
      category: 'performance',
      categoryLabel: 'Mobile Profiling',
      tagline: 'ADB Device Profiling & Competitor Performance Benchmarking',
      description:
        'Developed a deep ADB profiling utility that executes automated customer journeys on real Android devices to accurately quantify cold/hot start times, janky frame rates, and memory/CPU consumption, benchmarking MobiKwik against competitor fintech apps.',
      icon: <Activity className="h-6 w-6 text-emerald-400" />,
      color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30',
      badgeColor: 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/60',
      tech: ['Android ADB', 'Python', 'Systrace / Dumpsys', 'Hardware Profiling', 'Performance Analytics'],
      highlights: [
        'Granular capture of cold/warm app startup latency and dropped frame counts',
        'Standardized competitive benchmarking matrix against rival mobile applications',
        'Identifies UI thread bottlenecks and memory leaks on budget hardware'
      ],
      impact: 'Provided engineering leads actionable benchmarks to optimize app launch speed & FPS.'
    },
    {
      id: 'sentry',
      name: 'Sentry',
      company: 'One MobiKwik Systems',
      category: 'operations',
      categoryLabel: 'Production Quality Gate',
      tagline: 'Hourly CleverTap Telemetry & Critical Pivot Monitor',
      description:
        'Engineered an automated production monitor executing CleverTap analytics APIs via REST Assured every hour. Validates business-critical reporting pivots, checkout metrics, and user event funnels against configurable anomaly thresholds with real-time Slack alerting.',
      icon: <ShieldAlert className="h-6 w-6 text-rose-400" />,
      color: 'from-rose-500/20 to-red-500/20 border-rose-500/30',
      badgeColor: 'bg-rose-50 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-700/60',
      tech: ['REST Assured', 'CleverTap API', 'Java', 'Hourly Scheduler', 'Slack Webhooks'],
      highlights: [
        'Continuous hourly verification of business-critical reporting pivots in production',
        'Configurable threshold logic alerting engineering channels on telemetry drops',
        'Prevents silent event failures during high-volume transactional hours'
      ],
      impact: 'Guarantees reliable production telemetry and immediate response to data anomalies.'
    },
    {
      id: 'prism',
      name: 'Prism',
      company: 'One MobiKwik Systems',
      category: 'performance',
      categoryLabel: 'UX Benchmarking',
      tagline: 'P0 Core Journey UX Benchmarking Framework',
      description:
        'Designed a structured UX evaluation framework benchmarking MobiKwik’s P0 flows (recharges, bill pay, UPI, wallet) against competitor applications. Measures page transition times, tap counts per flow, UX disruptions, and end-to-end user friction quality.',
      icon: <Compass className="h-6 w-6 text-purple-400" />,
      color: 'from-purple-500/20 to-indigo-500/20 border-purple-500/30',
      badgeColor: 'bg-purple-50 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700/60',
      tech: ['UX Friction Scoring', 'Journey Matrix', 'Frame Transition Analysis', 'P0 Flow Analytics'],
      highlights: [
        'Quantifies friction metrics across recharge, payments, and checkout flows',
        'Evaluates page transition times and interaction steps against competitor standards',
        'Bridges quality engineering and product design with data-driven UX metrics'
      ],
      impact: 'Empowered product managers with quantifiable friction metrics to refine user journeys.'
    },
    {
      id: 'zupee-engine',
      name: 'Zupee Self-Healing Release Engine',
      company: 'Cashgrail Pvt. Ltd. (Zupee)',
      category: 'mobile',
      categoryLabel: 'Gaming CI/CD Engine',
      tagline: 'Self-Healing Automation for Real-Money Gaming Platforms',
      description:
        'Architected from scratch a self-healing automation framework (Java + Selenium + Appium + REST Assured) for high-scale gaming apps (Ludo, Snakes & Ladders, Trump Card), scaling the QA team to 25 engineers and enabling 6-hour continuous release cycles.',
      icon: <RefreshCw className="h-6 w-6 text-indigo-400" />,
      color: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/30',
      badgeColor: 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700/60',
      tech: ['Java', 'Selenium', 'Appium', 'REST Assured', 'Jenkins Quality Gates', 'SonarQube'],
      highlights: [
        'Self-healing locator mechanisms resilient to rapid UI and game client changes',
        'Continuous 6-hour release cycles with 90%+ automation coverage across 25 engineers',
        '40% defect leakage reduction achieved across fast-paced gaming squads'
      ],
      impact: 'Earned Zupee Value Champion (2025) and delivered 6-hour continuous release velocity.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Frameworks & Tools' },
    { id: 'mobile', label: 'Mobile & CI/CD' },
    { id: 'visual-ai', label: 'Visual AI (Optics)' },
    { id: 'ai-agentic', label: 'Agentic AI & MCP' },
    { id: 'operations', label: 'QA Ops & Gates (Pulse / Sentry)' },
    { id: 'performance', label: 'Performance & UX (Apex / Prism)' }
  ];

  const filteredTools =
    activeCategory === 'all'
      ? tools
      : tools.filter((t) => t.category === activeCategory);

  return (
    <section id="tools" className="py-24 px-6 bg-slate-50/70 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700/50 text-blue-700 dark:text-blue-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Proprietary Tools & Engineering Frameworks
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tools & Frameworks Built
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Proprietary solutions architected at <span className="text-slate-900 dark:text-white font-medium">One MobiKwik Systems</span> and{' '}
            <span className="text-slate-900 dark:text-white font-medium">Zupee</span> to solve client automation, deep visual regression, production telemetry, and autonomous test generation challenges.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-500'
                  : 'bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-slate-300 dark:hover:text-white border border-slate-200 dark:border-slate-700/60 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tools Grid - Equal height cards */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {filteredTools.map((tool) => (
            <Card
              key={tool.id}
              className="group relative overflow-hidden bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between h-full"
            >
              {/* Header */}
              <CardHeader className="space-y-3 pb-3 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group-hover:scale-105 transition-transform shrink-0">
                      {tool.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        {tool.name}
                      </CardTitle>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        {tool.company}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-semibold border shrink-0 ${tool.badgeColor}`}
                  >
                    {tool.categoryLabel}
                  </span>
                </div>

                <div className="text-sm font-semibold text-blue-600 dark:text-blue-300">
                  {tool.tagline}
                </div>

                <CardDescription className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">
                  {tool.description}
                </CardDescription>
              </CardHeader>

              {/* Body */}
              <CardContent className="space-y-4 pt-0 mt-auto">
                {/* Highlights */}
                <div className="space-y-1.5 pt-3 border-t border-slate-200 dark:border-slate-800 min-h-[80px]">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Key Architectural Capabilities:
                  </div>
                  {tool.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start text-xs text-slate-700 dark:text-slate-300 gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="pt-2 min-h-[44px] flex items-center">
                  <div className="flex flex-wrap gap-1.5">
                    {tool.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact Highlight */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-start gap-2 text-xs">
                  <Zap className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span className="font-semibold text-emerald-700 dark:text-emerald-300 leading-snug">
                    Impact: {tool.impact}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsAndFrameworks;
