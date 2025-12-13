function OptionItem({ name , handler}) {
  return (
    <li>
      <button onClick={() => handler(name)}>
       { name[0].toUpperCase() + name.slice(1)}
      </button>
    </li>
  );
}

export default OptionItem;
