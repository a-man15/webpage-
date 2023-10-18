import React from "react";
import FinanceComonent from "./FinanceComonent";

const FinanceComponents = () => {
  return (
    <div className="d-flex justify-content-between">
      <FinanceComonent
        title="Earning"
        price="$198k"
        percentage="⬆37.8"
        text="this month"
      />
      <FinanceComonent
        title="Orders"
        price="$2.4k"
        percentage="⬇2%"
        text="this month"
      />
      <FinanceComonent
        title="Balance"
        price="$2.4k"
        percentage="⬇2%"
        text="this month"
      />
      <FinanceComonent
        title="Total Sales"
        price="$89k"
        percentage="⬆11%"
        text="this week"
      />
    </div>
  );
};

export default FinanceComponents;
