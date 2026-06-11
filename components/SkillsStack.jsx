const SkillsStack = () => {
  const AnimatedSection = window.AnimatedSection;
  const Achievements = window.Achievements;

  // Real data arrays aligned with system preferences and runtime efficiency
  const categories = [
    {
      name: '0x01_Core_Backend',
      skills: [
        { name: 'Go (Golang)', level: 65 },
        { name: 'Node.js & Express', level: 85 },
        { name: 'PHP & Laravel', level: 50 },
        { name: 'Redis Caching & Pub/Sub', level: 60 },
        { name: 'MongoDB / NoSQL', level: 75 },
        { name: 'MySQL & Relational Queries', level: 82 }
      ]
    },
    {
      name: '0x02_SecOps_&_Kernel',
      skills: [
        { name: 'Linux Kernel & Env', level: 95 },
        { name: 'Red Teaming & Network Recon', level: 85 },
        { name: 'CTF Exploit & Binary Analysis', level: 80 },
        { name: 'Nmap / Metasploit / Gobuster / Burp Suite', level: 82 }
      ]
    },
    {
      name: '0x03_UI_Layout_&_Scripting',
      skills: [
        { name: 'Asynchronous JavaScript (ES6+)', level: 85 },
        { name: 'React.js Engine', level: 75 },
        { name: 'Tailwind CSS & Utility Frameworks', level: 50 },
        { name: 'Modern PHP Core', level: 80 }
      ]
    },
    {
      name: '0x04_Environment_&_Tools',
      skills: [
        { name: 'Neovim (AstroNvim)', level: 90 },
        { name: 'Git Workflow & CI/CD Logic', level: 88 },
        { name: 'Hyprland & WM Custom Tiling', level: 85 },
        { name: 'Hardware Abstraction / Microcontrollers', level: 45 }
      ]
    }
  ];

  const allTags = categories.flatMap((c) => c.skills.map((s) => s.name));

  return (
    <main className="container pb-4">
      <header className="mb-4 animate__animated animate__fadeInLeft">
        <h1 className="h2 neon border-bottom border-neon pb-2">Skills Matrix &amp; Stack Architecture</h1>
        <p className="small neon-dim mb-0">Hardware control interfaces, backend memory management, and defensive penetration testing frameworks.</p>
      </header>

      <AnimatedSection animationClass="animate__fadeInUp" delay="100ms">
        <div className="skill-tags-cloud mb-4 p-4 rounded-4 bg-dark2 border border-neon">
          <h2 className="h6 neon font-mono text-uppercase mb-3">&gt; Global System Dependencies</h2>
          <div className="d-flex flex-wrap gap-2">
            {allTags.map((tag, i) => (
              <span className="skill-tag badge rounded-pill border border-neon px-3 py-2 font-mono" key={i}>{tag}</span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <div className="row g-4 mb-4">
        {categories.map((cat, ci) => (
          <div className="col-md-6" key={ci}>
            <AnimatedSection animationClass="animate__fadeInUp" delay={`${(ci + 1) * 100}ms`}>
              <div className="p-4 rounded-4 bg-dark2 border border-neon h-100 project-card">
                <h2 className="h5 neon border-bottom border-neon pb-2 mb-3 font-mono">{cat.name}</h2>
                {cat.skills.map((skill, si) => (
                  <div className="mb-3" key={si}>
                    <div className="d-flex justify-content-between mb-1 small">
                      <span className="neon-dim font-mono">{skill.name}</span>
                      <span className="neon font-mono">{skill.level}%</span>
                    </div>
                    <div className="progress bg-dark3" style={{ height: '6px', border: '1px solid var(--bs-border-color)' }}>
                      <div className="progress-bar bg-info skill-bar-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        ))}
      </div>

      <AnimatedSection animationClass="animate__fadeInUp">
        <Achievements />
      </AnimatedSection>
    </main>
  );
};

window.SkillsStack = SkillsStack;