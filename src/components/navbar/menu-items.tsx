import * as React from "react";
import { MENU } from "@/constants/navbar-const";
import { TMenu, TMenuItems } from "@/types";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useIsRouteActive } from "@/hooks/use-is-route-active";
import { cn } from "@/lib/utils";

export const MenuItems: React.FC<TMenuItems> = ({ closeDialog }) => {
   const isRouteActive = useIsRouteActive();

   return (
      <ul className="flex flex-col gap-2 max-lg:gap-y-5 lg:items-center lg:flex-row">
         {MENU.map((item: TMenu, index: number) => (
            <Button
               key={index}
               asChild
               variant="link"
               onClick={closeDialog}
               className={cn(
                  "w-fit text-secondary-foreground font-normal max-lg:text-md lg:px-4 hover:text-primary",
                  {
                     "no-underline": !isRouteActive(item.href),
                     " ": isRouteActive(item.href),
                     "w-full bg-secondary-foreground font-semibold text-secondary rounded-full no-underline max-lg:mt-4 lg:px-8 hover:text-secondary hover:no-underline":
                        item.isBtn,
                  }
               )}
            >
               <Link to={item.href}>{item.title}</Link>
            </Button>
         ))}
      </ul>
   );
};
