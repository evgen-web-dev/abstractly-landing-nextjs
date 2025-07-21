import { ReactNode } from "react";

export type AccordionItem<T> = {
  id: T;
  title: string;
  content: ReactNode; // to be able to put any comp-nt or JSX
  isOpened: boolean;
};