import { ListItem } from "./items";
import style from "./list.module.css";
import { useAppContext } from "../../hooks";

const List = () => {
  const { tasks } = useAppContext();
  return (
    <ul className={style.list}>
      {tasks.map((task) => (
        <ListItem key={task.id} taskName={task.taskName} />
      ))}
    </ul>
  );
};

export { List };
