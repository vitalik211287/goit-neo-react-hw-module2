import css from "../Options/Options.module.css";
import OptionItem from "../Options/OptionItem";
// import { createLogger } from "vite";

function Options({ categories, handler}) {
  console.log({ categories });
   console.log({ handler });
  return (
    <ul className={css.item}>
      {categories.map((name, index) => {
        console.log({index})
        return <OptionItem key={name} id={name} name={name} handler=
        {handler} />;
      })}
    </ul>
  );
}

export default Options;
