const Blog = () => {
  const AnimatedSection = window.AnimatedSection;

  // Real, unfiltered logs from inside the network
  const posts = [
    {
      slug: 'getting-started-with-ctf',
      title: 'Infiltrating the Grid: A Realist\'s Approach to CTFs',
      date: '15 Mar 2025',
      readTime: '5 min',
      excerpt: 'My raw logs on entering the Capture The Flag scene—stripping away the corporate fluff to focus on the actual tools, adversarial mindset, and infrastructure.',
      tags: ['Cybersecurity', 'Infosec', 'RedTeaming']
    },
    {
      slug: 'why-i-chose-react',
      title: 'Zero Build Steps: Running React Raw via Babel Standalone',
      date: '02 Feb 2025',
      readTime: '4 min',
      excerpt: 'Why I threw out heavy node_modules and Webpack bloat. Rebuilding my space using pure, uncompiled runtime logic because a portfolio shouldn’t feel like an enterprise trap.',
      tags: ['React.js', 'Frontend', 'NoBloat']
    },
    {
      slug: 'curriculum-bound-principle',
      title: 'The Curriculum Rebellion: Breaking Out of the Sandbox',
      date: '10 Jan 2025',
      readTime: '6 min',
      excerpt: 'An honest critique of institutional guardrails. Why limiting your engineering stack to whatever a legacy syllabus dictates is a slow death for real intellect.',
      tags: ['Philosophy', 'Rant', 'Education']
    },
    {
      slug: 'linux-cli-essentials',
      title: 'Terminal Obsession: Core Linux Utilities I Actually Use',
      date: '20 Dec 2024',
      readTime: '7 min',
      excerpt: 'No graphical interfaces, no training wheels. These are the command-line arguments and low-level binaries holding my daily workflow together.',
      tags: ['Linux', 'Arch', 'CLI']
    }
  ];

  return (
    <main className="container pb-4">
      <header className="mb-4 animate__animated animate__fadeInLeft">
        <h1 className="h2 neon border-bottom border-neon pb-2">Intercepted Logs &amp; Rants</h1>
        <p className="small neon-dim mb-0">Documenting system vulnerabilities, architectural thoughts, and deep-dives outside the standard curriculum.</p>
      </header>

      <div className="row g-4">
        {posts.map((post, i) => (
          <div className="col-md-6" key={post.slug}>
            <AnimatedSection animationClass="animate__fadeInUp" delay={`${i * 100}ms`}>
              <article className="blog-card p-4 rounded-4 bg-dark2 border border-neon h-100 project-card d-flex flex-column">
                <div className="d-flex justify-content-between small neon-dim font-mono mb-2">
                  <span>{post.date}</span>
                  <span>{post.readTime} read</span>
                </div>
                <h2 className="h5 neon mb-2">{post.title}</h2>
                <p className="small mb-3 text-secondary flex-grow-1">{post.excerpt}</p>
                <div className="d-flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag, ti) => (
                    <span className="badge rounded-pill border border-neon text-light px-2 py-1 small" key={ti}>{tag}</span>
                  ))}
                </div>
                <button
                  type="button"
                  className="btn btn-neon-outline btn-sm align-self-start font-mono"
                  onClick={() => alert('Access Denied: Full entry "' + post.title + '" is currently encrypted or under staging.')}
                >
                  &gt; Decrypt Log
                </button>
              </article>
            </AnimatedSection>
          </div>
        ))}
      </div>
    </main>
  );
};

window.Blog = Blog;