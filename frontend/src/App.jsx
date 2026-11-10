import { useId, useState } from 'react'
import './App.css'

const instagramUrl = 'https://www.instagram.com/cup2eat/'

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? 'arrow-icon arrow-icon--diagonal' : 'arrow-icon'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle className="instagram-icon__dot" cx="17.5" cy="6.5" r="1" />
    </svg>
  )
}

function CupIllustration({ className = '' }) {
  const illustrationId = useId().replace(/:/g, '')
  const bakeId = `cup-bake-${illustrationId}`
  const shadowId = `cup-shadow-${illustrationId}`
  const drinkId = `drink-${illustrationId}`
  const specklesId = `bake-speckles-${illustrationId}`

  return (
    <svg
      className={`cup-illustration ${className}`}
      viewBox="0 0 300 340"
      role="img"
      aria-label="Illustration of a warm golden edible cup filled with a drink"
    >
      <defs>
        <linearGradient id={bakeId} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#f4c77e" />
          <stop offset=".46" stopColor="#d99343" />
          <stop offset="1" stopColor="#b96b35" />
        </linearGradient>
        <linearGradient id={shadowId} x1="0" x2="1">
          <stop stopColor="#9b552d" />
          <stop offset=".48" stopColor="#e9ac5e" />
          <stop offset="1" stopColor="#a85d32" />
        </linearGradient>
        <linearGradient id={drinkId} x1="0" x2="0" y1="0" y2="1">
          <stop stopColor="#70402f" />
          <stop offset="1" stopColor="#3a241e" />
        </linearGradient>
        <pattern id={specklesId} width="34" height="32" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="10" r="1.7" fill="#9d5a31" opacity=".34" />
          <circle cx="25" cy="24" r="1.2" fill="#fff1cd" opacity=".48" />
          <circle cx="30" cy="5" r=".9" fill="#8d4e2d" opacity=".28" />
        </pattern>
      </defs>
      <ellipse cx="151" cy="311" rx="103" ry="15" fill="#654331" opacity=".13" />
      <path d="M72 105c3 94 13 158 24 185 29 18 80 18 109 0 13-38 20-112 23-185H72Z" fill={`url(#${bakeId})`} />
      <path d="M72 105c3 94 13 158 24 185 29 18 80 18 109 0 13-38 20-112 23-185H72Z" fill={`url(#${specklesId})`} />
      <path d="M90 135c3 77 10 119 17 141m86-141c-3 77-10 119-17 141" fill="none" stroke="#fff1cb" strokeWidth="4" strokeLinecap="round" opacity=".28" />
      <path d="M80 105c3 84 11 141 21 180 13 8 29 12 48 13" fill="none" stroke="#a95e32" strokeWidth="5" opacity=".34" />
      <ellipse cx="150" cy="105" rx="79" ry="24" fill="#f3c87e" />
      <ellipse cx="150" cy="103" rx="65" ry="17" fill="#633a29" />
      <ellipse cx="150" cy="101" rx="57" ry="13" fill={`url(#${drinkId})`} />
      <path d="M111 99c10-9 24-10 37-3-7 9-21 12-37 3Z" fill="#f3e4c4" />
      <path d="M127 98c8-7 18-8 26-2-5 7-14 9-26 2Z" fill="#f3e4c4" />
      <path d="M184 97c6-4 12-4 17 0" fill="none" stroke="#f3e4c4" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="150" cy="105" rx="79" ry="24" fill="none" stroke="#ffe0a2" strokeWidth="4" />
      <path d="M106 289c24 10 65 10 90 0" fill="none" stroke={`url(#${shadowId})`} strokeWidth="6" strokeLinecap="round" />
      <circle cx="112" cy="174" r="3" fill="#ffe1a3" opacity=".55" />
      <circle cx="181" cy="217" r="2.5" fill="#ffe1a3" opacity=".55" />
      <circle cx="137" cy="250" r="2" fill="#89492c" opacity=".42" />
    </svg>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Cup2Eat home" onClick={closeMenu}>
        <span>cup</span><span className="wordmark__two">2</span><span>eat</span><span className="wordmark__period">.</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span />
      </button>
      <nav className={menuOpen ? 'main-nav main-nav--open' : 'main-nav'} aria-label="Main navigation">
        <a href="#how-it-works" onClick={closeMenu}>How it works</a>
        <a href="#flavours" onClick={closeMenu}>Flavours</a>
        <a href="#about" onClick={closeMenu}>Our story</a>
        <a href="#business" onClick={closeMenu}>For business</a>
        <a className="nav-instagram" href={instagramUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
          <InstagramIcon /><span>Instagram</span>
        </a>
      </nav>
      <a className="header-cta" href="#business">Let’s talk <ArrowIcon /></a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" /> Meet the cup you can eat</p>
        <h1>Don’t just<br />drink it.<br /><em>Eat it!</em></h1>
        <p className="hero-description">
          Meet the cup that makes every sip more exciting. Enjoy your favourite drink, then enjoy the cup itself!
        </p>
        <div className="hero-actions">
          <a className="button button--dark" href="#flavours">Explore our flavours <ArrowIcon /></a>
          <a className="text-link" href="#how-it-works">Discover Cup2Eat <ArrowIcon diagonal /></a>
        </div>
        <div className="hero-note">
          <span className="hero-note__line" />
          <span>A whole new kind of after-drink</span>
        </div>
      </div>
      <div className="hero-art">
        <div className="hero-orbit hero-orbit--one" />
        <div className="hero-orbit hero-orbit--two" />
        <span className="hero-spark hero-spark--one">✳</span>
        <span className="hero-spark hero-spark--two">✦</span>
        <div className="hero-art__halo">
          <CupIllustration />
        </div>
        <div className="hero-sticker"><span>THE CUP</span><strong>is a<br />treat too</strong><span>· CUP2EAT ·</span></div>
        <span className="hero-art-caption">Illustration · Product details to be confirmed</span>
      </div>
    </section>
  )
}

const steps = [
  { number: '01', title: 'Pick your flavour', description: 'Choose your favourite edible cup from the Cup2Eat range.', symbol: '✳', className: 'step-card--peach' },
  { number: '02', title: 'Sip your drink', description: 'Enjoy your beverage in a cup that brings a little extra to every sip.', symbol: '⌁', className: 'step-card--green' },
  { number: '03', title: 'Eat your cup', description: 'Finished your drink? The cup is part of the treat.', symbol: '♡', className: 'step-card--yellow' },
]

function HowItWorks() {
  return (
    <section className="how-section page-section" id="how-it-works" aria-labelledby="how-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Three steps to a better sip</p>
          <h2 id="how-heading">Sip. Smile.<br /><em>Snack on the cup.</em></h2>
        </div>
        <p className="section-intro">It’s a drink break with a delicious little plot twist.</p>
      </div>
      <div className="steps-grid">
        {steps.map((step) => (
          <article className={`step-card ${step.className}`} key={step.number}>
            <div className="step-card__top"><span>{step.number}</span><span className="step-card__symbol" aria-hidden="true">{step.symbol}</span></div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Flavours({ onEnquire }) {
  return (
    <section className="flavours-section page-section" id="flavours" aria-labelledby="flavours-heading">
      <div className="flavours-top">
        <div>
          <p className="eyebrow">The flavour line-up</p>
          <h2 id="flavours-heading">A cup with<br /><em>character.</em></h2>
        </div>
        <p className="section-intro">
          Cup2Eat makes edible cups in multiple delicious flavours. The names and details are awaiting confirmation.
        </p>
      </div>
      <div className="flavour-showcase">
        <div className="flavour-cup">
          <div className="flavour-cup__glow" />
          <CupIllustration className="cup-illustration--small" />
          <span className="flavour-cup__caption">Concept illustration</span>
        </div>
        <div className="flavour-info">
          <span className="flavour-label"><span /> THE CUP2EAT RANGE</span>
          <h3>Which one<br /><em>will you pick?</em></h3>
          <p>
            Explore the range with Cup2Eat. Flavour names, ingredients, sizes, pricing and product photography
            will be added once confirmed by the brand.
          </p>
          <button className="button button--dark" type="button" onClick={onEnquire}>
            Enquire about flavours <ArrowIcon />
          </button>
          <span className="flavour-disclaimer">No flavour or product specifications are assumed in this preview.</span>
        </div>
        <div className="flavour-index"><span>01</span> / RANGE</div>
      </div>
    </section>
  )
}

function WhyCup2Eat() {
  const benefits = [
    ['A new kind of cup', 'A drink vessel with an edible ending.'],
    ['Flavour is part of it', 'Multiple delicious flavours are part of the idea.'],
    ['Made to be remembered', 'Give guests something unexpected to talk about.'],
    ['A different alternative', 'Explore an edible alternative to conventional disposable cups.'],
  ]

  return (
    <section className="why-section page-section" aria-labelledby="why-heading">
      <div className="why-visual">
        <span className="why-stamp">SIP<br />THEN<br /><em>SNACK</em></span>
        <CupIllustration className="why-cup" />
        <span className="why-note">A drink break<br />with a twist ↗</span>
      </div>
      <div className="why-copy">
        <p className="eyebrow">More than a cup</p>
        <h2 id="why-heading">A little<br /><em>out of the ordinary.</em></h2>
        <p className="why-intro">Cup2Eat brings together a fun food experience and an alternative to conventional disposable cups.</p>
        <div className="benefit-list">
          {benefits.map(([title, detail], index) => (
            <article className="benefit-row" key={title}>
              <span className="benefit-number">0{index + 1}</span>
              <div><h3>{title}</h3><p>{detail}</p></div>
              <span className="benefit-plus" aria-hidden="true">+</span>
            </article>
          ))}
        </div>
        <p className="claims-note">Product compatibility and environmental impact depend on verified product details and use.</p>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about-section page-section" id="about" aria-labelledby="about-heading">
      <div className="about-copy">
        <p className="eyebrow">A fresh take on the last sip</p>
        <h2 id="about-heading">The cup is<br /><em>part of the fun.</em></h2>
        <p>
          Cup2Eat introduces edible cups in multiple flavours. Enjoy a favourite beverage, then eat the cup
          itself—a playful alternative to the usual disposable cup experience.
        </p>
        <p>
          Curious about the range or bringing the idea to your business? We’d love to hear from you.
          Product claims and technical details will be shared when confirmed by Cup2Eat.
        </p>
        <a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer">
          Follow the Cup2Eat story <ArrowIcon diagonal />
        </a>
      </div>
      <div className="about-art">
        <span className="about-art__sun" aria-hidden="true">✳</span>
        <CupIllustration />
        <span className="about-art__caption">A more memorable way to enjoy a drink</span>
      </div>
    </section>
  )
}

function BusinessEnquiries({ onSubmitted }) {
  function handleSubmit(event) {
    event.preventDefault()
    onSubmitted()
  }

  return (
    <section className="business-section page-section" id="business" aria-labelledby="business-heading">
      <div className="business-intro">
        <p className="eyebrow eyebrow--light">For cafés, hotels & more</p>
        <h2 id="business-heading">Give them<br />a reason to<br /><em>stay for dessert.</em></h2>
        <p>
          Explore the edible-cup experience for your café, restaurant, hotel, event or food business.
          Tell us a little about what you have in mind.
        </p>
        <div className="business-audience">
          <span>Cafés</span><span>Restaurants</span><span>Hotels</span><span>Events</span><span>Distributors</span>
        </div>
        <a className="business-instagram" href={instagramUrl} target="_blank" rel="noreferrer">
          <InstagramIcon /> Or connect on Instagram <ArrowIcon diagonal />
        </a>
      </div>
      <form className="business-form" onSubmit={handleSubmit}>
        <p className="eyebrow">Start a conversation</p>
        <h3>Tell us about your business.</h3>
        <p className="form-disclaimer">Demo form only—this preview does not send or store enquiries.</p>
        <div className="form-grid">
          <label>
            Your name <span>*</span>
            <input name="name" autoComplete="name" required />
          </label>
          <label>
            Business name <span>*</span>
            <input name="business" autoComplete="organization" required />
          </label>
          <label>
            Contact number <span>*</span>
            <input name="phone" type="tel" autoComplete="tel" required />
          </label>
          <label>
            Email <span>*</span>
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Business type <span>*</span>
            <select name="businessType" defaultValue="" required>
              <option value="" disabled>Select a business type</option>
              <option>Café / coffee shop</option>
              <option>Restaurant / hotel</option>
              <option>Ice cream parlour</option>
              <option>Event / corporate</option>
              <option>Distributor</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            Estimated quantity
            <input name="quantity" inputMode="numeric" placeholder="If known" />
          </label>
          <label className="form-message">
            Tell us a little more
            <textarea name="message" rows="3" placeholder="What are you looking for?" />
          </label>
        </div>
        <button className="button button--dark" type="submit">Send an enquiry <ArrowIcon /></button>
      </form>
    </section>
  )
}

function InstagramSection() {
  return (
    <section className="instagram-section" aria-labelledby="instagram-heading">
      <div className="instagram-sun" aria-hidden="true">✳</div>
      <p className="eyebrow">Follow the good stuff</p>
      <h2 id="instagram-heading">Find us <em>on the 'gram.</em></h2>
      <p>See what’s new from Cup2Eat and join the conversation.</p>
      <a className="button button--light" href={instagramUrl} target="_blank" rel="noreferrer">
        <InstagramIcon /> @cup2eat <ArrowIcon diagonal />
      </a>
      <span className="instagram-footnote">Instagram content isn’t embedded in this demo.</span>
    </section>
  )
}

const faqs = [
  { question: 'Which flavours are available?', answer: 'Cup2Eat offers edible cups in multiple flavours. The confirmed flavour names and availability are not provided in this preview.' },
  { question: 'Which drinks can I serve in the cup?', answer: 'Beverage compatibility and temperature guidance need to be confirmed by Cup2Eat.' },
  { question: 'How long does the cup hold a drink?', answer: 'The hold time and other technical specifications have not been verified for this preview. Please ask Cup2Eat directly.' },
  { question: 'What are the ingredients and allergens?', answer: 'Ingredient, allergen and nutritional information should be confirmed with Cup2Eat before use or purchase.' },
  { question: 'How should I store the cups?', answer: 'Storage conditions and shelf life have not been provided. Contact Cup2Eat for current product guidance.' },
]

function FAQ() {
  return (
    <section className="faq-section page-section" aria-labelledby="faq-heading">
      <div className="faq-title">
        <p className="eyebrow">A few things you might be wondering</p>
        <h2 id="faq-heading">Good questions.<br /><em>Honest answers.</em></h2>
      </div>
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}<span aria-hidden="true">+</span></summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="wordmark wordmark--footer" href="#home" aria-label="Cup2Eat home">
        <span>cup</span><span className="wordmark__two">2</span><span>eat</span><span className="wordmark__period">.</span>
      </a>
      <p>Don’t just drink it. Eat it!</p>
      <div className="footer-links">
        <a href="#how-it-works">How it works</a>
        <a href="#flavours">Flavours</a>
        <a href="#business">Business enquiries</a>
        <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram <ArrowIcon diagonal /></a>
      </div>
      <span className="footer-copyright">© {new Date().getFullYear()} Cup2Eat</span>
    </footer>
  )
}

function App() {
  const [notice, setNotice] = useState('')

  function showNotice(message) {
    setNotice(message)
    window.setTimeout(() => setNotice(''), 5500)
  }

  function enquireAboutFlavours() {
    document.getElementById('business')?.scrollIntoView({ behavior: 'smooth' })
    showNotice('The flavour enquiry form is a demo and does not send messages.')
  }

  return (
    <>
      <div className="announcement">
        <span>The cup is part of the treat.</span>
        <a href="#how-it-works">See how it works <ArrowIcon /></a>
      </div>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Flavours onEnquire={enquireAboutFlavours} />
        <WhyCup2Eat />
        <About />
        <BusinessEnquiries onSubmitted={() => showNotice('Demo only—your enquiry has not been sent or stored.')} />
        <FAQ />
        <InstagramSection />
      </main>
      <Footer />
      {notice && (
        <div className="notice" role="status">
          <span>{notice}</span>
          <button type="button" aria-label="Dismiss notification" onClick={() => setNotice('')}>×</button>
        </div>
      )}
    </>
  )
}

export default App
