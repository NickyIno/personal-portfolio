const SnakeContribution = () => {
  return (
    <div className="row my-4">
      <h2 className="h4 neon border-bottom border-neon pb-2 mb-3">Github Contribution</h2>
      <div className="col-12 p-0 rounded shadow-sm border border-neon bg-dark2 overflow-auto" style={{ minHeight: '200px' }}>
        <img 
          src="https://raw.githubusercontent.com/NickyIno/NickyIno/output/github-snake-dark.svg" 
          alt="GitHub contribution snake" 
          className="img-fluid w-100" 
          style={{ minWidth: '320px' }} 
          loading="lazy" 
        />
      </div>
    </div>
  );
};

window.SnakeContribution = SnakeContribution;
