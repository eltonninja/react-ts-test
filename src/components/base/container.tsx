import { HTMLAttributes } from "react";
import clsx from "clsx";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  maxSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
export const Container: React.FC<ContainerProps> = (
  { className, maxSize = 'md', ...others }: ContainerProps
) => (
  <div
    className={clsx([
      'container',
      `container-${maxSize}`,
      className
    ])}
    {...others}
  />
);
