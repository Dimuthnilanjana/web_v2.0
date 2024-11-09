"use client";

import { ReactNode, useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/utils/cn";

interface TestimonialProps {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  children: ReactNode;
}

export const InfiniteScroll = ({
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  children,
  className,
}: TestimonialProps) => {
  const [start, setStart] = useState(false);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Define addAnimation as a callback to use in useEffect dependency array
  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate each item for infinite scroll effect
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [direction, speed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      className="overflow-hidden w-full scroller [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]"
      ref={containerRef}
    >
      <ul
        className={cn(
          "flex items-center justify-center gap-4 flex-nowrap shrink-0 w-max",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
          className
        )}
        ref={scrollerRef}
      >
        {children}
      </ul>
    </div>
  );
};
