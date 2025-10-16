import { ArrowLeft, ExternalLink, Github, Calendar, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    id: 'multi-domain-rag-chatbots',
    title: 'Multi-Domain RAG Chatbots with AI Agents',
    description: 'Designed and deployed multi-domain RAG chatbots fine-tuned with LoRA at Bain & Company. Integrated with n8n, LangGraph, and CrewAI for workflow orchestration and multi-agent collaboration, using MCP for context exchange across enterprise systems.',
    tech: ['LangGraph', 'CrewAI', 'LoRA', 'n8n', 'MCP'],
    gradient: 'from-purple-500 to-pink-500',
    company: 'Bain & Company',
    duration: '2024',
    impact: 'Improved enterprise knowledge management'
  },
  {
    id: 'text-to-sql-genai',
    title: 'Text-to-SQL with GenAI & LLMs',
    description: 'Built enterprise Text-to-SQL solutions using Generative AI/LLMs fine-tuned on domain-specific schemas. Improved query accuracy by 30-40% and enabled self-service analytics across business teams, transforming natural language into complex SQL queries.',
    tech: ['GPT-4', 'LangChain', 'Fine-tuning', 'RAG'],
    gradient: 'from-blue-500 to-cyan-500',
    company: 'Bain & Company',
    duration: '2024',
    impact: 'Empowered non-technical users with analytics'
  },
  {
    id: 'genai-voice-analytics',
    title: 'GenAI Voice Analytics Pipeline',
    description: 'Architected and deployed a GenAI-powered voice analytics pipeline at Citi, leveraging Whisper, LLMs, and embedding-based clustering to process 50M+ customer calls. Extracted complaint themes and sentiment, delivering $14M in cost savings and $72M in incremental revenue.',
    tech: ['Whisper', 'BERT', 'Flan T5', 'Llama', 'Docker'],
    gradient: 'from-green-500 to-emerald-500',
    company: 'Citi',
    duration: '2023-2024',
    impact: '$86M total business impact'
  },
  {
    id: 'personalized-recommendation-system',
    title: 'Personalized Recommendation System',
    description: 'Built a recommendation system for Tesco at dunnhumby, identifying top personalized offers for millions of users. Leveraged collaborative filtering, user-item embeddings, and purchase history analytics on 100B+ retail transactions per year.',
    tech: ['PySpark', 'Collaborative Filtering', 'GCP', 'Embeddings'],
    gradient: 'from-orange-500 to-red-500',
    company: 'dunnhumby (Tesco Group)',
    duration: '2018-2022',
    impact: 'Optimized personalized marketing'
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CJ</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portfolio
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
            Featured Projects
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A showcase of enterprise-grade AI solutions I've built, delivering measurable business impact across diverse industries and use cases.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">$90M+</div>
              <div className="text-gray-300">Business Impact</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">4</div>
              <div className="text-gray-300">Featured Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 group"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center mb-4`}>
                      <span className="text-white font-bold">{project.title.charAt(0)}</span>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      <div className="flex items-center space-x-1 mb-1">
                        <Users className="w-3 h-3" />
                        <span>{project.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-slate-800/50 text-purple-300 px-3 py-1 rounded-full text-xs border border-purple-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-green-400 text-sm">
                      <TrendingUp className="w-4 h-4" />
                      <span>{project.impact}</span>
                    </div>
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition group-hover:text-purple-300"
                    >
                      <span className="mr-2">View Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interested in Collaboration?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always excited to discuss new opportunities and innovative AI projects. Let's connect and explore how we can work together!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="mailto:chiragjaindsm@gmail.com"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105 inline-flex items-center justify-center"
            >
              <span>Start a Conversation</span>
            </Link>
            <Link
              href="/"
              className="bg-slate-800/50 border border-purple-500/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition inline-flex items-center justify-center"
            >
              <span>Back to Portfolio</span>
            </Link>
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
