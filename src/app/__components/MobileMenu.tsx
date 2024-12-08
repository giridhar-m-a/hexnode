import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden bg-background border-0">
        <Button variant={"ghost"}>
          <Menu className="w-36 h-36" size={100} />
        </Button>
      </SheetTrigger>

      <SheetContent className="z-[107]">
        <div className="flex w-full justify-end pb-4">
          <SheetClose asChild>
            <X className="text-black" />
          </SheetClose>
        </div>
        <Separator />
        <ul
          aria-label="Navigation drawer"
          //   className="flex items-center  gap-7  group-hover:text-background text-[15px] delay-50 duration-[0.3s] ease-linear"

          className="text-black space-y-6 pt-6"
        >
          <li>
            <Link href={"/#why-hexnode"}>Why Hexnode</Link>
          </li>
          <li>
            <Link href={"/#features"}>Features</Link>
          </li>
          <li>
            <Link href="/#platforms">Platforms</Link>
          </li>
          <li>
            <Link href={"/#customers"}>Customers</Link>
          </li>
        </ul>
        <div className="pt-10 w-full flex justify-center">
          <Link
            className="text-foreground bg-button px-[26.5px]  !w-full py-[12px] hover:bg-button_accent font-medium uppercase text-[15px] rounded-[3px]"
            href="/#"
            aria-label="14 Day Free Trial"
          >
            14 Day Free Trial
          </Link>
        </div>
        <div className="pt-10 w-full text-center">
          <Link
            href={"https://www.hexnode.com/mobile-device-management/sign-in/"}
            className="mt-14 text-black text-center"
          >
            Login
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
