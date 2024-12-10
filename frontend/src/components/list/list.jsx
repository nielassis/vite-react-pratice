import { ListItem } from "./items";
import style from "./list.module.css";

const List = (props) => {
  const { tasks } = props;
  return (
    <ul className={style.list}>
      {tasks.map((task) => (
        <ListItem key={task.id} taskName={task.taskName} />
      ))}
    </ul>
  );
};

export { List };
