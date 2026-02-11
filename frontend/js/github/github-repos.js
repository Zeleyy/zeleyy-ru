import { API_BASE } from "../config/api.js";

const fetchRepos = async () => {
    try {
        const response = await fetch(`${API_BASE}/v1/profiles/github/repos`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};

const getLanguageColor = (language) => {
    const colors = {
        'JavaScript': '#f1e05a',
        'Python': '#3572A5',
        'TypeScript': '#2b7489',
        'Java': '#b07219',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'Ruby': '#701516',
        'PHP': '#4F5D95',
        'Go': '#00ADD8',
        'Rust': '#dea584',
        'default': '#ccc'
    };
    return colors[language] || colors.default;
};

const renderGithubRepos = async (repos) => {
    const container = document.getElementById('github-repos-container');

    if (!repos || repos.length === 0) {
        container.innerHTML = '<p class="github__no-repos">Репозитории не найдены</p>';
        return;
    }

    container.innerHTML = repos.map(repo => `
        <div class="github__repo">
            <a href="${repo.html_url}" class="github__link" target="_blank">${repo.name}</a>
            <span class="github__repo-desc">${repo.description || ''}</span>
            <div class="github__repo-stats">
                <span class="github__repo-lang">
                    ${repo.language
                        ? `
                            <span class="github__lang-color" style="background-color: ${getLanguageColor(repo.language)}"></span>
                            ${repo.language}
                        ` : ''
                    }
                </span>
            </div>
        </div>
    `).join('');
};

export const initGithubRepos = async () => {
    const data = await fetchRepos();
    renderGithubRepos(data);
};