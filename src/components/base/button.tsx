import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'primary' | 'secondary';
}
export const Button: React.FC<ButtonProps> = (
	{ className, variant = 'primary', ...others }: ButtonProps
) => (
	<button
		className={clsx([
			'btn',
			variant === 'primary' && 'btn-primary',
			variant === 'secondary' && 'btn-secondary',
			className
		])}
		{...others}
	/>
);
