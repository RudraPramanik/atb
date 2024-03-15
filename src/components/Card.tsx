import { DetailedHTMLProps, HTMLAttributes } from "react";

export type CardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export default function Card({ className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={`${className} rounded-md shadow-sm shadow-[#7a34eb]`}
    ></div>
  );
}
