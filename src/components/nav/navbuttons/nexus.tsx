/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { cva, type VariantProps } from "class-variance-authority"
import Link from "next/link";
import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-center duration-500 p-2 basis-full md:basis-1/3 lg:basis-1/4 md:flex-grow ease-in-out",
  {
    variants: {
      variant: {
        basic: 
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        nexus:
          "border border-input bg-background hover:bg-dragonforge-nexus hover:text-accent-foreground",
        code:
          "border border-input bg-background hover:bg-dragonforge-code hover:text-accent-foreground",
        gaming:
          "border border-input bg-background hover:bg-dragonforge-gaming hover:text-accent-foreground",
        media:
          "border border-input bg-background hover:bg-dragonforge-media hover:text-accent-foreground",
        news: 
          "border border-input bg-background hover:bg-dragonforge-news hover:text-accent-foreground",
        network: 
          "border border-input bg-background hover:bg-dragonforge-network hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "basic",
    },
  }
)

interface ButtonProps {
  variant?: "basic" | "nexus" | "code" | "gaming" | "media" | "news" | "network" | null | undefined;
  href: string;
  title: string;
  description: string;
  isExternal?: boolean;
};

export default function NavBtn({ variant, href, isExternal, title, description }: ButtonProps) {
  // Use a default value if variant is not provided
  const defaultVariant = variant ?? "basic";

  if (isExternal) {
    return(
      <Link className={cn(buttonVariants({ variant:  defaultVariant }))} href={href}>
        <h1 className="text-xl after:content-['_↗']">{title}</h1>
        <hr className="my-1"/>
        <p>{description}</p>
      </Link>
    );
  } else {
    return(
      <Link className={cn(buttonVariants({ variant:  defaultVariant }))} href={href}>
        <h1 className="text-xl">{title}</h1>
        <hr className="my-1"/>
        <p>{description}</p>
      </Link>
    );
  }
}