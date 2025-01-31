import { LeaderType, SocialLinksType } from '.';

export interface Section {
  title: string;
}

type NavLinkType = {
  name: string;
  url: string;
};

export interface NavbarSectionType {
  navLinks: NavLinkType[];
}

export interface HeroSectionType extends Section {
  subtitle?: string;
  tagline: string;
  description?: string;
  specialText?: string;
}

export interface LeadershipSectionType extends Section {
  subtitle?: string;
  leaders: LeaderType[];
}
export interface ContactSectionType extends Section {
  subtitle?: string;
  description?: string;
  cta: { name: string; url: string };
}
