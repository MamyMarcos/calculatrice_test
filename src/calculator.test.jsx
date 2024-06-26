import { render, screen } from '@testing-library/react';
import Calculator from '../src/';
import userEvent from '@testing-library/user-event';

describe('Calculator', () => {
  it('should display initial value of 0', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');
    expect(display).toHaveTextContent('0');
  });

  it('should update display value when a number is clicked', () => {
    render(<Calculator />);
    const button = screen.getByText('1');
    userEvent.click(button);
    const display = screen.getByTestId('display');
    expect(display).toHaveTextContent('1');
  });

  it('should perform addition', () => {
    render(<Calculator />);
    const button1 = screen.getByText('1');
    const button2 = screen.getByText('2');
    const addButton = screen.getByText('+');
    const equalsButton = screen.getByText('=');
    userEvent.click(button1);
    userEvent.click(addButton);
    userEvent.click(button2);
    userEvent.click(equalsButton);
    const display = screen.getByTestId('display');
    expect(display).toHaveTextContent('3');
  });

  it('should perform subtraction', () => {
    render(<Calculator />);
    const button1 = screen.getByText('1');
    const button2 = screen.getByText('2');
    const subtractButton = screen.getByText('-');
    const equalsButton = screen.getByText('=');
    userEvent.click(button1);
    userEvent.click(subtractButton);
    userEvent.click(button2);
    userEvent.click(equalsButton);
    const display = screen.getByTestId('display');
    expect(display).toHaveTextContent('-1');
  });

  it('should perform multiplication', () => {
    render(<Calculator />);
    const button2 = screen.getByText('2');
    const button3 = screen.getByText('3');
    const multiplyButton = screen.getByText('*');
    const equalsButton = screen.getByText('=');
    userEvent.click(button2);
    userEvent.click(multiplyButton);
    userEvent.click(button3);
    userEvent.click(equalsButton);
    const display = screen.getByTestId('display');
    expect(display).toHaveTextContent('6');
  });

  it('should perform division', () => {
    render(<Calculator />);
    const button6 = screen.getByText('6');
    const button3 = screen.getByText('3');
    const divideButton = screen.getByText('/');
    const equalsButton = screen.getByText('=');
    userEvent.click(button6);
    userEvent.click(divideButton);
    userEvent.click(button3);
    userEvent.click(equalsButton);
    const display = screen.getByTestId('display');
    expect(display).toHaveTextContent('2');
  });

  it('should display an error message for division by zero', () => {
    render(<Calculator />);
    const button6 = screen.getByText('6');
    const divideButton = screen.getByText('/');
    const button0 = screen.getByText('0');
    const equalsButton = screen.getByText('=');
    userEvent.click(button6);
    userEvent.click(divideButton);
    userEvent.click(button0);
    userEvent.click(equalsButton);
    const errorMessage = screen.getByText('Erreur : Division par zéro');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should correctly evaluate expressions with large numbers', () => {
    expect(calculate('1000000 + 2000000')).toBe('3000000');
    expect(calculate('1000000 - 2000000')).toBe('-1000000');
    expect(calculate('1000000 * 2')).toBe('2000000');
    expect(calculate('1000000 / 2')).toBe('500000');
  });

  it('should correctly evaluate expressions with small numbers', () => {
    expect(calculate('0.1 + 0.2')).toBe('0.3');
    expect(calculate('0.5 - 0.3')).toBe('0.2');
    expect(calculate('0.5 * 0.5')).toBe('0.25');
    expect(calculate('1 / 3')).toBe('0.3333333333333333');
  });
});

describe('non-numeric inputs', () => {
  it('should return "Error" for non-numeric inputs', () => {
    expect(calculate('1 + 2a')).toBe('Error');
    expect(calculate('1 + "two"')).toBe('Error');
    expect(calculate('1 + true')).toBe('Error');
  });
});

describe('complex expressions', () => {
  it('should correctly evaluate complex expressions', () => {
    expect(calculate('(1 + 2) * (3 - 4) / (5 + 6)')).toBe('-0.1');
    expect(calculate('1 + 2 * 3 / 4 - 5')).toBe('-2.5');
    expect(calculate('1 + 2 * (3 - 4) / 5')).toBe('-0.4');
  });
});



