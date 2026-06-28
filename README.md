# Confidence Concierge — Website (6 pages)

A complete multi-page luxury concierge site for Los Cabos.

## Pages
- index.html ............ Home
- concierge.html ........ Concierge Services
- transportation.html ... Private Transportation
- activities.html ....... Activities & Experiences
- residential.html ...... Residential Management
- about.html ............ About & Team

All pages share css/styles.css and js/main.js.

## Folder structure (keep this exact layout on GitHub)
    index.html
    concierge.html
    transportation.html
    activities.html
    residential.html
    about.html
    css/styles.css
    js/main.js
    assets/images/   (your photos)

## ⚠️ How to preview properly
Don't judge it from a plain-text preview window — that shows no styling.
Double-click index.html so it opens in your browser (Chrome/Safari). It will
appear fully styled: dark teal hero, gold accents, serif headlines.

## 1. Set your WhatsApp number (do this first)
Open js/main.js and edit:
    const WA_NUMBER = "526241234567";   // country code + number, no + or spaces
This updates every WhatsApp button across all 6 pages at once.
Also replace hello@confidenceconcierge.com in the .html files with your email.

## 2. Add team photos (optional — you can do this later)
In about.html, find each:
    <div class="team-photo"><span class="team-monogram">JF</span></div>
and replace with:
    <div class="team-photo"><img src="assets/images/javier.jpg" alt="Javier Flores"></div>
Put the image files in assets/images/. Recommended size 800x560px.

## 3. Publish on GitHub Pages
1. Create a repo and upload every file, keeping the folder structure above.
2. Settings → Pages → Source: Deploy from branch → main / root → Save.
3. Live at https://yourusername.github.io/your-repo/

## 4. Connect your Namecheap domain
In GitHub → Settings → Pages → Custom domain → enter your domain → Save.
In Namecheap → Advanced DNS:
  - 4 A records (Host @):
      185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
  - 1 CNAME record: Host www → yourusername.github.io
Wait for DNS to propagate (up to ~24h), then tick "Enforce HTTPS" in GitHub.

## Images
All photos are from Unsplash (free commercial license, no attribution required).
Swap any of them by editing the image URLs in css/styles.css (page-hero and
.svc-photo / .media-img backgrounds) or the inline style URLs in the .html files.
