const App = () => {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [componentsReady, setComponentsReady] = React.useState(false);

  React.useEffect(() => {
    const required = [
      'Navbar', 'ProfileOffcanvas', 'Footer', 'Home', 'Gallery',
      'ContactForm', 'Hero', 'AboutMe', 'GitHubStreak',
      'Prinsip', 'SnakeContribution', 'AnimatedSection',
      'StatsBar', 'SkillsStack', 'Experience', 'Blog', 'UsesSetup',
      'Achievements', 'NotFound', 'BackToTop'
    ];

    const checkComponents = () => {
      const allReady = required.every((name) => typeof window[name] !== 'undefined');
      if (allReady) {
        setComponentsReady(true);
      } else {
        setTimeout(checkComponents, 50);
      }
    };

    checkComponents();
  }, []);

  React.useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = window.VALID_PAGES || [];
      if (hash === '') {
        setCurrentPage('home');
      } else if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('404');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const titles = window.PAGE_TITLES || {};
      const page = hash === '' ? 'home' : (validPages.includes(hash) ? hash : '404');
      document.title = titles[page] || 'My Portfolio - Nicky';
    };

    onHash();
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  if (!componentsReady) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 font-mono">
        <div className="spinner-border text-info mb-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="neon animate__animated animate__pulse animate__infinite">&gt; COMPILING_COMPONENTS...</div>
      </div>
    );
  }

  const Navbar = window.Navbar;
  const ProfileOffcanvas = window.ProfileOffcanvas;
  const Footer = window.Footer;
  const BackToTop = window.BackToTop;
  const Home = window.Home;
  const Gallery = window.Gallery;
  const ContactForm = window.ContactForm;
  const SkillsStack = window.SkillsStack;
  const Experience = window.Experience;
  const Blog = window.Blog;
  const UsesSetup = window.UsesSetup;
  const NotFound = window.NotFound;

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'skills':
        return <SkillsStack />;
      case 'experience':
        return <Experience />;
      case 'galeri':
        return <Gallery />;
      case 'blog':
        return <Blog />;
      case 'uses':
        return <UsesSetup />;
      case 'form':
        return <ContactForm />;
      case '404':
        return <NotFound />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar
        currentPage={currentPage}
        onOpenProfile={() => setIsProfileOpen(true)}
      />
      <ProfileOffcanvas
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
      <div className="flex-grow-1">
        {renderActivePage()}
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
