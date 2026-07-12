import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Travel With Purpose - Meaningful Travel Experiences in Sri Lanka"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 20% 20%, rgba(216,154,61,0.35), transparent 32%), linear-gradient(135deg, #2A1E16 0%, #1C140F 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(42,30,22,0.98) 0%, rgba(42,30,22,0.85) 48%, rgba(42,30,22,0.45) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            height: "100%",
            padding: "72px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              marginBottom: "38px",
            }}
          >
            <div
              style={{
                width: "74px",
                height: "74px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #A66A2C, #D89A3D)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                fontWeight: 900,
              }}
            >
              T
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: 900,
                  letterSpacing: "5px",
                  textTransform: "uppercase",
                }}
              >
                Travel With
              </div>

              <div
                style={{
                  fontSize: "44px",
                  fontWeight: 700,
                  color: "#D89A3D",
                }}
              >
                Purpose
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: "76px",
              fontWeight: 900,
              letterSpacing: "6px",
              lineHeight: 0.95,
              textTransform: "uppercase",
              maxWidth: "920px",
            }}
          >
            Meaningful Travel Experiences in Sri Lanka
          </div>

          <div
            style={{
              marginTop: "32px",
              fontSize: "28px",
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.78)",
              maxWidth: "870px",
            }}
          >
            Wellness, culture, volunteering, nature and community impact journeys.
          </div>

          <div
            style={{
              marginTop: "48px",
              display: "flex",
              gap: "18px",
              alignItems: "center",
              color: "#D89A3D",
              fontSize: "24px",
              fontWeight: 800,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Sri Lanka Travel • Impact Tourism • Wellness
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}