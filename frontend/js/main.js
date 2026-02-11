import { initTheme } from './theme.js';
import { initGithubProfile } from "./github/github-profile.js";
import { initGithubRepos } from "./github/github-repos.js";

document.addEventListener('DOMContentLoaded', async () => {
    initTheme();

    try {
        await initGithubProfile();
        await initGithubRepos();
    } catch (error) {
        console.error('Ошибка инициализации:', error);
    }
});