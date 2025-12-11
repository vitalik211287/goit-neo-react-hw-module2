import css from './Feedback.module.css'

function Feedback({ feedback }) {
  return (
    <ul className={css.feedback}>
      {Object.entries(feedback).map(([name, value]) => (
        <li className={css.feedbackItem} key={name}>
          {name}: {value}
        </li>
      ))}
    </ul>
  );
}

export default Feedback;
