import React from "react";
import FaqItem from "./FaqItem";

function Faq(props) {
  return (
    <>
      {props.items.map(item => (
        <FaqItem question={item.question} answer={item.answer} />
      ))}
    </>
  );
}

export default Faq;
