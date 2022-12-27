import React, { useState } from "react";
import { minusButton, plusButton } from "../../assets";
import { FormComponent, GenerateButtonComponent, NumberSelectionComponent, QuantityComponent } from "./styles";

type PossibleDisplayType = {
	possibleDisplay: boolean;
	numberQuestions: number;
}

export const Form: React.FC = () => {
	const [numberQuestions, setNumberQuestions] = useState(10);
	const [questionDisplays, setQuestionDisplays] = useState(false);

	const dropNumberQuestions = () => {
		setNumberQuestions(numberQuestions - 1);
	}

	const elevateNumberQuestions = () => {
		setNumberQuestions(numberQuestions + 1);
	}

	const generateQuestions = () => {
		if (!questionDisplays) {
			setQuestionDisplays(true);
		}
	}

	return (
		<FormComponent>
			{!questionDisplays && (<QuantityComponent>
				<h2>
					Número de questões
				</h2>


				<NumberSelectionComponent>
					<img
						src={minusButton}
						alt="Ícone com símbolo de subtração"
						onClick={dropNumberQuestions}
					/>
					<input
						type="number"
						value={numberQuestions}
						onChange={value => setNumberQuestions(parseInt(value.target.value))}
					/>
					<img
						src={plusButton}
						alt="Ícone com símbolo de adição"
						onClick={elevateNumberQuestions}
					/>
				</NumberSelectionComponent>
			</QuantityComponent>)}

			<GenerateButtonComponent
				onClick={generateQuestions}
			>
				Gerar questões
			</GenerateButtonComponent>

			<QuestionsForm
				possibleDisplay={questionDisplays}
				numberQuestions={numberQuestions}
			/>

		</FormComponent>
	);
}

const QuestionsForm = ({ possibleDisplay, numberQuestions }: PossibleDisplayType) => {
	const arrayExample = [];

	for (let i=0; i < numberQuestions; i++) {
		arrayExample.push(i + 1);
	}

	return (
		<div>
			{possibleDisplay &&
				<div>
					{arrayExample.map((number) => (
						<div
							key={number}
						>
							{number}
						</div>
					))}
				</div>
			}
		</div>
	);
}
