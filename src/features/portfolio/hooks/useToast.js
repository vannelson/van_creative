import { useCallback, useEffect, useRef, useState } from "react";

export default function useToast(duration = 3000) {
  const timerRef = useRef(null);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const showToast = useCallback(
    (message) => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }

      setToastMessage(message);
      timerRef.current = window.setTimeout(() => {
        setToastMessage("");
      }, duration);
    },
    [duration],
  );

  return { toastMessage, showToast };
}
