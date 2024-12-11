import { useState } from "react";
import { Button, Input } from "../../components";
import style from "./form.module.css";
import { useAppContext } from "../../hooks/";

const Form = () => {
  const [taskName, setTaskName] = useState("");
  const { createTask } = useAppContext();

  const onChangeTaskName = (event) => {
    setTaskName(event.currentTarget.value);
  };

  const submit = (event) => {
    event.preventDefault();

    if (!taskName) {
      return;
    }
    createTask(taskName);

    setTaskName("");
  };

  return (
    <form className={style.form} onSubmit={submit}>
      <Input value={taskName} onChange={onChangeTaskName} />
      <Button texto="+" />
    </form>
  );
};
export { Form };
