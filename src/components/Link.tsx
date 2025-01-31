'use client';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: React.ReactNode;
  withPadding?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

const Link = ({
  href,
  className = '',
  children,
  onClick = () => {},
  withPadding = false,
  ...rest
}: Props) => {
  if (withPadding) {
    return (
      <a
        href={href}
        className={`group focus:text-accent hover:text-accent ${className}`}
        onClick={onClick}
        {...rest}
      >
        <span className="relative w-fit">
          {children}
          <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full group-focus:w-full bg-accent duration-300 ease-in-scroll"></span>
        </span>
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`relative focus:text-accent hover:text-accent ${className} group`}
      onClick={onClick}
      {...rest}
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full group-focus:outline-none group-focus:w-full bg-accent duration-300 ease-in-scroll"></span>
    </a>
  );
};

export default Link;
