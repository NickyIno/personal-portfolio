const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    nama: '',
    email: '',
    topik: '',
    pesan: '',
    setuju: false
  });

  const [errors, setErrors] = React.useState([]);
  const [sent, setSent] = React.useState(false);

  const topics = ['Kolaborasi', 'Pertanyaan', 'Feedback', 'Mobile Dev', 'Lainnya'];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = [];

    if (formData.nama.trim().length < 2) {
      newErrors.push('Nama wajib diisi (minimal 2 karakter).');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.push('Email tidak valid.');
    }

    if (formData.pesan.trim() === '') {
      newErrors.push('Pesan wajib diisi.');
    }

    if (!formData.setuju) {
      newErrors.push('Anda harus menyetujui penggunaan data untuk keperluan demo.');
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      setSent(true);
      // Reset form fields
      setFormData({
        nama: '',
        email: '',
        topik: '',
        pesan: '',
        setuju: false
      });
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSent(false);
      }, 7000);
    } else {
      setSent(false);
    }
  };

  const handleReset = () => {
    setFormData({
      nama: '',
      email: '',
      topik: '',
      pesan: '',
      setuju: false
    });
    setErrors([]);
    setSent(false);
  };

  return (
    <main className="container pb-4">
      <header className="mb-4 animate__animated animate__fadeInLeft">
        <h1 className="h2 neon border-bottom border-neon pb-2">Form Kontak</h1>
        <p className="small neon-dim mb-0">Isi formulir di bawah. Validasi form dihandle langsung menggunakan React state (client-side demo).</p>
      </header>

      <div className="row g-4 justify-content-center">
        <div className="col-lg-7 col-12 animate__animated animate__fadeInLeft" style={{ animationDelay: '200ms' }}>
          {sent && (
            <div className="alert alert-success border border-neon animate__animated animate__fadeIn" role="alert">
              Terima kasih! Pesan Anda telah berhasil dikirim (simulasi).
            </div>
          )}

          {errors.length > 0 && (
            <div className="alert alert-danger border border-danger animate__animated animate__shakeX" role="alert">
              <ul className="mb-0 small">
                {errors.map((err, idx) => (
                  <li key={idx}>{err}</li>
                ))}
              </ul>
            </div>
          )}

          <form onSubmit={handleSubmit} className="p-4 rounded bg-dark2 border border-neon" noValidate>
            <div className="mb-3">
              <label htmlFor="nama" className="form-label neon">Nama</label>
              <input
                type="text"
                className={`form-control ${errors.some(e => e.includes('Nama')) ? 'is-invalid' : ''}`}
                id="nama"
                name="nama"
                required
                value={formData.nama}
                onChange={handleInputChange}
                placeholder="Nama lengkap"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label neon">Email</label>
              <input
                type="email"
                className={`form-control ${errors.some(e => e.includes('Email')) ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="nama@email.com"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="topik" className="form-label neon">Topik <span className="text-secondary">(opsional)</span></label>
              <select 
                className="form-select" 
                id="topik" 
                name="topik"
                value={formData.topik}
                onChange={handleInputChange}
              >
                <option value="">— Pilih topik —</option>
                {topics.map((t, idx) => (
                  <option value={t} key={idx}>{t}</option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="pesan" className="form-label neon">Pesan</label>
              <textarea
                className={`form-control ${errors.some(e => e.includes('Pesan')) ? 'is-invalid' : ''}`}
                id="pesan"
                name="pesan"
                rows="5"
                required
                value={formData.pesan}
                onChange={handleInputChange}
                placeholder="Tulis pesan Anda..."
              ></textarea>
            </div>

            <div className="form-check mb-4">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="setuju" 
                name="setuju" 
                checked={formData.setuju}
                onChange={handleInputChange}
                required 
              />
              <label className="form-check-label small" htmlFor="setuju">
                Saya setuju data ini digunakan untuk keperluan demo/portfolio.
              </label>
            </div>

            <div className="d-flex flex-wrap gap-2">
              <button type="submit" className="btn btn-neon-outline px-4" style={{ minHeight: '44px' }}>
                Kirim
              </button>
              <button type="button" onClick={handleReset} className="btn btn-outline-secondary px-4" style={{ minHeight: '44px' }}>
                Reset
              </button>
            </div>
          </form>
        </div>

        {/* Social Media Column */}
        <div className="col-lg-5 col-12 animate__animated animate__fadeInRight" style={{ animationDelay: '300ms' }}>
          <div className="p-4 rounded bg-dark2 border border-neon font-mono h-100 d-flex flex-column">
            <h2 className="h5 neon border-bottom border-neon pb-2 mb-3">Sosial Media &amp; Koneksi</h2>
            <p className="small text-secondary mb-4">Silakan terhubung melalui platform di bawah ini untuk kolaborasi atau diskusi terkait STEM dan pengembangan web.</p>
            
            <div className="d-flex flex-column gap-3">
              {/* GitHub Link */}
              <a href="https://github.com/NickyIno" target="_blank" rel="noopener noreferrer" 
                 className="p-3 rounded border border-neon-dark bg-dark3 text-decoration-none d-flex align-items-center gap-3 project-card"
                 style={{ color: 'var(--bs-body-color)' }}>
                <div className="rounded bg-neon-dark p-2 text-neon d-flex align-items-center justify-content-center" style={{ width: '44px', height: '44px' }}>
                  <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </div>
                <div className="flex-grow-1">
                  <span className="d-block small text-secondary">GITHUB</span>
                  <span className="neon-dim fw-bold">@NickyIno</span>
                </div>
                <span className="text-neon font-mono">&gt; VISIT</span>
              </a>
              
              {/* Instagram Link */}
              <a href="https://www.instagram.com/nicky_ino/" target="_blank" rel="noopener noreferrer" 
                 className="p-3 rounded border border-neon-dark bg-dark3 text-decoration-none d-flex align-items-center gap-3 project-card"
                 style={{ color: 'var(--bs-body-color)' }}>
                <div className="rounded bg-neon-dark p-2 text-neon d-flex align-items-center justify-content-center" style={{ width: '44px', height: '44px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                  </svg>
                </div>
                <div className="flex-grow-1">
                  <span className="d-block small text-secondary">INSTAGRAM</span>
                  <span className="neon-dim fw-bold">@nicky_ino</span>
                </div>
                <span className="text-neon font-mono">&gt; VISIT</span>
              </a>

              {/* Email Link */}
              <a href="mailto:reffalinonickychandra@gmail.com"
                 className="p-3 rounded border border-neon-dark bg-dark3 text-decoration-none d-flex align-items-center gap-3 project-card"
                 style={{ color: 'var(--bs-body-color)' }}>
                <div className="rounded bg-neon-dark p-2 text-neon d-flex align-items-center justify-content-center" style={{ width: '44px', height: '44px' }}>
                  <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.114l4.758-2.876L1 5.383v5.731z"/>
                  </svg>
                </div>
                <div className="flex-grow-1">
                  <span className="d-block small text-secondary">EMAIL</span>
                  <span className="neon-dim fw-bold">reffalino...</span>
                </div>
                <span className="text-neon font-mono">&gt; MAIL</span>
              </a>

              {/* Status indicator */}
              <div className="p-3 rounded border border-neon-dark bg-dark3 d-flex align-items-center gap-3 opacity-75">
                <div className="rounded bg-neon-dark p-2 text-neon d-flex align-items-center justify-content-center" style={{ width: '44px', height: '44px' }}>
                  <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z"/>
                  </svg>
                </div>
                <div className="flex-grow-1">
                  <span className="d-block small text-secondary">STEM STATUS</span>
                  <span className="neon-dim fw-bold">Active Learner</span>
                </div>
                <span className="badge bg-neon-dark text-neon border border-neon font-mono">ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

window.ContactForm = ContactForm;
