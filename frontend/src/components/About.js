import React from 'react';
import { Card } from './ui/card';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              With over <span className="font-semibold text-blue-600 dark:text-blue-400">14 years of experience</span> in
              software quality assurance, I've built and led high-performing QA teams that deliver
              exceptional results in fast-paced environments.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              My expertise spans across <span className="font-semibold">mobile testing</span>, <span className="font-semibold">test automation strategy</span>,
              and <span className="font-semibold">CI/CD integration</span>. I specialize in building robust automation
              frameworks and internal testing tools that dramatically improve testing efficiency.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Having worked extensively in the <span className="font-semibold">real money gaming</span> industry,
              I understand the critical importance of quality, security, and compliance in
              high-stakes applications.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm passionate about mentoring QA professionals, establishing best practices,
              and driving quality culture across engineering organizations.
            </p>
          </div>

          <Card className="p-8 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  Core Competencies
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                    <span className="text-slate-700 dark:text-slate-300">QA Team Leadership & Mentorship</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                    <span className="text-slate-700 dark:text-slate-300">Test Automation Strategy & Implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                    <span className="text-slate-700 dark:text-slate-300">Mobile Testing (iOS & Android)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                    <span className="text-slate-700 dark:text-slate-300">CI/CD Pipeline Integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                    <span className="text-slate-700 dark:text-slate-300">Internal Testing Tools Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                    <span className="text-slate-700 dark:text-slate-300">Real Money Gaming Products</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;