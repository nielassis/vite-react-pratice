import { useState } from "react";
import { useAppContext } from "../../../hooks";
import { Button, TYPE_BUTTON } from "../../button";
import { Input } from "../../input";
import style from "./items.module.css";

const ListItem = (props) => {
  const { id, taskName } = props;

  const [editing, setEditing] = useState(false);

  const { updateTask, removeTask } = useAppContext();
  return (
    <li className={style.item}>
      {editing && (
        <Input
          defaultValue={taskName}
          onBlur={() => setEditing(false)}
          autoFocus
          onChange={(event) => updateTask(id, event.currentTarget.value)}
        />
      )}
      {!editing && (
        <span onDoubleClick={() => setEditing(true)}>{taskName}</span>
      )}
      <Button
        texto="-"
        type={TYPE_BUTTON.SECONDARY}
        onClick={() => removeTask(id)}
      />
    </li>
  );
};

export { ListItem };
