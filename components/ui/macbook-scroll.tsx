"use client";
import React from "react";
import { cn } from "@/lib/utils";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconTable,
  IconVolume,
  IconVolume2,
  IconVolume3,
  IconSearch,
  IconWorld,
  IconCommand,
  IconCaretLeftFilled,
  IconCaretDownFilled,
} from "@tabler/icons-react";

export const MacbookScroll = ({
  src,
  screen,
  title,
  badge,
}: {
  src?: string;
  screen?: React.ReactNode;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-8">
      {title && (
        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="mb-14 max-w-2xl px-6 text-center text-3xl font-medium text-white md:text-5xl"
        >
          {title}
        </h2>
      )}
      <div className="origin-top scale-[0.52] sm:scale-[0.7] md:scale-90 lg:scale-100">
        <Lid src={src} screen={screen} />
        {/* Base area */}
        <div className="relative -z-10 h-[22rem] w-[32rem] overflow-hidden rounded-2xl bg-gray-200 dark:bg-[#272729]">
          <div className="relative h-10 w-full">
            <div className="absolute inset-x-0 mx-auto h-4 w-[80%] bg-[#050505]" />
          </div>
          <div className="relative flex">
            <div className="mx-auto h-full w-[10%] overflow-hidden">
              <SpeakerGrid />
            </div>
            <div className="mx-auto h-full w-[80%]">
              <Keypad />
            </div>
            <div className="mx-auto h-full w-[10%] overflow-hidden">
              <SpeakerGrid />
            </div>
          </div>
          <Trackpad />
          <div className="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]" />
          {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
        </div>
      </div>
    </div>
  );
};

export const Lid = ({ src, screen }: { src?: string; screen?: React.ReactNode }) => {
  return (
    <div className="relative [perspective:1000px]">
      <div
        style={{
          transform: "perspective(1000px) rotateX(9deg)",
          transformOrigin: "bottom",
        }}
        className="relative mx-auto h-[24rem] w-[32rem] rounded-2xl bg-[#010101] p-2 shadow-[0_36px_70px_-24px_rgba(0,0,0,0.75)]"
      >
        <div className="absolute inset-[6px] overflow-hidden rounded-lg bg-[#0A0E17]">
          {screen
            ? screen
            : src && (
                <img
                  src={src}
                  alt="ALPHA app"
                  className="absolute inset-0 h-full w-full object-cover object-left-top"
                />
              )}
        </div>
      </div>
    </div>
  );
};

export const Trackpad = () => {
  return (
    <div
      className="mx-auto my-1 h-32 w-[40%] rounded-xl"
      style={{ boxShadow: "0px 0px 1px 1px #00000020 inset" }}
    ></div>
  );
};

export const Keypad = () => {
  return (
    <div className="mx-1 h-full [transform:translateZ(0)] rounded-md bg-[#050505] p-1 [will-change:transform]">
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn className="w-10 items-end justify-start pb-[2px] pl-[4px]" childrenClassName="items-start">
          esc
        </KBtn>
        <KBtn><IconBrightnessDown className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F1</span></KBtn>
        <KBtn><IconBrightnessUp className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F2</span></KBtn>
        <KBtn><IconTable className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F3</span></KBtn>
        <KBtn><IconSearch className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F4</span></KBtn>
        <KBtn><IconMicrophone className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F5</span></KBtn>
        <KBtn><IconMoon className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F6</span></KBtn>
        <KBtn><IconPlayerTrackPrev className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F7</span></KBtn>
        <KBtn><IconPlayerSkipForward className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F8</span></KBtn>
        <KBtn><IconPlayerTrackNext className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F9</span></KBtn>
        <KBtn><IconVolume3 className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F10</span></KBtn>
        <KBtn><IconVolume2 className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F11</span></KBtn>
        <KBtn><IconVolume className="h-[6px] w-[6px]" /><span className="mt-1 inline-block">F12</span></KBtn>
        <KBtn>
          <div className="h-4 w-4 rounded-full bg-gradient-to-b from-neutral-900 from-20% via-black via-50% to-neutral-900 to-95% p-px">
            <div className="h-full w-full rounded-full bg-black" />
          </div>
        </KBtn>
      </div>

      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn><span className="block">~</span><span className="mt-1 block">`</span></KBtn>
        <KBtn><span className="block">!</span><span className="block">1</span></KBtn>
        <KBtn><span className="block">@</span><span className="block">2</span></KBtn>
        <KBtn><span className="block">#</span><span className="block">3</span></KBtn>
        <KBtn><span className="block">$</span><span className="block">4</span></KBtn>
        <KBtn><span className="block">%</span><span className="block">5</span></KBtn>
        <KBtn><span className="block">^</span><span className="block">6</span></KBtn>
        <KBtn><span className="block">&</span><span className="block">7</span></KBtn>
        <KBtn><span className="block">*</span><span className="block">8</span></KBtn>
        <KBtn><span className="block">(</span><span className="block">9</span></KBtn>
        <KBtn><span className="block">)</span><span className="block">0</span></KBtn>
        <KBtn><span className="block">&mdash;</span><span className="block">_</span></KBtn>
        <KBtn><span className="block">+</span><span className="block"> = </span></KBtn>
        <KBtn className="w-10 items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">delete</KBtn>
      </div>

      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn className="w-10 items-end justify-start pb-[2px] pl-[4px]" childrenClassName="items-start">tab</KBtn>
        <KBtn><span className="block">Q</span></KBtn>
        <KBtn><span className="block">W</span></KBtn>
        <KBtn><span className="block">E</span></KBtn>
        <KBtn><span className="block">R</span></KBtn>
        <KBtn><span className="block">T</span></KBtn>
        <KBtn><span className="block">Y</span></KBtn>
        <KBtn><span className="block">U</span></KBtn>
        <KBtn><span className="block">I</span></KBtn>
        <KBtn><span className="block">O</span></KBtn>
        <KBtn><span className="block">P</span></KBtn>
        <KBtn><span className="block">{`{`}</span><span className="block">{`[`}</span></KBtn>
        <KBtn><span className="block">{`}`}</span><span className="block">{`]`}</span></KBtn>
        <KBtn><span className="block">{`|`}</span><span className="block">{`\\`}</span></KBtn>
      </div>

      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn className="w-[2.8rem] items-end justify-start pb-[2px] pl-[4px]" childrenClassName="items-start">caps lock</KBtn>
        <KBtn><span className="block">A</span></KBtn>
        <KBtn><span className="block">S</span></KBtn>
        <KBtn><span className="block">D</span></KBtn>
        <KBtn><span className="block">F</span></KBtn>
        <KBtn><span className="block">G</span></KBtn>
        <KBtn><span className="block">H</span></KBtn>
        <KBtn><span className="block">J</span></KBtn>
        <KBtn><span className="block">K</span></KBtn>
        <KBtn><span className="block">L</span></KBtn>
        <KBtn><span className="block">{`:`}</span><span className="block">{`;`}</span></KBtn>
        <KBtn><span className="block">{`"`}</span><span className="block">{`'`}</span></KBtn>
        <KBtn className="w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">return</KBtn>
      </div>

      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn className="w-[3.65rem] items-end justify-start pb-[2px] pl-[4px]" childrenClassName="items-start">shift</KBtn>
        <KBtn><span className="block">Z</span></KBtn>
        <KBtn><span className="block">X</span></KBtn>
        <KBtn><span className="block">C</span></KBtn>
        <KBtn><span className="block">V</span></KBtn>
        <KBtn><span className="block">B</span></KBtn>
        <KBtn><span className="block">N</span></KBtn>
        <KBtn><span className="block">M</span></KBtn>
        <KBtn><span className="block">{`<`}</span><span className="block">{`,`}</span></KBtn>
        <KBtn><span className="block">{`>`}</span><span className="block">{`.`}</span></KBtn>
        <KBtn><span className="block">{`?`}</span><span className="block">{`/`}</span></KBtn>
        <KBtn className="w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">shift</KBtn>
      </div>

      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex w-full justify-end pr-1"><span className="block">fn</span></div>
          <div className="flex w-full justify-start pl-1"><IconWorld className="h-[6px] w-[6px]" /></div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex w-full justify-end pr-1"><IconChevronUp className="h-[6px] w-[6px]" /></div>
          <div className="flex w-full justify-start pl-1"><span className="block">control</span></div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex w-full justify-end pr-1"><OptionKey className="h-[6px] w-[6px]" /></div>
          <div className="flex w-full justify-start pl-1"><span className="block">option</span></div>
        </KBtn>
        <KBtn className="w-8" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex w-full justify-end pr-1"><IconCommand className="h-[6px] w-[6px]" /></div>
          <div className="flex w-full justify-start pl-1"><span className="block">command</span></div>
        </KBtn>
        <KBtn className="w-[8.2rem]"></KBtn>
        <KBtn className="w-8" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex w-full justify-start pl-1"><IconCommand className="h-[6px] w-[6px]" /></div>
          <div className="flex w-full justify-start pl-1"><span className="block">command</span></div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <div className="flex w-full justify-start pl-1"><OptionKey className="h-[6px] w-[6px]" /></div>
          <div className="flex w-full justify-start pl-1"><span className="block">option</span></div>
        </KBtn>
        <div className="mt-[2px] flex h-6 w-[4.9rem] flex-col items-center justify-end rounded-[4px] p-[0.5px]">
          <KBtn className="h-3 w-6"><IconCaretUpFilled className="h-[6px] w-[6px]" /></KBtn>
          <div className="flex">
            <KBtn className="h-3 w-6"><IconCaretLeftFilled className="h-[6px] w-[6px]" /></KBtn>
            <KBtn className="h-3 w-6"><IconCaretDownFilled className="h-[6px] w-[6px]" /></KBtn>
            <KBtn className="h-3 w-6"><IconCaretRightFilled className="h-[6px] w-[6px]" /></KBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export const KBtn = ({
  className,
  children,
  childrenClassName,
  backlit = true,
}: {
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
  backlit?: boolean;
}) => {
  return (
    <div
      className={cn(
        "[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform]",
        backlit && "bg-white/[0.2] shadow-xl shadow-white",
      )}
    >
      <div
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]",
          className,
        )}
        style={{ boxShadow: "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset" }}
      >
        <div
          className={cn(
            "flex w-full flex-col items-center justify-center text-[5px] text-neutral-200",
            childrenClassName,
            backlit && "text-white",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const SpeakerGrid = () => {
  return (
    <div
      className="mt-2 flex h-40 gap-[2px] px-[0.5px]"
      style={{
        backgroundImage: "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px",
      }}
    ></div>
  );
};

export const OptionKey = ({ className }: { className: string }) => {
  return (
    <svg fill="none" version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className}>
      <rect stroke="currentColor" strokeWidth={2} x="18" y="5" width="10" height="2" />
      <polygon stroke="currentColor" strokeWidth={2} points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 " />
      <rect id="_Transparent_Rectangle_" className="st0" width="32" height="32" stroke="none" />
    </svg>
  );
};

const AlphaMark = () => {
  return (
    <svg width="66" height="65" viewBox="0 0 64 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white">
      <path d="M32 4 54 15 32 26 10 15Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M32 22 54 33 32 44 10 33Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" opacity="0.6" />
    </svg>
  );
};
