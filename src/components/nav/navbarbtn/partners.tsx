import LinkBtn from "~/components/button/link"
import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

export function NavBarBtn() {
  return (
    <div className=" float-end">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Pages</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Partners</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <LinkBtn href="/partners" variant={'link'}>Home</LinkBtn>
          {/* <LinkBtn href="/partners/sponsors" variant={'link'}>Sponsors</LinkBtn> */}
          <LinkBtn href="/partners/fyts" variant={'link'}>FYTS</LinkBtn>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
