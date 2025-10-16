'use client'

import { useState } from 'react'
import { Brain, Sparkles, Github, Linkedin, Mail, ExternalLink, Code, Database, MessageSquare, ChevronDown, Menu, X } from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const skills = [
    { name: 'Large Language Models', icon: Brain, color: 'bg-purple-500' },
    { name: 'RAG Systems', icon: Database, color: 'bg-blue-500' },
    { name: 'Prompt Engineering', icon: MessageSquare, color: 'bg-green-500' },
    { name: 'Python & ML Frameworks', icon: Code, color: 'bg-orange-500' },
    { name: 'Vector Databases', icon: Database, color: 'bg-pink-500' },
    { name: 'Fine-tuning & Training', icon: Sparkles, color: 'bg-indigo-500' },
  ]

  const projects = [
    {
      title: 'AI-Powered Chatbot Platform',
      description: 'Built an intelligent chatbot using GPT-4 and LangChain with RAG implementation for context-aware responses. Integrated with vector databases for efficient knowledge retrieval.',
      tech: ['GPT-4', 'LangChain', 'Pinecone', 'FastAPI'],
      link: '#',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Document Intelligence System',
      description: 'Developed an end-to-end document processing pipeline using computer vision and NLP. Extracts, analyzes, and summarizes information from various document formats.',
      tech: ['OpenAI', 'PyTorch', 'Tesseract', 'React'],
      link: '#',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Custom LLM Fine-tuning',
      description: 'Fine-tuned open-source LLMs for domain-specific tasks using LoRA and QLoRA techniques. Achieved 40% improvement in task-specific accuracy.',
      tech: ['Llama 2', 'LoRA', 'Hugging Face', 'Weights & Biases'],
      link: '#',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Multi-Modal AI Assistant',
      description: 'Created a multi-modal AI system capable of processing text, images, and audio inputs. Integrated CLIP, Whisper, and GPT-4V for comprehensive understanding.',
      tech: ['GPT-4V', 'CLIP', 'Whisper', 'Streamlit'],
      link: '#',
      gradient: 'from-orange-500 to-red-500'
    },
  ]

  const experience = [
    {
      role: 'Generative AI Engineer',
      company: 'AI Solutions Inc.',
      period: '2023 - Present',
      description: 'Leading development of enterprise GenAI solutions, implementing RAG systems, and fine-tuning LLMs for various business applications.'
    },
    {
      role: 'Machine Learning Engineer',
      company: 'Tech Innovators',
      period: '2021 - 2023',
      description: 'Developed and deployed ML models for production, focusing on NLP and computer vision applications.'
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
              <span className="text-sm text-purple-300">Generative AI Engineer</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-slide-up">
            Chirag Jain
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Building the future with AI • Specializing in LLMs, RAG systems, and cutting-edge generative AI solutions
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
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-400 hover:text-purple-400 transition transform hover:scale-110">
              <Mail className="w-6 h-6" />
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
              I&apos;m a passionate Generative AI Engineer with expertise in building intelligent systems that leverage the power of large language models and cutting-edge AI technologies. My work focuses on creating practical, scalable AI solutions that solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              With a strong background in machine learning, natural language processing, and software engineering, I specialize in RAG systems, prompt engineering, fine-tuning LLMs, and developing end-to-end AI applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I&apos;m constantly exploring new frontiers in AI, from multi-modal models to efficient deployment strategies, always striving to push the boundaries of what&apos;s possible with generative AI.
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
              {['Python', 'PyTorch', 'TensorFlow', 'LangChain', 'OpenAI API', 'Hugging Face', 'FastAPI', 'Docker', 'AWS', 'Pinecone', 'Chroma', 'FAISS', 'React', 'Next.js', 'Git'].map((tech) => (
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
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
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
              href="mailto:contact@example.com"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105 inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send an Email
            </a>
            <a
              href="https://linkedin.com"
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
            © {new Date().getFullYear()} Chirag Jain. Built with Next.js & TailwindCSS
          </p>
        </div>
      </footer>
    </div>
  )
}
