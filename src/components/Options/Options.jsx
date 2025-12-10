import css from "../Options/Options.module.css";
import OptionItem from "../Options/OptionItem";

function Options({ categories }) {
  console.log({ categories });
  return (
    <ul className={css.item}>
      {categories.map((name) => {
        return <OptionItem key={name} name={name} />;
      })}
    </ul>
  );
}

export default Options;
