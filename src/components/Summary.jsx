import quizCompleteImg from "./../assets/quiz-complete.png";
import QUESTION from "./../questions";

export default function Summary({ userAnsweres }) {
  const skippedAnswers = userAnsweres.filter(answer => answer === null);
  const correctAnswers = userAnsweres.filter((answer, index) => answer === QUESTION[index].answers[0]);

  const skippedAnsweresShare = Math.round(skippedAnswers.length / userAnsweres.length * 100);
  const correctAnsweresShare = Math.round(correctAnswers.length / userAnsweres.length * 100);
  const wrongAnswerShare = 100 - skippedAnsweresShare - correctAnsweresShare;

  return (
    <div id="summary">
      <img src={quizCompleteImg} />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnsweresShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnsweresShare}%</span>
          <span className="text">Answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswerShare}%</span>
          <span className="text">Answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnsweres.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTION[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTION[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>

    </div>
  );
}