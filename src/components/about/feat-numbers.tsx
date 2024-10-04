import * as React from "react";
import { TFeatureNumbersProps } from "@/types";
import Typography from "../ui/typography";

export const FeatureNumbers: React.FC<TFeatureNumbersProps> = ({
   number,
   details,
}) => {
   return (
      <div>
         <Typography
            variant="h1"
            className="font-light text-primary text-7xl lg:text-[96px]"
         >
            {number}
         </Typography>

         <Typography className="mt-2 max-sm:text-center text-muted">
            {details}
         </Typography>
      </div>
   );
};
