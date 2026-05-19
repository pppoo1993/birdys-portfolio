export interface SiteConfig {
  name: string;
  title: string;
  subtitle: string;
  navLinks: NavLink[];
}

export interface NavLink {
  label: string;
  sectionId: string;
}

export interface BioSection {
  heading: string;
  body: string;
}

export interface IntroductionData {
  name: string;
  title: string;
  photoPath: string;
  avatarPath: string;
  quote: string;
  bioSections: BioSection[];
  hobbies: string[];
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  techStack: string[];
  companyUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  techStack: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}
