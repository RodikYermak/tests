import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('TEST APP', () => {
    test('renders learn react link', () => {
        render(<App />);
        const helloWorldElement = screen.getByText(/hello world/i);
        const btnElem = screen.getByRole('button');
        const inputElem = screen.getByPlaceholderText(/input value.../i);
        expect(helloWorldElement).toBeInTheDocument();
        expect(btnElem).toBeInTheDocument();
        // expect(inputElem).toBeInTheDocument();
        expect(inputElem).toMatchSnapshot();
        // screen.debug();
    });
});

test('renders learn react link', async () => {
    render(<App />);
    // const helloWorldElem = screen.queryByText(/hello2/i);
    // expect(helloWorldElem).toBeNull();
    // screen.debug();
    const helloWorldElem = await screen.findByText(/data/i);
    expect(helloWorldElem).toBeInTheDocument();
});

test('CLICK EVENT', () => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
});

test('INPUT EVENT', () => {
    render(<App />);
    const inputElem = screen.getByPlaceholderText(/input value.../i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    // fireEvent.input(inputElem, { target: { value: '123123' } });
    userEvent.type(inputElem, '123123');
    expect(screen.queryByTestId('value-elem')).toContainHTML('123123');

});
