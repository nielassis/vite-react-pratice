import { useState } from "react";
import { Button, Input } from "../../components";
import style from "./form.module.css";

const Form = (props) => {
  const [taskName, setTaskName] = useState("");
  const { setTasks } = props;

  const onChangeTaskName = (event) => {
    setTaskName(event.currentTarget.value);
  };

  const createTask = (event) => {
    event.preventDefault();

    if (!taskName) {
      return;
    }

    setTasks((currentState) => {
      const newTask = {
        id: currentState.length + 1,
        taskName: taskName,
      };
      return [...currentState, newTask];
    });
  };
  return (
    <form className={style.form} onSubmit={createTask}>
      <Input value={taskName} onChange={onChangeTaskName} />
      <Button texto="+" />
    </form>
  );
};
export { Form };
