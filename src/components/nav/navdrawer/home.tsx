"use client"
import * as React from "react"
import PhListBold from "../../icons/PhListBold"
import { Button } from "~/components/ui/button"
import { NavTabs } from "~/components/nav/navtabs/home"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer"

export function NavDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
        <PhListBold className=' fill-current w-8 h-8' />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>DFN Navigation</DrawerTitle>
            <DrawerDescription>Where would you like to go?</DrawerDescription>
          </DrawerHeader>
          <div className="">
            <NavTabs />
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
