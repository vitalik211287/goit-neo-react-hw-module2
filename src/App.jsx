import Options from "components/Options/Options";
import Description from "components/Description/Description";
import { useState } from "react";

const categories = ["Good", "Neutral", "Bad", "Reset"];

function App() {
  const [value, setValue] = useState(0);

  const handler = () => {
    setValue((prev) => prev + 1);
    // console.log(prev);
  };

  return (
    <>
      <Description />
      <Options categories={categories} handler={handler} />
      <p>hello</p>
    </>
  );
}

export default App;
