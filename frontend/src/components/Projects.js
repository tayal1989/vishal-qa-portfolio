import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Smartphone, Cog, BarChart3, GitMerge, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Mobile Automation Framework',
      description: 'Designed and implemented a scalable mobile automation framework using Appium and Java for testing Android and iOS applications. The framework supports parallel execution and CI/CD integration for faster feedback cycles.',
      icon: <Smartphone className="h-6 w-6" />,
      tags: ['Appium', 'Java', 'TestNG', 'Jenkins', 'Android', 'iOS'],
      impact: 'Reduced manual regression testing effort and significantly improved release confidence'
    },
    {
      title: 'QA Process Optimization',
      description: 'Defined and implemented structured QA processes, including improved test planning, automation strategy, release validation, and quality gates across the development lifecycle.',
      icon: <Cog className="h-6 w-6" />,
      tags: ['Agile', 'QA Strategy', 'Quality Gates', 'Test Planning'],
      impact: 'Improved testing efficiency and strengthened collaboration between QA, development, and product teams'
    },
    {
      title: 'CI/CD Testing Integration',
      description: 'Integrated automated test suites into CI/CD pipelines using Jenkins, enabling continuous testing and faster feedback for engineering teams.',
      icon: <GitMerge className="h-6 w-6" />,
      tags: ['Jenkins', 'CI/CD', 'Automation', 'DevOps'],
      impact: 'Enabled faster build validation and improved confidence in production releases'
    },
    {
      title: 'AI-Assisted Testing Exploration',
      description: 'Exploring modern AI-driven testing approaches, including evaluation of RAG-based applications and agentic AI systems for quality validation and testing strategies.',
      icon: <BarChart3 className="h-6 w-6" />,
      tags: ['AI Testing', 'RAG Evaluation', 'LLM Quality Testing', 'Intelligent Test Design'],
      impact: 'Researching new approaches to improve test case generation, defect detection, and intelligent automation'
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Key Projects & Initiatives
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Transforming quality engineering through automation, tooling, and process innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-400 dark:hover:border-blue-600"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white mb-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="pt-2">
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {project.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-slate-300 dark:border-slate-700"
            onClick={() => window.open('https://github.com/tayal1989', '_blank')}
          >
            View More on GitHub
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;