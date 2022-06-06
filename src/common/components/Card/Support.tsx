import React from "react";

const Support = ({ question, icon }: any) => {
  return (
    <div className="question-card">
      <p className="question">{question}</p>
      <img src={icon} alt="" />
    </div>
  );
};

export default Support;
