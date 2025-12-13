import css from "./Feedback.module.css";
import FeedbackItem from "./FeedbackItem";

function Feedback({ feedback, totalFeedback, positiveFeedback }) {
  return (
    <div>
      <ul className={css.feedback}>
        {Object.entries(feedback).map(([name, value]) => (
          <FeedbackItem key={name} name={name} value={value} />
        ))}
      </ul>

      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
}

export default Feedback;
