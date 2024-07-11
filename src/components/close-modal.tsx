import { X } from "lucide-react";
import { ComponentProps } from "react";

interface ButtonProps
  extends ComponentProps<"button"> {
}

export function CloseModal({ ...props }: ButtonProps) {
  return (
    <button {...props} type="button">
      <X className="size-5 text-zinc-400" />
    </button>
  );
}
