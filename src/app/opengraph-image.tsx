import { ImageResponse } from "next/og";

export const alt = "Stilliano Studio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000000",
        }}
      />
    ),
    size,
  );
}
