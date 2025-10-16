import { ArrowLeft, Mail, Phone, Github, Linkedin, MapPin, Clock, MessageSquare, ExternalLink, Send, Download } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 cursor-pointer" onClick={() => window.location.href = '/'}>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CJ</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition">
                GenAI Portfolio
              </span>
            </Link>

            <Link
              href="/"
              className="text-gray-300 hover:text-purple-400 transition flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            I&apos;m always excited to discuss AI opportunities, innovative projects, or potential collaborations. Let&apos;s start a conversation!
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2"><Clock className="w-8 h-8 mx-auto" /></div>
              <div className="text-gray-300">Quick Response</div>
              <div className="text-sm text-gray-400 mt-1">Within 24 hours</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2"><MessageSquare className="w-8 h-8 mx-auto" /></div>
              <div className="text-gray-300">AI Assistant</div>
              <div className="text-sm text-gray-400 mt-1">Available 24/7</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2"><MapPin className="w-8 h-8 mx-auto" /></div>
              <div className="text-gray-300">Global</div>
              <div className="text-sm text-gray-400 mt-1">Remote friendly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Methods */}
            <div className="space-y-8">

              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>

              {/* Email */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300 mb-4">Best way to reach me for detailed discussions and collaborations.</p>
                    <a
                      href="mailto:chiragjaindsm@gmail.com"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition group-hover:text-blue-300"
                    >
                      <span className="mr-2">chiragjaindsm@gmail.com</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-300 mb-4">Available for urgent matters and quick calls.</p>
                    <a
                      href="tel:+917338522654"
                      className="inline-flex items-center text-green-400 hover:text-green-300 transition group-hover:text-green-300"
                    >
                      <span className="mr-2">+91 7338522654</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
                    <p className="text-gray-300 mb-4">Connect professionally and view my detailed career journey.</p>
                    <a
                      href="https://linkedin.com/in/chiragjain3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition group-hover:text-blue-300"
                    >
                      <span className="mr-2">linkedin.com/in/chiragjain3</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* GitHub */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
                    <p className="text-gray-300 mb-4">Explore my open-source contributions and technical projects.</p>
                    <a
                      href="https://github.com/chiirag"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-300 hover:text-white transition group-hover:text-white"
                    >
                      <span className="mr-2">github.com/chiirag</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* AI Assistant */}
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">AI Assistant</h3>
                    <p className="text-gray-300 mb-4">Have questions about my experience? Chat with my AI assistant available 24/7 on the main page.</p>
                    <Link
                      href="/"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition"
                    >
                      <span className="mr-2">Try AI Assistant</span>
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Alternative */}
            <div className="space-y-8">

              <h2 className="text-3xl font-bold text-white mb-8">What I Can Help With</h2>

              {/* Services */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-6">AI & Data Science Services</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    'Generative AI Implementation',
                    'LLM Fine-tuning & Deployment',
                    'RAG Systems Architecture',
                    'Voice Analytics Solutions',
                    'Text-to-SQL Applications',
                    'Recommendation Systems',
                    'MLOps & Production AI',
                    'Team Leadership & Mentoring'
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Response Times</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Email inquiries</span>
                    <span className="text-green-400 font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">LinkedIn messages</span>
                    <span className="text-green-400 font-medium">Within 48 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Phone calls</span>
                    <span className="text-blue-400 font-medium">Schedule in advance</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">AI Assistant</span>
                    <span className="text-purple-400 font-medium">Instant response</span>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Current Availability</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Consulting Projects</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Available</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Full-time Opportunities</span>
                    <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">Considering</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Speaking Engagements</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Available</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Mentoring</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Available</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 gap-3">
                  <Link
                    href="/projects"
                    className="bg-slate-800/50 hover:bg-slate-800 border border-purple-500/30 text-white px-4 py-3 rounded-xl font-medium transition flex items-center justify-center"
                  >
                    <span>View My Projects</span>
                  </Link>
                  <Link
                    href="/Chirag_Jain_CV.pdf"
                    download
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/50 transition flex items-center justify-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    <span>Download CV</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Start a Conversation?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Whether you have a specific project in mind, want to discuss AI opportunities, or just want to connect, I&apos;d love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="mailto:chiragjaindsm@gmail.com"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </a>
                <a
                  href="tel:+917338522654"
                  className="bg-slate-800/50 border border-purple-500/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Chirag Jain - Portfolio
          </p>
        </div>
      </footer>
    </div>
  )
}
