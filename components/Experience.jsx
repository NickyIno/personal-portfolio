const Experience = () => {
  const AnimatedSection = window.AnimatedSection;

  // Chronological log of execution and system exploration
  const timeline = [
    {
      period: '2025 – Present',
      title: 'Systems & Software Engineering',
      org: 'Vocational High School (PPLG)',
      type: 'root_env',
      points: [
        'Developing backends and optimizing architectures while actively engineering around legacy institutional stacks.',
        'Deep-diving into network exploration, binary analysis, and security operations using custom terminal environments.',
        'Building dynamic, production-ready system applications including standalone web platforms and data-driven dashboards.'
      ]
    },
    {
      period: '2025 – Present',
      title: 'Independent Stack Architecture & Red Teaming',
      org: 'Off-Grid Development',
      type: 'sub_shell',
      points: [
        'Self-studying the MERN stack ecosystem, asynchronous execution, and modern serverless application logic.',
        'Competing in PicoCTF challenges; executing penetration testing scripts, and analyzing algorithmic vulnerabilities.',
        'Standardizing Git configurations and maintaining continuous integration across open-source configurations.'
      ]
    },
    {
      period: '2023',
      title: 'First Compilation & Core Logic Execution',
      org: 'Local Environment Setup',
      type: 'init_process',
      points: [
        'Initialized programming logic utilizing Python to automate scripts and handle early data manipulation.',
        'Deployed the initial iteration of a clean, terminal-inspired web portfolio layout.',
        'Mastered fundamental data structures, low-level flow control, and core algorithmic parameters.'
      ]
    }
  ];

  return (
    <main className="container pb-4">
      <header className="mb-4 animate__animated animate__fadeInLeft">
        <h1 className="h2 neon border-bottom border-neon pb-2">Runtime Log &amp; Timeline</h1>
        <p className="small neon-dim mb-0">Chronological history of system tracking, independent builds, and educational execution milestones.</p>
      </header>

      <div className="timeline">
        {timeline.map((item, i) => (
          <AnimatedSection animationClass="animate__fadeInLeft" delay={`${i * 120}ms`} key={i}>
            <article className="timeline-item project-card">
              <div className="timeline-marker" aria-hidden="true"></div>
              <div className="timeline-content p-4 rounded-4 bg-dark2 border border-neon">
                <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-2">
                  <span className="badge bg-neon-dark text-neon border border-neon font-mono small text-uppercase">{item.type}</span>
                  <span className="small neon-dim font-mono">{item.period}</span>
                </div>
                <h2 className="h5 neon mb-1">{item.title}</h2>
                <p className="small neon-dim mb-3 font-mono">{item.org}</p>
                <ul className="small mb-0 ps-3 text-secondary">
                  {item.points.map((point, pi) => (
                    <li key={pi} className="mb-1">{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </main>
  );
};

window.Experience = Experience;