# How to Push to GitHub

Your code is committed locally! Follow these steps to push to GitHub:

## Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon (top right) → **"New repository"**
3. Fill in:
   - **Repository name**: `genai-portfolio` (or your choice)
   - **Description**: "Gen AI Portfolio - Personal website showcasing AI projects"
   - **Visibility**: Public or Private (your choice)
   - ⚠️ **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

## Step 2: Push Your Code

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/genai-portfolio.git

# Push your code
git push -u origin main
```

**Example:**
If your GitHub username is "chiirag":
```bash
git remote add origin https://github.com/chiirag/genai-portfolio.git
git push -u origin main
```

## Step 3: Verify

Go to your GitHub repository URL and you should see all your files!

## Future Updates

After the initial push, to update your repository:

```bash
# Stage changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push
```

## Quick Command Reference

```bash
# Check status
git status

# View commit history
git log --oneline

# View remote URL
git remote -v

# Pull latest changes
git pull

# Push changes
git push
```

## Troubleshooting

### Authentication Error

If you get authentication errors, you may need to:

1. **Use a Personal Access Token (recommended)**:
   - Go to GitHub Settings → Developer Settings → Personal Access Tokens
   - Generate a new token
   - Use the token as your password when pushing

2. **Or use SSH** (more permanent):
   ```bash
   # Generate SSH key
   ssh-keygen -t ed25519 -C "chiragjaintohana@gmail.com"
   
   # Add to ssh-agent
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519
   
   # Copy public key and add to GitHub
   cat ~/.ssh/id_ed25519.pub
   ```
   
   Then use SSH URL instead:
   ```bash
   git remote set-url origin git@github.com:YOUR_USERNAME/genai-portfolio.git
   ```

### Already Have a Remote

If you see "remote origin already exists":
```bash
git remote remove origin
git remote add origin YOUR_REPOSITORY_URL
```

---

Your code is ready to push! 🚀
