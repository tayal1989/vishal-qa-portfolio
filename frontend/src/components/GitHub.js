import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Code, Smartphone, Database, Cpu, ArrowUpRight, Github, Sparkles } from 'lucide-react';

const GitHub = () => {
  const repositories = [
    {
      name: 'YesMadam Web Automation Framework',
      description: 'Production-grade Selenium + TestNG automation framework with comprehensive test coverage, reporting, and CI/CD integration.',
      icon: <Code className="h-6 w-6 text-blue-400" />,
      language: 'Java',
      topics: ['Selenium', 'TestNG', 'Java', 'Jenkins', 'Automation'],
      url: 'https://github.com/tayal1989'
    },
    {
      name: 'Mobile Automation Framework',
      description: 'Appium-based automation framework for Android and iOS mobile applications with parallel execution support.',
      icon: <Smartphone className="h-6 w-6 text-cyan-400" />,
      language: 'Java',
      topics: ['Appium', 'Mobile Testing', 'Java', 'Android', 'iOS'],
      url: 'https://github.com/tayal1989'
    },
    {
      name: 'API Automation Framework',
      description: 'REST Assured framework for comprehensive API testing with request/response validation and test reporting.',
      icon: <Database className="h-6 w-6 text-emerald-400" />,
      language: 'Java',
      topics: ['REST Assured', 'API Testing', 'Java', 'Automation'],
      url: 'https://github.com/tayal1989'
    },
    {
      name: 'RAG Experiment & AI Testing',
      description: 'Exploring testing strategies for AI and RAG-based systems, including evaluation frameworks and quality metrics.',
      icon: <Cpu className="h-6 w-6 text-purple-400" />,
      language: 'Python',
      topics: ['AI', 'RAG Systems', 'Python', 'LLM Testing'],
      url: 'https://github.com/tayal1989'
    },
    {
      name: 'Java Algorithms and Data Structures',
      description: 'Implementation of common algorithms and data structures demonstrating problem-solving ability and engineering mindset.',
      icon: <Code className="h-6 w-6 text-amber-400" />,
      language: 'Java',
      topics: ['Algorithms', 'Data Structures', 'Java', 'Problem Solving'],
      url: 'https://github.com/tayal1989'
    }
  ];

  const getLanguageColor = (language) => {
    const colors = {
      Java: 'bg-orange-950/70 text-orange-300 border-orange-800/60',
      Python: 'bg-blue-950/70 text-blue-300 border-blue-800/60',
      JavaScript: 'bg-yellow-950/70 text-yellow-300 border-yellow-800/60'
    };
    return colors[language] || 'bg-slate-800 text-slate-300 border-slate-700';
  };

  return (
    <section id="github" className="py-24 px-6 bg-slate-900/40 dark:bg-slate-950 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold">
            <Github className="w-3.5 h-3.5" />
            Open Source & Repositories
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Open-Source GitHub Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-400 max-w-2xl mx-auto">
            Public automation frameworks, RAG exploration repositories, and algorithmic implementations on GitHub.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repositories.map((repo, index) => (
            <Card
              key={index}
              className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 cursor-pointer flex flex-col justify-between group"
              onClick={() => window.open(repo.url, '_blank')}
            >
              <CardHeader className="space-y-3 pb-3">
                <div className="flex items-start justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700/80 group-hover:scale-105 transition-transform">
                    {repo.icon}
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <CardTitle className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                  {repo.name}
                </CardTitle>
                <CardDescription className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {repo.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                <div className="flex items-center space-x-3 text-xs pt-2 border-t border-slate-800">
                  <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${getLanguageColor(repo.language)}`}>
                    {repo.language}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {repo.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-slate-800 hover:bg-slate-700 text-white font-semibold border border-slate-700 shadow-md"
            onClick={() => window.open('https://github.com/tayal1989?tab=repositories', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All GitHub Repositories (@tayal1989)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GitHub;