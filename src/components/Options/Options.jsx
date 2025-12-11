import css from "../Options/Options.module.css";
import OptionItem from "../Options/OptionItem";

function Options({ categories, handler, handlerReset}) {
  return (
    <ul className={css.item}>
      {categories.map((name) => (
        <OptionItem
          key={name}
          name={name}
          handler={handler}
        />
      ))}
      <button  type="button" onClick={handlerReset}>Reset</button>
    </ul>
  );
}

export default Options;
