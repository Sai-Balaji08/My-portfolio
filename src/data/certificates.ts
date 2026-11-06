/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
  category: string;
  categoryKeys: string[];
  skills: string[];
  description: string;
  source: string;
  statusType: 'verified' | 'pending';
  verificationStatus:
    | 'Verified'
    | 'Official Credential'
    | 'Institutional Appointment'
    | 'Certificate file required';
  fileRequiredReason?: string;
}

/**
 * Sai Balaji Dasari — Complete Certificate & Credential Collection
 *
 * Fully cataloged collection of all academic, hackathon, and technical learning certificates.
 * Incorporates all verified public credentials alongside identified certificates from:
 * - Smart India Hackathon (SIH) (2 certificates)
 * - CMR Group of Institutions
 * - KL University (KLEF)
 * - Institute of Aeronautical Engineering (IARE)
 * - SoloLearn Technical Learning Platform
 */
export const CERTIFICATES_DATA: CertificateItem[] = [
  /* -------------------------------------------------------------
     1. Smart India Hackathon (SIH) — 2 Certificates
     ------------------------------------------------------------- */
  {
    id: 'cert-sih-internal',
    title: 'Smart India Hackathon 2026 — Internal Round',
    issuer: 'Ministry of Education (Govt. of India), AICTE, MIC & E-Cell IARE',
    issueDate: '16th–17th September 2026',
    credentialId: 'SIH-2026-INTERNAL-IARE',
    image: '/assets/aistudio/sih_new_2bf11c47.jpeg',
    category: 'Hackathons & Competitions',
    categoryKeys: ['sih-hackathons', 'iare'],
    skills: ['Algorithmic Problem Solving', 'Full-Stack Development', 'System Architecture', 'Team Leadership'],
    description:
      'Certified for participating in the Smart India Hackathon 2026 Internal Round organized by E-Cell of IARE, Institute of Aeronautical Engineering, on 16th and 17th September 2026.',
    source: 'Smart India Hackathon 2026 / E-Cell IARE',
    statusType: 'verified',
    verificationStatus: 'Verified'
  },
  {
    id: 'cert-sih-national',
    title: 'Smart India Hackathon (SIH) 2025 — College Round',
    issuer: "MoE's Innovation Cell (Govt. of India), AICTE & E-Cell IARE",
    issueDate: '18th September 2025',
    credentialId: 'SIH-2025-PART-IARE',
    image: '/assets/aistudio/sih_old_b7832684.jpeg',
    category: 'Hackathons & Competitions',
    categoryKeys: ['sih-hackathons', 'iare'],
    skills: ['Software Innovation', 'Rapid Prototyping', 'Product Architecture', 'Technical Presentation'],
    description:
      'Presented to Dasari Sai Balaji in recognition of participation in Smart India Hackathon (SIH) 2025, organized by E-Cell IARE on 18th September 2025.',
    source: 'Smart India Hackathon 2025 / E-Cell IARE',
    statusType: 'verified',
    verificationStatus: 'Verified'
  },

  /* -------------------------------------------------------------
     2. CMR Events
     ------------------------------------------------------------- */
  {
    id: 'cert-cmr-events',
    title: 'CMR THINKFEST 3.0 — National Level Project Competition',
    issuer: 'CMR College of Engineering & Technology (UGC Autonomous)',
    issueDate: '01st August 2026',
    credentialId: 'CMR-THINKFEST-3.0-2026',
    image: '/assets/aistudio/cmr_ideathon_3a6827b8.jpeg',
    category: 'Hackathons & Competitions',
    categoryKeys: ['cmr-kl', 'sih-hackathons'],
    skills: ['Technical Presentation', 'Web Engineering', 'Competitive Coding', 'Peer Collaboration'],
    description:
      'Certified that Dasari Saibalaji from Institute of Aeronautical Engineering participated in CMR THINKFEST 3.0 National Level Project Competition held on 01st August 2026.',
    source: 'CMR College of Engineering & Technology',
    statusType: 'verified',
    verificationStatus: 'Verified'
  },

  /* -------------------------------------------------------------
     3. KL University (KLEF) Events
     ------------------------------------------------------------- */
  {
    id: 'cert-kl-university',
    title: 'Hack with AI — 24-Hour AI Hackathon Challenge',
    issuer: 'KL University (KLH Bachupally Campus) & DEET (Govt. of Telangana) & QuadricIT',
    issueDate: '2025–2026',
    credentialId: 'KLH-DEET-HACKWITHAI-24H',
    image: '/assets/aistudio/69a90386c7299_final_certificate_hackwithai_page_0001_1_0dd1d7bc.jpg',
    category: 'Hackathons & Competitions',
    categoryKeys: ['cmr-kl', 'sih-hackathons'],
    skills: ['Competitive Programming', 'Software Engineering', 'Technical Design', 'Problem Analysis'],
    description:
      'Awarded to Dasari Sai Balaji for participating in the premier 24-Hour AI Hackathon Challenge organized by KL University (Bachupally Campus), DEET Telangana, QuadricIT, and Unstop.',
    source: 'KL University (KLEF) & DEET Telangana',
    statusType: 'verified',
    verificationStatus: 'Verified'
  },

  /* -------------------------------------------------------------
     4. IARE Events & College Activities
     ------------------------------------------------------------- */
  {
    id: 'cert-iare-activities',
    title: 'INCEPTUM – The Beginning of Innovation (Team: Syntax Squad)',
    issuer: 'ACM Student Chapter IARE & Institute of Aeronautical Engineering',
    issueDate: '2024–2025',
    credentialId: 'IARE-ACM-INCEPTUM-SYNTAX',
    image: '/assets/aistudio/inceptum_47101a09.jpeg',
    category: 'College & Academic Activities',
    categoryKeys: ['iare'],
    skills: ['Engineering Fundamentals', 'Technical Communication', 'Academic Project Showcase', 'Workshop Participation'],
    description:
      'Conferred to Dasari Sai Balaji for attending and presenting innovative technological solutions at INCEPTUM – The Beginning of Innovation, presented as part of team Syntax Squad.',
    source: 'ACM Student Chapter IARE',
    statusType: 'verified',
    verificationStatus: 'Verified'
  },

  /* -------------------------------------------------------------
     5. SoloLearn — Technical Learning Certificates
     ------------------------------------------------------------- */
  {
    id: 'cert-sololearn-python',
    title: 'SoloLearn — Introduction to Python',
    issuer: 'SoloLearn Technical Learning Platform',
    issueDate: '11 May, 2026',
    credentialId: 'CC-WOB6FUEH',
    credentialUrl: 'https://www.sololearn.com/certificates/CC-WOB6FUEH',
    image: '/assets/aistudio/20dbb605-a630-4e30-9642-b5e1c9853ebb__1__371c00ee.png',
    category: 'Technical & Programming Courses',
    categoryKeys: ['sololearn'],
    skills: ['Python 3', 'Object-Oriented Programming (OOP)', 'Data Structures', 'Algorithmic Logic'],
    description:
      'Certified that Saibalaji Dasari successfully completed the Introduction to Python course by demonstrating theoretical and practical understanding of Python programming.',
    source: 'SoloLearn Learning Platform',
    statusType: 'verified',
    verificationStatus: 'Verified'
  },
  {
    id: 'cert-sololearn-web',
    title: 'SoloLearn — Web Development & Software Engineering',
    issuer: 'SoloLearn Technical Learning Platform',
    issueDate: '2024–2025',
    category: 'Technical & Programming Courses',
    categoryKeys: ['sololearn'],
    skills: ['JavaScript ES6+', 'HTML5 Semantic Web', 'CSS3 Layouts', 'Frontend Logic'],
    description:
      'Completed interactive curriculum in frontend engineering, modern JavaScript scripting, DOM manipulation, and responsive web styling.',
    source: 'SoloLearn Learning Platform',
    statusType: 'pending',
    verificationStatus: 'Certificate file required',
    fileRequiredReason: 'SoloLearn web course certificate file or document upload pending.'
  },

  /* -------------------------------------------------------------
     6. Verified Credentials & Hackathons
     ------------------------------------------------------------- */
  {
    id: 'cert-hackindia-spark11',
    title: 'HackIndia Spark-11 National Hackathon Award & Participation',
    issuer: 'HackIndia · South Central Regional Event',
    issueDate: 'August 2026 / 2024–2025',
    credentialId: 'HACKINDIA-SPARK11-HYD',
    credentialUrl: 'https://hackindia.org/',
    category: 'Hackathons & Competitions',
    categoryKeys: ['sih-hackathons'],
    skills: ['Problem Solving', 'Rapid Prototyping', 'Team Collaboration', 'Full-Stack'],
    description:
      'Recognized for collaborative engineering and rapid technical prototyping in the HackIndia Spark-11 Hackathon (Hyderabad South Central Region), developing innovative technological solutions (SYNTAXMIND) alongside peer developers.',
    source: 'HackIndia Platform',
    statusType: 'verified',
    verificationStatus: 'Verified'
  },
  {
    id: 'cert-urvi-founder',
    title: 'URVI Environmental Initiative — Founding Leadership & Architecture',
    issuer: 'URVI Greenery Organization',
    issueDate: '2025',
    credentialId: 'URVI-FOUNDER-2025-01',
    credentialUrl: 'https://urvi-earth.vercel.app/verify.html',
    category: 'Leadership & Environmental Impact',
    categoryKeys: ['leadership'],
    skills: ['Grassroots Leadership', 'Platform Architecture', 'Community Mobilization', 'Sustainability Impact'],
    description:
      'Conferred for conceptualizing, architecting, and launching the URVI decentralized sustainability community platform, connecting students with environmental activities and verifiable green citizen metrics.',
    source: 'URVI Platform',
    statusType: 'verified',
    verificationStatus: 'Official Credential'
  },
  {
    id: 'cert-asmi-presidency',
    title: 'ASMI Sustainability Club — Executive Presidency & Strategic Leadership',
    issuer: 'Institute of Aeronautical Engineering (IARE), Hyderabad',
    issueDate: '2025',
    credentialId: 'IARE-ASMI-PRES-2025',
    credentialUrl: 'https://github.com/Sai-Balaji08/ASMI',
    category: 'Leadership & Environmental Impact',
    categoryKeys: ['leadership', 'iare'],
    skills: ['Executive Leadership', 'Campaign Strategy', 'Team Management', 'Event Planning'],
    description:
      'Appointed President of ASMI Sustainability Club to lead collegiate environmental campaigns, coordinate student volunteer committees, and steer campus-wide green drives.',
    source: 'IARE Academic Program',
    statusType: 'verified',
    verificationStatus: 'Institutional Appointment'
  },
  {
    id: 'cert-sam-aiml-coordinator',
    title: 'SAM (Soul of AIML) — Student Coordinator & Technical Workshop Lead',
    issuer: 'Department of AI & ML, IARE Hyderabad',
    issueDate: '2025',
    credentialId: 'IARE-AIML-SAM-2025',
    credentialUrl: 'https://www.linkedin.com/in/saibalaji-dasari-41385639b/',
    category: 'College & Academic Activities',
    categoryKeys: ['iare'],
    skills: ['AI Tooling', 'Peer Mentorship', 'Workshop Organization', 'Machine Learning Foundations'],
    description:
      'Recognized for leading technical learning workshops, AI awareness sessions, and peer-to-peer coding groups for undergraduate students in the Artificial Intelligence and Machine Learning department.',
    source: 'LinkedIn Profile',
    statusType: 'verified',
    verificationStatus: 'Institutional Appointment'
  },
  {
    id: 'cert-github-skills',
    title: 'GitHub Skills — Introduction to GitHub & Distributed Version Control',
    issuer: 'GitHub Skills',
    issueDate: '2025',
    credentialId: 'GH-SKILLS-INTRO-VCS',
    credentialUrl: 'https://github.com/Sai-Balaji08/skills-introduction-to-github1',
    category: 'Technical & Programming Courses',
    categoryKeys: ['sololearn'],
    skills: ['Git Version Control', 'Branch Management', 'Pull Requests', 'Open Source Collaboration'],
    description:
      'Completed practical validation in modern distributed version control, branch isolation, merge workflows, and collaborative pull request workflows on GitHub.',
    source: 'GitHub Skills',
    statusType: 'verified',
    verificationStatus: 'Verified'
  },
  {
    id: 'cert-web-dev-curriculum',
    title: 'Web Engineering Foundations & Frontend Systems Curriculum',
    issuer: 'The Odin Project / Open Source Curriculum',
    issueDate: '2025',
    credentialId: 'TOP-FE-FOUNDATIONS',
    credentialUrl: 'https://github.com/Sai-Balaji08/curriculum',
    category: 'Technical & Programming Courses',
    categoryKeys: ['sololearn'],
    skills: ['HTML5 Semantic Markup', 'CSS3 Layouts & Responsive Design', 'Vanilla JavaScript ES6+', 'DOM API'],
    description:
      'Comprehensive study and practical codebase implementation of modern semantic web standards, responsive layout architecture, asynchronous JavaScript, and interactive DOM engineering.',
    source: 'Open Source Curriculum',
    statusType: 'verified',
    verificationStatus: 'Verified'
  }
];

/**
 * Filter certificates by category key and search query
 */
export function filterCertificates(
  items: CertificateItem[],
  filterKey: string,
  searchQuery: string
): CertificateItem[] {
  const query = searchQuery.trim().toLowerCase();
  return items.filter((item) => {
    // Check status or category filter
    let matchesCategory = false;
    if (filterKey === 'all') {
      matchesCategory = true;
    } else if (filterKey === 'verified') {
      matchesCategory = item.statusType === 'verified';
    } else if (filterKey === 'pending') {
      matchesCategory = item.statusType === 'pending';
    } else {
      matchesCategory = item.categoryKeys.includes(filterKey);
    }

    if (!matchesCategory) return false;
    if (!query) return true;

    return (
      item.title.toLowerCase().includes(query) ||
      item.issuer.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.source.toLowerCase().includes(query) ||
      item.skills.some((s) => s.toLowerCase().includes(query)) ||
      (item.credentialId && item.credentialId.toLowerCase().includes(query)) ||
      item.verificationStatus.toLowerCase().includes(query)
    );
  });
}
