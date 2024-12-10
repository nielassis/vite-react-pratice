import { useState } from "react";
import { Form, List } from "../../components/";
import style from "./home.module.css";

const Home = () => {
  const [tasks, setTasks] = useState([
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
    {
      id: 4,
      taskName: "Tarefa 4",
    },
  ]);
  return (
    <div className={style.home}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
    </div>
  );
};

export { Home };
