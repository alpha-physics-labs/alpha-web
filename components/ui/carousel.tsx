"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import {
  useState,
  useRef,
  useId,
  useEffect,
  type MouseEvent as ReactMouseEvent,
  type SyntheticEvent,
} from "react";

interface SlideData {
  title: string;
  button: string;
  src: string;
  description?: string;
  href?: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      const x = xRef.current;
      const y = yRef.current;
      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleMouseMove = (event: ReactMouseEvent) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, title, description } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="relative z-10 mx-[4vmin] flex h-[70vmin] w-[70vmin] flex-1 flex-col items-center justify-center text-center text-white opacity-100 transition-all duration-300 ease-in-out"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index ? "scale(0.98) rotateX(8deg)" : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 h-full w-full overflow-hidden rounded-[2%] bg-[#0F1523] transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="absolute inset-0 h-[120%] w-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
            style={{ opacity: current === index ? 1 : 0.5 }}
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
          />
          {current === index && (
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/92 via-[#05070d]/55 to-[#05070d]/25 transition-all duration-1000" />
          )}
        </div>

        <article
          className={`relative flex flex-col items-center justify-end p-[6vmin] transition-opacity duration-1000 ease-in-out ${
            current === index ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <h2 className="relative text-3xl font-semibold [text-shadow:0_2px_24px_rgba(5,7,13,0.7)] md:text-5xl lg:text-6xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/90 [text-shadow:0_1px_16px_rgba(5,7,13,0.85)] md:text-2xl">
              {description}
            </p>
          )}
        </article>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => {
  return (
    <button
      className={`mx-2 flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-transparent bg-neutral-200 transition duration-200 hover:-translate-y-0.5 focus:border-[#5B9BFF] focus:outline-none active:translate-y-0.5 dark:bg-neutral-800 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) setCurrent(index);
  };

  const id = useId();

  return (
    <div
      className="relative mx-auto h-[70vmin] w-[70vmin]"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute mx-[-4vmin] flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * (100 / slides.length)}%)` }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute top-[calc(100%+1rem)] flex w-full justify-center">
        <CarouselControl type="previous" title="Go to previous slide" handleClick={handlePreviousClick} />
        <CarouselControl type="next" title="Go to next slide" handleClick={handleNextClick} />
      </div>
    </div>
  );
}
