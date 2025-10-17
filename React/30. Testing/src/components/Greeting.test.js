import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component', () => {
	test('renders Hello World as a text', () => {
		//Arrange
		render(<Greeting />);

		//Act
		//...nothing

		//Assert
		const helloWorldElement = screen.getByText(/hello world/i);
		expect(helloWorldElement).toBeInTheDocument();
	});

	test('renders It\'s good to see you as a text', () => {
		//Arrange
		render(<Greeting />);

		//Act
		//...nothing

		//Assert
		const helloWorldElement = screen.getByText(/It's good to see you/i);
		expect(helloWorldElement).toBeInTheDocument();
	});
});
