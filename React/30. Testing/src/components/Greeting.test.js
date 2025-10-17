import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
	test('renders "Hello World" as a text', () => {
		//Arrange
		render(<Greeting />);

		//Act
		//...nothing

		//Assert
		const helloWorldElement = screen.getByText(/hello world/i);
		expect(helloWorldElement).toBeInTheDocument();
	});

	test('renders "good to see you" if the button was NOT clicked', () => {
		//Arrange
		render(<Greeting />);

		//Act
		//...nothing

		//Assert
		const outputElement = screen.getByText('good to see you', {
			exact: false,
		});
		expect(outputElement).toBeInTheDocument();
	});

	test('renders "Changed!" if the button was clicked', async () => {
		//Arrange
		render(<Greeting />);

		//Act
		const buttonElement = screen.getByRole('button');
		await userEvent.click(buttonElement);

		//Assert
		const outputElement = screen.getByText('Changed!');
		expect(outputElement).toBeInTheDocument();
	});

	test('does not render "good to see you" if the button was clicked', async () => {
		//Arrange
		render(<Greeting />);

		//Act
		const buttonElement = screen.getByRole('button');
		await userEvent.click(buttonElement);

		//Assert
		const outputElement1 = screen.getByText('Changed!');
		const outputElement2 = screen.queryByText('good to see you', {
			exact: false,
		});
		expect(outputElement1).toBeInTheDocument();
		expect(outputElement2).toBeNull();
	});
});
