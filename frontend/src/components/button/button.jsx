import style from "./button.module.css";
import { TYPE_BUTTON } from "./constants";

const Button = (props) => {
  const { texto, type = TYPE_BUTTON.PRIMARY, ...otherProps } = props;
  return (
    <button type={type} {...otherProps} className={style.button}>
      {texto}
    </button>
  );
};

export { Button };
