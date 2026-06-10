const NotFound = () => {
  return (
    <main className="container pb-4">
      <div className="not-found-wrapper text-center py-5 animate__animated animate__fadeIn">
        <div className="font-mono neon display-1 fw-bold mb-2" style={{ textShadow: '0 0 30px rgba(0,255,231,0.4)' }}>404</div>
        <h1 className="h3 neon mb-3">Page Not Found</h1>
        <p className="neon-dim small mb-4 mx-auto" style={{ maxWidth: '420px' }}>
          Halaman yang Anda cari tidak ada atau telah dipindahkan. Hash route tidak dikenali oleh sistem.
        </p>
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          <a href="#home" className="btn btn-neon-outline px-4 font-mono">&gt; Back to Home</a>
          <a href="#form" className="btn btn-outline-light px-4 font-mono">&gt; Contact Me</a>
        </div>
        <p className="small text-secondary mt-5 font-mono">&gt; ERROR_CODE: ROUTE_NOT_FOUND</p>
      </div>
    </main>
  );
};

window.NotFound = NotFound;
