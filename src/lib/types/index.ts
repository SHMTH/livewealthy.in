import { StaticImageData } from 'next/image';

export type SocialLinksType = {
  [link: string]: string;
};

export type LeaderType = {
  id: string;
  name: string;
  role: string;
  img: string | StaticImageData;
  bio: string | string[];
  socials: SocialLinksType;
};
