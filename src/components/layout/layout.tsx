import { PropsWithChildren } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="main-layout">
			<Header />

			<main>
				{children}
			</main>

			<Footer />
		</div>
	)
}