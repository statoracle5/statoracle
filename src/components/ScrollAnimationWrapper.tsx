import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "slide-up" | "rotate-in" | "blur-in" | "bounce-in" | "flip-in" | "zoom-bounce" | "slide-rotate" | "elastic-in";
  delay?: number;
  className?: string;
  stagger?: number;
  resetOnScroll?: boolean;
}

const ScrollAnimationWrapper = ({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  stagger = 0,
  resetOnScroll = true,
}: ScrollAnimationWrapperProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset animation by removing classes first
            if (resetOnScroll) {
              entry.target.classList.remove("animate");
              const element = entry.target as HTMLElement;
              element.style.animation = "none";
              // Force reflow
              element.offsetHeight;
            }
            
            setTimeout(() => {
              entry.target.classList.add("animate");
            }, delay + stagger);
            
            if (!resetOnScroll) {
              observer.unobserve(entry.target);
            }
          } else if (resetOnScroll) {
            // Reset when out of view
            entry.target.classList.remove("animate");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, stagger, resetOnScroll]);

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-left":
        return "animate-fade-in-left";
      case "fade-right":
        return "animate-fade-in-right";
      case "scale":
        return "animate-scale-in";
      case "slide-up":
        return "animate-slide-up";
      case "rotate-in":
        return "animate-rotate-in";
      case "blur-in":
        return "animate-blur-in";
      case "bounce-in":
        return "animate-bounce-in";
      case "flip-in":
        return "animate-flip-in";
      case "zoom-bounce":
        return "animate-zoom-bounce";
      case "slide-rotate":
        return "animate-slide-rotate";
      case "elastic-in":
        return "animate-elastic-in";
      default:
        return "animate-fade-in-up";
    }
  };

  return (
    <div
      ref={elementRef}
      className={`scroll-animate ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;