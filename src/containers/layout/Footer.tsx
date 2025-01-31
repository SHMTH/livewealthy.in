import { company, socialLinks } from '@/lib/content/company';
import { getYear } from '@/lib/utils/helper';

import { SocialLinks } from '..';

const Footer = () => {
  return (
    <footer className="max-w-lg mx-auto mb-8 font-mono text-xs text-center">
      <hr className="hidden mb-5 border-text border-[0.5px] md:block" />

      {/* <SocialLinks links={socialLinks} center /> */}

      {/* Copyright */}
      <p className="font-sans">
        &copy; {getYear()} {company.name}.
      </p>
    </footer>
  );
};

export default Footer;
