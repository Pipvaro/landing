'use client';

import { useEffect, useMemo, useState } from 'react';

type Props = {
  /** Start showing the button after this section is reached */
  showAfterId?: string; // e.g. "features" (your section 2)
  /** Fallback px if the element isn't found */
  fallbackPx?: number; // default 600
};

export default function BackToTop({
  showAfterId = 'features',
  fallbackPx = 600,
}: Props) {
  const [visible, setVisible] = useState(false);

  // Compute the Y offset of the "showAfter" section
  const threshold = useMemo(() => {
    if (typeof window === 'undefined') return fallbackPx;
    const el = document.getElementById(showAfterId);
    return el ? el.offsetTop : fallbackPx;
  }, [showAfterId, fallbackPx]);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY >= threshold - 50);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  const scrollToTop = () => {
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={[
        // position
        'fixed right-5 bottom-5 z-50',
        // size & shape
        'h-12 w-12 rounded-full',
        // brand color (#3f4bf2) + subtle gradient
        'bg-[linear-gradient(180deg,#3f4bf2_0%,#2f39c9_100%)]',
        // ring/shadow
        'shadow-[0_12px_30px_-10px_rgba(63,75,242,0.55)] ring-1 ring-white/10',
        // icon color
        'text-white',
        // animation
        'transition-all duration-200',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-2',
        // hover/focus
        'hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50',
        // active feedback
        'active:translate-y-[1px]',
      ].join(' ')}
    >
      {/* Arrow icon */}
      <svg viewBox="0 0 24 24" className="mx-auto h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M6 14l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
