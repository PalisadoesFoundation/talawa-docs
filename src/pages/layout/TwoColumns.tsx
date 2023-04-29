import React, { FC } from "react";
import classNames from "classnames";

interface Props {
  columnOne: React.ReactNode;
  columnTwo: React.ReactNode;
  reverse?: boolean;
}

export const TwoColumns: FC<Props> = ({ columnOne, columnTwo, reverse = false }) => {
  const firstColumnClasses = classNames("column", "first", { "left": !reverse, "right": reverse });
  const lastColumnClasses = classNames("column", "last", { "right": !reverse, "left": reverse });
  const containerClasses = classNames("TwoColumns", { "reverse": reverse });

  return (
    <div className={containerClasses}>
      <div className={firstColumnClasses}>
        {columnOne}
      </div>
      <div className={lastColumnClasses}>
        {columnTwo}
      </div>
    </div>
  );
};
