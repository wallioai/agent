import Image from "next/image";
import LogoImage from "@/assets/images/logo.png";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { routes } from "@/lib/routes";
import OptimizedImage from "../ui/OptimizedImage";

type LogoProp = {
  textClass?: string;
  logoClass?: string;
};

type IconProps = {
  alt?: string;
  height?: number;
  width?: number;
  src?: string | StaticImport;
  className?: string;
};

export function Icon({
  src = LogoImage,
  width = 260,
  height = 260,
  alt = "DexaSW icon",
  className,
}: IconProps) {
  return (
    <OptimizedImage
      src={src}
      width={width}
      height={height}
      alt={alt}
      priority
      className={cn("h-8 w-8", className)}
    />
  );
}
export function Logo({
  className,
  textClass,
  logoClass,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  LogoProp) {
  return (
    <Link
      href={routes.home}
      className={cn("flex items-center gap-x-2", className)}
    >
      <Icon className={logoClass} />
      <p className={cn("text-2xl font-black text-primary", textClass)}>
        Wallio
      </p>
    </Link>
  );
}

export function GoogleLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mr-2 h-5 w-5"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.54 12.7613C23.54 11.9459 23.4668 11.1618 23.3309 10.4091H12.5V14.8575H18.6891C18.4225 16.295 17.6123 17.5129 16.3943 18.3284V21.2138H20.1109C22.2855 19.2118 23.54 16.2636 23.54 12.7613Z"
        fill="#4285F4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4995 23.9998C15.6045 23.9998 18.2077 22.97 20.1104 21.2137L16.3938 18.3282C15.364 19.0182 14.0467 19.4259 12.4995 19.4259C9.50425 19.4259 6.96902 17.403 6.0647 14.6848H2.22266V17.6644C4.11493 21.4228 8.00402 23.9998 12.4995 23.9998Z"
        fill="#34A853"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.06523 14.6851C5.83523 13.9951 5.70455 13.2581 5.70455 12.5001C5.70455 11.7422 5.83523 11.0051 6.06523 10.3151V7.33557H2.22318C1.44432 8.88807 1 10.6444 1 12.5001C1 14.3558 1.44432 16.1122 2.22318 17.6647L6.06523 14.6851Z"
        fill="#FBBC05"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4995 5.57386C14.1879 5.57386 15.7038 6.15409 16.8956 7.29364L20.194 3.99523C18.2024 2.13955 15.5992 1 12.4995 1C8.00402 1 4.11493 3.57705 2.22266 7.33545L6.0647 10.315C6.96902 7.59682 9.50425 5.57386 12.4995 5.57386Z"
        fill="#EA4335"
      />
    </svg>
  );
}
