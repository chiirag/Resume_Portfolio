import { ArrowLeft, Brain, Database, Code, MessageSquare, Sparkles, ExternalLink, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const skills = [
  {
    name: 'LLMs & AI Agents',
    icon: Brain,
    color: 'bg-purple-500',
    relatedSkills: ['GPT-4', 'Llama', 'Claude', 'Mistral', 'LangChain', 'CrewAI', 'AutoGen', 'Fine-tuning', 'LoRA', 'RLHF'],
    description: 'Expertise in large language models, AI agents, and conversational AI systems',
    proficiency: 95
  },
  {
    name: 'RAG & Fine-Tuning',
    icon: Database,
    color: 'bg-blue-500',
    relatedSkills: ['Vector Databases', 'Embeddings', 'Retrieval Systems', 'Context Management', 'Similarity Search', 'Document Processing', 'Knowledge Bases'],
    description: 'Advanced retrieval-augmented generation and model fine-tuning techniques',
    proficiency: 90
  },
  {
    name: 'MLOps & LLMOps',
    icon: Code,
    color: 'bg-green-500',
    relatedSkills: ['Docker', 'Kubernetes', 'CI/CD', 'Model Deployment', 'Monitoring', 'A/B Testing', 'Scalability', 'Performance Optimization'],
    description: 'Production-ready ML operations and scalable AI deployment',
    proficiency: 85
  },
  {
    name: 'Team Leadership',
    icon: MessageSquare,
    color: 'bg-orange-500',
    relatedSkills: ['Team Management', 'Cross-functional Collaboration', 'Project Planning', 'Stakeholder Management', 'Mentoring', 'Agile Methodologies'],
    description: 'Leading high-performing AI and data science teams',
    proficiency: 88
  },
  {
    name: 'Deep Learning & NLP',
    icon: Sparkles,
    color: 'bg-pink-500',
    relatedSkills: ['Transformers', 'BERT', 'PyTorch', 'TensorFlow', 'Text Classification', 'Named Entity Recognition', 'Sentiment Analysis', 'Topic Modeling'],
    description: 'Deep learning architectures and natural language processing',
    proficiency: 92
  },
  {
    name: 'Data Engineering',
    icon: Database,
    color: 'bg-indigo-500',
    relatedSkills: ['PySpark', 'SQL', 'ETL Pipelines', 'Data Warehousing', 'Big Data Processing', 'Real-time Streaming', 'Data Quality'],
    description: 'Large-scale data processing and engineering solutions',
    proficiency: 87
  },
]

const technicalStack = [
  'Python', 'LangChain', 'CrewAI', 'AutoGen', 'GPT-4', 'Llama', 'Claude', 'Mistral',
  'Hugging Face', 'PyTorch', 'TensorFlow', 'Docker', 'Kubernetes', 'PySpark', 'AWS',
  'GCP', 'Azure', 'Airflow', 'MLflow', 'Weights & Biases', 'SQL', 'Tableau', 'Power BI', 'Git'
]

export default function SkillsPage() {
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
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A comprehensive showcase of my technical expertise and proficiency across the AI and data science landscape.
          </p>

          {/* Skill Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">6</div>
              <div className="text-gray-300">Core Expertise Areas</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">24</div>
              <div className="text-gray-300">Technologies Mastered</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Related Skills</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 ${skill.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-400">{skill.proficiency}%</div>
                    <div className="text-xs text-gray-400">Proficiency</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3">{skill.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{skill.description}</p>

                {/* Proficiency Bar */}
                <div className="mb-6">
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div
                      className={`h-2 ${skill.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>

                {/* Related Skills */}
                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.relatedSkills.slice(0, 8).map((relatedSkill) => (
                      <span key={relatedSkill} className="bg-slate-800/50 text-purple-200 px-3 py-1 rounded-full text-xs border border-purple-500/20">
                        {relatedSkill}
                      </span>
                    ))}
                    {skill.relatedSkills.length > 8 && (
                      <span className="text-purple-400 text-xs font-medium">
                        +{skill.relatedSkills.length - 8} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Stack */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Technical Stack</h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Comprehensive toolkit spanning AI/ML frameworks, cloud platforms, and development tools
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {technicalStack.map((tech) => (
                <div
                  key={tech}
                  className="bg-purple-500/10 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm hover:bg-purple-500/20 transition-colors flex items-center space-x-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Collaborate?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how my expertise can help bring your AI projects to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/projects"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105 inline-flex items-center justify-center"
              >
                <span className="mr-2">View My Projects</span>
                <ExternalLink className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="bg-slate-800/50 border border-purple-500/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition inline-flex items-center justify-center"
              >
                Get in Touch
              </Link>
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
