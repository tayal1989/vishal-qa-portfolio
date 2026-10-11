import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import {
  Mail,
  Send,
  Linkedin,
  Github,
  MapPin,
  FileDown,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      toast({
        title: 'Message Received!',
        description: 'Thank you for reaching out. I will get back to you promptly.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900/60 dark:bg-slate-950 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-700/50 text-blue-300 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            Connect & Collaborate
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-400 max-w-2xl mx-auto">
            Open to discussing Agentic QA architectures, quality engineering advisory, leadership opportunities, or technical collaboration.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="bg-slate-900/90 border border-slate-800 p-6 space-y-6 shadow-xl">
              <div>
                <CardTitle className="text-2xl font-bold text-white mb-2">
                  Contact Information
                </CardTitle>
                <CardDescription className="text-slate-300 text-sm">
                  Feel free to reach out directly via email or connect on professional channels.
                </CardDescription>
              </div>

              <div className="space-y-4 text-sm">
                <a
                  href="mailto:tayal1989@gmail.com"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 text-slate-200 hover:text-blue-400 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-blue-900/40 text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Email Address</div>
                    <div className="font-semibold text-white">tayal1989@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-200">
                  <div className="p-2 rounded-lg bg-rose-900/40 text-rose-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Location</div>
                    <div className="font-semibold text-white">Gurgaon, Haryana, India</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-slate-800">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Professional Channels:
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://linkedin.com/in/vishal-agarwal-8b3363a9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-800 hover:bg-blue-600/20 text-slate-300 hover:text-blue-400 border border-slate-700 transition-colors text-xs font-semibold"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/tayal1989"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-800 hover:bg-blue-600/20 text-slate-300 hover:text-blue-400 border border-slate-700 transition-colors text-xs font-semibold"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://medium.com/@tayal1989"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-800 hover:bg-blue-600/20 text-slate-300 hover:text-blue-400 border border-slate-700 transition-colors text-xs font-semibold"
                  >
                    <span className="font-bold">M</span>
                    <span>Medium</span>
                  </a>
                </div>
              </div>

              {/* Resume download prompt */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-950/60 to-slate-900 border border-blue-800/50">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">Download Resume (PDF)</div>
                    <div className="text-xs text-slate-400">15+ Years QA & SDET Manager CV</div>
                  </div>
                  <a
                    href="/Vishal_Agarwal_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md shadow-blue-500/20"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    Download
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <Card className="bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-xl">
              <CardHeader className="p-0 pb-6">
                <CardTitle className="text-2xl font-bold text-white">
                  Send a Direct Message
                </CardTitle>
                <CardDescription className="text-slate-300 text-sm">
                  Fill out this form and I will respond to your inquiry directly.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-300 text-xs font-semibold">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-slate-950 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-300 text-xs font-semibold">
                        Your Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-slate-950 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-slate-300 text-xs font-semibold">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. QA Leadership Opportunity / Advisory Discussion"
                      required
                      className="bg-slate-950 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-300 text-xs font-semibold">
                      Your Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your organization, project, or what you would like to discuss..."
                      rows={5}
                      required
                      className="bg-slate-950 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-blue-500/20"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;