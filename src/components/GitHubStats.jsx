import React, { useState, useEffect } from 'react';

function GitHubStats() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/archieovo/repos?sort=updated&per_page=6')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }
                return response.json();
            })
            .then(data => {
                setRepos(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="github-stats-loading">
                <p>Loading GitHub repositories...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="github-stats-error">
                <p>Unable to load GitHub stats. Please visit <a href="https://github.com/archieovo" target="_blank" rel="noopener noreferrer">my GitHub profile</a> directly.</p>
            </div>
        );
    }

    return (
        <div className="github-stats">
            <h2>Recent GitHub Activity</h2>
            <div className="repos-grid">
                {repos.map(repo => (
                    <a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="repo-card"
                    >
                        <div className="repo-header">
                            <h3>{repo.name}</h3>
                            <span className="repo-visibility">{repo.private ? 'Private' : 'Public'}</span>
                        </div>
                        <p className="repo-description">
                            {repo.description || 'No description available'}
                        </p>
                        <div className="repo-stats">
                            {repo.language && (
                                <span className="repo-language">
                                    <span className="language-dot"></span>
                                    {repo.language}
                                </span>
                            )}
                            <span className="repo-stars">⭐ {repo.stargazers_count}</span>
                            <span className="repo-forks">🔱 {repo.forks_count}</span>
                        </div>
                        <div className="repo-updated">
                            Updated: {new Date(repo.updated_at).toLocaleDateString()}
                        </div>
                    </a>
                ))}
            </div>
            <div className="view-all-repos">
                <a
                    href="https://github.com/archieovo?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-all-button"
                >
                    View All Repositories →
                </a>
            </div>
        </div>
    );
}

export default GitHubStats;
