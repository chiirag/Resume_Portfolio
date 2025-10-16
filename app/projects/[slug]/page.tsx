import { ArrowLeft, ExternalLink, Github, Calendar, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    id: 'multi-domain-rag-chatbots',
    title: 'Multi-Domain RAG Chatbots with AI Agents',
    description: 'Designed and deployed multi-domain RAG chatbots fine-tuned with LoRA at Bain & Company. Integrated with n8n, LangGraph, and CrewAI for workflow orchestration and multi-agent collaboration, using MCP for context exchange across enterprise systems.',
    tech: ['LangGraph', 'CrewAI', 'LoRA', 'n8n', 'MCP', 'LangChain'],
    gradient: 'from-purple-500 to-pink-500',
    company: 'Bain & Company',
    duration: '2024',
    impact: 'Improved enterprise knowledge management and automation workflows',
    detailedDescription: `This project involved building sophisticated AI-powered chatbots that could operate across multiple business domains at Bain & Company. The solution leveraged Retrieval-Augmented Generation (RAG) combined with fine-tuned Large Language Models using Low-Rank Adaptation (LoRA) for efficient model customization.

Key technical implementations:
• Multi-domain knowledge base integration using vector databases
• Agent orchestration with CrewAI for complex multi-step workflows
• n8n integration for enterprise system connectivity
• MCP (Model Context Protocol) for secure context exchange
• Real-time performance monitoring and optimization
• Scalable deployment using Docker and Kubernetes

The system achieved significant improvements in response accuracy and reduced manual processing time by 60% across various business functions.`,
    challenges: [
      'Managing context across multiple enterprise domains',
      'Ensuring secure data access and compliance',
      'Optimizing response latency for real-time interactions',
      'Integrating with legacy enterprise systems'
    ],
    outcomes: [
      '60% reduction in manual query processing time',
      'Improved response accuracy across all domains',
      'Enhanced employee productivity and satisfaction',
      'Scalable architecture supporting enterprise growth'
    ]
  },
  {
    id: 'text-to-sql-genai',
    title: 'Text-to-SQL with GenAI & LLMs',
    description: 'Built enterprise Text-to-SQL solutions using Generative AI/LLMs fine-tuned on domain-specific schemas. Improved query accuracy by 30-40% and enabled self-service analytics across business teams, transforming natural language into complex SQL queries.',
    tech: ['GPT-4', 'LangChain', 'Fine-tuning', 'RAG', 'SQL', 'Python'],
    gradient: 'from-blue-500 to-cyan-500',
    company: 'Bain & Company',
    duration: '2024',
    impact: 'Empowered non-technical users with self-service analytics capabilities',
    detailedDescription: `This innovative solution transformed how business analysts and stakeholders interact with complex databases. By leveraging Generative AI and fine-tuned LLMs, we created a natural language interface to enterprise data that maintains high accuracy while being accessible to users without SQL knowledge.

Technical architecture:
• Domain-specific fine-tuning on complex database schemas
• Advanced prompt engineering and context management
• Query validation and optimization pipelines
• Integration with existing BI tools and dashboards
• Real-time query performance monitoring
• Automated learning from user feedback and corrections

The system successfully converted complex analytical queries that previously required data engineering support into self-service operations.`,
    challenges: [
      'Handling complex join operations and nested queries',
      'Maintaining query accuracy with domain-specific terminology',
      'Ensuring data security and access control',
      'Managing computational costs of LLM inference'
    ],
    outcomes: [
      '30-40% improvement in query accuracy',
      '80% reduction in data engineering support requests',
      'Faster insights delivery to business stakeholders',
      'Improved data literacy across the organization'
    ]
  },
  {
    id: 'genai-voice-analytics',
    title: 'GenAI Voice Analytics Pipeline',
    description: 'Architected and deployed a GenAI-powered voice analytics pipeline at Citi, leveraging Whisper, LLMs, and embedding-based clustering to process 50M+ customer calls. Extracted complaint themes and sentiment, delivering $14M in cost savings and $72M in incremental revenue.',
    tech: ['Whisper', 'BERT', 'Flan T5', 'Llama', 'Docker', 'Kubernetes'],
    gradient: 'from-green-500 to-emerald-500',
    company: 'Citi',
    duration: '2023-2024',
    impact: '$86M total business impact through cost savings and revenue generation',
    detailedDescription: `This large-scale voice analytics solution processed millions of customer service calls to extract actionable insights. The pipeline combined state-of-the-art speech recognition with advanced natural language understanding to identify customer pain points, sentiment trends, and operational inefficiencies.

Technical implementation:
• Distributed speech-to-text processing with Whisper models
• Multi-stage NLP pipeline for intent and sentiment analysis
• Advanced embedding techniques for call clustering and categorization
• Real-time dashboard for operational insights
• Automated alert system for critical customer issues
• Integration with existing CRM and customer service platforms

The solution provided unprecedented visibility into customer interactions at scale, enabling data-driven improvements across the entire customer service operation.`,
    challenges: [
      'Processing 50M+ calls efficiently at scale',
      'Handling diverse languages and accents',
      'Maintaining privacy and compliance with financial regulations',
      'Achieving real-time processing for live monitoring'
    ],
    outcomes: [
      '$14M in operational cost savings',
      '$72M in incremental revenue through improved customer experience',
      'Reduced customer complaint resolution time by 35%',
      'Enhanced customer satisfaction scores across all channels'
    ]
  },
  {
    id: 'personalized-recommendation-system',
    title: 'Personalized Recommendation System',
    description: 'Built a recommendation system for Tesco at dunnhumby, identifying top personalized offers for millions of users. Leveraged collaborative filtering, user-item embeddings, and purchase history analytics on 100B+ retail transactions per year.',
    tech: ['PySpark', 'Collaborative Filtering', 'GCP', 'Embeddings', 'TensorFlow'],
    gradient: 'from-orange-500 to-red-500',
    company: 'dunnhumby (Tesco Group)',
    duration: '2018-2022',
    impact: 'Optimized personalized marketing and improved customer engagement',
    detailedDescription: `This large-scale recommendation system analyzed billions of retail transactions to deliver highly personalized product recommendations and promotional offers. The solution combined traditional collaborative filtering techniques with modern deep learning approaches to achieve superior recommendation accuracy.

System architecture:
• Distributed processing of 100B+ annual transactions using PySpark
• Hybrid recommendation model combining collaborative and content-based filtering
• Real-time embedding generation for user and product representations
• A/B testing framework for continuous optimization
• Integration with Tesco's loyalty program and CRM systems
• Automated offer generation and targeting

The system significantly improved customer engagement and purchase conversion rates through highly relevant personalized recommendations.`,
    challenges: [
      'Processing massive-scale transaction data efficiently',
      'Maintaining recommendation quality during seasonal fluctuations',
      'Ensuring real-time performance for online recommendations',
      'Balancing personalization with business objectives'
    ],
    outcomes: [
      '25% improvement in recommendation click-through rates',
      '15% increase in personalized offer redemption',
      'Enhanced customer loyalty and retention',
      'Improved inventory turnover through targeted promotions'
    ]
  }
]

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.id === params.slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-purple-400 hover:text-purple-300 transition">
            ← Back to Projects
          </Link>
        </div>
      </div>
    )
  }

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
              href="/projects"
              className="text-gray-300 hover:text-purple-400 transition flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className={`inline-block mb-4`}>
              <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <span className="text-white font-bold text-2xl">{project.title.charAt(0)}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              {project.description}
            </p>

            {/* Project Meta */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2 bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-gray-300">{project.company}</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-gray-300">{project.duration}</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-gray-300">{project.impact}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">

              {/* Detailed Description */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
                <div className="prose prose-invert max-w-none">
                  {project.detailedDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Key Challenges</h2>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-400 mr-3 mt-1">•</span>
                      <span className="text-gray-300 leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Outcomes & Impact</h2>
                <ul className="space-y-4">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1">•</span>
                      <span className="text-gray-300 leading-relaxed">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">

              {/* Technologies */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-purple-500/10 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Company Info */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Company</h3>
                <p className="text-gray-300 mb-4">{project.company}</p>
                <div className="flex items-center space-x-2 text-purple-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{project.duration}</span>
                </div>
              </div>

              {/* Back to Projects */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
                <Link
                  href="/projects"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105 text-center block"
                >
                  View All Projects
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
