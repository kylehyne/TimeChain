// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TimeChain title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TimeChain/i);
    expect(titleElement).toBeInTheDocument();
});
