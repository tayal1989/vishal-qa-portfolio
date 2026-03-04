import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Code, Smartphone, Database, Cpu } from 'lucide-react';

const GitHub = () => {
  const repositories = [
    {
      name: 'YesMadam Web Automation Framework',
      description: 'Production-grade Selenium + TestNG automation framework with comprehensive test coverage, reporting, and CI/CD integration.',
      icon: <Code className="h-6 w-6" />,
      language: 'Java',
      topics: ['Selenium', 'TestNG', 'Java', 'Jenkins', 'Automation'],
      url: 'https://github.com/tayal1989'
    },
    {
      name: 'Mobile Automation Framework',
      description: 'Appium-based automation framework for Android and iOS mobile applications with parallel execution support.',
      icon: <Smartphone className="h-6 w-6" />,
      language: 'Java',
      topics: ['Appium', 'Mobile Testing', 'Java', 'Android', 'iOS'],
      url: 'https://github.com/tayal1989'
    },
    {
      name: 'API Automation Framework',
      description: 'REST Assured framework for comprehensive API testing with request/response validation and test reporting.',
      icon: <Database className="h-6 w-6" />,
      language: 'Java',
      topics: ['REST Assured', 'API Testing', 'Java', 'Automation'],
      url: 'https://github.com/tayal1989'
    },
    {
      name: 'RAG Experiment Project',
      description: 'Exploring testing strategies for AI and RAG-based systems, including evaluation frameworks and quality metrics.',
      icon: <Cpu className="h-6 w-6" />,
      language: 'Python',
      topics: ['AI', 'RAG Systems', 'Python', 'LLM Testing'],
      url: 'https://github.com/tayal1989'
    },
    {
      name: 'Java Algorithms and Data Structures',
      description: 'Implementation of common algorithms and data structures demonstrating problem-solving ability and engineering mindset.',
      icon: <Code className="h-6 w-6" />,
      language: 'Java',
      topics: ['Algorithms', 'Data Structures', 'Java', 'Problem Solving'],
      url: 'https://github.com/tayal1989'
    }
  ];

  const getLanguageColor = (language) => {
    const colors = {
      Java: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
      Python: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      JavaScript: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
    };
    return colors[language] || 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400';
  };

  return (
    <section id="github" className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Open-source contributions and automation frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repositories.map((repo, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-400 dark:hover:border-blue-600 cursor-pointer"
              onClick={() => window.open(repo.url, '_blank')}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    {repo.icon}
                  </div>
                  <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                <CardTitle className="text-lg text-slate-900 dark:text-white font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {repo.name}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400 mt-2">
                  {repo.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getLanguageColor(repo.language)}`}>
                    {repo.language}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {repo.topics.map((topic, topicIndex) => (
                    <Badge
                      key={topicIndex}
                      variant="secondary"
                      className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100"
            onClick={() => window.open('https://github.com/tayal1989?tab=repositories', '_blank')}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GitHub;