# Deploying to Vercel

This guide walks you through deploying your Gen AI Portfolio to Vercel, the platform built by the creators of Next.js.

## Prerequisites

- A GitHub, GitLab, or Bitbucket account
- Your portfolio code pushed to a Git repository
- A Vercel account (free tier available at [vercel.com](https://vercel.com))

## Method 1: Deploy via Vercel Dashboard (Recommended for Beginners)

### Step 1: Push to Git Repository

If you haven't already, initialize a git repository and push your code:

```bash
git init
git add .
git commit -m "Initial commit: Gen AI Portfolio"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

### Step 2: Import Project to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New..."** → **"Project"**
3. Import your Git repository
4. Vercel will automatically detect Next.js settings
5. Click **"Deploy"**

That's it! Vercel will build and deploy your portfolio.

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate.

### Step 3: Deploy

From your project directory:

```bash
vercel
```

For production deployment:

```bash
vercel --prod
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Your account/team
- **Link to existing project?** → No (for first deployment)
- **What's your project's name?** → genai-portfolio (or your preference)
- **In which directory is your code located?** → ./ (press Enter)

Vercel will:
1. Build your Next.js application
2. Deploy it to a production URL
3. Provide you with a live URL (e.g., `https://genai-portfolio.vercel.app`)

## Configuration

### Environment Variables (if needed)

If you need to add environment variables:

**Via Dashboard:**
1. Go to your project on Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add your variables

**Via CLI:**
```bash
vercel env add VARIABLE_NAME
```

### Custom Domain

To add a custom domain:

1. Go to your project on Vercel
2. Navigate to **Settings** → **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions

## Automatic Deployments

Once connected to Git:
- **Production**: Every push to `main` branch triggers a production deployment
- **Preview**: Every pull request gets a unique preview URL
- **Rollbacks**: Easy one-click rollbacks from the dashboard

## Build Configuration

Vercel automatically detects Next.js. Default settings:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

You can override these in `vercel.json` if needed.

## Performance Optimizations

Vercel automatically provides:
- **Edge Network**: Global CDN for fast loading worldwide
- **Automatic HTTPS**: SSL certificates included
- **Image Optimization**: Next.js Image component optimized
- **Serverless Functions**: API routes run as serverless functions
- **Zero Config**: No setup required for Next.js

## Deployment URLs

After deployment, you'll receive:
- **Production URL**: `https://your-project.vercel.app`
- **Custom Domain** (optional): `https://yourdomain.com`
- **Preview URLs**: Unique URLs for each branch/PR

## Useful Commands

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View deployment logs
vercel logs

# Remove deployment
vercel remove PROJECT_NAME
```

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Test build locally: `npm run build`

### Environment Variables Not Working

- Ensure they're set in Vercel dashboard
- Redeploy after adding variables
- Check variable names match your code

### Custom Domain Issues

- Verify DNS records are correctly configured
- Allow up to 48 hours for DNS propagation
- Check domain is verified in Vercel settings

## Updating Your Deployment

### Automatic (Git-based):
Simply push to your repository:
```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel automatically deploys the changes.

### Manual (CLI):
```bash
vercel --prod
```

## Cost

- **Hobby (Free)**: Perfect for personal portfolios
  - Unlimited deployments
  - Automatic HTTPS
  - 100 GB bandwidth/month
  
- **Pro**: For professional use
  - Custom deployment limits
  - Advanced analytics
  - Priority support

## Support

- Documentation: [vercel.com/docs](https://vercel.com/docs)
- Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- Status: [vercel-status.com](https://www.vercel-status.com)

---

Your Gen AI Portfolio is now ready for deployment! 🚀
