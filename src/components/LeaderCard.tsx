import { SocialLinks } from '@/containers';
import { LeaderType } from '@/lib/types';
import Image from 'next/image';
import React from 'react';

const LeaderCard = ({ img, name, role, bio, socials }: LeaderType) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[0.75fr_1fr] w-full gap-10 group">
      <div className="w-full">
        <Image
          width={500}
          height={500}
          src={img}
          alt={name}
          className="object-cover w-full max-w-lg mx-auto transition-all duration-200 grayscale group-hover:grayscale-0"
        />
      </div>
      <div>
        <div className="mb-4 space-y-2 capitalize">
          <h3 className="text-2xl font-medium md:text-3xl text-accent">
            {name}
          </h3>
          <h4 className="text-xl md:text-2xl text-dark-1">{role}</h4>
        </div>
        {typeof bio !== 'string' ? (
          <div className="space-y-3">
            {bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        ) : (
          <p>{bio}</p>
        )}

        <SocialLinks links={socials} className="mt-5 text-accent" />
      </div>
    </div>
  );
};

export default LeaderCard;
