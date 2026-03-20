import { useState, useEffect } from "react";
import { X } from "lucide-react";

const BANNER_DISMISSED_KEY = "mcg_banner_dismissed_eid_2026";
const BANNER_HEIGHT = 44;

const BANNER_EN = "Eid Mubarak — Wishing you health and recovery.";
const BANNER_AR = "عيد فطر مبارك — نسأل الله لكم الصحة والعافية";

export default function TopBanner() {
  const [visible, setVisible] = useState(false);
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    // Detect Arabic route
    const arabic = window.location.pathname.startsWith("/ar");
    setIsArabic(arabic);

    const dismissed = sessionStorage.getItem(BANNER_DISMISSED_KEY);
    if (!dismissed) {
      setVisible(true);
      document.documentElement.style.setProperty(
        "--banner-height",
        `${BANNER_HEIGHT}px`
      );
    } else {
      document.documentElement.style.setProperty("--banner-height", "0px");
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem(BANNER_DISMISSED_KEY, "1");
    setVisible(false);
    document.documentElement.style.setProperty("--banner-height", "0px");
  };

  if (!visible) return null;

  const text = isArabic ? BANNER_AR : BANNER_EN;
  const dir = isArabic ? "rtl" : "ltr";
  // Close button: right side for LTR, left side for RTL
  const closeButtonStyle: React.CSSProperties = isArabic
    ? { left: "16px", right: "auto" }
    : { right: "16px", left: "auto" };

  return (
    <div
      id="top-notification-banner"
      dir={dir}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        height: `${BANNER_HEIGHT}px`,
        backgroundColor: "#0B1F3A",
        borderBottom: "1px solid #C9A646",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 48px",
      }}
    >
      {/* Centered message */}
      <p
        style={{
          color: "#FFFFFF",
          fontSize: "13px",
          fontFamily: isArabic
            ? "'IBM Plex Sans Arabic', Cairo, sans-serif"
            : "inherit",
          fontWeight: 400,
          letterSpacing: isArabic ? "0" : "0.05em",
          margin: 0,
          textAlign: "center",
          lineHeight: 1,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {text}
      </p>

      {/* Close button — left for RTL, right for LTR */}
      <button
        onClick={handleClose}
        aria-label="Dismiss notification"
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1,
          flexShrink: 0,
          ...closeButtonStyle,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.color = "#FFFFFF";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.color =
            "rgba(255,255,255,0.55)";
        }}
      >
        <X size={14} strokeWidth={2} />
      </button>
    </div>
  );
}
