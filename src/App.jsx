import Options from "components/Options/Options";
import Description from "components/Description/Description";
import { useState } from "react";
import Feedback from './components/Feedback/Feedback'

const categories = ["Good","Neutral","Bad"];

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

  const handlerReset = ()=>{
     setFeedback({
    Good: 0,
    Neutral: 0,
    Bad: 0,
  })
  }
  return (
    <>
      <Description />
      <Options categories={categories} handlerReset={handlerReset} handler={handler} />
      <Feedback  handler={handler} feedback={feedback} />
     
    </>
  );
}

export default App;
