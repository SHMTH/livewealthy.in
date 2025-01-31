import CEOImg from '@/images/ceo.png';

import { LeadershipSectionType } from '../types/sections';

const leadershipSection: LeadershipSectionType = {
  title: 'leadership',
  subtitle: '',
  leaders: [
    {
      id: 'ceo',
      name: 'Mohammad Mukadam',
      role: 'Chief investment officer',
      img: CEOImg,
      bio: [
        'Mohammad Mukadam is the Founder and Chief Investment Officer of SHMTH Capital. He is a seasoned entrepreneur with a decade-long track record. His journey has furnished him with an invaluable understanding of business dynamics and market trends.',
        "Mohammad's expertise lies in his ability to capitalize on market opportunities. He transitioned from traditional entrepreneurship to the dynamic world of digital assets, where he crafts complex trading strategies that generate consistent growth, consistently outperforming market indices.",
        'Armed with an MBA in Finance and a keen understanding of risk management, Mohammad utilizes cryptocurrency as a unique investment vehicle, offering diversified growth opportunities for our clients.',
        'At SHMTH Capital, Mohammad leads a dedicated team in creating cutting-edge tools and conducting rigorous research. He views cryptocurrency not merely as a trading asset, but as a revolutionary force set to redefine financial systems.',
      ],
      socials: {
        linkedin: 'https://www.linkedin.com/in/1mukadam',
        twitter: 'https://twitter.com/moe_btc',
      },
    },
  ],
};

export default leadershipSection;
