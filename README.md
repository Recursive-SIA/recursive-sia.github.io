# Recursive SIA Website

Minimal website for Recursive SIA.

## Installation and Setup

Prerequisites
- Git
- Python 3.7+ or Node.js

Clone this repository:
   ```bash
   git clone https://github.com/yourusername/recursivesia-website.git
   cd recursivesia-website
   ```

### Option 1: Setup with uv (Python)

[uv](https://github.com/astral-sh/uv) is a fast Python package installer and resolver.

1. Install uv:
   ```bash
   # macOS/Linux with curl
   curl -LsSf https://astral.sh/uv/install.sh | sh

   # Windows with PowerShell
   powershell -c "irm https://astral.sh/uv/install.ps1 | iex"
   ```

2. Create a virtual environment:
   ```bash
   uv venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```
   
   Note: Python's `http.server` module is built-in, so no additional packages are needed.

3. Serve the website:
   ```bash
   python server.py
   ```

### Option 2: Setup with Python (standard)

1. Create a virtual environment:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

2. Serve the website:
   ```bash
   python server.py
   ```

### Option 3: Setup with Node.js

1. Run the server directly:
   ```bash
   node server.js
   ```

Or:

2. Use npm scripts:
   ```bash
   npm start
   ```

## Access the Website

Open `http://localhost:8000` in your browser.

## Hosting on GitHub Pages

1. Initialize a Git repository and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create a GitHub repository:
   - Go to GitHub and create a new repository named `recursivesia-website`
   - Follow the instructions to push your existing repository:
   ```bash
   git remote add origin https://github.com/yourusername/recursivesia-website.git
   git branch -M main
   git push -u origin main
   ```

3. Enable GitHub Pages in the repository settings:
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Build and deployment", select "Deploy from a branch"
   - Set the source branch to "main" and folder to "/ (root)"
   - Click "Save"

4. Set up a custom domain:
   - The CNAME file containing `recursivesia.com` is already included in this repository
   - Configure your domain's DNS settings at your domain registrar:
     - Add A records pointing to GitHub Pages IP addresses:
       ```
       recursivesia.com.  A  185.199.108.153
       recursivesia.com.  A  185.199.109.153
       recursivesia.com.  A  185.199.110.153
       recursivesia.com.  A  185.199.111.153
       ```
     - Add a CNAME record:
       ```
       www.recursivesia.com.  CNAME  yourusername.github.io.
       ```

5. Verify the domain in GitHub repository settings:
   - In repository settings under "Pages", enter your custom domain
   - Click "Save"
   - Check "Enforce HTTPS" once domain verification is complete

It may take up to 24 hours for DNS changes to propagate and for the site to be available at your custom domain.

## License

All rights reserved.
