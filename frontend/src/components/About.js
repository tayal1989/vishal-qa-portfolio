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
              Software Quality Engineering, I specialize in designing scalable testing strategies and leading
              high-performing QA teams that deliver reliable, high-quality software in fast-paced environments.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              My expertise spans across <span className="font-semibold">Web, Mobile, Backend, and API testing</span>, with
              a strong focus on automation framework design, CI/CD integration, and intelligent testing strategies.
              I have built robust automation solutions using <span className="font-semibold">Selenium, Appium, Playwright</span>,
              and modern testing frameworks to accelerate release cycles while maintaining strong quality standards.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I have extensive experience working on large-scale mobile applications in the <span className="font-semibold">real money gaming</span> industry,
              where reliability, performance, and security are critical. My work has helped teams improve testing coverage,
              reduce production issues, and enable faster and more confident releases.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I am also actively exploring <span className="font-semibold">AI-driven testing</span> approaches, including
              evaluating RAG-based applications and agentic AI frameworks, and leveraging AI to improve test design,
              automation efficiency, and software quality insights.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Beyond execution, I'm passionate about mentoring QA professionals, building internal testing tools,
              and establishing strong quality engineering practices across organizations.
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
                    <span className="text-slate-700 dark:text-slate-300">QA Leadership & Team Mentorship</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                    <span className="text-slate-700 dark:text-slate-300">Quality Engineering Strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                    <span className="text-slate-700 dark:text-slate-300">Web, Mobile & Backend Testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                    <span className="text-slate-700 dark:text-slate-300">API Testing & Automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                    <span className="text-slate-700 dark:text-slate-300">Automation Framework Architecture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                    <span className="text-slate-700 dark:text-slate-300">CI/CD Pipeline Integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                    <span className="text-slate-700 dark:text-slate-300">Mobile Application Testing (Android & iOS)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                    <span className="text-slate-700 dark:text-slate-300">Performance & Reliability Testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                    <span className="text-slate-700 dark:text-slate-300">Internal QA Tools Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                    <span className="text-slate-700 dark:text-slate-300">AI-Assisted Testing & Intelligent Test Design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                    <span className="text-slate-700 dark:text-slate-300">Testing RAG-Based Systems & AI Applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                    <span className="text-slate-700 dark:text-slate-300">Real Money Gaming Platform Testing</span>
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