import { Button, type_button } from "../../button";
import style from "./items.module.css";

const ListItem = (props) => {
  const { taskName } = props;
  return (
    <li className={style.item}>
      {taskName}
      <Button texto="-" type={type_button.secondary} />
    </li>
  );
};

export { ListItem };
