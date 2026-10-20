import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import {
  Bot,
  Zap,
  Smartphone,
  GitBranch,
  Activity,
  Users,
  Code2,
  Terminal,
  ShieldCheck,
  Cpu
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI & Agentic Quality',
      subtitle: 'Next-Gen Autonomous Testing Ecosystems',
      icon: <Bot className="h-6 w-6 text-cyan-500 dark:text-cyan-400" />,
      color: 'border-cyan-500/30',
      badgeClass: 'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/60',
      skills: [
        'AI Agents & Multi-Agent QA',
        'Model Context Protocol (MCP)',
        'Cursor IDE Workflows',
        'Appium MCP Integration',
        'Claude AI & LLM Prompting',
        'RAG Testing & Evaluation',
        'Self-Healing Test Frameworks',
        'AI-Assisted Test Case Generation',
        'Antigravity'
      ]
    },
    {
      title: 'Test Automation Frameworks',
      subtitle: 'Scalable Cross-Platform Test Engines',
      icon: <Zap className="h-6 w-6 text-amber-500 dark:text-amber-400" />,
      color: 'border-amber-500/30',
      badgeClass: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/60',
      skills: [
        'Appium (Android & iOS)',
        'Selenium WebDriver',
        'Playwright',
        'REST Assured',
        'TestNG',
        'Robot Framework',
        'Visual Automation (Optics / Image Diff)',
        'Cucumber & BDD',
        'Maven & Gradle'
      ]
    },
    {
      title: 'Programming Languages',
      subtitle: 'Core Engineering & Scripting',
      icon: <Code2 className="h-6 w-6 text-blue-500 dark:text-blue-400" />,
      color: 'border-blue-500/30',
      badgeClass: 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/60',
      skills: [
        'Java (Enterprise Test Architecture)',
        'Python (Data, Automation & Scripting)',
        'Bash / Shell Scripting',
        'SQL & JSON Schemas',
        'JavaScript / TypeScript (Playwright)'
      ]
    },
    {
      title: 'CI/CD & DevOps Engineering',
      subtitle: 'Automated Quality Gates & Continuous Delivery',
      icon: <GitBranch className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />,
      color: 'border-emerald-500/30',
      badgeClass: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60',
      skills: [
        'Jenkins Pipeline Architecture',
        'GitHub Actions',
        'SonarQube Quality Gates',
        'Git & Branching Strategies',
        'Docker Containers',
        'AWS Cloud Infrastructure (Exposure)',
        'Slack Webhooks & Notification Bots'
      ]
    },
    {
      title: 'Mobile & Performance Profiling',
      subtitle: 'Device Hardware & Telemetry Metrics',
      icon: <Activity className="h-6 w-6 text-rose-500 dark:text-rose-400" />,
      color: 'border-rose-500/30',
      badgeClass: 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/60',
      skills: [
        'Android ADB Deep Profiling (Apex)',
        'Cold & Hot App Start Latency',
        'Janky Frames & FPS Profiling',
        'CleverTap API Telemetry (Sentry)',
        'JMeter Load & Stress Testing',
        'UX Transition Benchmarking (Prism)',
        'Memory Leaks & CPU Tracing'
      ]
    },
    {
      title: 'Quality Strategy & Leadership',
      subtitle: 'Building & Mentoring High-Output QA Teams',
      icon: <Users className="h-6 w-6 text-purple-500 dark:text-purple-400" />,
      color: 'border-purple-500/30',
      badgeClass: 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/60',
      skills: [
        'Team Leadership (Scaled up to 25 Engineers)',
        'Shift-Left Quality Culture',
        'Defect Leakage Reduction Strategies',
        '6-Hour Continuous Release Engineering',
        'Sprint QA Planning & Jira Metric ETL',
        'Hiring & Career Development Mentorship',
        'Cross-Functional Stakeholder Alignment'
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-50/70 dark:bg-slate-900/40 border-t border-slate-200/60 dark:border-slate-800/60 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700/50 text-blue-700 dark:text-blue-300 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            Core Competencies & Tooling
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Technical Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive skill set spanning Agentic AI test orchestration, mobile hardware profiling, enterprise automation architectures, and engineering leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 group flex flex-col justify-between`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </CardTitle>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {category.subtitle}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`text-xs px-2.5 py-1 rounded-md font-medium border ${category.badgeClass}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;