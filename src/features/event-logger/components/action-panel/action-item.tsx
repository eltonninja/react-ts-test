import { HTMLAttributes } from "react";
import clsx from "clsx";
import "./action-item.css";

type ActionItemProps = HTMLAttributes<HTMLDivElement>;
export const ActionItem: React.FC<ActionItemProps> = ({ className, ...others }) => (
  <div className={clsx([className, "action-item"])} {...others} />
);
