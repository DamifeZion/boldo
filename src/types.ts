import * as React from "react";

export type TMenu = {
   title: string;
   href: string;
   isBtn?: boolean;
};

export type TIsRouteActive = (path: string, matchSubroute?: boolean) => boolean;

export type TLogoProps = React.ImgHTMLAttributes<HTMLImageElement> & {
   closeDialog?: () => void;
};

export type TMenuItems = {
   closeDialog?: () => void;
};

export type TFeatureNumbersProps = {
   number: string;
   details: string;
};

export type TTeamCardPros = {
   src: string;
   name: string;
   position: string;
};

export type TValuesCardProps = {
   src: string;
   title: string;
   description: string;
};

export type TFooterMenu = {
   title: string;
   href: string;
   badge?: string;
};
