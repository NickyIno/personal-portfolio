const Achievements = () => {
  // PLACEHOLDER: replace with real certifications and awards
  const items = [
    {
      title: 'PicoCTF Participant',
      org: 'Carnegie Mellon Cylab',
      year: '2024',
      desc: 'Menyelesaikan berbagai challenge cybersecurity di platform PicoCTF.'
    },
    {
      title: 'STEM School Curriculum',
      org: 'Sekolah Menengah',
      year: '2023–now',
      desc: 'Mengikuti kurikulum STEM dengan fokus pada pemrograman dan teknologi.'
    },
    {
      title: 'GitHub Active Contributor',
      org: 'GitHub',
      year: '2023–now',
      desc: 'Mempertahankan streak commit dan menerbitkan project sekolah secara publik.'
    },
    {
      title: 'Continuous Learning',
      org: 'Self-paced Study',
      year: '2024',
      desc: 'Terus mengembangkan skill web development dan cybersecurity secara mandiri.'
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
