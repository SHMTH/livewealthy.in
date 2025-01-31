import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../../tailwind.config';

type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const fullConfig = resolveConfig(tailwindConfig);

/**
 * Returns the breakpoint's width
 * @param breakpoint - Configured breakpoints: xs sm md lg xl 2xl
 * @returns width - Width of the breakpoint
 */

export const getBreakpointsWidth = (breakpoint: BreakpointType) => {
  // @ts-ignore
  return +fullConfig?.theme?.screens[breakpoint].slice(0, -2);
};

/**
 * Returns a unique id
 * @returns {String} Unique id format id123..
 */

export const getId = () => `id${Math.random().toString(16).slice(2)}`;

/**
 * Returns the current year
 * @returns {String} Year - The current year
 */

export const getYear = () => new Date().getFullYear();
