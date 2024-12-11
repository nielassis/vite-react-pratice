import { ListItem } from "./items";
import style from "./list.module.css";
import { useAppContext } from "../../hooks";

const List = () => {
  const { tasks } = useAppContext();
  return (
    <ul className={style.list}>
      {!tasks.length && <p>Não há tarefas</p>}
      {tasks.map((task) => (
        <ListItem key={task.id} id={task.id} taskName={task.taskName} />
      ))}
    </ul>
  );
};

export { List };
