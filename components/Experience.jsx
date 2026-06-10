const Experience = () => {
  const AnimatedSection = window.AnimatedSection;

  // PLACEHOLDER: replace with real education and work history
  const timeline = [
    {
      period: '2024 – Sekarang',
      title: 'STEM Student — Web & Cybersecurity',
      org: 'Sekolah Menengah',
      type: 'education',
      points: [
        'Mempelajari web development (HTML, CSS, JS, PHP, React)',
        'Eksplorasi cybersecurity melalui CTF dan Linux',
        'Membangun project sekolah: CMS, Buku Kas, Portfolio'
      ]
    },
    {
      period: '2024',
      title: 'Self-taught Developer',
      org: 'Personal Learning',
      type: 'learning',
      points: [
        'Mempelajari MERN stack dan Laravel secara mandiri',
        'Berpartisipasi di PicoCTF dan latihan penetration testing',
        'Mengembangkan workflow Git/GitHub untuk version control'
      ]
    },
    {
      period: '2023',
      title: 'First Steps in Programming',
      org: 'School & Online Resources',
      type: 'education',
      points: [
        'Memulai dengan Python dan logika pemrograman dasar',
        'Membuat portofolio web semester 1',
        'Memahami fundamental algoritma dan struktur data'
      ]
    }
  ];

  return (
    <main className="container pb-4">
      <header className="mb-4 animate__animated animate__fadeInLeft">
        <h1 className="h2 neon border-bottom border-neon pb-2">Experience &amp; Timeline</h1>
        <p className="small neon-dim mb-0">Perjalanan belajar dan pengembangan saya di dunia STEM dan teknologi.</p>
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
