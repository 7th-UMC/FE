import { useState, useEffect, useRef } from 'react';

const useScrollAnimation = (threshold = 0.6) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          elementRef.current.classList.add('visible');
          elementRef.current.classList.remove('hidden');
        } else if (!entry.isIntersecting && isVisible && entry.boundingClientRect.top > 0) {
          setIsVisible(false);
          elementRef.current.classList.remove('visible');
          elementRef.current.classList.add('hidden');
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isVisible, threshold]);

  return { isVisible, elementRef };
};

export default useScrollAnimation;