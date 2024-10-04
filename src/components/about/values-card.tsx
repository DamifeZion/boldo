import { TValuesCardProps } from "@/types";
import * as React from "react";
import Typography from "../ui/typography";

export const ValuesCard: React.FC<TValuesCardProps> = ({
   src,
   title,
   description,
}) => {
   return (
      <div className="flex flex-col gap-x-16 max-sm:gap-6 sm:flex-row">
         <img
            src={src}
            loading="lazy"
            className="rounded-lg w-[150px] h-full max-h-[150px] object-cover"
         />

         <div>
            <Typography className="!text-2xl">{title}</Typography>

            <Typography className="mt-4 !text-md">{description}</Typography>
         </div>
      </div>
   );
};
