import Options from "components/Options/Options";
import Description from "components/Description/Description";
import { useState, useEffect } from "react";
import Feedback from "components/Feedback/Feedback";
import Notification from "components/Notification/Notification";

const categories = ["Good", "Neutral", "Bad"];

function App() {
const [feedback, setFeedback] = useState(() => {
  const saved = localStorage.getItem("feedback");
  return saved
    ? JSON.parse(saved)
    : { Good: 0, Neutral: 0, Bad: 0 };
});

  useEffect(() => {
   localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const handler = (name) => {
    setFeedback((prev) => ({
      ...prev,
      [name]: prev[name] + 1,
    }));
  };

  const handlerReset = () => {
    setFeedback({
      Good: 0,
      Neutral: 0,
      Bad: 0,
    });
  };

  const totalFeedback = feedback.Good + feedback.Neutral + feedback.Bad;
  console.log(totalFeedback);
  const positiveFeedback = Math.round((feedback.Good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        categories={categories}
        handlerReset={handlerReset}
        handler={handler}
      />

      {totalFeedback > 0 ? (
        <>
          <Feedback handler={handler} feedback={feedback} />
          <p>Positive: {positiveFeedback}%</p>
        </>
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
