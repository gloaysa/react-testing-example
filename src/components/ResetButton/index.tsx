import React, { FC } from 'react';

export interface ResetButtonProps {
  isHidden: boolean;
  onClick: () => any;
}

export const ResetButton: FC<ResetButtonProps> = ({ isHidden, onClick }) => {
  if (!isHidden) {
    return (
      <button type="button" onClick={onClick}>
        Reset
      </button>
    );
  }
  return null;
};
