import { ListItem } from "./items";
import style from "./list.module.css";

const List = () => {
  const tasks = [
    {
      id: 1,
      taskName: "Tarefa 1",
    },
    {
      id: 2,
      taskName: "Tarefa 2",
    },
    {
      id: 3,
      taskName: "Tarefa 3",
    },
  ];
  return (
    <ul className={style.list}>
      {tasks.map((task) => (
        <ListItem key={task.id} taskName={task.taskName} />
      ))}
    </ul>
  );
};

export { List };
