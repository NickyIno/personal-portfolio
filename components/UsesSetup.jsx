const UsesSetup = () => {
  const AnimatedSection = window.AnimatedSection;

  // PLACEHOLDER: update with your actual gear and software :p
  const categories = [
    {
      title: 'Hardware',
      items: [
        { name: 'Laptop', detail: 'Windows 11 and Linux — primary dev machine' },
        { name: 'Keyboard', detail: 'Keyboard for coding sessions' },
        { name: 'Headphones', detail: 'For focus during CTF and coding' },
        { name: 'Microcontroller Kits', detail: 'For hardware hacking and learning' }

      ]
    },
    {
      title: 'Software',
      items: [
        { name: 'VS Code / Cursor / Antigravity / Astrovim', detail: 'Primary IDE with cyber-dark theme' },
        { name: 'Docker', detail : 'For it works on every machine'},
        { name: 'Laragon', detail: 'Local PHP/MySQL development stack' },
        { name: 'Git & GitHub', detail: 'Version control and portfolio hosting' },
        { name: 'Kali Linux', detail: 'Cybersecurity practice environment' }
      ]
    },
    {
      title: 'Browser & Tools',
      items: [
        { name: 'Firefox', detail: 'DevTools for debugging' },
        { name: 'Postman', detail: 'API testing (when needed)' },
        { name: 'Figma', detail: 'Occasional UI mockups' }
      ]
    },
    {
      title: 'Learning',
      items: [
        { name: 'PicoCTF', detail: 'Cybersecurity challenges' },
        { name: 'MDN Web Docs', detail: 'Web development reference' },
        { name: 'YouTube & Blogs', detail: 'Tutorials and tech news' }
      ]
    }
  ];

  return (
    <main className="container pb-4">
      <header className="mb-4 animate__animated animate__fadeInLeft">
        <h1 className="h2 neon border-bottom border-neon pb-2">Uses / Setup</h1>
        <p className="small neon-dim mb-0">Tools, gear, and software I use daily for learning and building projects.</p>
      </header>

      <div className="row g-4">
        {categories.map((cat, ci) => (
          <div className="col-md-6" key={ci}>
            <AnimatedSection animationClass="animate__fadeInUp" delay={`${ci * 100}ms`}>
              <div className="uses-category p-4 rounded-4 bg-dark2 border border-neon h-100 project-card">
                <h2 className="h5 neon border-bottom border-neon pb-2 mb-3 font-mono">&gt; {cat.title}</h2>
                <ul className="list-unstyled mb-0">
                  {cat.items.map((item, ii) => (
                    <li className="uses-item d-flex gap-3 py-2 border-bottom border-neon-dark" key={ii}>
                      <span className="neon font-mono flex-shrink-0">&gt;</span>
                      <div>
                        <div className="neon-dim fw-semibold small">{item.name}</div>
                        <div className="text-secondary small">{item.detail}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        ))}
      </div>
    </main>
  );
};

window.UsesSetup = UsesSetup;
