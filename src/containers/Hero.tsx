import { Wrapper } from '@/containers';
import TreeImage from '@/images/tree.png';
import heroSection from '@/lib/content/hero';
import Image from 'next/image';

const Hero = () => {
  const { subtitle, title, tagline, description } = heroSection;

  return (
    <Wrapper
      id="hero"
      className="min-h-[85vh] h-full flex flex-col justify-center !py-0"
    >
      <div className="flex flex-col-reverse items-center gap-16 mt-10 text-center md:mt-0 lg:gap-10 lg:flex-row lg:text-left">
        <div className="flex-grow">
          {subtitle && (
            <p className="font-mono text-sm md:text-base text-accent">
              {subtitle}
            </p>
          )}

          <div className="max-w-5xl text-4xl font-bold tracking-tighter lg:text-7xl">
            <h1 className="text-slate-200 capitalize  leading-[1.1]">
              {title}
            </h1>
            {tagline && <h1 className="leading-[1.2]">{tagline}</h1>}
          </div>

          <p className="max-w-xl mt-8 text-base">{description}</p>
        </div>
        <div className="max-w-lg lg:max-w-xl">
          <Image src={TreeImage} alt="tree" priority />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
