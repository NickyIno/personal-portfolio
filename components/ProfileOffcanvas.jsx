const ProfileOffcanvas = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`offcanvas offcanvas-start bg-dark2 text-bg-dark ${isOpen ? 'show' : ''}`}
        tabIndex="-1"
        id="offcanvasProfile"
        aria-labelledby="offcanvasProfileLabel"
        style={{
          borderRight: "2px solid var(--neon-dark)",
          width: "min(320px, 85vw)",
          visibility: isOpen ? "visible" : "hidden",
          transition: "transform 0.3s ease-in-out, visibility 0.3s ease-in-out"
        }}
      >
        <div className="offcanvas-header border-bottom border-neon">
          <h5 className="offcanvas-title neon" id="offcanvasProfileLabel">Profile &amp; Stats</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={onClose}
            aria-label="Tutup"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="card bg-dark3 border border-neon mb-3">
            <img 
              src="images/Kessoku%20Band!.jpg" 
              className="card-img-top img-fluid" 
              alt="Foto profil" 
              onError={(e) => { e.target.style.display = 'none'; }} 
            />
            <div className="card-body">
              <h5 className="card-title neon">Reffalino Nicky Chandra</h5>
              <p className="card-text small mb-0">
                Seorang anak STEM, tertarik pada hampir semua bidang STEM walaupun tahu harus memiliki salah satu sebagai fokus utama.
              </p>
            </div>
          </div>
          <img
            src="https://github-readme-stats-lyart-iota-28.vercel.app/api/top-langs/?username=NickyIno&layout=compact&theme=tokyonight&v=1"
            alt="GitHub stats"
            className="w-100 img-fluid mb-2 rounded border border-neon"
          />
          <p className="text-center small neon-dim mb-0">
            Most repos are private due to NDA
          </p>
        </div>
      </div>
      {isOpen && (
        <div
          className="offcanvas-backdrop fade show"
          style={{ zIndex: 1040 }}
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

window.ProfileOffcanvas = ProfileOffcanvas;
