import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import {
  CheckCircle,
  Code,
  Smartphone,
  Zap,
  Settings,
  GitBranch,
  Database,
  Users
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Testing Expertise',
      icon: <CheckCircle className="h-6 w-6" />,
      skills: [
        'Functional Testing',
        'Regression Testing',
        'Exploratory Testing',
        'Test Strategy',
        'Test Planning',
        'Test Case Design'
      ]
    },
    {
      title: 'Automation',
      icon: <Code className="h-6 w-6" />,
      skills: [
        'Selenium',
        'Appium',
        'Playwright',
        'TestNG',
        'Java',
        'Python'
      ]
    },
    {
      title: 'Mobile Testing',
      icon: <Smartphone className="h-6 w-6" />,
      skills: [
        'iOS Testing',
        'Android Testing',
        'Mobile Automation',
        'Device Farm',
        'App Performance',
        'Platform Compatibility'
      ]
    },
    {
      title: 'CI/CD & DevOps',
      icon: <GitBranch className="h-6 w-6" />,
      skills: [
        'Jenkins',
        'Git',
        'Docker',
        'AWS',
        'Continuous Testing',
        'Pipeline Integration'
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Settings className="h-6 w-6" />,
      skills: [
        'Jira',
        'TestRail',
        'Postman',
        'Charles Proxy',
        'Sauce Labs',
        'BrowserStack'
      ]
    },
    {
      title: 'Performance Testing',
      icon: <Zap className="h-6 w-6" />,
      skills: [
        'JMeter',
        'Load Testing',
        'Stress Testing',
        'Performance Monitoring',
        'API Testing',
        'Benchmark Analysis'
      ]
    },
    {
      title: 'Database & Backend',
      icon: <Database className="h-6 w-6" />,
      skills: [
        'SQL',
        'MongoDB',
        'API Testing',
        'REST APIs',
        'GraphQL',
        'Database Validation'
      ]
    },
    {
      title: 'QA Leadership',
      icon: <Users className="h-6 w-6" />,
      skills: [
        'Team Management',
        'Mentorship',
        'Process Improvement',
        'Quality Strategy',
        'Stakeholder Management',
        'Agile/Scrum'
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-400 dark:hover:border-blue-600"
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="text-lg text-slate-900 dark:text-white">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                    >
                      {skill}
                    </Badge>
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