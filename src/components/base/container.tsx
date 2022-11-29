import { HTMLAttributes, memo } from 'react';
import clsx from 'clsx';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  maxSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
export const Container: React.FC<ContainerProps> = memo((
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
));
