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
    const id = timerRef.current;
    if (id) clearInterval(id);
  };

  const resume = () => {
    isActive.current = true;
    const id = timerRef.current;
    if (id) clearInterval(id);
    if (autoPlay) {
      const newId = setInterval(next, interval);
      timerRef.current = newId;
    }
  };

  const progressStyle = useMemo(
    () => ({ animation: `progress ${interval}ms linear forwards` } as const),
    [interval]
  );

  return (
    <section className={`relative mx-auto max-w-7xl px-6 py-20 md:py-28 ${className}`}>
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* LEFT: Slider */}
        <div
          className="relative"
          onMouseEnter={pause}
          onMouseLeave={resume}
          aria-roledescription="carousel"
        >
          {/* ⬇️ Rahmen entfernt: kein bg, keine ring/shadow */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {images.map((img, i) => (
                <div key={i} className="relative w-full shrink-0 p-0 md:p-2" aria-hidden={index !== i}>
                  {/* ⬇️ nur runde Ecken + overflow hidden, sonst nix */}
                  <div className="mx-auto w-full max-w-[520px] aspect-square relative overflow-hidden rounded-2xl">
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
          </div>

          {/* Indicators */}
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

        {/* RIGHT: Text */}
        <div className="text-white">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            <span className='text-[#3f4bf2]'>Get funded.</span> <br></br>Trade with confidence.
          </h2>
          <p className="mt-4 text-base text-white/70">
            Want backing from a <span className="underline">prop firm</span>?<br className="hidden sm:block" />
            <span className="mt-3 block">
              No problem! Our EAs are built to clear evaluations smoothly <br></br>and keep drawdowns low.
            </span>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress { from { transform: scaleX(0) } to { transform: scaleX(1) } }
      `}</style>
    </section>
  );
}

export { SliderComponent as Slider };
export default SliderComponent;
