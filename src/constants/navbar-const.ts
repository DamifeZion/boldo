import { TMenu } from "@/types";
import { routeConstants } from "./route-const";

export const MENU: Array<TMenu> = [
   {
      title: "Product",
      href: routeConstants.product,
   },
   {
      title: "Services",
      href: routeConstants.services,
   },
   {
      title: "About",
      href: routeConstants.about,
   },
   {
      title: "Login",
      href: routeConstants.login,
      isBtn: true,
   },
];
