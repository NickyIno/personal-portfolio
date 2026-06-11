const Prinsip = ({ view = 'desktop' }) => {
  const [activeTab, setActiveTab] = React.useState('cbp');

  const prinsipData = [
    {
      id: 'oob',
      short_title: 'Out-of-Bounds',
      title: 'The Out-of-Bounds Principle',
      text: 'Rejecting the compliance metrics of dead, legacy curricula. While institutions demand adherence to outdated tech debt, I engineer around their limitations to study modern engineering paradigms, serverless architectures, and real-world system optimization.',
      short_text: 'Bypassing dead legacy institutional curricula to build modern tech debt-free systems.'
    },
    {
      id: 'drtw',
      short_title: "DRYW Abstraction",
      title: "Don't Reinvent the Wheel (DRYW)",
      text: 'Refusing to waste execution cycles rewriting logic already perfected by thousands of senior architects. Prioritizing stable, secure, and production-tested library abstractions over manual, bug-prone system rebuilding.',
      short_text: 'Leveraging established library ecosystems over writing redundant logic from scratch.'
    },
    {
      id: 'cia',
      short_title: 'CIA Triad',
      title: 'Confidentiality, Integrity, and Availability',
      text: 'Enforcing the fundamental pillars of defensive security operations at the root level of software engineering. Every backend service must explicitly maintain strict asset confidentiality, data mutation verification, and resilient uptime parameters.',
      short_text: 'Implementing foundational security postures across system design and runtime memory.'
    }
  ];

  if (view === 'desktop') {
    return (
      <div className="p-3 rounded shadow-sm bg-dark2 border border-1 border-neon">
        <h2 className="h4 border-bottom border-neon pb-2 mb-3 neon">Core System Principles</h2>
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
              &gt;_ {p.short_title}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content border-top border-neon pt-3">
        <div className="tab-pane active fade show small lh-sm text-secondary">
          {activePrinsip ? activePrinsip.short_text : ''}
        </div>
      </div>
    </div>
  );
};

window.Prinsip = Prinsip;