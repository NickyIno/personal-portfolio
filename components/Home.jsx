const Home = () => {
  const [activeMobileAcc, setActiveMobileAcc] = React.useState(0);

  const Hero = window.Hero;
  const StatsBar = window.StatsBar;
  const AnimatedSection = window.AnimatedSection;
  const AboutMe = window.AboutMe;
  const GitHubStreak = window.GitHubStreak;
  const Prinsip = window.Prinsip;
  const SnakeContribution = window.SnakeContribution;

  const toggleMobileAcc = (index) => {
    setActiveMobileAcc(activeMobileAcc === index ? null : index);
  };

  return (
    <main className="container pb-4">
      <div className="row mb-4">
        <div className="col-12">
          <Hero />
        </div>
      </div>

      <StatsBar />

      <div className="row mt-3">
        <div className="col-lg-8 col-12">
          <div className="d-none d-lg-block">
            <AnimatedSection animationClass="animate__fadeInLeft" delay="100ms">
              <AboutMe />
            </AnimatedSection>

            <AnimatedSection animationClass="animate__fadeInLeft" delay="200ms">
              <GitHubStreak />
            </AnimatedSection>

            <AnimatedSection animationClass="animate__fadeInLeft" delay="300ms">
              <Prinsip view="desktop" />
            </AnimatedSection>
          </div>

          <div className="d-block d-lg-none my-3">
            <AnimatedSection animationClass="animate__zoomIn" delay="200ms">
              <div className="accordion" id="mobileContentAccordion">
                <div className="accordion-item border border-neon">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${activeMobileAcc === 0 ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => toggleMobileAcc(0)}
                      style={{ minHeight: '44px' }}
                    >
                      About Me
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${activeMobileAcc === 0 ? 'show' : ''}`}
                    style={{ display: activeMobileAcc === 0 ? 'block' : 'none' }}
                  >
                    <div className="accordion-body">
                      <p className="small mb-0" style={{ lineHeight: '1.6' }}>
                        Halo! Saya Reffalino Nicky Chandra, seorang anak STEM yang memiliki ketertarikan luas pada dunia teknologi dan sains. Saya senang mengeksplorasi Web Development, Cybersecurity, hingga IoT.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item border border-neon border-top-0">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${activeMobileAcc === 1 ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => toggleMobileAcc(1)}
                      style={{ minHeight: '44px' }}
                    >
                      GitHub Streak
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${activeMobileAcc === 1 ? 'show' : ''}`}
                    style={{ display: activeMobileAcc === 1 ? 'block' : 'none' }}
                  >
                    <div className="accordion-body">
                      <img src="https://streak-stats.demolab.com/?user=NickyIno&theme=tokyonight" alt="GitHub streak" className="w-100 img-fluid" loading="lazy" />
                    </div>
                  </div>
                </div>

                <div className="accordion-item border border-neon border-top-0">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${activeMobileAcc === 2 ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => toggleMobileAcc(2)}
                      style={{ minHeight: '44px' }}
                    >
                      Prinsip dalam Pemrograman
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${activeMobileAcc === 2 ? 'show' : ''}`}
                    style={{ display: activeMobileAcc === 2 ? 'block' : 'none' }}
                  >
                    <div className="accordion-body p-3">
                      <Prinsip view="mobile" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="col-lg-4 col-12" id="about-sidebar">
          <div className="d-none d-lg-block my-3">
            <AnimatedSection animationClass="animate__fadeInRight" delay="200ms">
              <div className="card bg-dark2 border border-neon mb-3">
                <img src="images/Kessoku%20Band!.jpg" className="card-img-top img-fluid" alt="Foto profil" />
                <div className="card-body">
                  <h2 className="card-title h5 neon">Reffalino Nicky Chandra</h2>
                  <p className="card-text small mb-0">Seorang anak STEM, tertarik pada hampir semua bidang STEM walaupun tahu harus memiliki salah satu sebagai fokus utama.</p>
                </div>
              </div>
              <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=NickyIno&layout=compact&theme=tokyonight" alt="GitHub stats" className="w-100 img-fluid rounded shadow-sm border border-neon mb-2" loading="lazy" />
              <p className="text-center small neon-dim mb-0">Most repos are private due to NDA</p>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <AnimatedSection animationClass="animate__fadeInUp">
        <SnakeContribution />
      </AnimatedSection>
    </main>
  );
};

window.Home = Home;
