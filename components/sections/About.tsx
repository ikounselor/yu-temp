export default function About() {
  return (
    <section id="about" className="bg-light py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid w-[92%] max-w-290 grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* About Content */}
        <div className="animate-fade-up">
          <p className="para2 mb-4 font-bold uppercase tracking-[0.14em] text-primary-dark">
            About YungUnitee
          </p>

          <h2 className="hero_heading leading-tight tracking-tight">
            A World of Opportunities, Connected.
          </h2>

          <p className="para1 mt-6 max-w-[32em] leading-relaxed text-muted">
            YungUnitee is a 360-degree platform that bridges academic
            learning, practical exposure, professional development and
            international opportunities.
          </p>

          <p className="para1 mt-4 max-w-[32em] leading-relaxed text-muted">
            It brings individuals, institutions and global content providers
            together in one connected ecosystem, for learners broadly aged
            16-35 and the schools, universities and organisations that
            support them.
          </p>
        </div>

        {/* Ecosystem Illustration */}
        <div className="mx-auto w-full max-w-115">
          
        <svg
          viewBox="0 0 400 400"
          className="h-auto w-full"
          role="img"
          aria-label="Individuals, institutions and opportunity providers connected through YungUnitee"
        >
          <defs>
            <linearGradient id="yu-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" />
              <stop offset="100%" stopColor="var(--color-teal)" />
            </linearGradient>
        
            <filter id="yu-shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow
                dx="0"
                dy="8"
                stdDeviation="10"
                floodColor="var(--color-teal)"
                floodOpacity="0.2"
              />
            </filter>
          </defs>
        
          {/* Large Dashed Circular Boundary */}
          <circle
            cx="200"
            cy="200"
            r="152"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="2"
            strokeDasharray="5 7"
            opacity="0.8"
          />
        
          {/* Connecting Lines */}
          <g
            fill="none"
            stroke="var(--color-teal)"
            strokeWidth="2"
          >
            <path d="M200 142 L200 104" />
            <path d="M158 241 L115 270" />
            <path d="M242 241 L285 270" />
          </g>
        
          {/* Outer Circles */}
          <g fill="var(--color-light)" stroke="var(--color-primary)" strokeWidth="3">
            <circle cx="200" cy="62" r="42" />
            <circle cx="80" cy="290" r="42" />
            <circle cx="320" cy="290" r="42" />
          </g>
        
          {/* Outer Labels */}
          <g
            fill="var(--color-secondary)"
            fontSize="13"
            fontWeight="700"
            textAnchor="middle"
          >
            <text x="200" y="66">Individuals</text>
            <text x="80" y="294">Institutions</text>
            <text x="320" y="288"> Providers</text>
          </g>
        
          {/* Central YungUnitee Circle */}
          <circle
            cx="200"
            cy="200"
            r="58"
            fill="url(#yu-gradient)"
            filter="url(#yu-shadow)"
          />
        
          {/* YungUnitee Logo */}
          <image
            href="/services/yulogo.png"
            x="155"
            y="175"
            width="90"
            height="50"
            preserveAspectRatio="xMidYMid meet"
          />
        </svg>

        </div>
      </div>
    </section>
  );
}
