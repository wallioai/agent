import { Icon } from "../icons/logo";
import Ai from "@/assets/images/ai.png";

export const WallioInfo = (
  <div className="flex size-full items-center justify-center">
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex items-center gap-5">
        <Icon src={Ai} className="size-10" />
        <p className="text-2xl font-semibold">Hi, I&apos;m Wallio.</p>
      </div>
      <p className="max-w-sm text-foreground/60">
        Your Decentralized wallet manager, what will you have me do for you
        today?
      </p>
    </div>
  </div>
);
