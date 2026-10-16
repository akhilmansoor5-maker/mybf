import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.fullName}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          backgroundColor: "#001220",
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(20,175,117,0.35), rgba(0,18,32,0) 60%)",
          padding: "80px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 150,
            fontWeight: 700,
            letterSpacing: "-6px",
            color: "#ffffff",
          }}
        >
          MYB
          <span style={{ color: "#14af75" }}>F</span>
        </div>
        <div
          style={{
            marginTop: 8,
            fontSize: 26,
            letterSpacing: "8px",
            color: "#a3b8c7",
          }}
        >
          MALAPPURAM YOUTH BUSINESS FORUM
        </div>
        <div
          style={{
            marginTop: 44,
            fontSize: 44,
            lineHeight: 1.25,
            fontWeight: 600,
            color: "#f7fbfa",
            maxWidth: 900,
          }}
        >
          Empowering the Next Generation of Entrepreneurs
        </div>
      </div>
    ),
    size,
  );
}
