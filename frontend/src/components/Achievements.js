import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import {
  Trophy,
  Award,
  Globe2,
  BookOpen,
  Mic,
  Star,
  ShieldCheck,
  TrendingUp,
  Sparkles
} from 'lucide-react';

const Achievements = () => {
  const honors = [
    {
      title: 'Zupee Value Champion — Nurturing & Growth',
      year: '2025',
      organization: 'Cashgrail Pvt. Ltd. (Zupee)',
      description:
        'Awarded the highest company-wide leadership recognition for exemplary team building, mentorship, and nurturing high-performing QA talent across the engineering department.',
      icon: <Trophy className="h-7 w-7 text-amber-400" />,
      badge: 'Company-Wide Leadership Award',
      color: 'border-amber-500/30 bg-amber-950/10'
    },
    {
      title: 'Outstanding Talent Awards (Consecutive)',
      year: '2019 – 2024',
      organization: 'Zupee & Snapdeal',
      description:
        'Recognized continuously across multiple years for outstanding individual and leadership contributions to test automation coverage, continuous release agility, and quality gates.',
      icon: <Award className="h-7 w-7 text-blue-400" />,
      badge: 'Multi-Year Engineering Excellence',
      color: 'border-blue-500/30 bg-blue-950/10'
    },
    {
      title: 'International Assignment — Paris, France',
      year: 'Orange Business Services',
      organization: 'Global Client Enterprise Systems',
      description:
        'Selected for on-site international assignment in Paris, France to architect, implement, and deploy enterprise automation frameworks for global telecom client networks.',
      icon: <Globe2 className="h-7 w-7 text-cyan-400" />,
      badge: 'Global Client Delivery',
      color: 'border-cyan-500/30 bg-cyan-950/10'
    },
    {
      title: 'Published Author on Quality Engineering',
      year: 'Medium & Tech Blogs',
      organization: 'Engineering Publications',
      description:
        'Authored widely-read technical articles breaking down Selenium exceptions, TestNG priority internals, test-case writing interview blueprints, and high-velocity app release engines.',
      icon: <BookOpen className="h-7 w-7 text-indigo-400" />,
      badge: 'Thought Leadership',
      color: 'border-indigo-500/30 bg-indigo-950/10'
    },
    {
      title: 'Star Performer & Best Team Awards (2x)',
      year: '2012 – 2014',
      organization: 'Mahindra Comviva',
      description:
        'Twice awarded Best Team Award for pioneering CTAF automation framework that saved 90% manual testing effort; awarded Star Talent & Best Talent honors.',
      icon: <Star className="h-7 w-7 text-yellow-400" />,
      badge: 'Double Honor for 90% Automation Effort Savings',
      color: 'border-yellow-500/30 bg-yellow-950/10'
    },
    {
      title: 'Conference Speaker & Technical Trainer',
      year: 'Industry & Internal Academies',
      organization: 'Community Contributions',
      description:
        'Delivered hands-on training sessions and talks on Robot Framework, Mobile Appium strategies, and modern automated quality architectures for engineering squads.',
      icon: <Mic className="h-7 w-7 text-emerald-400" />,
      badge: 'Technical Trainer & Speaker',
      color: 'border-emerald-500/30 bg-emerald-950/10'
    }
  ];

  return (
    <section id="achievements" className="py-24 px-6 bg-slate-900/60 dark:bg-slate-950 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/40 border border-amber-700/50 text-amber-300 text-xs font-semibold">
            <Trophy className="w-3.5 h-3.5" />
            Recognition & Accolades
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Honors & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-400 max-w-2xl mx-auto">
            Honored throughout 15+ years of engineering leadership with value champion awards, global client assignments, and technical contributions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {honors.map((item, index) => (
            <Card
              key={index}
              className={`p-6 bg-slate-900/90 border ${item.color} hover:border-slate-600 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700/80 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                    {item.year}
                  </span>
                </div>

                <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
                  {item.organization}
                </div>

                <CardTitle className="text-lg font-bold text-white mb-2 leading-snug">
                  {item.title}
                </CardTitle>

                <CardDescription className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.description}
                </CardDescription>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <span className="text-[11px] font-semibold text-amber-400/90">
                  ★ {item.badge}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;