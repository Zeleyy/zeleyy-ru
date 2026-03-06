export const getLanguageColor = (language: string): string => {
    const colors: Record<string, string> = {
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