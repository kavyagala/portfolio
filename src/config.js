// ─────────────────────────────────────────────────────────────
//  SITE CONFIG — edit this file to change everything on the site.
//  Anything left as "" (empty) is simply hidden, so no broken links.
// ─────────────────────────────────────────────────────────────

export const site = {
  // ✏️ REQUIRED: your name (used in navbar logo, hero, footer, page title)
  name: "Kavya Gala",
  // Short line used in the footer
  tagline: "BTech student working at the intersection of data, statistics and machine learning.",

  // Small status pill in the hero. Edit freely, or set to "" to hide.
  currentFocus: "Currently exploring statistical modelling & ML",
};

export const contact = {
  // ✏️ Fill these in. Empty values are hidden automatically.
  email: "kavyabgala@gmail.com",
  github: "https://github.com/kavyagala",
  linkedin: "",   // add later if you want, e.g. "https://www.linkedin.com/in/yourprofile"
};

export const about = {
  // Written from the details you provided — rewrite in your own voice!
  paragraphs: [
    "I'm a BTech student at Mukesh Patel School of Technology Management and Engineering, and I'm happiest when a messy table of numbers starts to tell a story.",
    "My projects so far have taken me through three corners of working with data: predictive modelling, classical statistical analysis, and computer vision. Each one taught me something different about asking a good question before reaching for a model.",
    "Outside the classroom, I've worked as a Data Analyst Intern at Milap Sarees, where I saw data inside a real retail business, and as Logistics Manager at Ville Parle NGO, where the work was less about models and more about making sure people and things got where they needed to be.",
  ],
  interests: [
    "Data analysis",
    "Machine learning",
    "Statistical modelling",
    "Practical problem-solving",
  ],
};

export const education = {
  school: "Mukesh Patel School of Technology Management and Engineering",
  degree: "BTech",
  specialization: "", // optional, e.g. "Computer Engineering"
  period: "2022 – 2028",
};

// visual: "realEstate" | "anova" | "pca"  (picks the illustration)
export const projects = [
  {
    id: "real-estate",
    title: "Real Estate Price Prediction System",
    category: "Machine Learning / Predictive Analytics",
    description:
      "A predictive modelling project focused on estimating real estate prices from relevant property features.",
    tags: ["Predictive Modelling", "Regression", "Feature Analysis"],
    visual: "realEstate",
    liveUrl: "",   // ✏️ optional live demo link
    githubUrl: "", // ✏️ optional repository link
  },
  {
    id: "sector-weightage",
    title: "Sector Weightage Analysis Using ANOVA & Linear Regression",
    category: "Statistical Analysis / Regression",
    description:
      "A statistical analysis project exploring sector weightage through ANOVA and linear regression techniques.",
    tags: ["ANOVA", "Linear Regression", "Statistical Analysis"],
    visual: "anova",
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "pca-face",
    title: "Face Recognition Using PCA",
    category: "Computer Vision / Machine Learning",
    description:
      "A computer vision project exploring face recognition through Principal Component Analysis, a dimensionality-reduction technique.",
    tags: ["PCA", "Dimensionality Reduction", "Computer Vision"],
    visual: "pca",
    liveUrl: "",
    githubUrl: "",
  },
];

export const experience = [
  {
    role: "Data Analyst Intern",
    org: "Milap Sarees",
    type: "Internship",
    period: "", // ✏️ optional, e.g. "May 2025 – Jul 2025"
    description:
      "Gained experience working in a data analyst role inside a retail saree business, seeing how data supports everyday business decisions.",
    lens: "Analytical",
  },
  {
    role: "Logistics Manager",
    org: "Ville Parle NGO",
    type: "Volunteer",
    period: "",
    description:
      "Contributed to NGO activities through logistics management and coordination, keeping plans, people and resources moving together.",
    lens: "Organisational",
  },
];

// Techniques demonstrated by the projects above (not proficiency ratings).
export const skills = [
  {
    group: "Data & Statistics",
    items: ["Data Analysis", "Statistical Analysis", "ANOVA", "Linear Regression"],
  },
  {
    group: "Machine Learning",
    items: [
      "Predictive Modelling",
      "Principal Component Analysis (PCA)",
      "Face Recognition",
      "Machine Learning Fundamentals",
    ],
  },
];

// ✏️ Optional: add only the tools you actually use. Empty list = section hidden.
// Example: ["Python", "pandas", "scikit-learn", "Excel"]
export const tools = [];

export const nav = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
