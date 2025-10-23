import React, { FC } from 'react';

interface Props {
  columnOne: React.ReactNode;
  columnTwo: React.ReactNode | JSX.Element;
  reverse?: boolean;
  align?: 'left' | 'right' | 'center';
}

const TwoColumns: FC<Props> = ({
    columnOne,
    columnTwo,
    reverse = false,
    align = 'cneter',
  }) => {
  const firstColumnClasses = `column first ${reverse ? 'right' : 'left'}`;
  const lastColumnClasses = `column last ${reverse ? 'left' : 'right'}`;
  const containerClasses = `TwoColumns ${reverse ? 'reverse' : ''}`;

  return (
    <div className={containerClasses}>
      <div className={firstColumnClasses}>{columnOne}</div>
      <div
        className={lastColumnClasses}
        style={align === 'left' ? { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' } : undefined}
      >
        {columnTwo}
      </div>
    </div>
  );
};

export default TwoColumns;
