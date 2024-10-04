import * as React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { TTeamCardPros } from "@/types";

export const TeamCard: React.FC<TTeamCardPros> = ({ src, name, position }) => {
   return (
      <Card className="bg-transparent border-none rounded-none shadow-none *:p-0">
         <CardContent>
            <img
               src={src}
               className="object-cover rounded-2xl w-full max-h-[350px]"
            />

            <CardTitle className="text-lg font-normal sm:text-xl mt-7 lg:text-2xl">
               {name}
            </CardTitle>

            <CardDescription className="mt-2">{position}</CardDescription>
         </CardContent>
      </Card>
   );
};
