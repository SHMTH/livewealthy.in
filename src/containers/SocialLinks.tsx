import { SocialIcon } from '@/components';
import { SocialLinksType } from '@/lib/types';
import { ICON_SET } from '@/lib/utils/config';
import React from 'react';

type Props = {
  className?: string;
  links: SocialLinksType;
  center?: boolean;
};

const SocialIcons = ({ className, links, center = false }: Props) => {
  return (
    <ul
      className={`flex gap-3 mb-3 ${
        center ? 'justify-center' : ''
      } ${className}`}
    >
      {Object.keys(links).map((type) => (
        <SocialIcon
          key={links[type]}
          icon={`${ICON_SET}:${type}`}
          url={links[type]}
        />
      ))}
    </ul>
  );
};

export default SocialIcons;
