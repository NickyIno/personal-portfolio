const Navbar = ({ currentPage, onOpenProfile }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const navItems = window.SITE_NAV || [];

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNavClick = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark mb-3 sticky-top${isScrolled ? ' navbar-scrolled' : ''}`}>
      <div className="container-fluid">
        <a className="navbar-brand font-mono fw-bold neon fs-4 ms-lg-4" style={{ color: 'var(--neon)' }} href="#home">
          Nicky <span className="blink">_&lt;</span>
        </a>

        <div className="d-flex align-items-center gap-2 ms-auto d-lg-none">
          <button
            className="btn btn-sm btn-neon-outline d-lg-none"
            type="button"
            aria-label="Buka profil"
            onClick={onOpenProfile}
            id="btnOffcanvasProfile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"/>
            </svg>
          </button>

          <button
            className="navbar-toggler border"
            type="button"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            aria-controls="navbarMobile"
            aria-expanded={isMobileNavOpen}
            aria-label="Buka menu navigasi"
            style={{ borderColor: 'var(--neon)', minHeight: '44px', minWidth: '44px' }}
            id="btnNavbarToggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className={`collapse navbar-collapse justify-content-lg-center ${isMobileNavOpen ? 'show' : ''}`} id="navbarMobile">
          <ul className="navbar-nav site-nav mx-lg-auto flex-wrap justify-content-center">
            {navItems.map((item) => {
              const isActive = currentPage === item.key;
              return (
                <li className="nav-item" key={item.key}>
                  <a
                    className={`nav-link${isActive ? ' active fw-semibold' : ''} px-2 px-xl-3 d-flex align-items-center justify-content-center`}
                    href={item.href}
                    onClick={handleMobileNavClick}
                    style={{ minHeight: '44px' }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="nav-label font-mono">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

window.Navbar = Navbar;
