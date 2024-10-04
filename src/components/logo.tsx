import { routeConstants } from "@/constants/route-const";
import { TLogoProps } from "@/types";
import * as React from "react";
import { Link } from "react-router-dom";

export const Logo: React.FC<TLogoProps> = ({
   src,
   alt,
   closeDialog,
   ...props
}) => {
   return (
      <Link to={routeConstants.home} onClick={closeDialog}>
         <img src={src || "/logo.svg"} alt={alt || "Boldo"} {...props} />
      </Link>
   );
};
