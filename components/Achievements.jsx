const Achievements = () => {
  // Real recognition for breaking and building things
  const items = [
    {
      title: 'PicoCTF Participant',
      org: 'Carnegie Mellon Cylab',
      year: '2025',
      desc: 'Exploiting vulnerabilities, breaking binaries, and solving cybersecurity challenges under pressure.'
    },
    {
      title: 'PPLG Software Engineer',
      org: 'Vocational High School (PPLG)',
      year: '2025–Present',
      desc: 'Surviving the mandatory curriculum while quietly overriding legacy standards with modern tech stacks.'
    },
    {
      title: 'Off-Grid Learning',
      org: 'Self-Taught / Independent',
      year: 'Continuous',
      desc: 'Ignoring structured spoon-feeding to reverse'
    }
  ];

  return (
    <section className="achievements-section" aria-label="Achievements and certifications">
      <h2 className="h4 neon border-bottom border-neon pb-2 mb-4">Achievements &amp; Certifications</h2>
      <div className="row g-3">
        {items.map((item, i) => (
          <div className="col-md-6" key={i}>
            <article className="achievement-card p-4 rounded-4 bg-dark2 border border-neon h-100 project-card">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <h3 className="h6 neon mb-0">{item.title}</h3>
                <span className="badge bg-neon-dark text-neon border border-neon font-mono small">{item.year}</span>
              </div>
              <p className="small neon-dim mb-2 font-mono">{item.org}</p>
              <p className="small mb-0 text-secondary">{item.desc}</p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

window.Achievements = Achievements;
