const Blog = () => {
  const AnimatedSection = window.AnimatedSection;

  // PLACEHOLDER: replace with real blog posts when available
  const posts = [
    {
      slug: 'getting-started-with-ctf',
      title: 'Getting Started with CTF as a Student',
      date: '15 Mar 2025',
      readTime: '5 min',
      excerpt: 'Catatan pertama saya tentang memulai perjalanan Capture The Flag — tools, mindset, dan resource yang membantu.',
      tags: ['Cybersecurity', 'CTF', 'Learning']
    },
    {
      slug: 'why-i-chose-react',
      title: 'Why I Chose React for My Portfolio',
      date: '2 Feb 2025',
      readTime: '4 min',
      excerpt: 'Alasan saya membangun ulang portofolio dengan React dan Babel Standalone tanpa build step.',
      tags: ['React', 'Web Dev', 'Portfolio']
    },
    {
      slug: 'curriculum-bound-principle',
      title: 'Curriculum-Bound Principle in Practice',
      date: '10 Jan 2025',
      readTime: '6 min',
      excerpt: 'Refleksi tentang Curriculum-Bound Principle dan kapan boleh melangkah lebih jauh dari materi sekolah.',
      tags: ['STEM', 'Philosophy', 'Learning']
    },
    {
      slug: 'linux-cli-essentials',
      title: 'Linux CLI Essentials for Beginners',
      date: '20 Dec 2024',
      readTime: '7 min',
      excerpt: 'Perintah terminal yang paling sering saya gunakan saat belajar cybersecurity dan development.',
      tags: ['Linux', 'CLI', 'Tutorial']
    }
  ];

  return (
    <main className="container pb-4">
      <header className="mb-4 animate__animated animate__fadeInLeft">
        <h1 className="h2 neon border-bottom border-neon pb-2">Blog &amp; Writing</h1>
        <p className="small neon-dim mb-0">Catatan belajar, refleksi project, dan tutorial singkat. {/* PLACEHOLDER posts */}</p>
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
                <p className="small text-secondary flex-grow-1 mb-3">{post.excerpt}</p>
                <div className="d-flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag, ti) => (
                    <span className="badge rounded-pill border border-neon text-light px-2 py-1 small" key={ti}>{tag}</span>
                  ))}
                </div>
                <button
                  type="button"
                  className="btn btn-neon-outline btn-sm align-self-start font-mono"
                  onClick={() => alert('PLACEHOLDER: Blog post "' + post.title + '" — full article coming soon.')}
                >
                  &gt; Read More
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
