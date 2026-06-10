const AnimatedSection = ({ children, className = '', animationClass = 'animate__fadeInUp', delay = '0ms', threshold = 0.1 }) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: threshold
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    const element = ref.current;
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${className} ${isIntersecting ? `animate__animated ${animationClass}` : 'section-hidden'}`}
      style={{ animationDelay: isIntersecting ? delay : undefined }}
    >
      {children}
    </div>
  );
};

window.AnimatedSection = AnimatedSection;
