import css from "../Options/Options.module.css";
import OptionItem from "../Options/OptionItem";

function Options({ categories, handler, handlerReset, totalFeedback }) {
  return (
    <div className={css.item}>
      <ul className={css.item}>
        {categories.map((name) => (
          <OptionItem key={name} name={name} handler={handler} />
        ))}
      </ul>
      {totalFeedback > 0 && (
        <button type="button" onClick={handlerReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
