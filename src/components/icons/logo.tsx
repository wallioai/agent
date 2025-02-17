import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { routes } from "@/lib/routes";

type DexaSWProp = {
  textClass?: string;
  logoClass?: string;
};

type DexaSWIconProps = {
  alt?: string;
  height?: number;
  width?: number;
  src?: string | StaticImport;
  className?: string;
};

export function DexaSWIcon({
  src = Logo,
  width = 260,
  height = 260,
  alt = "DexaSW icon",
  className,
}: DexaSWIconProps) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={cn("h-8 w-8", className)}
    />
  );
}
export function DexaSWLogo({
  className,
  textClass,
  logoClass,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  DexaSWProp) {
  return (
    <Link
      href={routes.home}
      className={cn("flex items-center gap-x-2", className)}
    >
      <DexaSWIcon className={logoClass} />
      <p className={cn("text-primary text-2xl font-black", textClass)}>
        DexaSW
      </p>
    </Link>
  );
}
