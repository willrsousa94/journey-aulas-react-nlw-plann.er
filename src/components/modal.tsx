import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const modalVariants = tv({
  base: "w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5",

  variants: {
    variant: {
      primary: "w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5",
      secondary: "bg-zinc-800 text-zinc-200  hover:bg-zinc-700",
    },
    size: {
      default: "py-2",
      full: "w-full h-11",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

interface ModalProps
  extends ComponentProps<"div">,
    VariantProps<typeof modalVariants> {
  children: ReactNode;
}

export function Modal({ children,  ...props }: ModalProps) {
  return <div {...props}>{children}</div>;
}
