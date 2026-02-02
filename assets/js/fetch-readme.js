/**
 * Fetch README content from GitHub repository
 * @param {string} owner - GitHub repository owner (e.g., 'NLR-CADET')
 * @param {string} repo - Repository name (e.g., 'cadet-opt')
 * @param {string} targetElement - ID of the HTML element to populate
 */
async function fetchReadme(owner, repo, targetElement) {
  const url = `https://api.github.com/repos/${owner}/${repo}/readme`;
  const targetEl = document.getElementById(targetElement);
  
  if (!targetEl) {
    console.error(`Element with ID '${targetElement}' not found`);
    return;
  }
  
  try {
    // Show loading message
    targetEl.innerHTML = '<p style="text-align: center; padding: 2rem; color: #666;">Loading README from GitHub...</p>';
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3.html'
      }
    });
    
    if (response.ok) {
      const html = await response.text();
      targetEl.innerHTML = html;
      
      // Fix relative image URLs to point to GitHub
      const images = targetEl.querySelectorAll('img');
      images.forEach(img => {
        const src = img.getAttribute('src');
        if (src && !src.startsWith('http')) {
          img.setAttribute('src', `https://raw.githubusercontent.com/${owner}/${repo}/main/${src}`);
        }
      });
      
      // Fix relative links to point to GitHub
      const links = targetEl.querySelectorAll('a');
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#')) {
          link.setAttribute('href', `https://github.com/${owner}/${repo}/blob/main/${href}`);
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');
        }
      });
      
    } else if (response.status === 404) {
      targetEl.innerHTML = `
        <div style="padding: 2rem; text-align: center;">
          <p style="color: #e74c3c; font-weight: bold;">❌ README not found</p>
          <p>The repository may be private or the README doesn't exist.</p>
          <p><a href="https://github.com/${owner}/${repo}" target="_blank" rel="noopener noreferrer">Visit repository on GitHub →</a></p>
        </div>
      `;
    } else {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error fetching README:', error);
    targetEl.innerHTML = `
      <div style="padding: 2rem; text-align: center;">
        <p style="color: #e74c3c; font-weight: bold;">⚠️ Error loading README</p>
        <p style="color: #666;">Could not fetch README from GitHub. Please try again later or visit the repository directly.</p>
        <p><a href="https://github.com/${owner}/${repo}" target="_blank" rel="noopener noreferrer" style="color: #0366d6;">View on GitHub →</a></p>
      </div>
    `;
  }
}

/**
 * Fetch repository statistics from GitHub API
 * @param {string} owner - GitHub repository owner
 * @param {string} repo - Repository name
 * @returns {Promise<Object>} Repository statistics
 */
async function fetchRepoStats(owner, repo) {
  const url = `https://api.github.com/repos/${owner}/${repo}`;
  
  try {
    const response = await fetch(url);
    
    if (response.ok) {
      const data = await response.json();
      return {
        stars: data.stargazers_count,
        forks: data.forks_count,
        watchers: data.watchers_count,
        openIssues: data.open_issues_count,
        language: data.language,
        license: data.license ? data.license.name : 'Unknown',
        lastUpdated: new Date(data.updated_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        description: data.description
      };
    }
  } catch (error) {
    console.error('Error fetching repository stats:', error);
    return null;
  }
}

/**
 * Display repository statistics in a designated element
 * @param {string} owner - GitHub repository owner
 * @param {string} repo - Repository name
 * @param {string} targetElement - ID of the HTML element to populate
 */
async function displayRepoStats(owner, repo, targetElement) {
  const targetEl = document.getElementById(targetElement);
  
  if (!targetEl) {
    console.error(`Element with ID '${targetElement}' not found`);
    return;
  }
  
  const stats = await fetchRepoStats(owner, repo);
  
  if (stats) {
    targetEl.innerHTML = `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin: 1rem 0;">
        <span style="padding: 0.25rem 0.75rem; background: #f6f8fa; border-radius: 4px;">
          ⭐ ${stats.stars} stars
        </span>
        <span style="padding: 0.25rem 0.75rem; background: #f6f8fa; border-radius: 4px;">
          🔱 ${stats.forks} forks
        </span>
        <span style="padding: 0.25rem 0.75rem; background: #f6f8fa; border-radius: 4px;">
          👀 ${stats.watchers} watchers
        </span>
        <span style="padding: 0.25rem 0.75rem; background: #f6f8fa; border-radius: 4px;">
          📝 ${stats.openIssues} open issues
        </span>
        <span style="padding: 0.25rem 0.75rem; background: #f6f8fa; border-radius: 4px;">
          📅 Updated ${stats.lastUpdated}
        </span>
      </div>
    `;
  }
}
