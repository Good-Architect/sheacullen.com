import { ImageResponse } from "next/og";

const FONT_URL =
  "https://fonts.gstatic.com/s/corinthia/v13/wEO6EBrAnchaJyPMHE097d8v1A.ttf";

export function generateIcon(iconSize: number, fontSize: number) {
  return async () => {
    let fontData: ArrayBuffer;
    try {
      fontData = await fetch(FONT_URL).then((res) => res.arrayBuffer());
    } catch {
      fontData = new ArrayBuffer(0);
    }

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
              fontSize,
              color: "#f6e3a4",
              lineHeight: 1,
            }}
          >
            C
          </span>
        </div>
      ),
      {
        width: iconSize,
        height: iconSize,
        fonts:
          fontData.byteLength > 0
            ? [
                {
                  name: "Corinthia",
                  data: fontData,
                  style: "normal" as const,
                  weight: 700 as const,
                },
              ]
            : [],
      },
    );
  };
}
