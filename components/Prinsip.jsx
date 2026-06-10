const Prinsip = ({ view = 'desktop' }) => {
  const [activeTab, setActiveTab] = React.useState('cbp');

  const prinsipData = [
    {
      id: 'cbp',
      short_title: 'Curriculum-Bound',
      title: 'Curriculum-Bound Principle',
      text: 'Menjaga "kemurnian" hasil <b>Codingan Sekolah</b> dengan hanya menggunakan apa yang diajarkan. Kalau sekolah tidak mengajarkan, ya tidak akan dipakai di project sekolah.',
      short_text: 'Menjaga "kemurnian" hasil Codingan Sekolah dengan hanya menggunakan apa yang diajarkan.'
    },
    {
      id: 'drtw',
      short_title: "Don't Reinvent the Wheel",
      title: "Don't Reinvent the Wheel",
      text: 'Menolak kebiasaan buang-buang waktu dengan menulis ulang logika yang sudah disempurnakan oleh ribuan engineer. Memilih reuse library — solusi yang stabil, aman, dan teruji.',
      short_text: 'Memilih reuse library daripada menulis ulang logika dari nol.'
    },
    {
      id: 'cia',
      short_title: 'CIA',
      title: 'Confidentiality, Integrity, and Availability',
      text: 'Prinsip CIA yang sering dipakai di cybersecurity, tapi juga berlaku di programming secara umum. Jaga integritas kode dan data, serta pastikan sistem tetap tersedia.',
      short_text: 'Jaga kerahasiaan, integritas, dan ketersediaan sistem.'
    }
  ];

  if (view === 'desktop') {
    return (
      <div className="p-3 rounded shadow-sm bg-dark2 border border-1 border-neon">
        <h2 className="h4 border-bottom border-neon pb-2 mb-3 neon">Prinsip dalam Pemrograman</h2>
        {prinsipData.map((p, i) => (
          <div className="d-flex pt-3" key={p.id}>
            <div className={`pb-3 mb-0 small lh-sm ${i < prinsipData.length - 1 ? 'border-bottom border-neon' : ''} w-100`}>
              <strong className="d-block mb-1 neon-dim">{p.title}</strong>
              <span dangerouslySetInnerHTML={{ __html: p.text }}></span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Mobile View
  const activePrinsip = prinsipData.find(p => p.id === activeTab);

  return (
    <div>
      <ul className="nav nav-pills nav-pills-cyber flex-column mb-3" role="tablist">
        {prinsipData.map((p) => (
          <li className="nav-item" key={p.id}>
            <button 
              className={`nav-link ${activeTab === p.id ? 'active' : ''} w-100 text-start mb-1`}
              onClick={() => setActiveTab(p.id)}
              style={{ minHeight: '44px' }}
            >
              {p.short_title}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content border-top border-neon pt-3">
        <div className="tab-pane active fade show small lh-sm">
          {activePrinsip ? activePrinsip.short_text : ''}
        </div>
      </div>
    </div>
  );
};

window.Prinsip = Prinsip;
