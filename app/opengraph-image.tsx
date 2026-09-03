import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#050507",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -120,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: "#8b6bff",
            opacity: 0.35,
            filter: "blur(10px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            right: -140,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: "#4f7dff",
            opacity: 0.3,
            filter: "blur(10px)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 24px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#9a9aa5",
            fontSize: 22,
            marginBottom: 32,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#4fd1ff" }} />
          {siteConfig.tagline}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: -2,
          }}
        >
          AURA IA SOLUTIONS
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 32,
            color: "#cdd3ff",
            maxWidth: 900,
            textAlign: "center",
          }}
        >
          {siteConfig.headline}
        </div>
      </div>
    ),
    { ...size }
  );
}
