import React, { FC } from 'react';

export interface ThatIsALotProps {
  currentCounter: number;
}

export const ThatIsALot: FC<ThatIsALotProps> = ({ currentCounter }) => {
  if (currentCounter > 5) {
    return <p data-testid="that-is-a-lot-message">That is a lot</p>;
  }
  return null;
};
