import React from "react";

const FinanceComonent = (props) => {
  return (
    <div className="d-flex border" style={{ width: "300px", height: "200px" }}>
      <div className="w-50 d-flex justify-content-center align-items-center">
        <div className="bg-danger rounded-5 w-50 h-50 d-flex justify-content-center align-items-center">
          <i className="fa-solid fa-file-invoice-dollar fa-2xl  "></i>
        </div>
      </div>
      <div className="w-50">
        <p>{props.title}</p>
        <h4>{props.price}</h4>
        <div>
          <span>{props.percentage}</span>
          {props.text}
        </div>
      </div>
    </div>
  );
};

export default FinanceComonent;
