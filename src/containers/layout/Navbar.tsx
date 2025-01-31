'use client';

import { Button, Link, NavButton } from '@/components';
import Logo from '@/images/logo.svg';
import { calendly } from '@/lib/content/company';
import Image from 'next/image';
import { useState } from 'react';
import navbarSection from '~/content/navbar';
import useWindowWidth from '~/hooks/use-window-width';
import { getBreakpointsWidth } from '~/utils/helper';

type NavItemsProps = {
  href?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
};

const NavItem = ({ href, children, onClick }: NavItemsProps) => {
  return (
    <li className="group">
      <Link
        href={href || `/#${children}`}
        className="block p-2 duration-500 hover:text-accent"
        onClick={onClick}
        withPadding
      >
        {children}
      </Link>
    </li>
  );
};

const Navbar = () => {
  const { navLinks } = navbarSection;
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');

  return (
    <header
      id="navbar"
      className="inset-x-0 top-0 right-0 z-50 py-5 duration-500 backdrop-blur-lg"
    >
      <div className="container flex items-center justify-between">
        <h1 className="relative text-2xl capitalize text-accent group top-1">
          <a href="/" className="block">
            <Image src={Logo} alt="logo" width={80} />
          </a>
        </h1>

        <NavButton
          onClick={() => {
            setNavbarCollapsed((prev) => !prev);
          }}
          navbarCollapsed={navbarCollapsed}
          className="md:invisible"
        />

        {(navbarCollapsed || windowWidth > md) && (
          <nav
            className={`capitalize absolute text-sm duration-200 md:bg-transparent z-50 w-[90%] left-1/2 -translate-x-1/2 top-full h-max rounded-xl shadow-xl p-6 bg-bg-secondary md:block md:static md:w-auto md:left-auto md:transform-none md:top-auto md:rounded-none md:shadow-none md:p-0 md:h-auto`}
          >
            <ul
              className={`list-style-none flex flex-col gap-3 xl:gap-10 md:flex-row items-stretch md:items-center`}
            >
              {navLinks.map(({ name, url }, i) => (
                <NavItem
                  key={i}
                  href={url}
                  onClick={() => setNavbarCollapsed(false)}
                >
                  {name}
                </NavItem>
              ))}
              <div className="flex flex-col justify-between gap-5 md:flex-row xl:gap-6 md:items-center">
                <Button type="calendly" title="invest" url={calendly.invest} />
              </div>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
