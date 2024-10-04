import * as React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { MenuItems } from "./menu-items";
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Logo } from "../logo";
import { ScrollArea } from "../ui/scroll-area";

export const Navbar = () => {
   const isDesktop = useMediaQuery("(min-width: 1024px)");
   const [openDialog, setOpenDialog] = React.useState<boolean>(false);
   const closeDialog = () => setOpenDialog(false);

   return (
      <nav className="sticky top-0 left-0 z-20 bg-secondary">
         <header className="container flex items-center justify-between h-20">
            <Logo />

            {isDesktop && <MenuItems />}

            {!isDesktop && (
               <Sheet
                  open={openDialog}
                  onOpenChange={() => setOpenDialog((prev) => !prev)}
               >
                  <SheetTrigger asChild>
                     <Button
                        size="sm"
                        variant="secondary"
                        className="p-2 size-fit"
                     >
                        <HamburgerMenuIcon className="size-6" />
                     </Button>
                  </SheetTrigger>

                  <SheetContent
                     side="left"
                     className="bg-secondary border-secondary grid grid-rows-[auto_1fr] px-0"
                  >
                     <SheetHeader className="px-6">
                        <Logo closeDialog={closeDialog} className="w-fit" />

                        <span className="sr-only">
                           <SheetTitle>
                              Boldo Company and corporation
                           </SheetTitle>
                           <SheetDescription>
                              Boldo is a test to get into a better organisation
                           </SheetDescription>
                        </span>
                     </SheetHeader>

                     <ScrollArea>
                        <div className="px-6 mt-5">
                           <MenuItems closeDialog={closeDialog} />
                        </div>
                     </ScrollArea>
                  </SheetContent>
               </Sheet>
            )}
         </header>
      </nav>
   );
};
