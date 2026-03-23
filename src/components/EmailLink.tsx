"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";

const EMAIL = "shea@goodarchitect.com.au";
const GMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;
const OUTLOOK_URL = `https://outlook.live.com/mail/0/deeplink/compose?to=${EMAIL}`;

export function EmailLink({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setCopied(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${EMAIL}`;
    setOpen(true);
    setCopied(false);
  };

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <span className="relative inline-block">
      <a
        href={`mailto:${EMAIL}`}
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>
      {open && (
        <div
          ref={popoverRef}
          className="absolute left-1/2 -translate-x-1/2 mt-2 z-50 bg-[#1a1a1a] border border-[#f6e3a4]/30 rounded-lg p-3 shadow-2xl min-w-[220px]"
        >
          <p className="text-white/60 text-xs font-sans mb-2 text-center">
            Email client didn&apos;t open?
          </p>
          <div className="flex flex-col gap-1.5">
            <a
              href={GMAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-white text-sm font-sans px-3 py-1.5 rounded hover:bg-white/10 transition-colors text-center no-underline"
            >
              Open in Gmail
            </a>
            <a
              href={OUTLOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-white text-sm font-sans px-3 py-1.5 rounded hover:bg-white/10 transition-colors text-center no-underline"
            >
              Open in Outlook
            </a>
            <button
              onClick={handleCopy}
              className="text-[#f6e3a4] text-sm font-sans px-3 py-1.5 rounded hover:bg-white/10 transition-colors cursor-pointer border-0 bg-transparent"
            >
              {copied ? "Copied!" : "Copy email address"}
            </button>
          </div>
        </div>
      )}
    </span>
  );
}
