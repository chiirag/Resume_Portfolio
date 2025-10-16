'use client'

import { useState } from 'react'
import { Brain, Sparkles, Github, Linkedin, Mail, ExternalLink, Code, Database, MessageSquare, ChevronDown, Menu, X, Phone } from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const skills = [
    { name: 'LLMs & AI Agents', icon: Brain, color: 'bg-purple-500' },
    { name: 'RAG & Fine-Tuning', icon: Database, color: 'bg-blue-500' },
    { name: 'MLOps & LLMOps', icon: Code, color: 'bg-green-500' },
    { name: 'Team Leadership', icon: MessageSquare, color: 'bg-orange-500' },
    { name: 'Deep Learning & NLP', icon: Sparkles, color: 'bg-pink-500' },
    { name: 'Data Engineering', icon: Database, color: 'bg-indigo-500' },
  ]

  const projects = [
    {
      title: 'Multi-Domain RAG Chatbots with AI Agents',
      description: 'Designed and deployed multi-domain RAG chatbots fine-tuned with LoRA at Bain & Company. Integrated with n8n, LangGraph, and CrewAI for workflow orchestration and multi-agent collaboration, using MCP for context exchange across enterprise systems.',
      tech: ['LangGraph', 'CrewAI', 'LoRA', 'n8n', 'MCP'],
      link: '#',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Text-to-SQL with GenAI & LLMs',
      description: 'Built enterprise Text-to-SQL solutions using Generative AI/LLMs fine-tuned on domain-specific schemas. Improved query accuracy by 30-40% and enabled self-service analytics across business teams, transforming natural language into complex SQL queries.',
      tech: ['GPT-4', 'LangChain', 'Fine-tuning', 'RAG'],
      link: '#',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'GenAI Voice Analytics Pipeline',
      description: 'Architected and deployed a GenAI-powered voice analytics pipeline at Citi, leveraging Whisper, LLMs, and embedding-based clustering to process 50M+ customer calls. Extracted complaint themes and sentiment, delivering $14M in cost savings and $72M in incremental revenue.',
      tech: ['Whisper', 'BERT', 'Flan T5', 'Llama', 'Docker'],
      link: '#',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Personalized Recommendation System',
      description: 'Built a recommendation system for Tesco at dunnhumby, identifying top personalized offers for millions of users. Leveraged collaborative filtering, user-item embeddings, and purchase history analytics on 100B+ retail transactions per year.',
      tech: ['PySpark', 'Collaborative Filtering', 'GCP', 'Embeddings'],
      link: '#',
      gradient: 'from-orange-500 to-red-500'
    },
  ]

  const experience = [
    {
      role: 'Data Science Manager - AI Architect',
      company: 'Bain & Company - NPS Prism',
      period: 'Apr 2024 - Present',
      bullets: [
        'Led and built a high-performing AI team (8 Data Scientists, 2 Data Engineers) to modernize NPS Prism with AI-driven automation, deploying scalable solutions using Docker and Kubernetes',
        'Built Text-to-SQL solutions using Generative AI/LLMs fine-tuned on domain-specific schemas, improving query accuracy by 30–40% and enabling self-service analytics across business teams',
        'Designed and deployed multi-domain RAG chatbots fine-tuned with LoRA, integrated with n8n, LangGraph, and CrewAI for workflow orchestration and multi-agent collaboration, using MCP for context exchange',
        'Improved survey data quality by detecting fraudulent and low-value responses through AI-based content validation, saving $4M annually and enabling more reliable insights',
        'Implemented RLHF pipelines to optimize LLM responses for business-specific tasks, aligning model outputs with analyst preferences and improving factual accuracy and relevance by 25%'
      ]
    },
    {
      role: 'Data Science Manager (AVP)',
      company: 'Citi',
      period: 'Feb 2023 - Apr 2024',
      bullets: [
        'Managed a team of 7 data scientists to architect and deploy a GenAI-powered voice analytics pipeline leveraging speech-to-text models, LLMs, and embedding-based clustering to process 50M+ customer calls and extract complaint themes, sentiment, and intent at scale',
        'Optimized end-to-end LLMOps workflows using Docker, Kubernetes, and CI/CD for scalable model training and deployment, enabling targeted AI-driven interventions that reduced complaint volume and delivered $14M in cost savings and $72M in incremental revenue',
        'Data Size - 12 million calls per year, 30 million customers & 2 billion touchpoints || Tech Stack - OpenAI\'s Whisper, BERT-based QnA, Flan T5 & Llama'
      ]
    },
    {
      role: 'Research Data Science Manager (AVP)',
      company: 'Barclays Investment Bank',
      period: 'Jan 2022 - Dec 2022',
      bullets: [
        'Led and managed a team of 5 research data scientists to develop deep learning models (LSTMs and transformer-based architectures) that analyzed news articles and quarterly reports to quantify their influence on stock price movements',
        'Authored two research papers for Barclays Data & Investment Science, exploring the use of Natural Language Processing to predict stock prices',
        'Data Size - 500 million news articles, 600 billion market data points || Tech Stack - Python, PySpark, Azure, NLP, Transformers, LLMs, Topic Modeling, Regressions, Neural Networks'
      ]
    },
    {
      role: 'Lead Applied Data Scientist',
      company: 'dunnhumby (part of Tesco Group)',
      period: 'Oct 2018 - Jan 2022',
      bullets: [
        'Worked on big retail transaction-level datasets to develop and implement ML/DL models to identify optimal Pricing, Promotion, & Assortment strategies for leading global retailers in the world',
        'Built a recommendation system for Tesco to identify top personalized offers for users, leveraging collaborative filtering, user-item embeddings, and purchase history analytics',
        'Data Size - ~100 billion item level transactions per year || Tech – Python, PySpark, GCP'
      ]
    },
    {
      role: 'Senior Data Scientist',
      company: 'Tredence',
      period: 'Sep 2015 - Sep 2018',
      bullets: [
        'Developed machine learning classification models to classify 3M SKUs into predefined product hierarchy',
        'Built unified customer profiles using demographic segmentation and behavioral clustering',
        'Designed and enhanced multiple dashboards for a leading retailer tracking customer experience metrics'
      ]
    },
    {
      role: 'Data Scientist',
      company: 'Forgify 3D Tech',
      period: 'Jul 2014 - Sep 2015',
      bullets: [
        'Improved performance accuracy by 25% through creating 20+ dashboards for real-time metric tracking',
        'Improved ROAS by 20% by optimizing spending across 3 marketing channels'
      ]
    },
    {
      role: 'Freelance Data Scientist',
      company: 'Codementor',
      period: 'Jul 2010 - Jun 2014',
      bullets: [
        'Completed 300+ Data Science projects with an average rating of 4.98/5',
        'Profile Link - https://www.codementor.io/@chiirag',
        'Developed and delivered 150+ projects using various ML/DL techniques',
        'Created 50+ dashboards using Tableau, Power BI, Dash, Plotly, Matplotlib, Seaborn'
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-purple-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                GenAI Portfolio
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition">About</a>
              <a href="#skills" className="text-gray-300 hover:text-purple-400 transition">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-purple-400 transition">Projects</a>
              <a href="#experience" className="text-gray-300 hover:text-purple-400 transition">Experience</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition">Contact</a>
              <a href="/Chirag_Jain_CV.pdf" download className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105">Download CV</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-purple-400 transition py-2">About</a>
              <a href="#skills" className="block text-gray-300 hover:text-purple-400 transition py-2">Skills</a>
              <a href="#projects" className="block text-gray-300 hover:text-purple-400 transition py-2">Projects</a>
              <a href="#experience" className="block text-gray-300 hover:text-purple-400 transition py-2">Experience</a>
              <a href="#contact" className="block text-gray-300 hover:text-purple-400 transition py-2">Contact</a>
              <a href="/Chirag_Jain_CV.pdf" download className="block text-gray-300 hover:text-purple-400 transition py-2">Download CV</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">AI Engineering Manager | AI Architect | Principal Data Scientist</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-slide-up">
            Chirag Jain
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            15+ years building AI solutions • Leading teams to deploy LLMs, AI Agents, and GenAI systems at scale
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a href="#contact" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105">
              Get in Touch
            </a>
            <a href="#projects" className="bg-slate-800/50 border border-purple-500/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition">
              View Projects
            </a>
          </div>

          <div className="flex justify-center space-x-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a href="https://github.com/chiirag" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/chiragjain3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:chiragjaindsm@gmail.com" className="text-gray-400 hover:text-purple-400 transition transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+917338522654" className="text-gray-400 hover:text-purple-400 transition transform hover:scale-110">
              <Phone className="w-6 h-6" />
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 text-purple-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Data Science Leader with 15+ years of experience (11 full-time, 4 freelance) designing, deploying, and scaling ML, DL, and LLM-based solutions across diverse industries. Currently focused on Generative AI, with deep expertise in GPT, LLMs, and AI Agents to accelerate innovation and deliver measurable business impact.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I lead high-performing teams at top organizations like Bain & Company, Citi, Barclays, and dunnhumby (Tesco Group), building enterprise-grade AI solutions including Text-to-SQL systems, multi-domain RAG chatbots with AI agents, and voice analytics pipelines. My work has delivered over $90M in combined revenue impact and cost savings.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Proven track record of helping organizations achieve both topline growth and bottom-line efficiency through strategic AI implementations. I specialize in LLMOps, fine-tuning (LoRA, RLHF), RAG systems, and deploying scalable AI solutions with Docker, Kubernetes, and modern MLOps practices.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className={`${skill.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Technical Stack</h3>
            <div className="flex flex-wrap gap-3">
              {['Python', 'LangChain', 'CrewAI', 'AutoGen', 'GPT-4', 'Llama', 'Claude', 'Mistral', 'Hugging Face', 'PyTorch', 'TensorFlow', 'Docker', 'Kubernetes', 'PySpark', 'AWS', 'GCP', 'Azure', 'Airflow', 'MLflow', 'Weights & Biases', 'SQL', 'Tableau', 'Power BI', 'Git'].map((tech) => (
                <span key={tech} className="bg-purple-500/10 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-slate-800/50 text-purple-300 px-3 py-1 rounded-full text-xs border border-purple-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition"
                  >
                    <span className="mr-2">View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-purple-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="text-gray-300 leading-relaxed flex items-start">
                      <span className="text-purple-400 mr-3 mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Interested in collaborating or have a project in mind? I&apos;d love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:chiragjaindsm@gmail.com"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105 inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send an Email
            </a>
            <a
              href="tel:+917338522654"
              className="bg-slate-800/50 border border-purple-500/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              +91 7338522654
            </a>
            <a
              href="https://linkedin.com/in/chiragjain3"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 border border-purple-500/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition inline-flex items-center justify-center"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Chirag Jain
          </p>
        </div>
      </footer>
    </div>
  )
}
