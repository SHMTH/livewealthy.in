import { Button } from '@/components';
import contactSection from '@/lib/content/contact';

import Wrapper from './layout/Wrapper';

const Contact = () => {
  const { title, subtitle, description, cta } = contactSection;
  return (
    <Wrapper
      id="contact"
      className="max-w-xl mx-auto text-center !py-16 md:!py-24 mb-20 md:mb-32"
    >
      {subtitle && (
        <p className="mb-3 font-mono text-sm capitalize text-accent">
          {subtitle}
        </p>
      )}
      {title && <h2 className="heading-secondary !mb-5">{title}</h2>}

      {description && <p>{description}</p>}

      <Button
        type="calendly"
        title={cta.name}
        url={cta.url}
        size="lg"
        center
        className="mt-12"
      />
    </Wrapper>
  );
};

export default Contact;
