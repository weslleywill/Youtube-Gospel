import React from "react";
import {
  AbsoluteFill,
  Audio,
  Sequence,
  Video,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

type CardPosition = "top-small" | "top-large" | "top-medium" | "top-third" | "bottom";

interface CardConfig {
  from: number;
  duration: number;
  text: string;
  size: number;
  position: CardPosition;
  animation: "typewriter" | "fade-scale" | "slide-down" | "fade-scale-big" | "slide-up";
}

const CARDS: CardConfig[] = [
  { from: 0, duration: 3, text: "Te disseram que cristão dorme em paz.", size: 54, position: "top-small", animation: "typewriter" },
  { from: 3, duration: 2, text: "3h da manhã.", size: 108, position: "top-large", animation: "fade-scale" },
  { from: 13, duration: 4, text: "UM detalhe em Mt 11:28", size: 64, position: "top-medium", animation: "slide-down" },
  { from: 17, duration: 8, text: "VINDE", size: 240, position: "top-third", animation: "fade-scale-big" },
  { from: 25, duration: 5, text: "Coração Cansado · 30min", size: 56, position: "bottom", animation: "slide-up" },
];

const POSITION_STYLES: Record<CardPosition, React.CSSProperties> = {
  "top-small": { paddingTop: "6%", justifyContent: "flex-start", alignItems: "center" },
  "top-large": { paddingTop: "7%", justifyContent: "flex-start", alignItems: "center" },
  "top-medium": { paddingTop: "8%", justifyContent: "flex-start", alignItems: "center" },
  "top-third": { paddingTop: "22%", justifyContent: "flex-start", alignItems: "center" },
  bottom: { paddingBottom: "12%", justifyContent: "flex-end", alignItems: "center" },
};

const TEXT_BASE_STYLE: React.CSSProperties = {
  color: "white",
  fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
  fontWeight: 600,
  textAlign: "center",
  textShadow: "0 0 24px rgba(255, 170, 90, 0.7), 0 2px 12px rgba(0,0,0,0.95)",
  letterSpacing: "0.015em",
  maxWidth: "92%",
  lineHeight: 1.1,
};

interface CardProps {
  card: CardConfig;
}

const Card: React.FC<CardProps> = ({ card }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Common exit fade-out (last 10 frames of sequence)
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 10, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  let content: React.ReactNode = card.text;
  let dynamicStyle: React.CSSProperties = {};

  if (card.animation === "typewriter") {
    // Reveal char by char over first 60% of sequence
    const revealDuration = durationInFrames * 0.6;
    const charsToShow = Math.floor(
      interpolate(frame, [0, revealDuration], [0, card.text.length], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    );
    content = card.text.slice(0, charsToShow);
    dynamicStyle = { opacity: fadeOut };
  } else if (card.animation === "fade-scale") {
    const opacity = interpolate(frame, [0, 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    const scale = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
    dynamicStyle = {
      opacity: opacity * fadeOut,
      transform: `scale(${0.85 + scale * 0.15})`,
    };
  } else if (card.animation === "fade-scale-big") {
    const opacity = interpolate(frame, [0, 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    const scale = spring({ frame, fps, config: { damping: 12, stiffness: 80, mass: 0.6 } });
    dynamicStyle = {
      opacity: opacity * fadeOut,
      transform: `scale(${0.7 + scale * 0.3})`,
    };
  } else if (card.animation === "slide-down") {
    const translateY = interpolate(frame, [0, 14], [-60, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    const opacity = interpolate(frame, [0, 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    dynamicStyle = {
      opacity: opacity * fadeOut,
      transform: `translateY(${translateY}px)`,
    };
  } else if (card.animation === "slide-up") {
    const translateY = interpolate(frame, [0, 14], [60, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    const opacity = interpolate(frame, [0, 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    dynamicStyle = {
      opacity: opacity * fadeOut,
      transform: `translateY(${translateY}px)`,
    };
  }

  const positionStyle = POSITION_STYLES[card.position];

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        ...positionStyle,
      }}
    >
      <div
        style={{
          ...TEXT_BASE_STYLE,
          fontSize: card.size,
          ...dynamicStyle,
        }}
      >
        {content}
      </div>
    </AbsoluteFill>
  );
};

export const ShortAcordado: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      {/* Background video — Higgsfield loop 30s, muted */}
      <Video src={staticFile("higgsfield-loop-30s.mp4")} muted />

      {/* Voice — high volume to fix "voz baixa" feedback */}
      <Audio src={staticFile("voz-polida-30s.wav")} volume={1.6} />

      {/* Background music — very low, delayed start at seg 4 */}
      <Sequence from={4 * fps}>
        <Audio src={staticFile("trilha-26s-loop.wav")} volume={0.1} />
      </Sequence>

      {/* Animated text cards */}
      {CARDS.map((card, i) => (
        <Sequence
          key={i}
          from={card.from * fps}
          durationInFrames={card.duration * fps}
          premountFor={fps}
        >
          <Card card={card} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
