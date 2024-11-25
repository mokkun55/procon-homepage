import { tv } from "tailwind-variants";

const textCss = tv({
  base: "font-notoSansJP text-textprimary",
  variants: {
    size: {
      title: "text-[1.5rem]",
      default: "text-[1rem]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export { textCss };
