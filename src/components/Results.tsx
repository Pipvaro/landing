// src/components/Results.tsx
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';

import img1 from '@/images/screenshots/testimonial-1.jpg';
import img2 from '@/images/screenshots/testimonial-2.jpg';
import img3 from '@/images/screenshots/testimonial-3.jpg';
import img4 from '@/images/screenshots/testimonial-4.jpg';

type Slide = { src: StaticImageData | string; alt?: string };

export interface ResultsProps {
  images?: Slide[];
  /** Autoplay Interval in ms (schnell) */
  interval?: number;              // default 2800
  className?: string;

  /** Bild links/rechts (ab md) */
  imageSide?: 'left' | 'right';

  /** Quellabmessungen für Ratio-Box */
  imgW?: number;                  // default 840
  imgH?: number;                  // default 1400
  /** Max. Desktopbreite des Bildrahmens (px) */
  maxBoxWidth?: number;           // default 520
}

function ResultsComponent({
  images = [
    { src: img1, alt: 'Result 1' },
    { src: img2, alt: 'Result 2' },
    { src: img3, alt: 'Result 3' },
    { src: img4, alt: 'Result 4' },
  ],
  interval = 2800,
  className = '',
  imageSide = 'left',
  imgW = 840,
  imgH = 1400,
  maxBoxWidth = 520,
}: ResultsProps) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hoverRef = useRef(false);
  const inViewRef = useRef(false);

  const sectionRef = useRef<HTMLElement | null>(null);

  const next = () => setIndex((i) => (i + 1) % count);

  // autoplay steuern
  const play = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!hoverRef.current && inViewRef.current && count > 1) {
      timerRef.current = setInterval(next, interval);
    }
  };
  const pause = () => {
    hoverRef.current = true;
    if (timerRef.current) clearInterval(timerRef.current);
  };
  const resume = () => {
    hoverRef.current = false;
    play();
  };

  useEffect(() => {
    if (!sectionRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        inViewRef.current = entries[0]?.isIntersecting ?? false;
        play();
      },
      { root: null, threshold: 0.2 }
    );
    io.observe(sectionRef.current);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    play();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, interval, count]);

  // Ratio-Box (z.B. 840x1400 => 3:5)
  const paddingTop = useMemo(() => (imgH / imgW) * 100, [imgW, imgH]);

  const SliderBlock = (
    <div
      className="relative"
      onMouseEnter={pause}
      onMouseLeave={resume}
      aria-roledescription="carousel"
    >
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="relative w-full shrink-0 p-0 md:p-2">
              <div
                className="relative mx-auto w-full overflow-hidden rounded-2xl"
                style={{ maxWidth: maxBoxWidth, paddingTop: `${paddingTop}%` }}
              >
                <Image
                  src={img.src}
                  alt={img.alt ?? `Slide ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, 40vw"
                  priority={i === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const TextBlock = (
    <div className="text-white text-left">
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Consistent <span className="text-[#3f4bf2]">results</span>
      </h2>
      <p className="mt-4 text-base text-white/70">
        Our users see steady profits day after day.
        <span className="mt-3 block">
          Still unsure? <a className="underline" href="https://app.pipvaro.com/register">Get Started</a> to make results for yourself.
        </span>
      </p>
    </div>
  );

  return (
    <section ref={sectionRef} className={`relative mx-auto max-w-7xl px-6 py-20 md:py-28 ${className}`}>
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
        @media (prefers-reduced-motion: reduce) {
          :global(*) {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
    </section>
  );
}

export { ResultsComponent as Results };
export default ResultsComponent;
