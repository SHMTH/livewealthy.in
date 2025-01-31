'use client';

import { Wrapper } from '@/containers';

const About = () => {
  return (
    <Wrapper id="about">
      <h2 className="heading-secondary">About Us</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row ">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Similar to the Shemitah year's emphasis on rest and renewal, SHMTH
            Capital recognizes the importance of periodic evaluation and
            strategic realignment in the ever-changing crypto landscape. We
            believe that embracing this cyclical nature allows us to navigate
            market dynamics with a unique perspective and strategic advantage.
          </p>

          <p>
            We strive to unlock the power of crypto assets for our investors by
            utilizing a comprehensive investment framework that combines
            rigorous research, advanced analytics, and risk management
            strategies. Our aim is to generate consistent returns while actively
            managing downside risk during volatile market conditions.
          </p>

          <p>
            Just as Shemitah called for debt forgiveness and release, SHMTH
            Capital upholds the values of transparency, integrity, and
            responsible financial stewardship. We prioritize open communication
            with our investors, ensuring that they are well-informed about our
            investment strategies, progress, and performance.
          </p>
        </div>
        {/* <HeroImage src={img} alt={author.name} /> */}
      </main>
    </Wrapper>
  );
};

export default About;
