import { useState } from "react";
import { AppContext } from "./AppContextProvider";

export const AppContextProvider = (props) => {
  const { children } = props;

  const [criador, setCriador] = useState("Daniel Assis");

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

  const createTask = (taskName) => {
    setTasks((currentState) => {
      const newTask = {
        id: currentState.length + 1,
        taskName: taskName,
      };
      return [...currentState, newTask];
    });
  };

  const removeTask = (taskId) => {
    setTasks((currentState) => {
      const updatedTasks = currentState.filter((tasks) => tasks.id !== taskId);

      return [...updatedTasks];
    });
  };

  const updateTask = (taskId, taskName) => {
    setTasks((currentState) => {
      const updatedTasks = currentState.map((task) => {
        return task.id === taskId ? { ...task, taskName: taskName } : task;
      });
      return [...updatedTasks];
    });
  };
  return (
    <AppContext.Provider
      value={{ criador, setCriador, tasks, createTask, removeTask, updateTask }}
    >
      {children}
    </AppContext.Provider>
  );
};
