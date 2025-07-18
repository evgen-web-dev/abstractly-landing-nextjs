import { type Heading } from "../Heading/types";

type SectionHeadingAlignment = 'center' | 'left' | 'right';



export type SectionHeading = {
  heading: Heading; 
  subheading?: string;
  eyebrow?: string;
  alignment?: SectionHeadingAlignment;
}