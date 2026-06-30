"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const DEFAULT_LIMIT =
  Number(process.env.NEXT_PUBLIC_INPUT_TIME_LIMIT_SEC) || 45;

export const INPUT_TIME_LIMIT_SEC = DEFAULT_LIMIT;

export function useInputTimer(
  onExpire: () => void,
  limitSec: number = DEFAULT_LIMIT,
  active = true,
) {
  const [secondsLeft, setSecondsLeft] = useState(limitSec);
  const [expired, setExpired] = useState(false);
  const onExpireRef = useRef(onExpire);
  onExpireRef.current = onExpire;

  const expire = useCallback(() => {
    setExpired(true);
    setSecondsLeft(0);
    onExpireRef.current();
  }, []);

  useEffect(() => {
    if (expired || !active) return;

    const id = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          expire();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [expired, expire, active]);

  const formatted = `${Math.floor(secondsLeft / 60)}:${String(secondsLeft % 60).padStart(2, "0")}`;
  const progress = secondsLeft / limitSec;

  return {
    secondsLeft,
    expired,
    formatted,
    progress,
    isUrgent: secondsLeft <= 15,
    isCritical: secondsLeft <= 5,
  };
}
