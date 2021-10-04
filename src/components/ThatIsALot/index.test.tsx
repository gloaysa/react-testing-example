import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThatIsALot } from '.';

/**
 * The main requirement of this component is to show a message when the input value
 * "currentCounter" is greater than 5. We want to create tests that protect this requirement
 * by future changes to this component.
 *
 * The condition of "currentCounter > 5" is just an example of a requirement that needs to be
 * modeled in our code. In this case is a naive condition, but can represent any kind of
 * more complex requirement that we want to make sure it's not altered by future changes
 * to the component.
 */
describe('ThisIsALot', () => {
  /**
   * Let's make sure that the behaviour works correctly for values grater than 5...
   */
  it('should show the "this is a lot" message if currentCounter is greater than 5', () => {
    const currentCounter = 6;
    render(<ThatIsALot currentCounter={currentCounter} />);
    const component = screen.getByTestId('that-is-a-lot-message');
    expect(component).toBeVisible();
  });

  /**
   * ...and for values lower than 5...
   */
  it('should not show the "this is a lot" message if currentCounter is lower than 5', () => {
    const currentCounter = 4;
    render(<ThatIsALot currentCounter={currentCounter} />);
    const component = screen.queryByTestId('that-is-a-lot-message');
    expect(component).toEqual(null);
  });

  /**
   * But what do we do when the value is on a boundary of the concept describen in our requirement?
   * Greater than 5... does it mean that we still hide the component when the value is 5?
   * Or do we show the component when currentCounter is 5?
   *
   * This kind of doubts are easy to appear when time has passed and we are not anymore so sure
   * about the implementation.
   *
   * Creating unit tests that check and keep guard to this boundaries of a a requirement,
   * makes sure that this nuances in a requirement also are coded along with the main implementation.
   *
   * Given this unit test, no one in the future will doubt that we are explictly creating code that
   * hides the component until the currentCounter value is lower or equal to 5.
   */
  it('should not show the "this is a lot" message if currentCounter is equal to 5', () => {
    const currentCounter = 4;
    render(<ThatIsALot currentCounter={currentCounter} />);
    const component = screen.queryByTestId('that-is-a-lot-message');
    expect(component).toEqual(null);
  });
});
