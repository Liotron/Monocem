import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
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
          background: "linear-gradient(160deg, #4a4540 0%, #2e2a26 50%, #1a1816 100%)",
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 300,
            letterSpacing: "0.12em",
            color: "#ffffff",
          }}
        >
          MONOCEM
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            fontWeight: 400,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#c9a468",
          }}
        >
          Premium Microcement Systems UK
        </div>
      </div>
    ),
    { ...size }
  );
}
