import style from "./button.module.css";
import { type_button } from "./constants";

const Button = (props) => {
  const { texto, type = type_button.primary, ...otherProps } = props;
  return (
    <button type={type} {...otherProps} className={style.button}>
      {texto}
    </button>
  );
};

export { Button };
