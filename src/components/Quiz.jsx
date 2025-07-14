import { useState, useCallback } from "react";

import QUESTIONS from "./../questions"
import Question from "./Question";
import Summary from './Summary'

export default function Quiz() {
  const [userAnsweres, setUsersAnsweres] = useState([]);

  const activeQuestionIndex = userAnsweres.length;
  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  const handelSelectAnswere = useCallback(function handelSelectAnswere(selectedAnswere) {
    setUsersAnsweres(pervUserAnswers => [...pervUserAnswers, selectedAnswere]);
  }, []);

  const handelSkipAnswer = useCallback(() => {
    handelSelectAnswere(null)
  }, [handelSelectAnswere]);

  if (isQuizComplete) {
    return (
      <Summary userAnsweres={userAnsweres} />
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handelSelectAnswere}
        onSkipAnswer={handelSkipAnswer}
      />
    </div>
  );
}