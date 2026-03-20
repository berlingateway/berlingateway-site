import { useState, useEffect } from "react";
import { X } from "lucide-react";

const BANNER_DISMISSED_KEY = "mcg_banner_dismissed_eid_2026";
const BANNER_HEIGHT = 44;
const BANNER_TEXT = "Eid Mubarak — Wishing you health and recovery.";

export default function TopBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
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

  return (
    <div
      id="top-notification-banner"
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
          fontFamily: "inherit",
          fontWeight: 400,
          letterSpacing: "0.05em",
          margin: 0,
          textAlign: "center",
          lineHeight: 1,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {BANNER_TEXT}
      </p>

      {/* Close button */}
      <button
        onClick={handleClose}
        aria-label="Dismiss notification"
        style={{
          position: "absolute",
          right: "16px",
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
