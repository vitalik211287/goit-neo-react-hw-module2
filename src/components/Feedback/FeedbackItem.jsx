function FeedbackItem({ value , name}) {
  console.log(name)
   console.log(value)
  return <li key={name}><p>{`${name}: ${value}`}</p></li>;
}

export default FeedbackItem;
{/* <span>{ name }</span>:<span>{value}</span> */}