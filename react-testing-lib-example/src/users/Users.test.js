import { render, screen, fireEvent } from '@testing-library/react';
import Users from './Users.js';
import axios from 'axios';

jest.mock('axios');

describe('USERS TEST', () => {
    let response;
    beforeEach(() => {
        response = {
            data: [
                { id: 1, name: 'John' },
                { id: 2, name: 'Doe' },
            ],
        };
    });
    test('renders learn react link', async () => {
        axios.get.mockReturnValue(response);
        render(<Users />);
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(2);
        expect(axios.get).toBeCalledTimes(1);
    });
});
