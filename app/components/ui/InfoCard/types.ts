import { CircleIcon } from "../CircleIcon/types";

export type InfoCard = {
  icon: CircleIcon;
  heading: string;
  text: string;
  layoutType?: "vertical" | "horizontal";
}