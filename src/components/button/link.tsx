import Link from "next/link";
import { Button } from "~/components/ui/button";


interface ButtonProps {
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
  href: string;
  children: React.ReactNode;
  isExternal?: boolean
};

export default function LinkBtn(props: ButtonProps){
  if (props.isExternal == true) {
    return(
      <div>
        <Button asChild variant={props.variant}>
          <Link href={props.href} className="after:content-['_↗']">{props.children}</Link>
        </Button>
      </div>
    )
  } else {
    return(
      <div>
        <Button asChild variant={props.variant}>
          <Link href={props.href}>{props.children}</Link>
        </Button>
      </div>
    )
  }
}