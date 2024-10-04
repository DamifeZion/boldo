import { TFooterMenu } from "@/types";
import { routeConstants } from "./route-const";

export const FOOTER_DESCRIPTION: string =
   "Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.";

export const LANDINGS: Array<TFooterMenu> = [
   {
      title: "Home",
      href: routeConstants.home,
   },
   {
      title: "Products",
      href: routeConstants.product,
   },
   {
      title: "Services",
      href: routeConstants.services,
   },
];

export const COMPANY: Array<TFooterMenu> = [
   {
      title: "Home",
      href: routeConstants.home,
   },
   {
      title: "Careers",
      href: routeConstants.careers,
      badge: "Hiring!",
   },
   {
      title: "Services",
      href: routeConstants.services,
   },
];

export const RESOURCES: Array<TFooterMenu> = [
   {
      title: "Home",
      href: routeConstants.home,
   },
   {
      title: "Products",
      href: routeConstants.product,
   },
   {
      title: "Services",
      href: routeConstants.services,
   },
];
