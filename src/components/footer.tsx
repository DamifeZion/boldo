import {
   COMPANY,
   FOOTER_DESCRIPTION,
   LANDINGS,
   RESOURCES,
} from "@/constants/footer-const";
import { Logo } from "./logo";
import Typography from "./ui/typography";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";

export const Footer = () => {
   return (
      <footer className="container py-20 pb-28 text-muted-foreground">
         <div className="grid gap-x-4 gap-y-16 450:grid-cols-3 lg:grid-cols-5  [&_h4]:text-secondary *:space-y-8 [&_a]:p-0 [&_a]:text-muted-foreground hover:[&_a]:text-primary">
            <ul className="max-w-sm 450:col-span-3 lg:col-span-2">
               <Logo src="/footer-logo.svg" />

               <li>{FOOTER_DESCRIPTION}</li>
            </ul>

            <ul>
               <li>
                  <Typography variant="h4">Landings</Typography>
               </li>

               {LANDINGS.map((item, index) => (
                  <li key={index}>
                     <Button asChild variant="link">
                        <Link to={item.href}>{item.title}</Link>
                     </Button>
                  </li>
               ))}
            </ul>

            <ul>
               <li>
                  <Typography variant="h4">Company</Typography>
               </li>

               {COMPANY.map((item, index) => (
                  <li key={index}>
                     <Button asChild variant="link">
                        <Link to={item.href}>
                           {item.title}{" "}
                           {item.badge && (
                              <Badge className="ml-1.5">{item.badge}</Badge>
                           )}
                        </Link>
                     </Button>
                  </li>
               ))}
            </ul>

            <ul>
               <li>
                  <Typography variant="h4">Resources</Typography>
               </li>

               {RESOURCES.map((item, index) => (
                  <li key={index}>
                     <Button asChild variant="link">
                        <Link to={item.href}>{item.title}</Link>
                     </Button>
                  </li>
               ))}
            </ul>
         </div>

         <Typography className="!text-sm mt-16 lg:mt-2">
            All rights reserved.
         </Typography>
      </footer>
   );
};
