import { Composition } from "remotion";
import { ShortAcordado } from "./Composition";

const FPS = 30;
const DURATION_SECONDS = 30;

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="ShortAcordado"
      component={ShortAcordado}
      durationInFrames={FPS * DURATION_SECONDS}
      fps={FPS}
      width={1080}
      height={1920}
    />
  );
};
