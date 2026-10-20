import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, BookOpen, Clock, ArrowUpRight, Sparkles } from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      title: 'Releasing at the Speed of Thought: Inside Zupee\'s App Release Engine',
      description:
        'Engineering leadership article uncovering how we transformed mobile release operations, architected CI/CD quality gates, and achieved rapid 6-hour release cycles at gaming scale.',
      category: 'Engineering Culture & Release Engineering',
      tags: ['Engineering Leadership', 'CI/CD Pipelines', 'App Release Engine', 'DevOps'],
      url: 'https://tech.zupee.com/releasing-at-the-speed-of-thought-inside-zupees-app-release-engine-f100de7b4833',
      readTime: '6 min read'
    },
    {
      title: 'Top Selenium Exceptions You Must Know in 2025',
      description:
        'Deep-dive practical guide breaking down the most frustrating Selenium WebDriver exceptions, underlying root causes, and production-tested debugging solutions.',
      category: 'Automation Architecture & Debugging',
      tags: ['Selenium', 'Java', 'Automation', 'Debugging Best Practices'],
      url: 'https://medium.com/@tayal1989/top-selenium-exceptions-you-must-know-in-2025-with-real-world-debugging-tips-c76a442d9d0d',
      readTime: '8 min read'
    },
    {
      title: 'TestNG Priority: The Interview Question That Tricks Even Experienced Testers',
      description:
        'Technical teardown of TestNG execution order, priority defaults, dependency mechanics, and common misconceptions that frequently stump senior SDET candidates.',
      category: 'Framework Internals',
      tags: ['TestNG', 'Test Architecture', 'Java', 'SDET Interview Guide'],
      url: 'https://medium.com/@tayal1989/testng-priority-the-interview-question-that-tricks-even-experienced-testers-c4ea4aa4f2d3',
      readTime: '5 min read'
    },
    {
      title: 'How to Answer a Test Case Writing Interview Question — A Structured Approach That Impresses',
      description:
        'A comprehensive framework demonstrating structured quality engineering thinking, boundary analysis, edge-case coverage, and risk assessment during interview scenarios.',
      category: 'Quality Strategy & Interview Mentorship',
      tags: ['QA Strategy', 'Test Design', 'Structured Thinking', 'Mentorship'],
      url: 'https://medium.com/@tayal1989/how-to-answer-a-test-case-writing-interview-question-a-structured-approach-that-impresses-59efb60e60b1',
      readTime: '7 min read'
    }
  ];

  return (
    <section id="articles" className="py-24 px-6 bg-slate-50/70 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700/50 text-blue-700 dark:text-blue-300 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            Publications & Thought Leadership
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Articles & Publications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Sharing hands-on architectures, interview frameworks, and engineering lessons on Medium and company tech blogs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between group cursor-pointer"
              onClick={() => window.open(article.url, '_blank')}
            >
              <CardHeader className="space-y-3 pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug flex items-start justify-between gap-2">
                  <span>{article.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                </CardTitle>

                <CardDescription className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {article.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-slate-800">
                  {article.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                    >
                      {tag}
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
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-500/20"
            onClick={() => window.open('https://medium.com/@tayal1989', '_blank')}
          >
            <span>Read More on Medium (@tayal1989)</span>
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Articles;