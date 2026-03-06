import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Result() {

  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score || 0;

  return (

    <div className="result">

      <h1>Quiz Completed 🎉</h1>

      <h2>Your Score: {score}</h2>

      <button
        onClick={() => navigate("/")}
      >
        Restart Quiz
      </button>

    </div>

  );
}

export default Result;