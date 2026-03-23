import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const fontData = await fetch(
    "https://fonts.gstatic.com/s/corinthia/v13/wEO6EBrAnchaJyPMHE097d8v1A.ttf",
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#020202",
          borderRadius: "20%",
        }}
      >
        <span
          style={{
            fontFamily: "Corinthia",
            fontWeight: 700,
            fontSize: 180,
            color: "#f6e3a4",
            lineHeight: 1,
          }}
        >
          C
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Corinthia",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
