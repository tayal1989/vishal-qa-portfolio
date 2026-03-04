import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Award, TrendingUp, Users, Lightbulb } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality Engineering Leadership',
      description: 'Led QA initiatives for large-scale mobile applications in the real money gaming industry, ensuring high reliability, performance, and security for platforms serving millions of users in high-traffic environments.',
      metric: '14+ Years',
      color: 'blue'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Release Cycle Optimization',
      description: 'Accelerated release cycles by implementing automation frameworks and CI/CD-integrated testing pipelines, significantly reducing regression testing time and enabling faster, more confident deployments.',
      metric: 'Faster Releases',
      color: 'green'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Team Development & Mentorship',
      description: 'Mentored and guided QA leads and engineers, establishing strong testing practices, automation culture, and scalable QA processes across teams.',
      metric: '20+ Engineers',
      color: 'purple'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Testing Tools & Quality Insights',
      description: 'Designed internal QA solutions including test impact analysis tools, automation frameworks, and testing dashboards that improved testing visibility and enabled more efficient quality decision-making.',
      metric: 'Internal QA Innovations',
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
            Delivering measurable impact through quality engineering leadership, automation strategy, and scalable testing practices
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