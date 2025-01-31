import { ElementType, HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  id?: string;
}

const Wrapper = ({
  children,
  as = 'section',
  className = '',
  id = '',

  ...rest
}: Props) => {
  const CustomTag = `${as}` as ElementType;

  return (
    <CustomTag id={id} className={`py-20 md:py-24 ${className}`} {...rest}>
      <div className="container">{children}</div>
    </CustomTag>
  );
};

export default Wrapper;
