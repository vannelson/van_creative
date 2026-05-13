import { useEffect, useRef, useState } from "react";

export default function useStatsCounter(stats) {
  const statsRef = useRef(null);
  const animatedRef = useRef(false);
  const intervalsRef = useRef([]);
  const [statValues, setStatValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const statsElement = statsRef.current;
    if (!statsElement) {
      return undefined;
    }

    const animateStat = (index, target) => {
      let current = 0;
      const step = Math.ceil(target / 40);
      const intervalId = window.setInterval(() => {
        current = Math.min(current + step, target);
        setStatValues((previous) => {
          const next = [...previous];
          next[index] = current;
          return next;
        });

        if (current >= target) {
          window.clearInterval(intervalId);
        }
      }, 35);

      intervalsRef.current.push(intervalId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            stats.forEach((stat, index) => animateStat(index, stat.count));
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(statsElement);

    return () => {
      observer.disconnect();
      intervalsRef.current.forEach((intervalId) => window.clearInterval(intervalId));
      intervalsRef.current = [];
    };
  }, [stats]);

  return { statValues, statsRef };
}
