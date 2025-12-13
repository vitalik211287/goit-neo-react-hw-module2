import Options from "components/Options/Options";
import Description from "components/Description/Description";
import { useState, useEffect } from "react";
import Feedback from "components/Feedback/Feedback";
import Notification from "components/Notification/Notification";

const categories = ["good", "neutral", "bad"];

function App() {
const [feedback, setFeedback] = useState(() => {
  const saved = localStorage.getItem("feedback");
  return saved
    ? JSON.parse(saved)
    : { good: 0, neutral: 0, bad: 0 };
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
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

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
          <Feedback
            feedback={feedback}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        </>
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
