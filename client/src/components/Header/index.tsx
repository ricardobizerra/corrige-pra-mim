import React from "react";
import { HeaderComponent, LogoComponent } from "./styles";

export const Header: React.FC = () => {
	return (
		<HeaderComponent>
			<Logo />
		</HeaderComponent>
	);
}

const Logo: React.FC = () => {
	return (
		<LogoComponent>
			<span>corrige</span>
			pra
			<span>mim</span>
		</LogoComponent>
	);
}
