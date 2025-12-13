function FeedbackItem({ value, name }) {
  return (
    <li>
      <p>{`${name}: ${value}`}</p>
    </li>
  );
}

export default FeedbackItem;
