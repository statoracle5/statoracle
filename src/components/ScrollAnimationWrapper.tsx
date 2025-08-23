import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale";
  delay?: number;
  className?: string;
}

const ScrollAnimationWrapper = ({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: ScrollAnimationWrapperProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate");
            }, delay);
            observer.unobserve(entry.target);
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
  }, [delay]);

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-left":
        return "animate-fade-in-left";
      case "fade-right":
        return "animate-fade-in-right";
      case "scale":
        return "animate-scale-in";
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