"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

interface TestimonialProps {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const InfiniteScroll = ({
  direction = "left",
  speed = "normal",
  pauseOnHover = false,
  children,
  className,
}: TestimonialProps) => {
  const [start, setStart] = useState(false);

  const scrollerRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // useCallback hooks for getDirection and getSpeed to avoid missing dependencies warnings
  const getDirection = useCallback(() => {
    if (containerRef.current) {
      const directionValue = direction === "left" ? "forwards" : "reverse";
      containerRef.current.style.setProperty("--animation-direction", directionValue);
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      const speedValue = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", speedValue);
    }
  }, [speed]);

  // Add animation logic when the component is mounted
  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Clone each item for infinite scroll effect
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      // Apply direction and speed once the content is loaded
      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  // Trigger animation setup when component mounts
  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

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
