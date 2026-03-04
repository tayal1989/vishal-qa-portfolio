import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Award, TrendingUp, Users, Lightbulb } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Large Scale Platform Leadership',
      description: 'Led QA initiatives for large-scale mobile gaming platforms serving millions of users, ensuring quality and reliability in high-stakes environments.',
      metric: '14+ Years',
      color: 'blue'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Release Cycle Optimization',
      description: 'Improved release cycle efficiency by implementing automated testing frameworks and CI/CD integration, reducing testing time by 60%.',
      metric: '60% Faster',
      color: 'green'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Team Development & Mentorship',
      description: 'Mentored and developed multiple QA leads and engineers, building high-performing teams with strong testing culture and best practices.',
      metric: '20+ Engineers',
      color: 'purple'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovative Testing Solutions',
      description: 'Created innovative testing strategies and internal tools for test case impact analysis, automation frameworks, and quality metrics dashboards.',
      metric: 'Multiple Tools',
      color: 'orange'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
    };
    return colors[color];
  };

  return (
    <section id="achievements" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Key Achievements
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Delivering measurable impact through quality engineering excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 hover:border-blue-400 dark:hover:border-blue-600"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${getColorClasses(achievement.color)} group-hover:scale-110 transition-transform`}>
                    {achievement.icon}
                  </div>
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    {achievement.metric}
                  </span>
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white">
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;