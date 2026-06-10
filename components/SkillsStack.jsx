const SkillsStack = () => {
  const AnimatedSection = window.AnimatedSection;
  const Achievements = window.Achievements;

  // PLACEHOLDER: update proficiency levels and categories with real data
  const categories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'HTML / CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 75 },
        { name: 'Bootstrap', level: 88 },
        { name: 'Tailwind CSS', level: 50 }
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'PHP', level: 80 },
        { name: 'Laravel', level: 55 },
        { name: 'Node.js', level: 70 },
        { name: 'MySQL', level: 82 },
        { name: 'CodeIgniter 3', level: 75 }
      ]
    },
    {
      name: 'Cybersecurity',
      skills: [
        { name: 'CTF / PicoCTF', level: 80 },
        { name: 'Linux CLI', level: 95 },
        { name: 'Penetration Testing', level: 65 },
        { name: 'Network Basics', level: 70 }
      ]
    },
    {
      name: 'Tools & Other',
      skills: [
        { name: 'Git / GitHub', level: 88 },
        { name: 'VS Code / Cursor', level: 92 },
        { name: 'Python', level: 78 },
        { name: 'IoT Basics', level: 45 }
      ]
    }
  ];

  const allTags = categories.flatMap((c) => c.skills.map((s) => s.name));

  return (
    <main className="container pb-4">
      <header className="mb-4 animate__animated animate__fadeInLeft">
        <h1 className="h2 neon border-bottom border-neon pb-2">Skills &amp; Tech Stack</h1>
        <p className="small neon-dim mb-0">Teknologi yang saya gunakan dan terus kembangkan — dari web development hingga cybersecurity.</p>
      </header>

      <AnimatedSection animationClass="animate__fadeInUp" delay="100ms">
        <div className="skill-tags-cloud mb-4 p-4 rounded-4 bg-dark2 border border-neon">
          <h2 className="h6 neon font-mono text-uppercase mb-3">&gt; Stack Overview</h2>
          <div className="d-flex flex-wrap gap-2">
            {allTags.map((tag, i) => (
              <span className="skill-tag badge rounded-pill border border-neon px-3 py-2" key={i}>{tag}</span>
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
                      <span className="neon-dim">{skill.name}</span>
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
