import { ArrowLeft, Brain, Sparkles, Award, TrendingUp, Users, Calendar, Target } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <div className="flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2">
                <Brain className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">AI Engineering Manager | AI Architect | Principal Data Scientist</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Chirag Jain
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Data Science Leader with 15+ years of experience designing, deploying, and scaling ML, DL, and LLM-based solutions across diverse industries.
            </p>

            {/* Key Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$90M+</div>
                <div className="text-gray-300 text-sm">Business Impact</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50M+</div>
                <div className="text-gray-300 text-sm">Calls Processed</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">4</div>
                <div className="text-gray-300 text-sm">Featured Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed About Content */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">

              {/* Professional Summary */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Award className="w-8 h-8 text-purple-400 mr-3" />
                  Professional Summary
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I am a seasoned Data Science Leader with over 15 years of experience in designing, deploying, and scaling machine learning, deep learning, and large language model-based solutions across diverse industries. Currently serving as Data Science Manager - AI Architect at Bain & Company, I specialize in Generative AI and have deep expertise in GPT models, LLMs, and AI agents.
                  </p>
                  <p>
                    Throughout my career, I have led high-performing teams at top organizations including Bain & Company, Citi, Barclays Investment Bank, and dunnhumby (Tesco Group), building enterprise-grade AI solutions. My work has delivered over $90M in combined revenue impact and cost savings through strategic AI implementations.
                  </p>
                  <p>
                    I excel in LLMOps, fine-tuning (LoRA, RLHF), RAG systems, and deploying scalable AI solutions with modern MLOps practices using Docker and Kubernetes. My expertise spans the entire AI lifecycle from research and development to production deployment and monitoring.
                  </p>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
                  Key Achievements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400 mb-1">$90M+</div>
                    <div className="text-gray-300 text-sm">Combined revenue impact and cost savings</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-4">
                    <div className="text-2xl font-bold text-blue-400 mb-1">50M+</div>
                    <div className="text-gray-300 text-sm">Customer calls processed with GenAI voice analytics</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-400 mb-1">30-40%</div>
                    <div className="text-gray-300 text-sm">Improvement in Text-to-SQL query accuracy</div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-4">
                    <div className="text-2xl font-bold text-orange-400 mb-1">60%</div>
                    <div className="text-gray-300 text-sm">Reduction in manual query processing time</div>
                  </div>
                </div>
              </div>

              {/* Expertise Areas */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Target className="w-8 h-8 text-orange-400 mr-3" />
                  Areas of Expertise
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-300 mb-3">Generative AI & LLMs</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Fine-tuning and optimization (LoRA, RLHF)</li>
                      <li>• Multi-domain RAG chatbots with AI agents</li>
                      <li>• Text-to-SQL solutions for business analytics</li>
                      <li>• Voice analytics and sentiment analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-300 mb-3">MLOps & Production AI</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Scalable model deployment with Docker/K8s</li>
                      <li>• CI/CD pipelines for ML workflows</li>
                      <li>• Model monitoring and performance optimization</li>
                      <li>• A/B testing and continuous improvement</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-300 mb-3">Data Engineering</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Big data processing with PySpark</li>
                      <li>• ETL pipelines and data warehousing</li>
                      <li>• Real-time streaming architectures</li>
                      <li>• Cloud-native data solutions (GCP, AWS, Azure)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-pink-300 mb-3">Team Leadership</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Managing cross-functional AI teams</li>
                      <li>• Stakeholder management and communication</li>
                      <li>• Project planning and agile methodologies</li>
                      <li>• Mentoring and knowledge transfer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">

              {/* Quick Facts */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-gray-300 text-sm">Experience</div>
                      <div className="text-white font-semibold">11 years full-time, 4 years freelance</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-gray-300 text-sm">Companies</div>
                      <div className="text-white font-semibold">Bain, Citi, Barclays, dunnhumby, Tredence, Forgify</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-gray-300 text-sm">Publications</div>
                      <div className="text-white font-semibold">2 research papers at Barclays</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Focus */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Current Focus</h3>
                <div className="space-y-3 text-gray-300 text-sm">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Modernizing NPS Prism with AI-driven automation</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Building scalable LLM solutions for enterprise clients</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Leading AI transformation initiatives</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mentoring next-generation AI engineers</span>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Let's Connect</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Interested in discussing AI opportunities or collaboration?
                </p>
                <Link
                  href="/contact"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105 text-center block"
                >
                  Get in Touch
                </Link>
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
