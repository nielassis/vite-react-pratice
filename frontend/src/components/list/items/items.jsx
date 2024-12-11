import { useAppContext } from "../../../hooks";
import { Button, TYPE_BUTTON } from "../../button";
import style from "./items.module.css";

const ListItem = (props) => {
  const { id, taskName } = props;

  const { removeTask } = useAppContext();
  return (
    <li className={style.item}>
      {taskName}
      <Button
        texto="-"
        type={TYPE_BUTTON.SECONDARY}
        onClick={() => removeTask(id)}
      />
    </li>
  );
};

export { ListItem };
