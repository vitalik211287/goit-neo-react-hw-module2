function OptionItem({ name , handler, id}) {
    console.log({ id });
  return (
    <li key={id}>
      <button type="button" className="feedbackBtn" onClick={()=> handler(id)}>
        {name}
      </button>
    </li>
  );
}

export default OptionItem;
