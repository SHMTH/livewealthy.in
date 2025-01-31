import { LeaderCard } from '@/components';
import leadershipSection from '@/lib/content/leadership';
import React from 'react';

import Wrapper from './layout/Wrapper';

const Leadership = () => {
  const { title, subtitle, leaders } = leadershipSection;

  return (
    <Wrapper id="leadership">
      <div className="mb-12 text-center md:mb-24">
        <h1 className="heading-secondary !mb-3">{title}</h1>
        <p className="mb-3 text-mono">{subtitle}</p>
      </div>

      <div className="space-y-16">
        {leaders.map((leader) => (
          <LeaderCard key={leader.id} {...leader} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Leadership;
