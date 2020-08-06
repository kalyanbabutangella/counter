import React from "react";
import { Button } from "antd";

export default function Presentation(props) {
  const { details, handleIncrement, handleDecrement } = props;
  return (
    <div className="counter_Screen">
      <h1>Counter</h1>
      <h2>{details.number}</h2>
      <Button type="primary" onClick={handleIncrement}>
        <b>+</b>
      </Button>{" "}
      <Button type="primary" danger onClick={handleDecrement}>
        <b>-</b>
      </Button>
    </div>
  );
}
