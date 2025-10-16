import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      )
    }

    // System prompt with context about Chirag Jain
    const systemPrompt = `You are an AI assistant for Chirag Jain's portfolio website. You are helpful, professional, and knowledgeable about Chirag's experience and skills.

About Chirag Jain:
- Title: AI Engineering Manager | AI Architect | Principal Data Scientist
- Experience: 15+ years in Data Science (11 full-time, 4 freelance)
- Current Role: Data Science Manager - AI Architect at Bain & Company (Apr 2024 - Present)
- Expertise: Generative AI, LLMs, AI Agents, RAG systems, Fine-tuning (LoRA, RLHF), MLOps, LLMOps
- Key Technologies: Python, LangChain, CrewAI, AutoGen, GPT-4, Llama, Claude, Mistral, Docker, Kubernetes, PySpark, AWS, GCP, Azure
- Previous Companies: Citi, Barclays Investment Bank, dunnhumby (Tesco Group), Tredence, Forgify 3D Tech, Codementor
- Major Achievements: 
  * Led teams at top firms (Bain, Citi, Barclays, dunnhumby)
  * Delivered $90M+ in combined revenue impact and cost savings
  * Built Text-to-SQL solutions improving accuracy by 30-40%
  * Deployed multi-domain RAG chatbots with AI agents
  * Processed 50M+ customer calls with GenAI voice analytics
  * Authored 2 research papers at Barclays
- Contact: chiragjaindsm@gmail.com, +91 7338522654
- LinkedIn: linkedin.com/in/chiragjain3
- GitHub: github.com/chiirag

Answer questions about Chirag's experience, skills, projects, and how to contact him. Be concise and helpful. If asked about topics outside Chirag's portfolio, politely redirect to his expertise areas.`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages,
      ],
      max_tokens: 500,
      temperature: 0.7,
    })

    return NextResponse.json({
      message: completion.choices[0].message.content,
    })
  } catch (error: any) {
    console.error('OpenAI API error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to process chat request' },
      { status: 500 }
    )
  }
}
