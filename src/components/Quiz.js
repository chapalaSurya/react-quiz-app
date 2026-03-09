import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";

function Quiz() {

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);

  const navigate = useNavigate();

  const nextQuestion = () => {

    const next = current + 1;

    if (next < questions.length) {
      setCurrent(next);
      setTime(10);
    } else {
      navigate("/result", { state: { score } });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextQuestion();
    }, 5000);

    return () => clearTimeout(timer);
  }, [current]);   // dependency changed to current

  const handleAnswer = (option) => {

    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    nextQuestion();
  };

  return (

    <div className="quiz-container">

      <h1>React Quiz App</h1>

      <h3>
        Question {current + 1} / {questions.length}
      </h3>

      <div className="timer">
        Time Left: {time}s
      </div>

      <h2>{questions[current].question}</h2>

      <div className="options">

        {questions[current].options.map((option, index) => (

          <button
            key={index}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>

        ))}

      </div>

    </div>

  );
}

export default Quiz;