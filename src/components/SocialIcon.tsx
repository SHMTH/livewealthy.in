'use client';

import { Icon } from '@iconify/react';

type Props = {
  icon: string;
  url: string;
  className?: string;
};

const SocialIcon = ({ icon, url, className = '' }: Props) => {
  return (
    <li>
      <a
        href={url}
        target="_blank"
        className={`block text-sm p-2.5 hover:text-accent hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-200 ${className}`}
      >
        <Icon icon={icon} width={24} height={24} />
      </a>
    </li>
  );
};

export default SocialIcon;
