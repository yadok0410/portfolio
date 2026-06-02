"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const GAP_BEFORE_ABOUT_PX = 12;
const WAVE_LENGTH_PX = 40;
const SQUASH_X = 0.09;
const SQUASH_Y = 0.065;

type HeaderRollingIconProps = {
  className?: string;
};

function getSquash(offsetX: number) {
  const wave = Math.sin((offsetX / WAVE_LENGTH_PX) * Math.PI * 2);
  return {
    scaleX: 1 + SQUASH_X * wave,
    scaleY: 1 - SQUASH_Y * wave,
  };
}

export function HeaderRollingIcon({ className }: HeaderRollingIconProps) {
  const [offsetX, setOffsetX] = useState(0);
  const maxOffsetRef = useRef(0);
  const wheelRef = useRef<HTMLSpanElement>(null);

  const getScrollY = useCallback(
    () =>
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0,
    [],
  );

  const getScrollProgress = useCallback(() => {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return 0;
    return Math.min(1, Math.max(0, getScrollY() / maxScroll));
  }, [getScrollY]);

  const measureTravel = useCallback(() => {
    const iconAnchor = document.querySelector<HTMLElement>(
      "[data-icon-anchor]",
    );
    const aboutNav = document.querySelector<HTMLElement>(
      'header nav a[href="#about"]',
    );
    const wheel = wheelRef.current;
    if (!iconAnchor || !aboutNav || !wheel) return 0;

    const anchorLeft = iconAnchor.getBoundingClientRect().left;
    const aboutLeft = aboutNav.getBoundingClientRect().left;
    const wheelWidth = wheel.getBoundingClientRect().width;

    return Math.max(0, aboutLeft - anchorLeft - wheelWidth - GAP_BEFORE_ABOUT_PX);
  }, []);

  useEffect(() => {
    let frame = 0;
    let motionQuery: MediaQueryList | null = null;

    const refreshTravel = () => {
      maxOffsetRef.current = measureTravel();
    };

    const updateOffset = () => {
      const reducedMotion = motionQuery?.matches ?? false;
      if (reducedMotion) {
        setOffsetX(0);
        return;
      }
      const travel = maxOffsetRef.current;
      setOffsetX(Math.min(getScrollProgress() * travel, travel));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateOffset);
    };

    const onLayoutChange = () => {
      refreshTravel();
      updateOffset();
    };

    motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    onLayoutChange();

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onLayoutChange);
    motionQuery.addEventListener("change", onLayoutChange);

    const observer = new ResizeObserver(onLayoutChange);
    const header = document.querySelector("header");
    if (header) observer.observe(header);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onLayoutChange);
      motionQuery?.removeEventListener("change", onLayoutChange);
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [getScrollProgress, measureTravel]);

  const { scaleX, scaleY } = getSquash(offsetX);

  return (
    <span
      aria-hidden
      className="inline-block transition-transform duration-150 will-change-transform group-hover:scale-105"
      style={{ transform: `translateX(${offsetX}px)` }}
    >
      <span
        ref={wheelRef}
        data-wheel
        className={`block rounded-full bg-portfolio-accent transition-transform duration-200 ease-out ${className ?? ""}`}
        style={{ transform: `scaleX(${scaleX}) scaleY(${scaleY})` }}
      />
    </span>
  );
}
