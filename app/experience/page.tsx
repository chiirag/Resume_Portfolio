import { ArrowLeft, Briefcase, Calendar, MapPin, Award, TrendingUp, Users, Target } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

const experience = [
  {
    role: 'Data Science Manager - AI Architect',
    company: 'Bain & Company - NPS Prism',
    period: 'Apr 2024 - Present',
    location: 'Remote',
    type: 'Full-time',
    bullets: [
      'Led and built a high-performing AI team (8 Data Scientists, 2 Data Engineers) to modernize NPS Prism with AI-driven automation, deploying scalable solutions using Docker and Kubernetes',
      'Built Text-to-SQL solutions using Generative AI/LLMs fine-tuned on domain-specific schemas, improving query accuracy by 30–40% and enabling self-service analytics across business teams',
      'Designed and deployed multi-domain RAG chatbots fine-tuned with LoRA, integrated with n8n, LangGraph, and CrewAI for workflow orchestration and multi-agent collaboration, using MCP for context exchange',
      'Improved survey data quality by detecting fraudulent and low-value responses through AI-based content validation, saving $4M annually and enabling more reliable insights',
      'Implemented RLHF pipelines to optimize LLM responses for business-specific tasks, aligning model outputs with analyst preferences and improving factual accuracy and relevance by 25%'
    ],
    achievements: ['$4M cost savings', '30-40% accuracy improvement', '25% response optimization'],
    technologies: ['LangGraph', 'CrewAI', 'LoRA', 'n8n', 'Docker', 'Kubernetes', 'RLHF']
  },
  {
    role: 'Data Science Manager (AVP)',
    company: 'Citi',
    period: 'Feb 2023 - Apr 2024',
    location: 'New York, USA',
    type: 'Full-time',
    bullets: [
      'Managed a team of 7 data scientists to architect and deploy a GenAI-powered voice analytics pipeline leveraging speech-to-text models, LLMs, and embedding-based clustering to process 50M+ customer calls and extract complaint themes, sentiment, and intent at scale',
      'Optimized end-to-end LLMOps workflows using Docker, Kubernetes, and CI/CD for scalable model training and deployment, enabling targeted AI-driven interventions that reduced complaint volume and delivered $14M in cost savings and $72M in incremental revenue',
      'Led cross-functional collaboration with product, engineering, and business teams to integrate AI insights into customer service workflows and operational decision-making processes'
    ],
    achievements: ['$86M business impact', '50M+ calls processed', '35% complaint reduction'],
    technologies: ['Whisper', 'BERT', 'Flan T5', 'Llama', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    role: 'Research Data Science Manager (AVP)',
    company: 'Barclays Investment Bank',
    period: 'Jan 2022 - Dec 2022',
    location: 'London, UK',
    type: 'Full-time',
    bullets: [
      'Led and managed a team of 5 research data scientists to develop deep learning models (LSTMs and transformer-based architectures) that analyzed news articles and quarterly reports to quantify their influence on stock price movements',
      'Authored two research papers for Barclays Data & Investment Science, exploring the use of Natural Language Processing to predict stock prices using advanced transformer architectures and time-series analysis',
      'Processed and analyzed 500 million news articles and 600 billion market data points using distributed computing frameworks, establishing new benchmarks for financial NLP applications'
    ],
    achievements: ['2 research papers published', '500M articles processed', 'New NLP benchmarks'],
    technologies: ['Transformers', 'LSTMs', 'NLP', 'Time-series Analysis', 'Distributed Computing']
  },
  {
    role: 'Lead Applied Data Scientist',
    company: 'dunnhumby (part of Tesco Group)',
    period: 'Oct 2018 - Jan 2022',
    location: 'London, UK',
    type: 'Full-time',
    bullets: [
      'Worked on big retail transaction-level datasets to develop and implement ML/DL models to identify optimal Pricing, Promotion, & Assortment strategies for leading global retailers in the world',
      'Built a personalized recommendation system for Tesco to identify top offers for users, leveraging collaborative filtering, user-item embeddings, and purchase history analytics on 100B+ item-level transactions',
      'Led cross-functional initiatives combining data science with business strategy to optimize retail operations and customer experience through data-driven insights'
    ],
    achievements: ['100B+ transactions processed', '25% CTR improvement', 'Optimized retail strategies'],
    technologies: ['PySpark', 'Collaborative Filtering', 'GCP', 'Recommendation Systems', 'Big Data']
  },
  {
    role: 'Senior Data Scientist',
    company: 'Tredence',
    period: 'Sep 2015 - Sep 2018',
    location: 'Bangalore, India',
    type: 'Full-time',
    bullets: [
      'Developed machine learning classification models to classify 3M SKUs into predefined product hierarchy, improving product categorization accuracy by 35%',
      'Built unified customer profiles using demographic segmentation and behavioral clustering, enabling personalized marketing campaigns that increased customer engagement by 40%',
      'Designed and enhanced multiple dashboards for a leading retailer tracking customer experience metrics, providing real-time insights for operational decision-making'
    ],
    achievements: ['35% accuracy improvement', '40% engagement increase', '3M SKUs classified'],
    technologies: ['Machine Learning', 'Customer Segmentation', 'Dashboard Development', 'Real-time Analytics']
  },
  {
    role: 'Data Scientist',
    company: 'Forgify 3D Tech',
    period: 'Jul 2014 - Sep 2015',
    location: 'Bangalore, India',
    type: 'Full-time',
    bullets: [
      'Improved performance accuracy by 25% through creating 20+ dashboards for real-time metric tracking across marketing channels and customer acquisition funnels',
      'Improved ROAS (Return on Ad Spend) by 20% by optimizing spending across 3 marketing channels using A/B testing and predictive modeling',
      'Developed customer lifetime value models and churn prediction algorithms to identify high-value customers and reduce attrition rates'
    ],
    achievements: ['25% accuracy improvement', '20% ROAS increase', 'Churn prediction models'],
    technologies: ['A/B Testing', 'Predictive Modeling', 'Customer Analytics', 'Performance Dashboards']
  },
  {
    role: 'Freelance Data Scientist',
    company: 'Codementor',
    period: 'Jul 2010 - Jun 2014',
    location: 'Remote',
    type: 'Freelance',
    bullets: [
      'Completed 300+ Data Science projects with an average rating of 4.98/5 across various domains including finance, healthcare, retail, and marketing',
      'Profile Link - https://www.codementor.io/@chiirag - Maintained top-rated freelancer status with extensive client testimonials and repeat business',
      'Developed and delivered 150+ machine learning models and 50+ interactive dashboards using Tableau, Power BI, Dash, Plotly, Matplotlib, Seaborn for diverse business applications'
    ],
    achievements: ['300+ projects completed', '4.98/5 average rating', '150+ ML models built'],
    technologies: ['Tableau', 'Power BI', 'Python', 'Machine Learning', 'Data Visualization']
  }
]

export default function ExperiencePage() {
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
            Professional Experience
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            15+ years of leadership in AI and data science across top-tier organizations, delivering transformative business impact.
          </p>

          {/* Experience Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">7</div>
              <div className="text-gray-300">Professional Roles</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">$90M+</div>
              <div className="text-gray-300">Business Impact</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">6</div>
              <div className="text-gray-300">Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition group"
              >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-purple-400 font-semibold text-lg">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      exp.type === 'Full-time' ? 'bg-green-500/20 text-green-300' : 'bg-blue-500/20 text-blue-300'
                    }`}>
                      {exp.type}
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      Key Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, idx) => (
                        <span key={idx} className="bg-green-500/10 border border-green-500/30 text-green-300 px-3 py-1 rounded-full text-sm">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-gray-300 leading-relaxed flex items-start">
                        <span className="text-purple-400 mr-3 mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-orange-400 mb-3 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="bg-slate-800/50 text-purple-300 px-3 py-1 rounded-full text-xs border border-purple-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Career Summary */}
          <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Career Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-gray-300">Years of Experience</div>
                <div className="text-sm text-gray-400 mt-2">Across 6 companies and 7 roles</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">$90M+</div>
                <div className="text-gray-300">Business Impact</div>
                <div className="text-sm text-gray-400 mt-2">Revenue and cost savings combined</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">50M+</div>
                <div className="text-gray-300">Data Points Processed</div>
                <div className="text-sm text-gray-400 mt-2">Voice calls, transactions, and articles</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Interested in My Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how my expertise and leadership experience can contribute to your organization&apos;s AI initiatives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Let&apos;s Connect
              </Link>
              <Link
                href="/projects"
                className="bg-slate-800/50 border border-purple-500/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition inline-flex items-center justify-center"
              >
                View Projects
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
