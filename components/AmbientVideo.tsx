"use client";

export default function AmbientVideo({ src }: { src: string }) {
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      ref={(el) => {
        if (el) el.playbackRate = 0.7;
      }}
      className="absolute inset-0 h-full w-full object-cover object-[50%_22%]"
    />
  );
}
