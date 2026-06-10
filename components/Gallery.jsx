const Gallery = () => {
  const [activeItem, setActiveItem] = React.useState(null);

  const galleryItems = [
    { src: 'images/CTF.png', title: 'PicoCTF', desc: 'Bermain CTF di PicoCTF' },
    { src: 'images/Add%20a%20heading%20(3).png', title: 'Cybersecurity Tools', desc: 'Koleksi tools untuk belajar keamanan siber.' },
    { src: 'images/3.png', title: 'Favorite IDE', desc: 'Lingkungan coding utama sehari-hari.' },
    { src: 'images/StatsCTF.png', title: 'Stats CTF', desc: 'Statistik permainan CTF.' },
    { src: 'images/LatihanDataScience.png', title: 'Latihan Data Science', desc: 'Day 1 Jadi Data Scientist' },
    { src: 'images/FotoRandom.jpeg', title: 'Foto Random', desc: '' }
  ];

  // Escape key handler to close lightbox
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOpenLightbox = (item) => {
    setActiveItem(item);
  };

  const handleCloseLightbox = () => {
    setActiveItem(null);
  };

  return (
    <main className="container pb-4">
      <header className="mb-4 animate__animated animate__fadeInLeft">
        <h1 className="h2 neon border-bottom border-neon pb-2">Galeri</h1>
        <p className="small neon-dim mb-0">Kumpulan foto dan visual saya</p>
      </header>

      <div className="gallery-grid" id="gallery">
        {galleryItems.map((item, i) => (
          <div 
            className={`gallery-card animate__animated animate__zoomIn`}
            style={{ animationDelay: `${((i % 4) + 1) * 100}ms` }}
            key={i}
            onClick={() => handleOpenLightbox(item)}
          >
            <div className="img-wrap">
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
              />
              <div className="overlay-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-zoom-in text-white" viewBox="0 0 16 16" aria-hidden="true">
                  <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                  <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"/>
                  <path fillRule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V5h1.5a.5.5 0 0 1 0 1H7v1.5a.5.5 0 0 1-1 0V6H4.5a.5.5 0 0 1 0-1H5V3.5a.5.5 0 0 1 .5-.5"/>
                </svg>
              </div>
            </div>
            <div className="card-info">
              <p className="card-title neon-dim">{item.title}</p>
              {item.desc && <p className="card-desc">{item.desc}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <div 
        className={`lightbox ${activeItem ? 'active' : ''}`} 
        role="dialog" 
        aria-modal="true"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleCloseLightbox();
          }
        }}
      >
        <div className="lightbox-inner">
          <img id="lb-img" src={activeItem ? activeItem.src : ''} alt={activeItem ? activeItem.title : ''} />
          <div className="lightbox-footer">
            <div>
              <p className="lightbox-title neon" id="lb-title">{activeItem ? activeItem.title : ''}</p>
              <p className="lightbox-desc" id="lb-desc">{activeItem ? activeItem.desc : ''}</p>
            </div>
            <button className="close-btn" id="lb-close" onClick={handleCloseLightbox} aria-label="Tutup">✕</button>
          </div>
        </div>
      </div>
    </main>
  );
};

window.Gallery = Gallery;
