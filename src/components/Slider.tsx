// src/components/Slider.tsx
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';

import img1 from '@/images/screenshots/prop-01.jpg';
import img2 from '@/images/screenshots/prop-02.jpg';
import img3 from '@/images/screenshots/prop-03.jpg';
import img4 from '@/images/screenshots/prop-04.jpg';

type Slide = { src: StaticImageData | string; alt?: string };

export interface SliderProps {
  images?: Slide[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
  /** Page background color to blend into (hex like #1e2122). */
  edgeColor?: string;
  /** Width of the edge fade (desktop), percentage of viewport width. */
  edgeWidth?: number; // default 18
  /** Strength of the fade (0..1). */
  edgeOpacity?: number; // default 0.85
  /** Enable/disable the edge fade overlays. */
  edgeFade?: boolean;
  /** Position of the image/slider on desktop (md+). */
  imageSide?: 'left' | 'right'; // <- neu
}

function SliderComponent({
  images = [
    { src: img1, alt: 'Reward 1' },
    { src: img2, alt: 'Reward 2' },
    { src: img3, alt: 'Reward 3' },
    { src: img4, alt: 'Reward 4' },
  ],
  autoPlay = true,
  interval = 4500,
  className = '',
  edgeColor = '#1e2122',
  edgeWidth = 20,
  edgeOpacity = 0.35,
  edgeFade = true,
  imageSide = 'right', // default: wie bisher
}: SliderProps) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isActive = useRef(true);

  const goTo = (i: number) => setIndex((i + count) % count);
  const next = () => goTo(index + 1);

  useEffect(() => {
    if (!autoPlay || !isActive.current) return;
    if (timerRef.current) clearInterval(timerRef.current);
    const id = setInterval(next, interval);
    timerRef.current = id;
    return () => clearInterval(id);
  }, [index, autoPlay, interval]);

  const pause = () => {
    isActive.current = false;
    if (timerRef.current) clearInterval(timerRef.current);
  };
  const resume = () => {
    isActive.current = true;
    if (timerRef.current) clearInterval(timerRef.current);
    if (autoPlay) timerRef.current = setInterval(next, interval);
  };

  const progressStyle = useMemo(
    () => ({ animation: `progress ${interval}ms linear forwards` } as const),
    [interval]
  );

  const toRGBA = (hex: string, a: number) => {
    const h = hex.replace('#', '');
    const b = h.length === 3 ? h.split('').map(c => c + c).join('') : h.padEnd(6, '0');
    const r = parseInt(b.slice(0, 2), 16);
    const g = parseInt(b.slice(2, 4), 16);
    const bl = parseInt(b.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${bl}, ${Math.min(Math.max(a, 0), 1)})`;
  };

  const leftFadeStyle = useMemo(
    () =>
      ({
        background: `linear-gradient(to right,
          ${toRGBA(edgeColor, edgeOpacity)} 0%,
          ${toRGBA(edgeColor, edgeOpacity * 0.95)} 35%,
          ${toRGBA(edgeColor, edgeOpacity * 0.6)} 60%,
          ${toRGBA(edgeColor, 0)} 100%
        )`,
        width: `${edgeWidth}vw`,
      }) as const,
    [edgeColor, edgeOpacity, edgeWidth]
  );
  const rightFadeStyle = useMemo(
    () =>
      ({
        background: `linear-gradient(to left,
          ${toRGBA(edgeColor, edgeOpacity)} 0%,
          ${toRGBA(edgeColor, edgeOpacity * 0.95)} 35%,
          ${toRGBA(edgeColor, edgeOpacity * 0.6)} 60%,
          ${toRGBA(edgeColor, 0)} 100%
        )`,
        width: `${edgeWidth}vw`,
      }) as const,
    [edgeColor, edgeOpacity, edgeWidth]
  );
  const bottomVignetteStyle = useMemo(
    () =>
      ({
        background:
          'radial-gradient(120% 70% at 50% 110%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.18) 35%, rgba(0,0,0,0) 70%)',
      }) as const,
    []
  );

  // Blöcke separat, damit wir die Reihenfolge je nach imageSide tauschen können
  const SliderBlock = (
    <div
      className="relative"
      onMouseEnter={pause}
      onMouseLeave={resume}
      aria-roledescription="carousel"
    >
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="relative w-full shrink-0 p-0 md:p-2" aria-hidden={index !== i}>
              <div className="mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-2xl">
                <Image
                  src={img.src}
                  alt={img.alt ?? `Slide ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority={i === 0}
                />
              </div>
            </div>
          ))}
        </div>

        {edgeFade && (
          <>
            <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0" style={leftFadeStyle} />
            <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0" style={rightFadeStyle} />
            <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-28" style={bottomVignetteStyle} />
          </>
        )}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {images.map((_, i) => {
          const active = i === index;
          return (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group relative h-1 w-6 overflow-hidden rounded-full bg-white/25"
            >
              <span
                className={`absolute inset-0 origin-left bg-white/90 ${active && autoPlay ? '' : 'scale-x-0'}`}
                style={active && autoPlay ? progressStyle : undefined}
              />
            </button>
          );
        })}
      </div>
    </div>
  );

  const TextBlock = (
    <div className={`text-white ${imageSide === 'right' ? 'md:text-left' : 'md:text-left'} text-left`}>
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        <span className="text-[#3f4bf2]">Get funded.</span> <br />Trade with confidence.
      </h2>
      <p className="mt-4 text-base text-white/70">
        Want backing from a <span className="underline">prop firm</span>?<br className="hidden sm:block" />
        <span className="mt-3 block">
          No problem! Our EAs are built to clear evaluations smoothly <br />and keep drawdowns low.
        </span>
      </p>
    </div>
  );

  return (
    <section className={`relative mx-auto max-w-7xl px-6 py-20 md:py-28 ${className}`}>
      <div className="grid items-center gap-12 md:grid-cols-2">
        {imageSide === 'left' ? (
          <>
            {SliderBlock}
            {TextBlock}
          </>
        ) : (
          <>
            {TextBlock}
            {SliderBlock}
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}

export { SliderComponent as Slider };
export default SliderComponent;
