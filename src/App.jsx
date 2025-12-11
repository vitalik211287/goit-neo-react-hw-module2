import Options from "components/Options/Options";
import Description from "components/Description/Description";
import { useState } from "react";
import Feedback from './components/Feedback/Feedback'

const categories = ["Good", "Neutral", "Bad", "Reset"];

function App() {
   const [feedback, setFeedback] = useState({
    Good: 0,
    Neutral: 0,
    Bad: 0,
  });

  const handler = (name) => {
    setFeedback(prev => ({
      ...prev,
      [name]: prev[name] + 1,
    }));
  };

  return (
    <>
      <Description />
      <Options categories={categories}   handler={handler}/>
      <Feedback  feedback={feedback}   />
    </>
  );
}

export default App;
