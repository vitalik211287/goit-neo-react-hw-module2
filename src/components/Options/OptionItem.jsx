function OptionItem({ name }, handler) {
  return (
    <li key={name}>
      <button type="button" className="feedbackBtn" onClick={handler}>
        {name}
      </button>
    </li>
  );
}

export default OptionItem;
