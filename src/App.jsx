import React from "react";
import { motion } from "framer-motion";

const profile = {
  name: "Sreepada Vallab Kandi",
  initials: "SV",
  title: "AI & Data Engineer",
  subtitle: "MS Computer Science Student at Virginia Commonwealth University",
  tagline: "Building reliable AI, data pipelines, cloud systems, and analytics solutions.",
  location: "Richmond, Virginia, USA",
  email: "vallabkandi01@gmail.com",
  phone: "+1 (804) 903-0126",
  linkedin: "https://www.linkedin.com/in/sreepada-vallab-kandi-362bb4231/",
  github: "https://github.com/",
  resume: "/Sreepada_Vallab_Kandi_Resume.pdf",
  availability: "Actively applying for full-time roles under OPT 2026",
};

const skills = [
  {
    icon: "</>",
    title: "Programming",
    items: ["Python", "Java", "SQL", "Bash/Shell", "REST APIs", "Backend Development"],
  },
  {
    icon: "AI",
    title: "AI / ML",
    items: ["Machine Learning", "Deep Learning", "Computer Vision", "PyTorch", "TensorFlow", "Scikit-learn"],
  },
  {
    icon: "☁",
    title: "Cloud & DevOps",
    items: ["AWS", "Azure", "GCP", "Docker", "Terraform", "CI/CD", "Azure DevOps"],
  },
  {
    icon: "DB",
    title: "Data Engineering",
    items: ["ETL/ELT", "Data Modeling", "MySQL", "PostgreSQL", "Azure SQL", "Data Validation"],
  },
];

const experiences = [
  {
    role: "Graduate Teaching Assistant",
    company: "Virginia Commonwealth University",
    period: "Jan 2026 – Present",
    location: "Richmond, VA",
    bullets: [
      "Assist with Computational Methods and Data Science course delivery for undergraduate and graduate students.",
      "Evaluate assignments, quizzes, and exams for 100+ students with timely and constructive feedback.",
      "Support students with Python, algorithms, data analysis, debugging, and project implementation.",
    ],
  },
  {
    role: "Graduate Research Assistant",
    company: "Virginia Commonwealth University",
    period: "Jan 2025 – Aug 2025",
    location: "Richmond, VA",
    bullets: [
      "Performed validation testing of AI/ML models for DeepFake MRI detection research.",
      "Built reproducible experiment workflows using cloud platforms, Bash scripts, and controlled evaluation scenarios.",
      "Documented model configurations, metrics, and validation results to improve traceability and robustness.",
    ],
  },
  {
    role: "Data Engineer Intern",
    company: "EngageBay",
    period: "Dec 2022 – Jun 2024",
    location: "Hyderabad, India",
    bullets: [
      "Designed automated CRM data pipelines using Python, Pandas, NumPy, SQL, and AWS S3.",
      "Developed ETL/ELT workflows for operational data ingestion, transformation, validation, and reporting.",
      "Improved data quality by implementing automated validation checks, auditing routines, and reconciliation logic.",
    ],
  },
];

const projects = [
  {
    title: "DeepFake MRI Detection with Uncertainty Evaluation",
    tag: "AI Research",
    description: "AI/ML research project focused on detecting manipulated MRI scans using robust validation, reproducible experiments, and model reliability analysis.",
    stack: ["Python", "Deep Learning", "Computer Vision", "GCP", "Azure DevOps"],
  },
  {
    title: "LightGCN Movie Recommendation System",
    tag: "Graph ML",
    description: "Built a graph-based recommendation system using user–movie bipartite graphs and LightGCN architecture for personalized movie ranking.",
    stack: ["Python", "PyTorch", "GNN", "MovieLens", "Recommendation Systems"],
  },
  {
    title: "Resume Parsing & Semantic Compatibility Screening",
    tag: "NLP",
    description: "Designed a resume screening system that extracts candidate information and compares profiles semantically with job descriptions using embeddings.",
    stack: ["Python", "spaCy", "SBERT", "NLP", "Streamlit"],
  },
  {
    title: "Hotel Review Summarizer",
    tag: "Agentic AI",
    description: "Created an AI-assisted workflow to summarize hotel reviews with human-in-the-loop review, editing, and feedback logging.",
    stack: ["LangGraph", "Streamlit", "OpenAI API", "Pandas"],
  },
  {
    title: "Data Quality & Analytics Verification",
    tag: "Data Engineering",
    description: "Implemented SQL-based validation rules and reconciliation checks to verify curated datasets before release to business reporting layers.",
    stack: ["SQL", "Azure Synapse", "Azure Data Lake", "Data Validation"],
  },
  {
    title: "Heart Disease Prediction",
    tag: "Machine Learning",
    description: "Built a machine learning classification model to predict heart disease risk from patient data using preprocessing, feature selection, and evaluation.",
    stack: ["Python", "Scikit-learn", "Pandas", "Classification"],
  },
];

const certifications = [
  "Data Engineering on Microsoft Azure",
  "Building Batch Data Pipelines on Azure",
  "Modern Data Warehousing with Azure Synapse Analytics",
  "Big Data Analysis with Spark and SQL",
];

const portfolioTests = [
  {
    name: "profile has a valid email",
    pass: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email),
  },
  {
    name: "skills section is populated",
    pass: skills.length >= 4 && skills.every((group) => group.title && group.items.length > 0),
  },
  {
    name: "experience section is populated",
    pass: experiences.length >= 3 && experiences.every((exp) => exp.role && exp.company && exp.bullets.length > 0),
  },
  {
    name: "projects section is populated",
    pass: projects.length >= 4 && projects.every((project) => project.title && project.description && project.stack.length > 0),
  },
  {
    name: "certifications section is populated",
    pass: certifications.length >= 4,
  },
];

portfolioTests.forEach((test) => {
  console.assert(test.pass, `Portfolio test failed: ${test.name}`);
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-white md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{description}</p>}
    </motion.div>
  );
}

function Pill({ children }) {
  return <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200 backdrop-blur">{children}</span>;
}

function Card({ children, className = "" }) {
  return <div className={`rounded-[2rem] border border-white/10 bg-white/10 shadow-xl backdrop-blur-xl ${className}`}>{children}</div>;
}

function ButtonLink({ href, children, variant = "primary", download = false, target }) {
  const base = "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950";
  const styles = variant === "primary"
    ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
    : "border border-white/20 bg-white/5 text-white hover:bg-white/10";

  return (
    <a href={href} download={download} target={target} rel={target ? "noreferrer" : undefined} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function IconBadge({ children, className = "" }) {
  return (
    <span className={`inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-cyan-300/15 px-2 text-xs font-black text-cyan-200 ${className}`}>
      {children}
    </span>
  );
}

function CheckIcon() {
  return <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-300 text-[10px] font-black text-slate-950">✓</span>;
}

function ArrowIcon() {
  return <span className="ml-2 text-base leading-none">↗</span>;
}

export default function Portfolio() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[15%] h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[30%] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="text-lg font-bold tracking-tight text-white">SVK<span className="text-cyan-300">.</span></a>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <ButtonLink href={profile.resume} download>⬇ Resume</ButtonLink>
        </div>
      </nav>

      <section id="home" className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> {profile.availability}
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
            Hi, I’m <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">{profile.name}</span>
          </h1>
          <p className="mt-6 text-2xl font-semibold text-slate-200 md:text-3xl">{profile.title}</p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">{profile.subtitle}. {profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#projects">View Projects <ArrowIcon /></ButtonLink>
            <ButtonLink href={`mailto:${profile.email}`} variant="secondary">Contact Me ✉</ButtonLink>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="flex items-center gap-2">📍 {profile.location}</span>
            <span className="flex items-center gap-2">🎓 MS CS @ VCU</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
          <Card className="overflow-hidden shadow-2xl">
            <div className="p-8">
              <img
                src="/profile.jpg"
                 alt="Profile"
                  className="mx-auto h-40 w-40 rounded-full object-cover border-4 border-cyan-300 shadow-2xl"
                />
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
                <p className="mt-2 text-cyan-200">AI • Data • Cloud • DevOps</p>
              </div>
              <div className="mt-8 grid gap-3">
                {["OPT-ready candidate", "Open to relocation", "Full-time roles", "Data / AI / Software Engineering"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 text-sm text-slate-200">
                    <CheckIcon /> {item}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle eyebrow="About" title="Engineer focused on reliable AI and scalable data systems" description="I combine research experience, cloud engineering, data validation, and full-stack project work to build useful systems that are clean, reproducible, and production-minded." />
        <Card>
          <div className="grid gap-8 p-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="text-lg leading-8 text-slate-200">
                I am a Master’s student in Computer Science at Virginia Commonwealth University, with hands-on experience in AI/ML validation, data engineering, ETL pipelines, cloud platforms, and analytics systems. My work includes DeepFake MRI detection research, automated CRM data pipelines, SQL-based data quality checks, and AI-powered applications using modern tools.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                I am actively applying for Data Engineer, AI Engineer, Machine Learning Engineer, Backend Engineer, and Cloud/Data roles where I can contribute to reliable, scalable, and impactful software systems.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
              <h3 className="mb-4 text-xl font-bold text-white">Role Targets</h3>
              <div className="flex flex-wrap gap-2">
                {["Data Engineer", "AI Engineer", "ML Engineer", "Backend Engineer", "Cloud Engineer"].map((role) => <Pill key={role}>{role}</Pill>)}
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle eyebrow="Skills" title="Technical toolkit" description="A practical mix of programming, cloud, AI/ML, data engineering, and visualization skills for real-world systems." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, index) => (
            <motion.div key={group.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: index * 0.08 }}>
              <Card className="h-full transition hover:-translate-y-1 hover:bg-white/[0.14]">
                <div className="p-6">
                  <div className="mb-5"><IconBadge>{group.icon}</IconBadge></div>
                  <h3 className="mb-4 text-xl font-bold text-white">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">{group.items.map((item) => <Pill key={item}>{item}</Pill>)}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle eyebrow="Experience" title="Work and research experience" description="Experience across teaching, research, AI/ML validation, data pipelines, and cloud-based data engineering." />
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300 via-blue-400 to-purple-400 md:block" />
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div key={exp.role} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative md:pl-12">
                <div className="absolute left-[-1px] top-7 hidden h-9 w-9 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-950 text-cyan-300 md:flex">▣</div>
                <Card>
                  <div className="p-6">
                    <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                        <p className="mt-1 text-cyan-200">{exp.company} • {exp.location}</p>
                      </div>
                      <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">{exp.period}</span>
                    </div>
                    <ul className="mt-5 space-y-3 text-slate-300">
                      {exp.bullets.map((b) => <li key={b} className="flex gap-3"><CheckIcon /> <span>{b}</span></li>)}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle eyebrow="Projects" title="Featured projects" description="A selection of research, AI, data engineering, and full-stack projects aligned with target job roles." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div key={project.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: index * 0.06 }}>
              <Card className="group h-full transition hover:-translate-y-1 hover:bg-white/[0.14]">
                <div className="flex h-full flex-col p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-xs font-semibold text-cyan-200">{project.tag}</span>
                    <span className="text-slate-400 transition group-hover:text-cyan-200">↗</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-3 flex-1 leading-7 text-slate-300">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((s) => <Pill key={s}>{s}</Pill>)}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle eyebrow="Certifications" title="Continuous learning" description="Certifications focused on Microsoft Azure, data pipelines, warehousing, Spark, and SQL." />
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert) => (
            <Card key={cert} className="rounded-3xl">
              <div className="flex items-center gap-4 p-5">
                <CheckIcon />
                <p className="font-medium text-white">{cert}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-5 py-24 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
          <h2 className="text-4xl font-black text-white md:text-6xl">Let’s build something reliable.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            I am actively seeking full-time opportunities in AI Engineering, Data Engineering, Machine Learning, Backend Development, and Cloud/Data roles.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={`mailto:${profile.email}`}>Email Me ✉</ButtonLink>
            <ButtonLink href={profile.linkedin} target="_blank" variant="secondary">LinkedIn ↗</ButtonLink>
            <ButtonLink href={profile.github} target="_blank" variant="secondary">GitHub ↗</ButtonLink>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm text-slate-300">
            <span className="flex items-center gap-2">✉ {profile.email}</span>
            <span className="flex items-center gap-2">☎ {profile.phone}</span>
            <span className="flex items-center gap-2">📍 {profile.location}</span>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS, and Framer Motion.
      </footer>
    </main>
  );
}
