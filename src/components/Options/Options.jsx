import css from "../Options/Options.module.css";
import OptionItem from "../Options/OptionItem";

function Options({ categories, handler, handlerReset, totalFeedback }) {
  return (
    <ul className={css.item}>
      {categories.map((name) => (
        <OptionItem key={name} name={name} handler={handler} />
      ))}
      {totalFeedback > 0 && (
        <button type="button" onClick={handlerReset}>
          Reset
        </button>
      )}
    </ul>
  );
}

export default Options;
