// import css from "./Feedback.module.css";
// import FeedbackButton from "../Options/Options";
// import Description from "../Description/Description";

function Feedback({ categories }) {
  return (
    <>
      <ul>
              {categories.map(({ key, value }) => { return <FeedbackItem key={key} value={value} />; })}
       
      </ul>
    </>
  );
}

export default Feedback;
