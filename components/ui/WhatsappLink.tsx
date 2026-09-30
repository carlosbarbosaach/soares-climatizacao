"use client";

import { track } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/site";

export function WhatsappLink({
  children,
  source,
  message,
  className = "",
}: {
  children: React.ReactNode;
  source: string;
  message: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noreferrer"
      onClick={() => track("whatsapp_click", { source, service: "climatizacao" })}
      className={`focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-bold transition ${className}`}
    >
      {children}
    </a>
  );
}
