import { Icon } from "../icons/logo";
import Ai from "@/assets/images/ai.png";
import Debridge from "@/assets/images/debridge-icon.svg";
import Venus from "@/assets/images/venus.png";

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
      <div className="grid grid-cols-2 gap-5 mt-10">
        <div className="border shadow-md rounded-xl bg-background p-3 text-left flex items-center gap-2">
          <Icon className="size-10 rounded-full" />
          <div>
          <p className="font-semibold">Wallio</p>
          <p className="-mt-1 text-foreground/60">Smart wallet managment</p>
          </div>
        </div>
        <div className="border shadow-md rounded-xl bg-background p-3 text-left flex items-center gap-2">
          <Icon src={Debridge} className="size-10 rounded-full" />
          <div>
            <p className="font-semibold">Debridge</p>
            <p className="-mt-1 text-foreground/60">Bridge with the speed of light</p>
          </div>
        </div>
        <div className="border shadow-md rounded-xl bg-background p-3 text-left flex items-center gap-2">
          <Icon src={Venus} className="size-10 rounded-full" />
          <div>
          <p className="font-semibold">Venus</p>
          <p className="-mt-1 text-foreground/60">The universal money market</p>
          </div>
        </div>
        <div className="border shadow-md rounded-xl bg-background p-3 text-left flex items-center gap-2">
          <Icon className="size-10 rounded-full" />
          <div>
          <p className="font-semibold">Wallio Pay <span className="font-normal rounded-sm text-sm bg-primary/10 px-2">coming soon</span></p>
          <p className="-mt-1 text-foreground/60">Convenient payment via email</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
