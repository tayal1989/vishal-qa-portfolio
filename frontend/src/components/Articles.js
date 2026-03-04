import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Clock, BookOpen } from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      title: 'How to Answer a Test Case Writing Interview Question — A Structured Approach That Impresses',
      description: 'A comprehensive guide showing a structured approach to answer test case writing questions in interviews, demonstrating clear testing thinking process.',
      category: 'Testing Strategy | QA Leadership',
      tags: ['Testing Strategy', 'Interview Preparation', 'QA Leadership'],
      url: 'https://medium.com/@tayal1989/how-to-answer-a-test-case-writing-interview-question-a-structured-approach-that-impresses-59efb60e60b1',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: 'Top Selenium Exceptions You Must Know in 2025',
      description: 'Practical debugging knowledge covering the most common Selenium exceptions with real-world debugging tips and solutions.',
      category: 'Automation | Debugging',
      tags: ['Selenium', 'Automation', 'Debugging', 'Java'],
      url: 'https://medium.com/@tayal1989/top-selenium-exceptions-you-must-know-in-2025-with-real-world-debugging-tips-c76a442d9d0d',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: 'TestNG Priority: The Interview Question That Tricks Even Experienced Testers',
      description: 'Deep dive into TestNG priority mechanisms that often confuse testers, showing advanced automation framework knowledge.',
      category: 'Automation Frameworks',
      tags: ['TestNG', 'Automation', 'Java', 'Interview Preparation'],
      url: 'https://medium.com/@tayal1989/testng-priority-the-interview-question-that-tricks-even-experienced-testers-c4ea4aa4f2d3',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: 'Releasing at the Speed of Thought: Inside Zupee\'s App Release Engine',
      description: 'Engineering leadership article showcasing real-world impact on release engineering, CI/CD optimization, and quality engineering at scale.',
      category: 'Engineering Culture | Release Strategy',
      tags: ['Engineering Leadership', 'CI/CD', 'Release Management', 'DevOps'],
      url: 'https://tech.zupee.com/releasing-at-the-speed-of-thought-inside-zupees-app-release-engine-f100de7b4833',
      icon: <BookOpen className="h-6 w-6" />
    }
  ];

  return (
    <section id="articles" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Articles
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Sharing insights and knowledge on quality engineering and testing practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 hover:border-blue-400 dark:hover:border-blue-600 cursor-pointer"
              onClick={() => window.open(article.url, '_blank')}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    {article.icon}
                  </div>
                  <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                <div className="mb-2">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {article.category}
                  </span>
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400 mt-2">
                  {article.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tag}
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
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => window.open('https://medium.com/@tayal1989', '_blank')}
          >
            View All Articles
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Articles;