import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, BrainCircuit, Check, ChevronDown, Cloud, Code2, Download, Globe2, Mail, Menu, Moon, Phone, Rocket, Send, Sparkles, Sun, X } from 'lucide-react'
import { certifications, faqs, profile, projects, skills, testimonials } from './data'
import './styles.css'

const Github = Code2
const Linkedin = Globe2

const navItems = [['home', 'Home'], ['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'], ['certifications', 'Certifications'], ['experience', 'Experience'], ['contact', 'Contact']]
const process = [['01', 'Understand problem', 'Clarify the user, context, and measurable outcome.'], ['02', 'Data & design', 'Shape the data flow and choose the right architecture.'], ['03', 'Build & train', 'Create a useful first version, then teach it to improve.'], ['04', 'Test & optimize', 'Measure quality, speed, and the details that build trust.'], ['05', 'Deploy', 'Package a solution that is ready for real people.']]
const roadmap = ['MLOps foundations', 'LangChain orchestration', 'Docker workflows', 'Advanced PyTorch', 'AWS ML services']

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [progress, setProgress] = useState(0)
  const [projectFilter, setProjectFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [faqOpen, setFaqOpen] = useState(0)
  const [testimonial, setTestimonial] = useState(0)
  const [formStatus, setFormStatus] = useState('')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max ? (window.scrollY / max) * 100 : 0)
      const current = navItems.map(([id]) => document.getElementById(id)).filter(Boolean).reduce((last, section) => section.getBoundingClientRect().top < 180 ? section.id : last, 'home')
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onPointerMove = (event) => {
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`)
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [])

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }
  const filteredProjects = projectFilter === 'All' ? projects : projects.filter((project) => project.category === projectFilter)

  const submitForm = (event) => {
    event.preventDefault()
    setFormStatus('Thanks. The form is ready to connect to Formspree or EmailJS.')
    event.currentTarget.reset()
  }

  return <>
    <div className="progress" style={{ width: `${progress}%` }} />
    <div className="cursor-glow" aria-hidden="true" />
    <div className="loader"><span>PK</span></div>
    <header className="navbar">
      <a className="brand" href="#home" onClick={() => scrollTo('home')}><strong>PREM KUMAR S</strong></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
        {navItems.map(([id, label]) => <a key={id} className={activeSection === id ? 'active' : ''} href={`#${id}`} onClick={() => scrollTo(id)}>{label}</a>)}
        <a className="nav-resume" href={profile.resume} download="Prem_Kumar_S_Resume.pdf"><Download size={15} /> Resume</a>
      </nav>
      <div className="nav-actions"><button className="icon-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button><button className="menu-btn icon-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
    </header>

    <main>
      <section id="home" className="hero section-pad">
        <div className="hero-grid" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="hero-copy reveal"><p className="eyebrow"><span className="pulse-dot" /> AI/ML ENGINEER IN THE MAKING</p><h1>Building intelligence<br /><em>with intention.</em></h1><p className="hero-lead">Hi, I'm <strong>Prem Kumar S</strong>. Building intelligent, scalable AI solutions for web and mobile applications: from RAG systems to medical diagnostics.</p><div className="hero-actions"><a className="btn btn-primary" href={profile.resume} download="Prem_Kumar_S_Resume.pdf"><Download size={17} /> Download resume</a><button className="btn btn-ghost" onClick={() => scrollTo('projects')}>View projects <ArrowUpRight size={17} /></button><button className="text-link" onClick={() => scrollTo('contact')}>Contact me <ArrowUpRight size={16} /></button></div><div className="hero-socials"><span>Find me at</span><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a></div></div>
        <div className="hero-visual reveal"><div className="app-preview"><div className="app-topbar"><span className="app-status" /><span>prem.ai</span><span>•••</span></div><div className="app-content"><span className="app-kicker">AI WORKSPACE</span><strong>Ideas into<br /><em>intelligence.</em></strong><div className="app-chart"><i /><i /><i /><i /><i /><i /><i /></div><div className="app-row"><span><BrainCircuit size={14} /> RAG assistant</span><b>Ready</b></div><div className="app-row"><span><Code2 size={14} /> Mobile API</span><b>Live</b></div></div><div className="app-nav"><span>⌂</span><span className="app-nav-active">✦</span><span>◌</span><span>◎</span></div></div><div className="floating-note note-one"><BrainCircuit size={17} /><span>RAG + LLMs<br /><small>always learning</small></span></div><div className="floating-note note-two"><span className="mini-bar" /><span>8.00<br /><small>CGPA</small></span></div></div>
        <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><i /></div>
      </section>

      <section id="about" className="section-pad section-border"><div className="section-heading"><p className="eyebrow">01 / ABOUT ME</p><h2>Curious by nature.<br /><em>End-to-end by practice.</em></h2></div><div className="about-grid"><div className="about-copy"><p className="large-copy">Motivated B.Tech student in Artificial Intelligence and Machine Learning at Saveetha Engineering College, Chennai, with a strong foundation in programming, cloud computing, and AI.</p><p>Hands-on experience building AI-based applications using LLMs, RAG, computer vision, and deep learning. AWS certified, with a keen interest in building scalable, real-world solutions.</p><div className="facts"><div><span>Location</span><strong>Chennai, India</strong></div><div><span>Status</span><strong>Open to opportunities</strong></div><div><span>Phone</span><strong>{profile.phone}</strong></div><div><span>Email</span><strong>{profile.email}</strong></div></div></div><div className="stats"><div className="stat"><strong>06<span>+</span></strong><span>Projects shipped</span></div><div className="stat"><strong>02</strong><span>AWS certifications</span></div><div className="stat"><strong>8.0</strong><span>CGPA</span></div><div className="stat"><strong>05<span>+</span></strong><span>Tech stacks</span></div></div></div><div className="learning-row"><span>Currently learning</span>{['PyTorch', 'LangChain', 'Vector Databases', 'MLOps'].map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></section>

      <section id="skills" className="section-pad"><div className="section-heading split"><div><p className="eyebrow">02 / TOOLKIT</p><h2>Tools for turning<br /><em>ideas into systems.</em></h2></div><p className="heading-note">A practical stack built around experimentation, thoughtful engineering, and measurable outcomes.</p></div><div className="skill-grid">{Object.entries(skills).map(([group, items], groupIndex) => <div className="skill-column" key={group}><div className="skill-title"><span>0{groupIndex + 1}</span><h3>{group}</h3></div>{items.map((item, index) => <div className="skill-item" key={item}><div><span>{item}</span><small>{`${85 - index * 3}%`}</small></div><div className="skill-track"><i style={{ width: `${85 - index * 3}%` }} /></div></div>)}</div>)}</div><div className="soft-skills"><span>Also bring</span>{['Time Management', 'Adaptability', 'Calm Under Pressure', 'Active Listening', 'Multitasking'].map((item) => <span className="soft-pill" key={item}><Check size={14} /> {item}</span>)}</div></section>

      <section id="projects" className="section-pad section-border"><div className="section-heading split"><div><p className="eyebrow">03 / SELECTED WORK</p><h2>Small experiments.<br /><em>Real-world direction.</em></h2></div><div className="filter-tabs" role="tablist">{['All', 'GenAI/LLM', 'Computer Vision', 'Web'].map((filter) => <button key={filter} className={projectFilter === filter ? 'selected' : ''} onClick={() => setProjectFilter(filter)}>{filter}</button>)}</div></div><div className="project-grid">{filteredProjects.map((project, index) => <article className="project-card" key={project.title} onClick={() => setSelectedProject(project)} tabIndex="0" onKeyDown={(event) => event.key === 'Enter' && setSelectedProject(project)}><div className="project-number">0{projects.indexOf(project) + 1}</div><div className="project-icon"><Sparkles size={21} /></div><p className="card-category">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><div className="chips">{project.stack.slice(0, 4).map((chip) => <span key={chip}>{chip}</span>)}</div><div className="project-footer"><strong>{project.impact}</strong><span>Explore <ArrowUpRight size={15} /></span></div></article>)}</div></section>

      <section id="certifications" className="section-pad"><div className="section-heading"><p className="eyebrow">04 / CREDENTIALS</p><h2>Proof of <em>progress.</em></h2></div><div className="cert-grid">{certifications.map(([name, date], index) => <div className="cert-card" key={name}><div className="cert-mark"><Cloud size={20} /></div><div><h3>{name}</h3><span>{date}</span></div><strong>0{index + 1}</strong></div>)}</div></section>

      <section id="experience" className="section-pad section-border"><div className="section-heading"><p className="eyebrow">05 / EXPERIENCE & EDUCATION</p><h2>The foundation<br /><em>behind the work.</em></h2></div><div className="timeline"><div className="timeline-item"><span className="timeline-dot" /><div><p className="timeline-date">2023 — PRESENT</p><h3>B.Tech in Artificial Intelligence & Machine Learning</h3><p>Saveetha Engineering College · Chennai</p><span className="timeline-badge">CGPA 8.00</span></div></div><div className="timeline-item"><span className="timeline-dot" /><div><p className="timeline-date">APRIL 2023</p><h3>Senior Secondary</h3><p>Rajavignesh Higher Secondary School</p><span className="timeline-badge">85%</span></div></div></div></section>

      <section className="section-pad"><div className="section-heading split"><div><p className="eyebrow">06 / CAPABILITIES</p><h2>What I <em>do.</em></h2></div><p className="heading-note">From first prompt to working product, I like staying close to the real problem.</p></div><div className="service-grid">{[['01', BrainCircuit, 'GenAI & RAG Applications', 'Grounded systems that make information useful, searchable, and actionable.'], ['02', Globe2, 'Computer Vision Solutions', 'Vision pipelines that translate complex images into clear, helpful signals.'], ['03', Send, 'Chatbot & LLM Integration', 'Conversational experiences that feel native wherever people use them.'], ['04', Code2, 'Privacy-Focused Local AI', 'Practical local-first AI for sensitive data and reliable ownership.']].map(([number, Icon, title, copy]) => <div className="service-card" key={title}><span>{number}</span><Icon size={25} /><h3>{title}</h3><p>{copy}</p></div>)}</div></section>

      <section className="section-pad process-section"><div className="section-heading"><p className="eyebrow">07 / HOW I WORK</p><h2>My development <em>process.</em></h2></div><div className="process-flow">{process.map(([number, title, copy]) => <div className="process-step" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></section>

      <section className="section-pad roadmap-section"><div className="roadmap-copy"><p className="eyebrow">08 / NEXT HORIZON</p><h2>Always learning.<br /><em>Always shipping.</em></h2><p>The next chapter is about making the systems I build easier to evaluate, deploy, and scale.</p></div><div className="roadmap-list">{roadmap.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong><Rocket size={17} /></div>)}</div></section>

      <section className="section-pad split-section"><div><p className="eyebrow">09 / WHY HIRE ME</p><h2>Useful energy.<br /><em>Low ego.</em></h2></div><div className="why-list">{[['01', 'Fast learner', 'I turn unfamiliar tools into working prototypes quickly.'], ['02', 'End-to-end builder', 'I care about the model, the interface, and the path between them.'], ['03', 'Privacy and performance focused', 'I look for solutions that are responsible, efficient, and practical.']].map(([number, title, copy]) => <div key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></section>

      <section className="section-pad faq-section"><div className="section-heading"><p className="eyebrow">10 / GOOD TO KNOW</p><h2>Frequently asked <em>questions.</em></h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${faqOpen === index ? 'open' : ''}`} key={question}><button onClick={() => setFaqOpen(faqOpen === index ? -1 : index)} aria-expanded={faqOpen === index}><span>{question}</span><ChevronDown size={19} /></button>{faqOpen === index && <p>{answer}</p>}</div>)}</div></section>

      <section className="section-pad testimonial-section"><div className="testimonial-card"><div><p className="eyebrow">11 / KIND WORDS</p><blockquote>“{testimonials[testimonial][1]}”</blockquote><p className="testimonial-author">{testimonials[testimonial][0]} <span>· {testimonials[testimonial][2]}</span></p></div><div className="carousel-controls"><button onClick={() => setTestimonial((testimonial - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial">←</button><span>0{testimonial + 1} / 0{testimonials.length}</span><button onClick={() => setTestimonial((testimonial + 1) % testimonials.length)} aria-label="Next testimonial">→</button></div></div></section>

      <section id="contact" className="section-pad contact-section"><div className="contact-intro"><p className="eyebrow">12 / LET'S CONNECT</p><h2>Have a problem<br /><em>worth solving?</em></h2><p>I'm open to thoughtful conversations, internships, and opportunities to build useful things with good people.</p><a className="btn btn-primary" href={profile.resume} download="Prem_Kumar_S_Resume.pdf"><Download size={17} /> Download resume</a></div><div className="contact-grid"><form className="contact-form" onSubmit={submitForm} action="https://formspree.io/f/your-form-id" method="POST"><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label><label>Message<textarea required name="message" rows="4" placeholder="Tell me a little about what you're building..." /></label><button className="btn btn-primary" type="submit">Send message <Send size={16} /></button>{formStatus && <p className="form-status" role="status">{formStatus}</p>}</form><div className="contact-details"><a href={`mailto:${profile.email}`}><Mail size={18} /><span>Email<strong>{profile.email}</strong></span></a><a href={`tel:${profile.phone}`}><Phone size={18} /><span>Phone<strong>{profile.phone}</strong></span></a><div><Globe2 size={18} /><span>Based in<strong>{profile.location}</strong></span></div><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /><span>LinkedIn<strong>Connect with me</strong></span></a></div></div></section>
    </main>

    <footer><div className="footer-top"><a className="brand" href="#home"><strong>PREM KUMAR S</strong></a><p>Building intelligent, scalable AI solutions.</p><div className="footer-socials"><a href={profile.linkedin} aria-label="LinkedIn"><Linkedin size={17} /></a><a href={profile.github} aria-label="GitHub"><Github size={17} /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17} /></a></div></div><div className="footer-bottom"><span>© 2025 Prem Kumar S. All rights reserved.</span><span>Built with React & CSS</span><button onClick={() => scrollTo('home')} aria-label="Back to top"><ArrowUpRight size={17} /> Back to top</button></div></footer>
    {selectedProject && <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details"><X size={19} /></button><p className="eyebrow">{selectedProject.category}</p><h2 id="modal-title">{selectedProject.title}</h2><p>{selectedProject.details}</p><h3>Key features</h3><ul>{selectedProject.features.map((feature) => <li key={feature}><Check size={16} />{feature}</li>)}</ul><h3>Challenge & learning</h3><p>{selectedProject.challenge}</p><div className="modal-links"><a href="https://github.com/" target="_blank" rel="noreferrer" className="btn btn-ghost"><Github size={16} /> GitHub</a><a href="#contact" onClick={() => setSelectedProject(null)} className="btn btn-primary">Discuss a similar idea <ArrowUpRight size={16} /></a></div></div></div>}
  </>
}

export default App

createRoot(document.getElementById('root')).render(<App />)
