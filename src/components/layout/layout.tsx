import { PropsWithChildren } from 'react';
import { useTheme } from 'hooks';
import { Footer } from './footer';
import { Header } from './header';
import './layout.css';

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
	const { theme } = useTheme();
	return (
		<div className={`main-layout theme-${theme}`}>
			<Header />

			<main>
				{children}
			</main>

			<Footer />
		</div>
	)
}