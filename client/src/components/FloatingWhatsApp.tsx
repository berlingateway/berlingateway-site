/**
 * FloatingWhatsApp
 * A fixed floating button in the lower-left corner that opens WhatsApp.
 * Rendered globally in App.tsx — automatically switches to Arabic on /ar/* routes.
 *
 * Mobile UX rules:
 *  - 15–20% smaller on mobile (≤768px) via CSS class
 *  - Uses env(safe-area-inset-bottom) to avoid iOS home-bar overlap
 *  - Temporarily hidden while any input/textarea/select/[type=file] has focus
 *  - Restores on blur
 *  - Never removed from DOM — only opacity/pointer-events toggled
 */
import { useEffect, useState } from "react";

export default function FloatingWhatsApp() {
  const phone = "4915781497451";

  // Detect Arabic route — no router dependency needed, window.location is stable
  const isArabic =
    typeof window !== "undefined" &&
    window.location.pathname.startsWith("/ar");

  const label = isArabic ? "التنسيق الطبي" : "Medical Coordinator";
  const ariaLabel = isArabic
    ? "تواصل عبر واتساب"
    : "Contact Medical Coordinator via WhatsApp";
  const prefilledText = isArabic
    ? "أريد التحدث مع منسق طبي"
    : "Hello, I would like to speak with a Medical Coordinator.";

  const href = `https://wa.me/${phone}?text=${encodeURIComponent(prefilledText)}`;

  // Hide while any form field is focused (prevents overlap with keyboard / input)
  const [inputFocused, setInputFocused] = useState(false);

  useEffect(() => {
    const SELECTOR = "input, textarea, select, [type='file'], [contenteditable='true']";

    function onFocusIn(e: FocusEvent) {
      if (e.target instanceof Element && e.target.matches(SELECTOR)) {
        setInputFocused(true);
      }
    }
    function onFocusOut(e: FocusEvent) {
      if (e.target instanceof Element && e.target.matches(SELECTOR)) {
        // Small delay so the button doesn't flash if focus moves between fields
        setTimeout(() => {
          const active = document.activeElement;
          if (!active || !active.matches(SELECTOR)) {
            setInputFocused(false);
          }
        }, 150);
      }
    }

    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={[
        "whatsapp-float",
        "fixed z-50 flex items-center gap-2 bg-[#25D366] text-white font-medium rounded-full shadow-lg hover:bg-[#1ebe5d] transition-all",
        // Desktop: bottom-6 left-6, full size
        "bottom-6 left-6",
        "text-sm px-4 py-3",
        // Fade out (not remove) when input focused
        inputFocused
          ? "opacity-0 pointer-events-none"
          : "opacity-100 pointer-events-auto",
      ].join(" ")}
      style={{
        fontFamily: isArabic ? "'Cairo', sans-serif" : "'IBM Plex Sans', sans-serif",
        // Safe-area: push above iOS home indicator
        bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))",
        // Smooth fade transition
        transition: "opacity 0.2s ease, transform 0.2s ease",
        transform: inputFocused ? "scale(0.85)" : "scale(1)",
      }}
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="whatsapp-float__icon w-5 h-5 shrink-0"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <span>{label}</span>
    </a>
  );
}
