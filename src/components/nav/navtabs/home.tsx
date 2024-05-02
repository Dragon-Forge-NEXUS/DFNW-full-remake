import Link from "next/link"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/tabs"

export function NavTabs() {
  return (
    <Tabs defaultValue="DFN" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="DFN">DFN</TabsTrigger>
        <TabsTrigger value="DFG">DFG</TabsTrigger>
        <TabsTrigger value="External">DFG</TabsTrigger>
      </TabsList>
      <TabsContent value="DFN">
        <Card>
          <CardHeader>
            <CardTitle>DFN</CardTitle>
            <CardDescription>
              Main DFN navigation
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <div className="">
              <Button asChild variant={'outline'}>
                <Link href="/">The NEXUS</Link>
              </Button>
            </div>
            <div className="">
              <Button asChild variant={'outline'}>
                <Link href="/partners">Partners</Link>
              </Button>
            </div>
            <div className="">
              <Button asChild variant={'outline'}>
                <Link href="/blog">Blog</Link>
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            All of these sites are internal
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="DFG">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="External">
        <Card>
          <CardHeader>
            <CardTitle>DFN External</CardTitle>
            <CardDescription>
              External DFN navigation
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <div className="">
              <Button asChild variant={'outline'}>
                <Link href="https://github.com/Dragon-Forge-NEXUS">GitHub</Link>
              </Button>
            </div>
            <div className="">
              <Button asChild variant={'outline'}>
                <Link href="https://nightly.dragonforgenexus.xyz">nightly</Link>
              </Button>
            </div>
            <div className="">
              <Button asChild variant={'outline'}>
                <Link href="/">Social 1</Link>
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            All of these sites are external
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
