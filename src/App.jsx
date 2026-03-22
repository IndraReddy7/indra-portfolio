import { useEffect, useRef, useState } from 'react'

/* ── DATA ── */
const NAV_LINKS = ['about','skills','experience','projects','certifications','contact']

const SKILLS = [
  { label: 'AI / ML',           items: ['Python','Machine Learning','Deep Learning','LLMs & GenAI','Multi-Agent Systems','Computer Vision'] },
  { label: 'Cloud Platforms',   items: ['AWS Fundamentals','Azure Fundamentals','GCP Fundamentals'] },
  { label: 'Data Engineering',  items: ['PySpark','SQL (Advanced)','ETL Pipeline Design'] },
  { label: 'In Progress',       items: ['AWS Certified Data Engineer – Associate','Google Cloud Associate Cloud Engineer'] },
]

const EXPERIENCE = [
  {
    period: 'June 2025 — Present',
    company: 'Cognizant',
    location: 'Hyderabad, India',
    role: 'Programmer Analyst Trainee',
    desc: 'Engineering AI agents and real-time financial applications on AWS. Managing backend development of concurrent projects — fraud detection systems, KYC pipelines, underwriting automation — while consistently meeting rigorous corporate deadlines and performance standards.',
  },
  {
    period: 'Dec 2024 — Apr 2025',
    company: 'Cognizant · GenC',
    location: 'Hyderabad, India',
    role: 'Intern',
    desc: 'Contributed to data systems development, optimizing ETL pipelines, SQL queries, and Azure Data Factory workflows. Applied analytical thinking to debug query performance, understand deadlocks, and maintain precision in technical documentation.',
  },
  {
    period: 'Graduated May 2025',
    company: 'Bharat University (BIHER)',
    location: 'Chennai, Tamil Nadu, India',
    role: 'B.Tech — Artificial Intelligence',
    desc: 'Four-year program in Artificial Intelligence. Graduated with 8.7 GPA. Key focus areas: deep learning, computer vision, cloud computing, and data systems. Final project: Brain Tumor Classification using CNNs on MRI imaging data.',
  },
]

const PROJECTS = [
  {
    index: '01',
    tags: [['AWS','cyan'],['Multi-Agent','violet'],['Python','cyan']],
    name: 'Loan Fraud Detection\nMulti-Agent System',
    desc: 'Orchestrator-driven agent architecture for real-time loan fraud detection. An Orchestrator Agent coordinates four specialized sub-agents — KYC, DEX, Behavioral Assessment, and Fraud Ring — applying weighted composite fraud scoring with DynamoDB persistence and SNS alerting across the full lifecycle.',
    stack: ['Lambda','Step Functions','DynamoDB','CloudFormation','SNS','Python 3.11'],
    wip: false,
  },
  {
    index: '02',
    tags: [['Deep Learning','green'],['Python','cyan'],['Medical AI','blue']],
    name: 'Brain Tumor\nClassification Model',
    desc: 'Deep learning model trained on MRI imaging data to classify brain tumors with high accuracy. Applies convolutional neural networks to medical imaging — demonstrating applied ML for critical healthcare diagnostics with real-world clinical implications.',
    stack: ['TensorFlow / Keras','CNN','MRI Datasets','Python'],
    wip: false,
  },
  {
    index: '03',
    tags: [['AWS','cyan'],['FinTech','amber'],['Python','cyan']],
    name: 'KYC Underwriting\nLambda Optimizer',
    desc: 'High-performance KYC/underwriting Lambda function optimized for sub-10-second execution. Parallel ThreadPoolExecutor calls, tightened timeouts, and DynamoDB projection expressions ensure the function meets strict financial SLAs under production load.',
    stack: ['Lambda','ThreadPoolExecutor','DynamoDB','Python 3.11'],
    wip: false,
  },
  {
    index: '04',
    tags: [['Coming Soon','amber']],
    name: 'Stealth Project',
    desc: 'Project details will be revealed once development is complete. Stay tuned for updates on this exciting build.',
    stack: ['???','???','???'],
    wip: true,
  },
]

const CERTS = [
  { provider:'AWS',               name:'Fundamentals of Analytics on AWS – Part 1',    date:'March 21, 2026',           wip:false },
  { provider:'Microsoft · Udemy', name:"Microsoft Azure – Beginner's Guide + AZ-900",   date:'Feb 13, 2025 · 14.5 hrs',  wip:false },
  { provider:'Udemy',             name:'Data Modeling & Relational DB Design using ERwin',date:'Jan 1, 2025 · 3.5 hrs',   wip:false },
  { provider:'Udemy',             name:'Spanish for Beginners – Complete Course Level 1', date:'Sept 16, 2025 · 4 hrs',   wip:false },
  { provider:'Amazon Web Services',name:'AWS Certified Data Engineer – Associate',        date:'Actively studying · Target 2026', wip:true },
  { provider:'Google Cloud',      name:'Associate Cloud Engineer / Data Practitioner',    date:'Actively studying · Target 2026', wip:true },
]

const ABOUT_ROWS = [
  { label:'Role',         value:'Programmer Analyst Trainee', cyan:false },
  { label:'Company',      value:'Cognizant',                  cyan:false },
  { label:'Location',     value:'Hyderabad, Telangana',       cyan:false },
  { label:'Availability', value:'Open · Freelance & Full-time', cyan:true },
  { label:'Education',    value:'B.Tech AI · 8.7 GPA',        cyan:false },
  { label:'LinkedIn',     value:'Indra312004', link:'https://linkedin.com/in/Indra312004', cyan:true },
]

/* ── HOOKS ── */
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Stagger headings first, then cards fall in one by one
          const headings = entry.target.querySelectorAll('.sec-title,.sec-eyebrow')
          headings.forEach((el, i) => {
            el.style.transitionDelay = `${i * 80}ms`
          })

          const cards = entry.target.querySelectorAll(
            '.skill-cell,.proj-card,.cert-cell,.exp-row'
          )
          cards.forEach((child, i) => {
            // Cards fall in after headings, staggered 120ms apart
            child.style.transitionDelay = `${120 + i * 130}ms`
          })

          // Small timeout so the delays are set before class is added
          setTimeout(() => entry.target.classList.add('in'), 10)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.06 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function useActiveNav() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const handler = () => {
      const sections = document.querySelectorAll('section[id]')
      let cur = ''
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id })
      setActive(cur)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return active
}

/* ── COMPONENTS ── */
function GlowOrbs() {
  return (
    <div className="glow-container">
      <div className="glow-orb orange-1" />
      <div className="glow-orb blue-1" />
      <div className="glow-orb orange-2" />
      <div className="glow-orb blue-2" />
      <div className="glow-orb orange-3" />
    </div>
  )
}


function Nav() {
  const active = useActiveNav()
  return (
    <nav>
      <div className="nav-logo">INDRA<span>.</span></div>
      <ul className="nav-center">
        {NAV_LINKS.map(id => (
          <li key={id}>
            <a href={`#${id}`} className={active === id ? 'active' : ''}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="nav-hire">Hire Me</a>
    </nav>
  )
}

function Hero() {
  const els = useRef([])
  useEffect(() => {
    els.current.forEach((el, i) => {
      if (!el) return
      el.style.transitionDelay = `${200 + i * 120}ms`
      requestAnimationFrame(() => el.classList.add('show'))
    })
  }, [])
  const ref = i => el => { els.current[i] = el }

  return (
    <section id="hero">
      <h1 className="hero-name hero-anim" ref={ref(0)}>
        Indra<br />
        <span className="outline">Sena</span> Reddy
      </h1>
      <p className="hero-sub hero-anim" ref={ref(1)}>
        <span className="hl">AI &amp; Data Engineer</span>
        {' '}— Cognizant &nbsp;·&nbsp; AWS &nbsp;·&nbsp; Azure &nbsp;·&nbsp; GCP
      </p>
      <p className="hero-bio hero-anim" ref={ref(2)}>
        Building intelligent systems at the intersection of AI and data engineering. Specializing
        in multi-cloud architectures, real-time financial applications, and scalable AI agents
        that solve complex problems in banking and fintech.
      </p>
      <div className="hero-btns hero-anim" ref={ref(3)}>
        <a href="#contact" className="btn-cyan">Get in Touch</a>
        <a href="#projects" className="btn-ghost">View My Work</a>
      </div>
      <div className="hero-divider hero-anim" ref={ref(4)} />
      <div className="hero-stats">
        {[
          { val: '4', sup: '+', label: 'Certifications' },
          { val: '3', sup: '+', label: 'Cloud Platforms' },
          { val: '2', sup: '+', label: 'Years Building' },
          { val: '8.7', sup: '/10', label: 'B.Tech GPA', small: true },
        ].map(s => (
          <div key={s.label}>
            <span className="hstat-val" style={s.small ? { fontSize: 36 } : {}}>
              {s.val}<sup style={s.small ? { fontSize: 20 } : {}}>{s.sup}</sup>
            </span>
            <span className="hstat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about">
      <div className="section-wrap reveal">
        <h2 className="sec-title">About</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I&apos;m Dareddy Indra Sena Reddy — an AI &amp; Data Engineer at Cognizant, based in
              Hyderabad. I build real-time financial systems, multi-agent AI pipelines, and
              cloud-native data infrastructure across AWS, Azure, and GCP.
            </p>
            <p>
              My work spans fraud detection, KYC automation, ETL pipeline design, and GenAI
              integration — always with a focus on performance, compliance, and scale. I graduated
              with a B.Tech in AI (8.7 GPA) from Bharath Institute in 2025.
            </p>
          </div>
          <div className="about-table">
            {ABOUT_ROWS.map(row => (
              <div className="about-row" key={row.label}>
                <span className="about-row-label">{row.label}</span>
                {row.link
                  ? <a href={row.link} className="about-row-value cyan">{row.value}</a>
                  : <span className={`about-row-value${row.cyan ? ' cyan' : ''}`}>{row.value}</span>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills">
      <div className="section-wrap reveal">
        <h2 className="sec-title">Skills &amp; Stack</h2>
        <div className="skills-grid">
          {SKILLS.map(cat => (
            <div className="skill-cell" key={cat.label}>
              <div className="skill-cell-label">{cat.label}</div>
              <ul className="skill-list">
                {cat.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience">
      <div className="section-wrap reveal">
        <div className="sec-eyebrow">// 02 — Career</div>
        <h2 className="sec-title">Experience</h2>
        <div className="exp-list">
          {EXPERIENCE.map(e => (
            <div className="exp-row" key={e.role}>
              <div className="exp-left">
                <div className="exp-period">{e.period}</div>
                <div className="exp-company">{e.company}</div>
                <div className="exp-location">{e.location}</div>
              </div>
              <div className="exp-right">
                <div className="exp-role">{e.role}</div>
                <p className="exp-desc">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Tag({ label, variant }) {
  return <span className={`ptag ptag-${variant}`}>{label}</span>
}

function ProjectCard({ project }) {
  if (project.wip) {
    return (
      <div className="proj-card proj-wip">
        <div className="proj-content">
          <div className="proj-index">{project.index}</div>
          <div className="proj-tags">
            {project.tags.map(([label, v]) => <Tag key={label} label={label} variant={v} />)}
          </div>
          <h3 className="proj-name">{project.name}</h3>
          <p className="proj-desc">{project.desc}</p>
          <div className="proj-stack">
            {project.stack.map(t => <span key={t}>{t}</span>)}
          </div>
        </div>
        <div className="proj-wip-overlay">
          <div className="proj-wip-badge">Work in Progress</div>
          <p className="proj-wip-sub">Coming soon</p>
        </div>
        <div className="proj-wip-stripe" />
      </div>
    )
  }
  return (
    <div className="proj-card">
      <div className="proj-index">{project.index}</div>
      <div className="proj-tags">
        {project.tags.map(([label, v]) => <Tag key={label} label={label} variant={v} />)}
      </div>
      <h3 className="proj-name" style={{ whiteSpace: 'pre-line' }}>{project.name}</h3>
      <p className="proj-desc">{project.desc}</p>
      <div className="proj-stack">
        {project.stack.map(t => <span key={t}>{t}</span>)}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects">
      <div className="section-wrap reveal">
        <h2 className="sec-title">Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map(p => <ProjectCard key={p.index} project={p} />)}
        </div>
      </div>
    </section>
  )
}

function Certifications() {
  return (
    <section id="certifications">
      <div className="section-wrap reveal">
        <h2 className="sec-title">Certifications</h2>
        <div className="certs-grid">
          {CERTS.map(c => (
            <div className={`cert-cell${c.wip ? ' wip' : ''}`} key={c.name}>
              {c.wip && <span className="wip-label">WIP</span>}
              <div className="cert-provider">{c.provider}</div>
              <div className="cert-name">{c.name}</div>
              <div className="cert-date">{c.date}</div>
              {c.wip
                ? <div className="wip-indicator">Work in Progress</div>
                : <div className="cert-status">Completed</div>
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact">
      <div className="section-wrap reveal contact-wrap">
        <h2 className="sec-title" style={{ marginBottom: 20 }}>
          Let&apos;s Build<br /><span className="outline">Something</span>
        </h2>
        <p className="contact-sub">
          Open to full-time roles in AI &amp; Data Engineering and freelance projects in cloud
          architecture, fraud detection, and intelligent data systems.
        </p>
        <div className="contact-links">
          <a href="mailto:dareddyindra.reddy2@cognizant.com" className="clink">
            ✉&nbsp; dareddyindra.reddy2@cognizant.com
          </a>
          <a href="https://linkedin.com/in/Indra312004" target="_blank" rel="noreferrer" className="clink">
            ↗&nbsp; linkedin.com/in/Indra312004
          </a>
          <a href="tel:+917075182018" className="clink">
            ☎&nbsp; +91 70751 82018
          </a>
        </div>
        <p style={{ fontFamily:'var(--mono)', fontSize:10, color:'var(--muted)', letterSpacing:'0.14em', textTransform:'uppercase' }}>
          Based in Hyderabad, Telangana &nbsp;·&nbsp; Remotely available worldwide
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-left">© 2026 Dareddy Indra Sena Reddy</div>
      <div className="footer-right">INDRA<span>.</span> — AI &amp; Data Engineer</div>
    </footer>
  )
}

/* ── APP ── */
export default function App() {
  useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <GlowOrbs />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  )
}
