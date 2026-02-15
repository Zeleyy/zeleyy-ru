import { API_BASE } from "../config/api.js";

const fetchProfile = async () => {
    try {
        const response = await fetch(`${API_BASE}/v1/profiles/github`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};

export const initGithubProfile = async () => {
    const githubCard = document.getElementById('github-card');

    try {
        const data = await fetchProfile();
        const githubAvatar = document.getElementById('github-avatar');
        const githubLogin = document.getElementById('github-login');
        const githubProfileLink = document.getElementById('github-profile-link');

        const githubReposCount = document.getElementById('repos-count');
        const githubFollowersCount = document.getElementById('followers-count');
        const githubFollowingCount = document.getElementById('following-count');

        githubAvatar.setAttribute('src', data.avatar_url)
        githubLogin.textContent = data.login;
        githubProfileLink.setAttribute('href', data.html_url);
        githubProfileLink.textContent = data.html_url.split('://')[1];
        githubReposCount.textContent = data.public_repos;
        githubFollowersCount.textContent = data.followers;
        githubFollowingCount.textContent = data.following;
    } catch (error) {
        console.error('Error fetching profile:', error);
    } finally {
        githubCard.classList.remove('github--loading');
    }
};