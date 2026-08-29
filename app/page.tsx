"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Language = "fr" | "en";

const navigation = {
  fr: [["Accueil", "home"], ["À propos", "about"], ["Expérience", "experience"], ["Compétences", "skills"], ["Formation", "education"], ["Contact", "contact"]],
  en: [["Home", "home"], ["About", "about"], ["Experience", "experience"], ["Skills", "skills"], ["Education", "education"], ["Contact", "contact"]],
} as const;

const experiences = {
  fr: [
    { title: "Automatisation de génération de prospects", company: "Freelance - Phase préparatoire", date: "07/2026", color: "green", points: ["Pré-configuration de l'authentification et recherche d'annonces selon filtres prédéfinis.", "Mise en place d'un processus de contact automatisé via techniques de Computer Vision.", "Configuration de conteneurs Docker pour l'environnement applicatif.", "Déploiement sur un VPC Amazon (AWS)."], tags: ["Computer Vision", "Playwright", "Selenium", "Docker", "AWS (VPC)"] },
    { title: "Stage Ingénieur Applicatif TestRunner", company: "Groupe COVEA", date: "02/2025 - 07/2025", color: "cyan", points: ["Étude et implémentation d'une vision d'architecture.", "Industrialisation du développement de l'application.", "Conception technique des évolutions fonctionnelles.", "Réalisation et tests des fonctionnalités.", "Déploiement de l'application sur serveur Tomcat.", "Montée en compétence sur l'utilisation et maintien en condition opérationnelle."], tags: ["End-to-End Test", "Tests Unitaires", "Java", "Spring", "Jenkins", "Tomcat"] },
    { title: "Stage Développeur d'application de suivi de tirs de performance", company: "MAIF", date: "04/2024 - 06/2024", color: "yellow", points: ["Modélisation de l'architecture de l'application.", "Conception des modules de centralisation et de persistance des données.", "Développement d'adaptateurs pour l'intégration des outils de performance.", "Réalisation de tests unitaires pour valider l'implémentation du modèle de service.", "Création d'une interface utilisateur en React.js."], tags: ["Architecture Hexagonale", "TDD", "Clean Code", "React", "Java", "JUnit"] },
    { title: "Stage de développement web (React)", company: "Insensia", date: "04/2023 - 06/2023", color: "green", points: ["Développement et maintenance d'interfaces de gestion d'appareils de contrôle de l'environnement intérieur des bâtiments.", "Récupération et transmission de données via le protocole MQTT.", "Réalisation de tests unitaires.", "Déploiement du site sur serveur via FTP et conteneurisation Docker."], tags: ["Tests Unitaires", "React", "MQTT", "JUnit", "JavaScript", "Docker"] },
  ],
  en: [
    { title: "Automated lead generation workflow", company: "Freelance - Preparatory phase", date: "07/2026", color: "green", points: ["Pre-configuration of authentication and ad search based on predefined filters.", "Setup of an automated contact process using Computer Vision techniques.", "Configuration of Docker containers for the application environment.", "Deployment on an Amazon VPC (AWS)."], tags: ["Computer Vision", "Playwright", "Selenium", "Docker", "AWS (VPC)"] },
    { title: "Application Engineer Intern - TestRunner", company: "Groupe COVEA", date: "02/2025 - 07/2025", color: "cyan", points: ["Study and implementation of an architectural vision.", "Industrialization of application development.", "Technical design of functional evolutions.", "Implementation and testing of features.", "Deployment of the application on a Tomcat server.", "Skill growth in operational use and maintenance."], tags: ["End-to-End Test", "Unit Tests", "Java", "Spring", "Jenkins", "Tomcat"] },
    { title: "Application Developer Intern - performance shooting monitoring", company: "MAIF", date: "04/2024 - 06/2024", color: "yellow", points: ["Modeling the application architecture.", "Design of modules for data centralization and persistence.", "Development of adapters for performance tool integration.", "Unit tests to validate the service model implementation.", "Creation of a user interface in React.js."], tags: ["Hexagonal Architecture", "TDD", "Clean Code", "React", "Java", "JUnit"] },
    { title: "Web development internship (React)", company: "Insensia", date: "04/2023 - 06/2023", color: "green", points: ["Development and maintenance of management interfaces for indoor environmental control devices.", "Data retrieval and transmission via the MQTT protocol.", "Unit test implementation.", "Deployment of the site on a server via FTP and Docker containerization."], tags: ["Unit Tests", "React", "MQTT", "JUnit", "JavaScript", "Docker"] },
  ],
} as const;

const copy = {
  fr: {
    navCta: "Me Contacter",
    menuToggle: "Ouvrir le menu",
    menuToggleClose: "Fermer le menu",
    heroEyebrow: "PROFIL TECHNIQUE",
    role: "Développeur Informatique",
    portfolioButton: "Voir le Portfolio",
    scroll: "Défiler pour explorer",
    profileTitle: "Profil",
    profileIntro1: "Jeune diplômé d'un Master en Informatique, spécialisé en architecture logicielle, je suis un passionné de développement et d'innovations technologiques. Mon parcours académique, complété par plusieurs stages pratiques, m'a permis d'acquérir une solide base technique et une capacité d'adaptation face aux défis complexes.",
    profileIntro2: "Je recherche activement un poste de Développeur logiciel où je pourrai mettre à profit mes compétences en conception et développement, tout en contribuant activement aux projets de l'entreprise. Je suis motivé, rigoureux et prêt à m'investir pleinement dans de nouvelles missions stimulantes.",
    levelLabel: "Master Informatique",
    levelValue: "Architecte Logiciel",
    specializationLabel: "Spécialisation",
    specializationValue: "Développement logiciel, web & automatisation",
    experienceTitle: "Expériences Professionnelles & Projets",
    skillsTitle: "Arsenal Technique",
    skillCardMain: "Stack Technologique Principale",
    expertiseTitle: "Domaines d'Expertise",
    strengthsTitle: "Savoir-Être",
    educationTitle: "Formation",
    contactTitle: "Prêt à Collaborer ?",
    contactText: "Je suis activement à la recherche de nouvelles opportunités pour mettre en pratique mes compétences en développement informatique et logiciel.",
    footerText: "© 2024 Portfolio Aaron Randrianarisona. Tous droits réservés.",
    languageLabel: "Sélection de langue",
  },
  en: {
    navCta: "Contact Me",
    menuToggle: "Open menu",
    menuToggleClose: "Close menu",
    heroEyebrow: "TECHNICAL PROFILE",
    role: "Software Developer",
    portfolioButton: "View Portfolio",
    scroll: "Scroll to explore",
    profileTitle: "Profile",
    profileIntro1: "A recent graduate of a Master of Computer Science focused on software architecture, I am passionate about software development and technological innovation. My academic background, enhanced by several practical internships, has given me a solid technical foundation and strong adaptability to complex challenges.",
    profileIntro2: "I am actively seeking a software developer role where I can apply my skills in design and development while contributing meaningfully to the company's projects. I am motivated, rigorous, and ready to fully commit to new and stimulating missions.",
    levelLabel: "Master in Computer Science",
    levelValue: "Software Architect",
    specializationLabel: "Specialization",
    specializationValue: "Software, web & automation development",
    experienceTitle: "Professional Experience & Projects",
    skillsTitle: "Technical Arsenal",
    skillCardMain: "Core Tech Stack",
    expertiseTitle: "Expertise Areas",
    strengthsTitle: "Soft Skills",
    educationTitle: "Education",
    contactTitle: "Ready to Collaborate?",
    contactText: "I am actively looking for new opportunities to apply my skills in software and computer development.",
    footerText: "© 2026 Aaron Randrianarisona Portfolio. All rights reserved.",
    languageLabel: "Language selection",
  },
} as const;

const coreSkills = {
  fr: ["Java", "Spring", "JavaScript", "PHP", "Symfony", "Selenium", "Playwright", "JUnit", "Docker", "AWS", "Git", "SVN", "FileZilla", "React", "MQTT"],
  en: ["Java", "Spring", "JavaScript", "PHP", "Symfony", "Selenium", "Playwright", "JUnit", "Docker", "AWS", "Git", "SVN", "FileZilla", "React", "MQTT"],
} as const;

const expertise = {
  fr: ["Architecture Logicielle", "Processus Métier", "Développement Web", "Administration Réseau"],
  en: ["Software Architecture", "Business Processes", "Web Development", "Network Administration"],
} as const;

const strengths = {
  fr: ["Rigueur et Organisation", "Capacité d'Adaptation", "Travail en Équipe", "Autonomie", "Capacité de Concentration"],
  en: ["Rigour and Organization", "Adaptability", "Teamwork", "Autonomy", "Focus and Concentration"],
} as const;

function Icon({ children }: { children: string }) { return <span className="material-symbols-outlined" aria-hidden="true">{children}</span>; }
function SectionHeading({ title, centered = false }: { title: string; centered?: boolean }) { return <div className={`section-heading ${centered ? "centered" : ""}`}><h2>{title}</h2><div /></div>; }
function List({ items }: { items: readonly string[] }) { return <ul className="simple-list">{items.map((item) => <li key={item}><span />{item}</li>)}</ul>; }
function SkillCard({ title, icon, children, className = "" }: { title: string; icon: string; children: React.ReactNode; className?: string }) { return <article className={`skill-card ${className}`}><h3><Icon>{icon}</Icon>{title}</h3>{children}</article>; }
function EducationCard({ year, title, subtitle, color }: { year: string; title: string; subtitle: string; color: string }) { return <article className={`education-card ${color}`}><Icon>school</Icon><div className="education-logo"><Image src="/Lr-logo.png" fill={true} alt="La Rochelle Université logo" className="object-contain flex" /></div><div><span className="education-year">{year}</span><h3>{title}</h3><p>{subtitle}</p><hr /><div className="education-institution"><strong>La Rochelle Université</strong></div></div></article>; }

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "fr";
  const stored = window.localStorage.getItem("portfolio-language");
  if (stored === "fr" || stored === "en") return stored;
  return navigator.language.toLowerCase().startsWith("en") ? "en" : "fr";
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const initialLanguage = getInitialLanguage();
    setLanguage(initialLanguage);
    document.documentElement.lang = initialLanguage;
  }, []);

  useEffect(() => {
    const sections = navigation[language].map(([, id]) => document.getElementById(id));
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)), { rootMargin: "-25% 0px -65%" });
    sections.forEach((section) => section && observer.observe(section));
    const reveals = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.1 });
    reveals.forEach((element) => revealObserver.observe(element));
    return () => { observer.disconnect(); revealObserver.disconnect(); };
  }, [language]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio-language", language);
      document.documentElement.lang = language;
    }
  }, [language]);

  const currentNavigation = navigation[language];
  const currentCopy = copy[language];
  const currentExperiences = experiences[language];
  const currentCoreSkills = coreSkills[language];
  const currentExpertise = expertise[language];
  const currentStrengths = strengths[language];

  return <div className="site-shell">
    <nav className="top-nav"><div className="nav-inner"><a className="brand" href="#home">Aaron R.</a><div className="language-switch" aria-label={currentCopy.languageLabel}><button type="button" className={language === "fr" ? "lang-button active" : "lang-button"} onClick={() => setLanguage("fr")}>FR</button><button type="button" className={language === "en" ? "lang-button active" : "lang-button"} onClick={() => setLanguage("en")}>EN</button></div><div className={`nav-links ${menuOpen ? "is-open" : ""}`}>{currentNavigation.map(([label, id]) => <a key={id} className={activeSection === id ? "active" : ""} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="nav-cta mobile-cta" href="#contact" onClick={() => setMenuOpen(false)}>{currentCopy.navCta}</a></div><a className="nav-cta desktop-cta" href="#contact">{currentCopy.navCta}</a><button className="menu-toggle" type="button" aria-label={menuOpen ? currentCopy.menuToggleClose : currentCopy.menuToggle} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon>{menuOpen ? "close" : "menu"}</Icon></button></div></nav>
    <main>
      <section className="hero" id="home"><div className="hero-content reveal-visible"><p className="eyebrow">{currentCopy.heroEyebrow}</p><h1>Aaron Randrianarisona</h1><h2>{currentCopy.role}</h2><div className="hero-actions"><a className="button button-primary" href="#experience">{currentCopy.portfolioButton}</a><a className="button button-outline" href="#contact">{currentCopy.navCta}</a></div></div><a className="scroll-cue" href="#about"><span>{currentCopy.scroll}</span><Icon>keyboard_arrow_down</Icon></a></section>
      <section className="section about-section" id="about"><div className="content-grid about-grid reveal"><div className="portrait-frame"><Image src="/images/profile.jpg" fill={true} alt="Aaron Randrianarisona" className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500 shadow-lg border border-white/10"/></div><div><SectionHeading title={currentCopy.profileTitle} /><p className="lead">{currentCopy.profileIntro1}</p><p className="lead">{currentCopy.profileIntro2}</p><div className="profile-facts"><div><strong>{currentCopy.levelLabel}</strong><span>{currentCopy.levelValue}</span></div><div><strong>{currentCopy.specializationLabel}</strong><span>{currentCopy.specializationValue}</span></div></div></div></div></section>
      <section className="section experience-section" id="experience"><div className="content-width"><SectionHeading title={currentCopy.experienceTitle} /><div className="timeline">{currentExperiences.map((experience) => <article className={`experience-card ${experience.color} reveal`} key={experience.title}><div className="experience-head"><div><h3>{experience.title}</h3><h4>{experience.company}</h4></div><time>{experience.date}</time></div><ul>{experience.points.map((point) => <li key={point}><Icon>chevron_right</Icon><span>{point}</span></li>)}</ul><div className="tag-list">{experience.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div></div></section>
      <section className="section skills-section" id="skills"><div className="content-width reveal"><SectionHeading title={currentCopy.skillsTitle} centered /><div className="skills-grid"><SkillCard title={currentCopy.skillCardMain} icon="terminal" className="core-skills"><div className="skill-tags">{currentCoreSkills.map((skill) => <span key={skill}>{skill}</span>)}</div></SkillCard><SkillCard title={currentCopy.expertiseTitle} icon="architecture"><List items={currentExpertise} /></SkillCard><SkillCard title={currentCopy.strengthsTitle} icon="psychology"><List items={currentStrengths} /></SkillCard></div></div></section>
      <section className="section education-section" id="education"><div className="content-width reveal"><SectionHeading title={currentCopy.educationTitle} /><div className="education-grid"><EducationCard year="2023 – 2025" title={language === "fr" ? "Master Informatique" : "Master of Computer Science"} subtitle={language === "fr" ? "Parcours architecte logiciel" : "Software Architecture"} color="cyan" /><EducationCard year="2020 – 2023" title={language === "fr" ? "Licence Informatique" : "Bachelor of Computer Science"} subtitle={language === "fr" ? "Informatique Générale" : "General Computer Science"} color="green" /></div></div></section>
      <section className="contact-section" id="contact"><div className="contact-content reveal"><SectionHeading title={currentCopy.contactTitle} centered /><p>{currentCopy.contactText}</p><a className="button button-primary contact-button" href="mailto:aaronrandria@gmail.com"><Icon>mail</Icon>aaronrandria@gmail.com</a></div></section>
    </main>
    <footer><div><a className="brand" href="#home">Aaron R.</a><p>{currentCopy.footerText}</p></div><div className="social-links"><a href="https://linkedin.com/in/aaron-randrianarisona-Sa0223210" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/AaronRandrianarisona" target="_blank" rel="noreferrer">GitHub</a></div></footer>
  </div>;
}
