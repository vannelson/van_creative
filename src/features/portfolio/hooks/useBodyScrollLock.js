import { useEffect } from "react";

export default function useBodyScrollLock(locked) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (locked) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [locked]);
}
