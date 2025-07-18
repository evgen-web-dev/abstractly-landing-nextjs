
type AnchorButton = {
  buttonType: "anchor";
  href: string;
  target?: "_blank" | "_self"
}

type FormButton = {
  buttonType: "formButton";
  actionType?: "submit" | "button";
  onButtonClick?: (...args: any[]) => void;
}

// discriminated unions
export type Button = (AnchorButton | FormButton) & {
  styleType?: "primary"  | "secondary";
  title?: string;
};