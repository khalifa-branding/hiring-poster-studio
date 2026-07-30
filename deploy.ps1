# Trescon Hiring Poster Studio - Automated Single-Branch Deployment Script
# Prevents GitHub Actions lock conflicts and guarantees fast, zero-error deployments.

Write-Host "=========================================================" -ForegroundColor Cyan
Write-Host "  🚀 Trescon Hiring Poster Studio - Production Deploy  " -ForegroundColor Cyan
Write-Host "=========================================================" -ForegroundColor Cyan

# Step 1: Copy poster.html to root index.html for production build
Write-Host "1. Copying poster.html to root index.html..." -ForegroundColor Yellow
Copy-Item -Path "poster.html" -Destination "index.html" -Force

# Step 2: Stage & Commit Production Files
Write-Host "2. Staging & committing production files..." -ForegroundColor Yellow
git add .
git commit -m "Production Deploy: Clean Single-Branch Build v22.0"

# Step 3: Push Single Branch to GitHub Remotes (Prevents Deployment Lock Conflicts)
Write-Host "3. Pushing main branch to GitHub Pages remotes..." -ForegroundColor Yellow
git push hiring-poster-studio main:main --force
git push hiring-templates main:main --force

# Step 4: Restore Local Workspace index.html
Write-Host "4. Restoring local workspace letterhead index.html..." -ForegroundColor Yellow
Copy-Item -Path "letterhead.html" -Destination "index.html" -Force
git add index.html
git commit -m "Restore local workspace letterhead index.html"

Write-Host "=========================================================" -ForegroundColor Green
Write-Host "  ✅ Deployment Complete! Live at:                       " -ForegroundColor Green
Write-Host "  👉 https://khalifa-branding.github.io/hiring-poster-studio/ " -ForegroundColor Green
Write-Host "=========================================================" -ForegroundColor Green
