import { useEffect, useState } from "react";
import { Badge } from "../registry/default/ui/badge.jsx";
import { Button } from "../registry/default/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../registry/default/ui/card.jsx";

const portraitSrc = `${import.meta.env.BASE_URL}thomas-mignon.jpeg`;

const navigation = [
  { id: "home", icon: "⌂", label: "Introduction" },
  { id: "focus", icon: "✳", label: "What I build" },
  { id: "work", icon: "▤", label: "Selected work" },
  { id: "toolbox", icon: "⌘", label: "Toolbox" },
  { id: "registry", icon: "▦", label: "React registry" },
  { id: "workflow", icon: "↗", label: "AI workflow" },
  { id: "principles", icon: "◈", label: "Principles" },
];

const focusAreas = [
  {
    number: "01 / DATA PRODUCTS",
    title: "Make data useful",
    description:
      "Dashboards, pipelines and tools that help teams work with large, evolving datasets.",
  },
  {
    number: "02 / RESEARCH SOFTWARE",
    title: "Build for discovery",
    description:
      "Reliable software that connects research workflows, domain knowledge and clear reporting.",
  },
  {
    number: "03 / AI IN PRODUCTS",
    title: "Apply AI with purpose",
    description:
      "Exploring assistants and agentic workflows where they can make real engineering or data work easier.",
  },
];

const toolbox = [
  {
    category: "LANGUAGES & FRAMEWORKS",
    tools: [
      "Python",
      "Django",
      "Java",
      "Spring",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Vue.js",
      "Nuxt",
      "PHP",
    ],
  },
  {
    category: "DATA & INFRASTRUCTURE",
    tools: [
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Celery",
      "Kafka",
      "MongoDB",
      "Elasticsearch",
      "Docker",
    ],
  },
  {
    category: "AI & WORKFLOWS",
    tools: ["LLM applications", "RAG", "LangChain", "Agno", "Prefect", "Galaxy"],
  },
  {
    category: "DELIVERY & OBSERVABILITY",
    tools: [
      "GitLab CI/CD",
      "Ansible",
      "Grafana",
      "Prometheus",
      "Cypress",
      "OpenStack",
    ],
  },
];

const githubUrl = "https://github.com/BobLamarley";
const linkedinUrl = "https://www.linkedin.com/in/thomas-mignon-632a459b/";
const emailUrl = "mailto:tms.mignon@gmail.com";
const goosUrl = "https://www.ocean-ops.org/goosreport/#home";

function SectionHeading({ index, title, note }) {
  return (
    <div className="section-heading">
      <span className="section-index">{index}</span>
      <h2>{title}</h2>
      {note && <span className="heading-note">{note}</span>}
    </div>
  );
}

function TagRow({ items }) {
  return (
    <div className="tag-row">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function Sidebar({ activeSection, menuOpen, onNavigate }) {
  return (
    <aside className={`sidebar${menuOpen ? " open" : ""}`} id="sidebar">
      <a className="brand" href="#home" aria-label="Thomas Mignon home" onClick={onNavigate}>
        <img className="brand-photo" src={portraitSrc} alt="Portrait of Thomas Mignon" />
        <span className="brand-copy">
          <strong>Thomas Mignon</strong>
          <small>Software engineer</small>
        </span>
      </a>

      <div className="side-label">PERSONAL TOOLKIT</div>
      <nav className="side-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <a
            className={`nav-link${activeSection === item.id ? " active" : ""}`}
            href={`#${item.id}`}
            key={item.id}
            onClick={onNavigate}
          >
            <span className="nav-icon">{item.icon}</span> {item.label}
          </a>
        ))}
      </nav>

      <div className="side-label side-label-spaced">ELSEWHERE</div>
      <nav className="side-nav" aria-label="External links">
        <a className="nav-link" href={githubUrl} target="_blank" rel="noreferrer">
          <span className="nav-icon">↗</span> GitHub
        </a>
        <a className="nav-link" href={linkedinUrl} target="_blank" rel="noreferrer">
          <span className="nav-icon">↗</span> LinkedIn
        </a>
        <a className="nav-link" href={goosUrl} target="_blank" rel="noreferrer">
          <span className="nav-icon">↗</span> GOOS Report
        </a>
        <a className="nav-link" href={emailUrl}>
          <span className="nav-icon">✉</span> Get in touch
        </a>
      </nav>

      <div className="sidebar-bottom">
        <span className="status-dot" /> Based in Plougonvelin, France
      </div>
    </aside>
  );
}

function OceanProject() {
  return (
    <article className="project project-ocean">
      <div className="project-top">
        <span className="project-tag">CURRENT · WMO</span>
        <span className="project-kind">OCEAN OBSERVING · AI INTEGRATION</span>
      </div>
      <div className="project-body">
        <div>
          <h3>Ocean data products for global coverage</h3>
          <p>Building digital tools for ocean observing, network monitoring and global reporting at the WMO.</p>
          <ul className="project-details">
            <li>Develop the OceanOPS 3.0 dashboard to monitor data from 17 ocean observing networks and support a global view of ocean coverage.</li>
            <li>Use ArcGIS Server to create maps and layers, and build workflows for data extraction.</li>
            <li>Contribute to the GOOS Report, turning monitoring information into a global overview of ocean observing capacity.</li>
            <li>Work with the AMRIT consortium on a dashboard and mobile application.</li>
            <li>Develop MCP integrations connecting WMO data and tools with Grok Bot to support data-quality workflows.</li>
          </ul>
          <a href={goosUrl} target="_blank" rel="noreferrer" className="project-link">
            Explore the GOOS Report <span>↗</span>
          </a>
        </div>
        <div className="project-visual ocean-visual" aria-label="Abstract ocean data visualisation">
          <div className="ocean-grid" />
          <div className="ocean-orbit orbit-one" />
          <div className="ocean-orbit orbit-two" />
          <span className="ocean-caption">17 NETWORKS<br />ONE OCEAN</span>
          <span className="ocean-coord">48°23′N · 4°29′W</span>
        </div>
      </div>
      <div className="project-footer">
        {["OceanOPS 3.0", "ArcGIS Server · maps & layers", "Data extraction workflows", "GOOS Report", "AMRIT dashboard & mobile app", "MCP · Grok Bot"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>
  );
}

function AbromicsProject() {
  const capabilities = [
    "Made analyzed data reusable for research through knowledge graphs and public API endpoints.",
    "Integrated data from publications into workflows to rerun analyses and compare genomes and antimicrobial-resistance genes.",
    "Built data exploration features including cgMLST, interactive visualizations and filtering in the application.",
  ];
  return (
    <article className="project project-research">
      <div className="project-top">
        <span className="project-tag tag-blue">CNRS / IFB</span>
        <span className="project-kind">BIOINFORMATICS · RESEARCH SOFTWARE</span>
      </div>
      <div className="project-body">
        <div>
          <h3>ABRomics: an open platform for antimicrobial-resistance research</h3>
          <p>Contributed to a Galaxy-based platform connecting HPC bioinformatics workflows, public research data services and interactive genomic analysis.</p>
          <ul className="project-details">
            {capabilities.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <TagRow items={["HPC", "Galaxy workflows", "Knowledge graphs", "Public APIs", "cgMLST", "RAG"]} />
        </div>
        <div className="research-visual">
          <div className="sequence-label">SEQUENCE → SIGNAL</div>
          <div className="sequence-bars" aria-hidden="true">
            {Array.from({ length: 36 }, (_, i) => <i key={i} />)}
          </div>
          <div className="sequence-foot"><span>FASTA / FASTQ</span><span>ANALYSIS PLATFORM</span></div>
        </div>
      </div>
      <div className="project-footer">
        {["Python · Django", "Vue · Nuxt", "PostgreSQL · pgvector", "Docker · GitLab CI/CD"].map((item) => <span key={item}>{item}</span>)}
      </div>
    </article>
  );
}

function ResearchRecords() {
  const records = [
    {
      label: "TECHNICAL DEVELOPMENT",
      date: "JOBIM · 2026",
      title: "Retrieval-Augmented Generation (RAG) over Genomic Reports in the ABRomics Platform",
      description: "Co-authored work on integrating retrieval-augmented generation over genomic reports to support AI-assisted antimicrobial-resistance research.",
      authors: "Thomas Mignon et al.",
      url: "https://hal.science/hal-05649796",
      tone: "record-type",
    },
    {
      label: "PLATFORM PRESENTATION",
      date: "AUBI · 2024",
      title: "ABRomics: A Galaxy-Based Platform for Antimicrobial Resistance Research",
      description: "Presentation of the ABRomics platform and its role in research on antibiotic resistance and public health. Co-authored as part of the platform team.",
      authors: "Cléa Siguret, Thomas Mignon et al.",
      url: "https://hal.science/hal-05084079/",
      tone: "record-type record-type-blue",
    },
  ];

  return (
    <div className="research-records">
      <div className="records-heading"><span className="card-number">RESEARCH & TECHNICAL CONTRIBUTIONS</span><span className="records-rule" /><span className="card-number">ABROMICS</span></div>
      <div className="record-grid">
        {records.map((record) => (
          <article className="record-card" key={record.url}>
            <div className="record-meta"><span className={record.tone}>{record.label}</span><span>{record.date}</span></div>
            <h3>{record.title}</h3>
            <p>{record.description}</p>
            <div className="record-bottom"><span>{record.authors}</span><a href={record.url} target="_blank" rel="noreferrer">Read on HAL <span>↗</span></a></div>
          </article>
        ))}
      </div>
    </div>
  );
}

function EarlierWork() {
  const projects = [
    {
      number: "03",
      label: "IFREMER · DATA ENGINEERING & WEB AUDIENCE ANALYSIS",
      title: "From detailed web logs to research insights",
      description: "Built an HPC data pipeline to parse and enrich detailed web-audience logs across services, then cross-reference institutional activity with publication data. This helped surface research themes at university level—for example, what topics a university network appeared to be working on.",
      tags: ["HTTP / FTP logs", "Publication data", "Python / Pandas", "Parquet", "Logstash", "Prefect", "Elasticsearch", "Kibana"],
    },
    {
      number: "04",
      label: "CRÉDIT MUTUEL ARKÉA · OPEN BANKING",
      title: "PSD2 APIs built with fintechs",
      description: "Designed PSD2 payment and bank-transfer APIs with Stoplight, generated code with Gradle, and worked directly with fintech startups. Secured API access with OAuth 2.0 through Apigee.",
      tags: ["PSD2", "Stoplight", "Gradle", "OAuth 2.0", "Apigee", "Java / Spring"],
    },
  ];

  return (
    <div className="work-pair">
      {projects.map((project) => (
        <article className="small-project" key={project.number}>
          <div className="small-project-index">{project.number}</div>
          <div className="card-number">{project.label}</div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <TagRow items={project.tags} />
        </article>
      ))}
    </div>
  );
}

function RegistrySection() {
  return (
    <section className="section-anchor toolbox-section" id="registry">
      <SectionHeading index="04" title="React component registry" note="The first reusable pieces behind this site" />
      <div className="registry-intro">
        <div>
          <div className="eyebrow"><span className="eyebrow-line" /> REACT · TAILWIND CSS V4</div>
          <p className="registry-lead">A small source-first UI kit, built for real projects and ready to grow.</p>
        </div>
        <a className="project-link" href={`${import.meta.env.BASE_URL}r/registry.json`} target="_blank" rel="noreferrer">Browse registry manifest <span>↗</span></a>
      </div>
      <div className="registry-grid">
        <Card className="registry-demo-card">
          <CardHeader>
            <Badge variant="green">registry:ui</Badge>
            <CardTitle>Button</CardTitle>
            <CardDescription>Clear action hierarchy with compact, reusable variants.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button variant="primary" size="sm">Primary action</Button>
            <Button variant="secondary" size="sm">Secondary</Button>
          </CardContent>
          <CardFooter><code>button.jsx</code><span>·</span><code>3 variants</code></CardFooter>
        </Card>
        <Card className="registry-demo-card">
          <CardHeader>
            <Badge variant="blue">registry:ui</Badge>
            <CardTitle>Badge</CardTitle>
            <CardDescription>Small labels for status, topics and categories.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge variant="neutral">Data</Badge>
            <Badge variant="green">Active</Badge>
            <Badge variant="blue">Research</Badge>
          </CardContent>
          <CardFooter><code>badge.jsx</code><span>·</span><code>3 variants</code></CardFooter>
        </Card>
        <Card className="registry-demo-card">
          <CardHeader>
            <Badge variant="neutral">registry:ui</Badge>
            <CardTitle>Card</CardTitle>
            <CardDescription>Composable surface with header, content and footer parts.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-950">
              <div className="font-mono text-[9px] text-slate-500 dark:text-slate-400">OCEAN NETWORK STATUS</div>
              <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-100"><span className="h-2 w-2 rounded-full bg-lime-500" /> Reporting normally</div>
            </div>
          </CardContent>
          <CardFooter><code>card.jsx</code><span>·</span><code>5 primitives</code></CardFooter>
        </Card>
      </div>
    </section>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("thomas-toolkit-theme") === "light" ? "light" : "dark";
    } catch {
      return "dark";
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = theme === "dark" ? "#111613" : "#f7f8f5";
    try {
      localStorage.setItem("thomas-toolkit-theme", theme);
    } catch {
      // The selected theme still applies for this page view when storage is unavailable.
    }
  }, [theme]);

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-18% 0px -64% 0px", threshold: [0, 0.15, 0.35, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="layout">
      <Sidebar activeSection={activeSection} menuOpen={menuOpen} onNavigate={closeMenu} />
      <main id="home">
        <header className="topbar">
          <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>☰</button>
          <div className="breadcrumbs"><span>Thomas Mignon</span><span className="crumb-slash">/</span><strong>Toolkit</strong></div>
          <div className="topbar-actions">
            <button className="theme-toggle" type="button" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}>
              <span className="theme-icon" aria-hidden="true">{theme === "dark" ? "☼" : "☾"}</span><span>{theme === "dark" ? "Light" : "Dark"}</span>
            </button>
            <a className="top-link" href={emailUrl}>Let’s talk <span>↗</span></a>
          </div>
        </header>

        <div className="content">
          <section className="hero section-anchor" aria-labelledby="hero-title">
            <div className="eyebrow"><span className="eyebrow-line" /> SOFTWARE · DATA · AI</div>
            <h1 id="hero-title">Building useful<br /><span>software for complex data.</span></h1>
            <p className="hero-copy">I’m Thomas, a software engineer working at the intersection of research, data platforms and AI. This is my open notebook: the systems I build, the tools I reach for, and how I work.</p>
            <div className="hero-actions">
              <Button as="a" href="#work" variant="primary" className="button button-dark">Explore selected work <span>↓</span></Button>
              <a className="text-link" href={emailUrl}>Get in touch <span>↗</span></a>
            </div>
            <div className="hero-meta"><span className="status-dot" /> Currently building ocean data tools at WMO <span className="meta-separator">·</span> <span>Open to thoughtful conversations</span></div>
            <div className="hero-stamp" aria-hidden="true"><span>BUILD</span><b>↗</b><span>IN THE OPEN</span></div>
          </section>

          <section className="section-anchor intro-band" id="focus">
            <SectionHeading index="01" title="What I build" />
            <p className="intro-statement">From <em>raw observations</em> to interfaces that help people make sense of them.</p>
            <div className="focus-grid">
              {focusAreas.map((item) => (
                <article className="focus-card" key={item.number}>
                  <div className="card-number">{item.number}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="mini-arrow">↗</span>
                </article>
              ))}
            </div>
          </section>

          <section className="section-anchor work-section" id="work">
            <SectionHeading index="02" title="Selected work" note="A few systems I’ve helped bring to life" />
            <OceanProject />
            <AbromicsProject />
            <ResearchRecords />
            <EarlierWork />
          </section>

          <section className="section-anchor toolbox-section" id="toolbox">
            <SectionHeading index="03" title="Toolbox" note="Tools I’ve used to ship real work" />
            <div className="toolbox-layout">
              <div className="toolbox-intro"><div className="toolbox-symbol">⌘</div><h3>The right tool for the job.</h3><p>My toolkit spans scientific research, data infrastructure and product engineering. I’m now using React and Tailwind CSS to build the first reusable components for this site.</p></div>
              <div className="tool-list">
                {toolbox.map((group) => (
                  <div className="tool-group" key={group.category}>
                    <span className="tool-category">{group.category}</span>
                    <div className="tool-chips">{group.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <RegistrySection />

          <section className="section-anchor workflow-section" id="workflow">
            <SectionHeading index="05" title="Working with AI" />
            <div className="workflow-card">
              <div className="workflow-copy">
                <div className="eyebrow"><span className="eyebrow-line" /> HUMAN-LED · AI-ASSISTED</div>
                <h3>Agents are part of my<br />engineering workflow.</h3>
                <p>I work daily with Cursor Agents and Cloud Agents, Grok Bot and T3 Code to move from an idea to working software. I use them as collaborators and stay accountable for the design, code and outcome.</p>
                <div className="workflow-note"><span className="workflow-dot" /> Cursor Agents · Cloud Agents · Grok Bot · T3 Code</div>
              </div>
              <div className="workflow-flow">
                <div className="flow-node"><span>01</span><b>Understand</b><small>Problem & context</small></div>
                <div className="flow-line" />
                <div className="flow-node flow-agent"><span>02</span><b>Build together</b><small>Agents & tools</small></div>
                <div className="flow-line" />
                <div className="flow-node"><span>03</span><b>Own the result</b><small>Review & iterate</small></div>
              </div>
            </div>
          </section>

          <section className="section-anchor principles-section" id="principles">
            <SectionHeading index="06" title="Principles" note="A few ideas I bring to a project" />
            <div className="principle-list">
              <div><span>01</span><h3>Start with the people using it.</h3><p>Good engineering makes a complex task feel clear.</p></div>
              <div><span>02</span><h3>Make the system understandable.</h3><p>Readable software is easier to operate, improve and trust.</p></div>
              <div><span>03</span><h3>Use AI where it helps.</h3><p>New tools matter when they make the product or process better.</p></div>
            </div>
          </section>

          <footer className="footer section-anchor" id="contact">
            <div><div className="eyebrow"><span className="eyebrow-line" /> HAVE A GOOD PROBLEM?</div><h2>Let’s build something<br /><em>useful.</em></h2></div>
            <Button as="a" href={emailUrl} variant="accent" className="button button-lime">Get in touch <span>↗</span></Button>
            <div className="footer-base"><span>© 2026 Thomas Mignon</span><span>Made with care in Plougonvelin, France</span><a href="#home">Back to top ↑</a></div>
          </footer>
        </div>
      </main>
    </div>
  );
}
