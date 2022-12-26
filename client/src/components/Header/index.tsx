import React from "react";
import { DescriptionComponent, HeaderComponent, LogoComponent } from "./styles";

export const Header: React.FC = () => {
	return (
		<HeaderComponent>
			<Logo />
			<Description />
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

const Description: React.FC = () => {
	return (
		<DescriptionComponent>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quia aliquid iste, totam expedita unde atque cum quis dolorem, modi ex, sed provident accusamus? Atque iste adipisci deleniti maiores sequi!
		</DescriptionComponent>
	);
}
