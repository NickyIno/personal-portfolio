const AboutMe = () => {
  return (
    <div className="p-3 rounded shadow-sm mb-3 bg-dark2 border border-1 border-neon">
      <h2 className="h4 border-bottom border-neon pb-2 mb-3 neon">About Me</h2>
      <p className="small mb-0" style={{ lineHeight: '1.6' }}>
        Halo! Saya Reffalino Nicky Chandra, seorang anak STEM yang memiliki ketertarikan luas pada dunia teknologi dan sains.
        Saya senang mengeksplorasi berbagai bidang mulai dari Web Development, Cybersecurity, hingga IoT, meskipun saya menyadari
        pentingnya memiliki satu fokus keahlian. Bagi saya, coding bukan sekadar tentang hasil akhir, melainkan proses memahami logika,
        menyelesaikan masalah, dan terus beradaptasi dengan perkembangan sistem.
      </p>
    </div>
  );
};

window.AboutMe = AboutMe;
