const NotFound = () => {
  return (
    <main className="container pb-4">
      <div className="not-found-wrapper text-center py-5 animate__animated animate__fadeIn">
        <div className="font-mono neon display-1 fw-bold mb-2" style={{ textShadow: '0 0 30px rgba(0,255,231,0.4)' }}>404</div>
        <h1 className="h3 neon mb-3">Segment Intercepted: Page Not Found</h1>
        <p className="neon-dim small mb-4 mx-auto" style={{ maxWidth: '420px' }}>
          The requested resource does not exist or has been dropped from the system memory. Hash route unaligned with the local application router maps.
        </p>
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          <a href="#home" className="btn btn-neon-outline px-4 font-mono">&gt; Return to Root</a>
          <a href="#form" className="btn btn-outline-light px-4 font-mono">&gt; Ping Node</a>
        </div>
        <p className="small text-secondary mt-5 font-mono">&gt; ERROR_CODE: INT_ROUTE_UNRESOLVED</p>
      </div>
    </main>
  );
};

window.NotFound = NotFound;