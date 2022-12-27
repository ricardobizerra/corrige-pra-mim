import styled from "styled-components";

export const FormComponent = styled.div`
	background-color: #111111;
	border-top: 1px solid #ffffff;
	padding: 1.5rem;
`;

export const QuantityComponent = styled.div`
	h2{
		font-size: 1.25rem;
		font-weight: 400;
		text-align: center;
		text-decoration: underline;
	}
`;

export const NumberSelectionComponent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	img{
		padding: 0 0.25rem;

		:hover{
			cursor: pointer;
			opacity: 0.75;
		}

		:active{
			opacity: 0.5;
		}
	}

	input{
		font-family: 'Anybody', sans-serif;
		font-size: 2rem;
		font-weight: 400;
		text-align: center;

		padding: 0.5rem;

		border: none;
		background-color: transparent;
		color: #ffffff;

		max-width: 5rem;
	}
`;

export const GenerateButtonComponent = styled.button`
	background-color: transparent;
	color: #ffffff;
	border: 1px solid #ffffff;
	border-radius: 10px;

	font-family: 'Anybody', sans-serif;
	font-size: 1.5rem;
	text-align: center;

	margin-top: 1rem;
	padding: 0.5rem;

	width: 100%;

	transition: 0.5s ease;

	:hover{
		cursor: pointer;

		background-color: #ffffff;
		color: #222222;
	}

	:active{
		background-color: #444444;
	}
`;

export const QuestionComponent = styled.div`
	display: flex;
	align-items: center;

	margin: 1rem 0;

	border: 1px solid #ffffff;
	border-radius: 10px;
	object-fit: cover;

	h3{
		width: 18%;
		font-size: 1.5rem;
		text-align: center;
		line-height: 2.5rem;
	}

	.question-N{
		border-radius: 0 9px 9px 0;
	}
`;

export const QuestionLetterComponent = styled.button`
	width: calc((82%)/6);

	background-color: transparent;
	border: none;

	color: #ffffff;

	font-family: 'Anybody', sans-serif;
	font-size: 1.25rem;
	text-align: center;
	line-height: 2.5rem;

	transition: 0.3s ease;

	:hover, :focus{
		background-color: #ffffff;
		color: #222222;

		cursor: pointer;
	}
`;
