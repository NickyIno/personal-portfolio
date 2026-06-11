const Hero = () => {
  // Typing animation state
  const [typedText, setTypedText] = React.useState('');
  const [wordIndex, setWordIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  // Sharper, technical strings tailored to your focus
  const words = [
    "NickyIno.", 
    "a Software Engineer.", 
    "a Linux Enthusiast.", 
    "a Red Team Penetration Tester.", 
    "a MERN Stack Developer."
  ];
  const typingDelay = 100;
  const erasingDelay = 50;
  const newWordDelay = 2000;

  React.useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, erasingDelay);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, typingDelay);
    }

    // Word finished typing
    if (!isDeleting && charIndex === currentWord.length) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, newWordDelay);
    } 
    // Word finished erasing
    else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex(prev => (prev + 1) % words.length);
      clearTimeout(timer);
      timer = setTimeout(() => {}, 500);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  // Skill progress animation
  const [animateProgress, setAnimateProgress] = React.useState(false);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateProgress(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: 'Linux Kernel & Window Managers', percent: 95 },
    { name: 'Cybersecurity (Red Teaming, Network Penetration, CTF)', percent: 85 },
    { name: 'MERN Stack (Asynchronous JS, MongoDB, Node.js)', percent: 80 },
    { name: 'TALL Stack (Tailwind CSS, Alpine.js, Laravel, Liveware)', percent: 50 },
    { name: '.NET Ecosystem (C#, ASP.NET, Blazor)', percent: 20 }
  ];

  return (
    <div className="hero-wrapper-redesigned rounded-4 mb-4">
      {/* Cyber backgrounds */}
      <div className="hero-grid-bg-enhanced"></div>
      <div className="hero-pulse-ring"></div>
      <div className="hero-pulse-ring-inner"></div>
      <div className="scanner-line-enhanced"></div>

      <div className="container-fluid hero-content">
        <div className="row align-items-center g-4">
          
          {/* Left Info Column */}
          <div className="col-lg-7 text-start animate__animated animate__fadeInLeft">
            <span className="badge rounded-pill bg-dark border border-neon text-light px-3 py-2 mb-3 font-mono text-uppercase" style={{ letterSpacing: '0.05em' }}>
              <span className="terminal-status-indicator"></span>SYS_INITIALIZED: ACTIVE_SHELL
            </span>
            
            <h1 className="hero-title-gradient mb-2">
              Root Access Granted
            </h1>
            
            <p className="fs-4 text-light mb-3 font-mono" style={{ minHeight: '2.2rem' }}>
              I am <span className="neon-dim fw-bold">{typedText}</span>
              <span className="typing-cursor neon">|</span>
            </p>
            
            <p className="text-secondary small mb-4 lh-lg" style={{ maxWidth: '540px' }}>
              Dissecting backend architectures, executing network vulnerability patches, and configuring low-level terminal interfaces. I write logic that ignores institutional spoon-feeding, bypassing legacy boundaries to construct pure, raw runtime code.
            </p>
            
            <div className="d-flex flex-wrap gap-3">
              <a href="#skills" className="btn btn-neon-outline px-4 font-mono text-uppercase d-inline-flex align-items-center justify-content-center">
                <span>&gt; Query Skills</span>
              </a>
              <a href="#form" className="btn btn-outline-light px-4 font-mono text-uppercase d-inline-flex align-items-center justify-content-center" style={{ minHeight: '44px' }}>
                <span>&gt; Ping Node</span>
              </a>
            </div>
          </div>
          
          {/* Right Diagnostic Column */}
          <div className="col-lg-5 animate__animated animate__fadeInRight">
            <div className="hero-glowing-card font-mono text-start">
              <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom border-neon">
                <span className="text-secondary small">&gt;_ INSTANCE_DIAGNOSTIC</span>
                <span className="badge bg-neon-dark text-neon border border-neon py-1 px-2 small animate__animated animate__pulse animate__infinite">SECURE</span>
              </div>
              
              <div className="d-flex flex-column gap-3 small">
                <div>
                  <div className="d-flex justify-content-between mb-1 text-secondary">
                    <span>HOST_HANDLE:</span>
                    <span className="neon">NICKY_INO</span>
                  </div>
                  <div className="d-flex justify-content-between mb-1 text-secondary">
                    <span>SHELL_STATUS:</span>
                    <span className="text-success">UNRESTRICTED</span>
                  </div>
                  <div className="d-flex justify-content-between mb-1 text-secondary">
                    <span>GEO_LOCATION:</span>
                    <span className="neon-dim">KARANGANYAR, ID</span>
                  </div>
                </div>
                
                <div className="border-top border-neon pt-3">
                  <span className="d-block mb-2 text-secondary text-uppercase">
                    &gt; System Efficiency Matrix
                  </span>

                  {skills.map((skill, index) => (
                    <div className="mb-2" key={index}>
                      <div className="d-flex justify-content-between mb-1 text-secondary">
                        <span>{skill.name}</span>
                        <span className="neon">{skill.percent}%</span>
                      </div>
                      
                      <div className="progress bg-dark" style={{ height: '6px', border: '1px solid var(--bs-border-color)' }}>
                        <div 
                          className="progress-bar bg-info skill-bar-progress" 
                          style={{ width: animateProgress ? `${skill.percent}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

window.Hero = Hero;