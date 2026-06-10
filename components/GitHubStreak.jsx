const GitHubStreak = () => {
  return (
    <div className="p-3 rounded shadow-lg mb-3 bg-dark2 border border-3 border-neon">
      <h2 className="h4 border-bottom border-neon pb-2 mb-3 neon">
        GitHub Streak{' '}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16" aria-hidden="true" style={{ verticalAlign: 'middle' }}>
          <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
        </svg>
      </h2>
      <img src="https://streak-stats.demolab.com/?user=NickyIno&theme=tokyonight" alt="GitHub streak" className="w-100 img-fluid" loading="lazy" />
    </div>
  );
};

window.GitHubStreak = GitHubStreak;
