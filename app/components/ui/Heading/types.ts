import { ElementType } from "react";

export type HeadingType = {
  text: string;
  headingTag: ElementType<any, AllHeadingTags>;
}

export type AllHeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';