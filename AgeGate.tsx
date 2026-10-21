"use client";

import { useEffect, useRef, useState } from "react";

const KEY = "myylo-gate-accepted-v1";

export default function AgeGate() {
  const [show, setShow] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      if (localStorage.getItem(KEY) !== "true") setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  useEffect(() => {
    if (!show) return;
    btn.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [show]);

  if (!show) return null;

  const accept = () => {
    try {
      localStorage.setItem(KEY, "true");
    } catch {
      /* storage unavailable; gate will show again next visit */
    }
    setShow(false);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-900/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gate-title"
      aria-describedby="gate-desc"
    >
      <div className="card w-full max-w-md p-8 text-center">
        <p className="text-sm font-bold tracking-[0.12em] text-navy-900">
          MYYLO <span className="font-medium tracking-normal text-teal-700">bio Labs</span>
        </p>
        <h2 id="gate-title" className="mt-5 text-2xl font-bold">
          Research use only
        </h2>
        <p id="gate-desc" className="mt-3 text-sm leading-relaxed text-slate-700">
          You must be 21+ and a qualified researcher. All products are for laboratory research use only. Not for
          human or animal consumption.
        </p>
        <div className="mt-7 flex flex-col gap-3">
          <button ref={btn} type="button" onClick={accept} className="btn-primary w-full">
            I am 21+ and a qualified researcher. Enter site
          </button>
          <a href="https://www.google.com" className="btn-secondary w-full">
            Leave site
          </a>
        </div>
      </div>
    </div>
  );
}
