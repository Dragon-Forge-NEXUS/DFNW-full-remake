import LinkBtn from "~/components/button/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/tabs"

export function NavTabs() {
  return (
    <Tabs defaultValue="DFN" className="w-[400]">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="DFN">DFN</TabsTrigger>
        <TabsTrigger value="DFG">DFG</TabsTrigger>
        <TabsTrigger value="DFM">DFM</TabsTrigger>
        <TabsTrigger value="DFC">Code</TabsTrigger>
        <TabsTrigger value="External">External</TabsTrigger>
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
            <LinkBtn href="/" variant={'outline'}>The NEXUS</LinkBtn>
            <LinkBtn href="/partners" variant={'outline'}>Partners</LinkBtn>
            <LinkBtn href="/blog" variant={'outline'}>Blog</LinkBtn>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="DFG">
        <Card>
          <CardHeader>
            <CardTitle>DFG</CardTitle>
            <CardDescription>
              DragonForgeGaming Navigation
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <LinkBtn href="/gaming" variant={'outline'}>Gaming Home</LinkBtn>
            <LinkBtn href="/blog?tags=gaming" variant={'outline'}>Blog</LinkBtn>
            <LinkBtn href="/code/gaming/api" variant={'outline'}>API</LinkBtn>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="DFC">
        <Card>
          <CardHeader>
            <CardTitle>Code</CardTitle>
            <CardDescription>
              DragonForgeCode navigation
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <LinkBtn href="/code" variant={'outline'}>Code</LinkBtn>
            <LinkBtn href="/code/api" variant={'outline'}>API</LinkBtn>
            <LinkBtn href="/code/gaming/api" variant={'outline'}>Gaming API</LinkBtn>
            <LinkBtn href="https://github.com/Dragon-Forge-NEXUS" variant={'outline'} isExternal>GitHub</LinkBtn>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="DFM">
        <Card>
          <CardHeader>
            <CardTitle>DFM</CardTitle>
            <CardDescription>
              DragonForgeMedia navigation
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            🚧Pardon our dust🚧<br />We are working on bringing this site into production.
          </CardContent>
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
            <LinkBtn href="https://github.com/Dragon-Forge-NEXUS" variant={'outline'} isExternal>GitHub</LinkBtn>
            <LinkBtn href="https://nightly.dragonforgenexus.xyz" variant={'outline'} isExternal>Nightly</LinkBtn>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
