'use client';

import { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';

type Props = {
  title: string;
  className?: string;
  url: string;
};

const CalendlyBtn = ({ title, className = '', url }: Props) => {
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById('root');
    if (el) setRootEl(el);
  }, []);

  return (
    <>
      {rootEl ? (
        <PopupButton
          className={className}
          url={url}
          rootElement={rootEl}
          text={title}
        />
      ) : (
        <button className={className}>{title}</button>
      )}
    </>
  );
};

export default CalendlyBtn;
