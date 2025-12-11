function OptionItem({ name , handler}) {
  return (
  <li>
      <button  onClick={() => handler(name)}>
        {name}
      </button>
    </li>
  );
}

export default OptionItem;
