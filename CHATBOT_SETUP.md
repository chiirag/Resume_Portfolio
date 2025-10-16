# AI Chatbot Setup Guide

## 🤖 Overview

Your portfolio now includes an AI-powered chatbot using OpenAI's GPT-4o-mini model. The chatbot can answer questions about your experience, skills, and projects.

## 🔐 CRITICAL: API Key Security

**NEVER commit your actual API key to Git!**

### Step 1: Revoke Exposed Key (If Applicable)

If you accidentally exposed your API key:
1. Go to https://platform.openai.com/api-keys
2. Find and **DELETE** the exposed key immediately
3. Generate a new key

### Step 2: Set Up Environment Variables

#### For Local Development:

1. Create a `.env.local` file in the project root:
```bash
touch .env.local
```

2. Add your OpenAI API key:
```env
OPENAI_API_KEY=your_actual_api_key_here
```

3. **NEVER commit `.env.local`** - it's already in `.gitignore`

#### For Vercel Deployment:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name**: `OPENAI_API_KEY`
   - **Value**: Your OpenAI API key
   - **Environment**: Production, Preview, Development (select all)
4. Click **Save**
5. Redeploy your application

## 📦 Installation

Install the OpenAI package:

```bash
npm install
```

This will install the `openai` package added to `package.json`.

## 🚀 Running Locally

1. Ensure `.env.local` exists with your API key
2. Run the development server:
```bash
npm run dev
```

3. Open http://localhost:3000
4. Click the purple chat button in the bottom-right corner

## 🎨 Chatbot Features

- **Floating Widget**: Purple gradient button in bottom-right
- **Context-Aware**: Knows about your experience, skills, and projects
- **Professional**: Responds with relevant information about your portfolio
- **Smooth UX**: Loading states, animations, error handling
- **Mobile Responsive**: Works on all devices

## 🧠 What the Chatbot Knows

The chatbot has context about:
- Your current role at Bain & Company
- 15+ years of experience
- All your previous companies (Citi, Barclays, dunnhumby, Tredence, etc.)
- Technical skills and expertise
- Major projects and achievements
- Contact information
- $90M+ business impact

## 💰 Cost Considerations

- **Model**: GPT-4o-mini (cost-effective)
- **Max Tokens**: 500 per response
- **Estimated Cost**: ~$0.0001-0.0003 per conversation
- **Monthly Budget**: Set limits in OpenAI dashboard

### Cost Management:

1. Set usage limits in OpenAI dashboard
2. Monitor usage at https://platform.openai.com/usage
3. Set up billing alerts
4. Consider rate limiting for production

## 🔒 Security Best Practices

✅ **DO:**
- Store API keys in environment variables
- Use `.env.local` for local development
- Use Vercel environment variables for deployment
- Rotate API keys regularly
- Monitor API usage
- Set spending limits

❌ **DON'T:**
- Commit API keys to Git
- Share API keys publicly
- Hardcode API keys in code
- Use the same key across multiple projects
- Expose keys in client-side code

## 🐛 Troubleshooting

### "OpenAI API key not configured"
- Ensure `.env.local` exists with `OPENAI_API_KEY`
- Restart the dev server after adding the key
- For Vercel: Check environment variables in dashboard

### "Cannot find module 'openai'"
- Run `npm install` to install dependencies
- Check that `openai` is in `package.json`

### Chatbot not responding
- Check browser console for errors
- Verify API key is valid
- Check OpenAI API status: https://status.openai.com
- Ensure you have credits in your OpenAI account

### Rate limit errors
- You've exceeded OpenAI's rate limits
- Wait a few minutes and try again
- Upgrade your OpenAI plan if needed

## 📝 Customization

### Modify System Prompt

Edit `/app/api/chat/route.ts` to change how the chatbot responds:

```typescript
const systemPrompt = `Your custom instructions here...`
```

### Change Model

In `/app/api/chat/route.ts`:

```typescript
model: 'gpt-4o-mini', // Change to 'gpt-4o' for more powerful responses
```

### Adjust Response Length

```typescript
max_tokens: 500, // Increase for longer responses
```

### Styling

Edit `/components/Chatbot.tsx` to customize:
- Colors and gradients
- Button position
- Chat window size
- Animations

## 🔗 Resources

- OpenAI API Docs: https://platform.openai.com/docs
- OpenAI Pricing: https://openai.com/pricing
- API Keys: https://platform.openai.com/api-keys
- Usage Dashboard: https://platform.openai.com/usage

## 📞 Support

If you need help:
- Check OpenAI documentation
- Review error messages in browser console
- Check API status at https://status.openai.com

---

**Remember**: Always keep your API keys secure and never commit them to version control!
