import React from "react";
import setClassName from "../../utils/ClassName";
import Support from "./Card/Support";
import { questions } from "../../constants/Questions";

const Eclaircissement = ({ className = "" }) => {
  return (
    <div className={setClassName("container-eclaircissement", className)}>
      <p className="title">☄️ Besoin d’un éclaircissement ?</p>
      <div className="container-questions">
        {questions.map((el, index) => {
          return <Support key={index} question={el.question} icon={el.icon} />;
        })}
      </div>
    </div>
  );
};

export default Eclaircissement;
