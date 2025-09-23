import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export function useScrollAnimation(threshold = 0.2, triggerOnce = true) {
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasAnimated(true);
    }
  }, [inView]);

  return { ref, hasAnimated };
}