import { Icon } from "../icons/logo";
import Ai from "@/assets/images/ai.png";
import Debridge from "@/assets/images/debridge-icon.svg";
import Venus from "@/assets/images/venus.png";
import Logo from "@/assets/images/logo.png";

const tiles = [
  {
    name: "Wallio",
    image: Logo,
    description: "Smart wallet managment",
  },
  {
    name: "Debridge",
    image: Debridge,
    description: "Bridge with the speed of light",
  },
  {
    name: "Venus",
    image: Venus,
    description: "The universal money market",
  },
  {
    name: "Wallio Pay",
    image: Logo,
    description: "Convenient payment via email",
    coming: true,
  },
];

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
      <div className="mt-10 flex flex-wrap justify-center gap-3 md:grid md:grid-cols-2 md:gap-5">
        {tiles.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-full border bg-background px-3 py-2 text-left shadow-md md:rounded-xl md:px-3 md:py-3"
          >
            <Icon src={t.image} className="size-8 rounded-full" />
            <div>
              <p className="font-semibold">
                {t.name}
                {t?.coming && (
                  <span className="rounded-sm bg-primary/10 px-2 text-sm font-normal">
                    coming
                  </span>
                )}
              </p>
              <p className="-mt-1 hidden text-foreground/60 md:block">
                {t.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
