import Counter from 'components/Counter';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

/**
 * DESCRIBE WHAT ARRANGE ACT AND ASSERT MEAN
 */

describe('Counter Component', () => {
  it('should increase the counter label when you click on the click-me button', () => {
    // arrange
    render(<Counter />);
    expect(screen.getByTestId('count')).toBeInTheDocument();
    // act
    fireEvent.click(screen.getByTestId('button'));
    // assert
    expect(screen.getByTestId('count')).toHaveTextContent('Count : 1');
  });
});
