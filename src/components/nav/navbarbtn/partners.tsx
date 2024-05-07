import LinkBtn from "~/components/button/link"
import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

export function NavBarBtn() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <LinkBtn href="/partners" variant={'link'}>Partners Home</LinkBtn>
        {/* <LinkBtn href="/partners/sponsors" variant={'link'}>Sponsors</LinkBtn> */}
        <LinkBtn href="/partners/fyts" variant={'link'}>FYTS</LinkBtn>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
