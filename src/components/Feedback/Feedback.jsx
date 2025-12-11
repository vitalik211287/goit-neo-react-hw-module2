function Feedback({ feedback }) {
  return (
    <ul>
      {Object.entries(feedback).map(([name, value]) => (
        <li key={name}>
          {name}: {value}
        </li>
      ))}
    </ul>
  );
}

export default Feedback;
