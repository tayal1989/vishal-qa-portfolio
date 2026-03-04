import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Clock } from 'lucide-react';

const Articles = () => {
  const [articles, setArticles] = useState([
    {
      title: 'Building Effective Mobile Automation Frameworks',
      description: 'A comprehensive guide to creating scalable and maintainable mobile automation frameworks using Appium and best practices.',
      date: '2024',
      readTime: '8 min read',
      tags: ['Automation', 'Mobile Testing', 'Appium']
    },
    {
      title: 'QA Leadership: Building High-Performing Testing Teams',
      description: 'Insights on mentoring QA engineers, establishing quality culture, and driving continuous improvement in testing organizations.',
      date: '2024',
      readTime: '6 min read',
      tags: ['Leadership', 'Team Management', 'Culture']
    },
    {
      title: 'CI/CD Integration for Quality Engineers',
      description: 'How to effectively integrate automated testing into CI/CD pipelines for faster feedback and continuous quality assurance.',
      date: '2023',
      readTime: '10 min read',
      tags: ['CI/CD', 'DevOps', 'Automation']
    },
    {
      title: 'Test Strategy for Real Money Gaming Applications',
      description: 'Special considerations and approaches for testing high-stakes gaming applications with focus on security and compliance.',
      date: '2023',
      readTime: '7 min read',
      tags: ['Gaming', 'Security', 'Test Strategy']
    }
  ]);

  return (
    <section id="articles" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Articles & Thought Leadership
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
              className="group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 hover:border-blue-400 dark:hover:border-blue-600"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {article.date}
                  </span>
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400 mt-2">
                  {article.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
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
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => window.open('https://medium.com/@tayal1989', '_blank')}
          >
            Read All Articles on Medium
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Articles;