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
  Sparkles,
  ExternalLink
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
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit directly to FormSubmit to deliver to tayal1989@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/tayal1989@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Contact] ${formData.subject} - from ${formData.name}`,
          message: formData.message,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const result = await response.json();

      if (response.ok || result.success === 'true' || result.success === true) {
        toast({
          title: 'Message Sent Successfully!',
          description: 'Thank you! Your message has been sent directly to tayal1989@gmail.com.',
        });
        setSentSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      // Fallback: trigger user's default email client
      const mailtoUrl = `mailto:tayal1989@gmail.com?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Hi Vishal,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;

      toast({
        title: 'Opening Email Client...',
        description: 'Your mail app has been opened with your message prefilled to tayal1989@gmail.com.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDirectEmail = () => {
    const mailtoUrl = `mailto:tayal1989@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      formData.message
        ? `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        : 'Hi Vishal,\n\nI came across your portfolio and would like to connect.'
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50/70 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700/50 text-blue-700 dark:text-blue-300 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            Connect & Collaborate
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Open to discussing Agentic QA architectures, quality engineering advisory, leadership opportunities, or technical collaboration.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <Card className="bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 p-6 space-y-6 shadow-sm dark:shadow-xl h-full flex flex-col justify-between">
              <div>
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Contact Information
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 text-sm">
                  Feel free to reach out directly via email or connect on professional channels.
                </CardDescription>
              </div>

              <div className="space-y-4 text-sm flex-1 pt-2">
                <a
                  href="mailto:tayal1989@gmail.com"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Email Directly</div>
                    <div className="font-semibold text-slate-900 dark:text-white">tayal1989@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-200">
                  <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Location</div>
                    <div className="font-semibold text-slate-900 dark:text-white">Gurgaon, Haryana, India</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Professional Channels:
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://linkedin.com/in/vishal-agarwal-8b3363a9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-100 hover:bg-blue-50 dark:bg-slate-800 dark:hover:bg-blue-600/20 text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 transition-colors text-xs font-semibold"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/tayal1989"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-100 hover:bg-blue-50 dark:bg-slate-800 dark:hover:bg-blue-600/20 text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 transition-colors text-xs font-semibold"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://medium.com/@tayal1989"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-100 hover:bg-blue-50 dark:bg-slate-800 dark:hover:bg-blue-600/20 text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 transition-colors text-xs font-semibold"
                  >
                    <span className="font-bold">M</span>
                    <span>Medium</span>
                  </a>
                </div>
              </div>

              {/* Resume download prompt */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/60 dark:to-slate-900 border border-blue-200 dark:border-blue-800/50">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">Download Resume (PDF)</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">15+ Years QA & SDET Manager CV</div>
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
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <Card className="bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-sm dark:shadow-xl h-full flex flex-col justify-between">
              <div>
                <CardHeader className="p-0 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                        Send a Direct Message
                      </CardTitle>
                      <CardDescription className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                        Delivered straight to{' '}
                        <strong className="text-blue-600 dark:text-blue-400">tayal1989@gmail.com</strong>
                      </CardDescription>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleDirectEmail}
                      className="border-slate-300 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 bg-white dark:bg-transparent hidden sm:inline-flex items-center gap-1.5 shadow-sm"
                    >
                      <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      Open Mail App
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="p-0">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-slate-700 dark:text-slate-300 text-xs font-semibold">
                          Your Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 shadow-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-700 dark:text-slate-300 text-xs font-semibold">
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
                          className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-slate-700 dark:text-slate-300 text-xs font-semibold">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. QA Leadership Opportunity / Advisory Discussion"
                        required
                        className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 shadow-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-700 dark:text-slate-300 text-xs font-semibold">
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
                        className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 resize-none shadow-sm"
                      />
                    </div>

                    <div className="space-y-3 pt-1">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-blue-500/20"
                      >
                        {isSubmitting ? 'Sending to tayal1989@gmail.com...' : 'Send Message'}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>

                      {sentSuccess && (
                        <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span>
                            Message successfully delivered to tayal1989@gmail.com! Vishal will get back to you shortly.
                          </span>
                        </div>
                      )}
                    </div>
                  </form>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;