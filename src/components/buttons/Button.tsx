import Link from 'next/link';

import CalendlyBtn from './CalendlyBtn';

interface DefaultProps {
  className?: string;
  variant?: 'outlined' | 'calendly';
  size?: 'lg' | 'sm';
  center?: boolean;
}

interface LinkProps extends DefaultProps {
  href: string;
  children: React.ReactNode | string;
  sameTab?: boolean;
}

interface ButtonProps extends DefaultProps {
  children: React.ReactNode | string;
  onClick?: (event: React.MouseEvent) => void;
}
interface CalendlyProps extends DefaultProps {
  title: string;
  url: string;
}

type Props =
  | ({
      type?: 'button';
    } & ButtonProps)
  | ({
      type: 'link';
    } & LinkProps)
  | ({
      type: 'calendly';
    } & CalendlyProps);

const Button = (props: Props) => {
  const {
    className,
    type = 'button',
    size = 'sm',
    center = false,
    ...rest
  } = props;

  const classes = `${
    size === 'sm'
      ? 'p-2 px-4 text-sm border'
      : 'text-sm p-4 px-6 border-[1.5px]'
  } block ${
    center ? 'mx-auto' : ''
  } w-fit font-mono capitalize rounded border-accent text-accent hover:bg-accent-light focus:outline-none focus:bg-accent-light duration-150 cursor-pointer ${className}`;

  if (props.type === 'link') {
    return (
      <Link
        className={classes}
        href={props.href}
        target={props.sameTab ? '_self' : '_blank'}
        rel="noopener noreferrer"
        {...rest}
      >
        {props.children}
      </Link>
    );
  }

  if (props.type == 'button') {
    return (
      <button
        type={props.type}
        className={classes}
        onClick={props.onClick}
        {...rest}
      >
        {props.children}
      </button>
    );
  }

  if (props.type == 'calendly') {
    return (
      <CalendlyBtn url={props.url} className={classes} title={props.title} />
    );
  }

  return <></>;
};

export default Button;
