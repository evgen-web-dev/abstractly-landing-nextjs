import { ReactNode } from "react";
import { Button } from "../Button/types";
import { Heading } from "../Heading/types";

export type CTABannerData = {
  bannerTitle: Heading;
  text: ReactNode; // to be able to put any comp-nt or JSX
  button: Button // our custom type
}