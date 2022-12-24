import React from "react";

export const Header: React.FC = () => {
	return (
		<div>
			<Logo />
		</div>
	);
}

const Logo: React.FC = () => {
	return (
		<h1>
			<span>corrige</span>pra<span>mim</span>
		</h1>
	);
}
