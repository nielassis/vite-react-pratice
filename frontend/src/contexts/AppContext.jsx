import { useEffect, useState } from "react";
import { AppContext } from "./AppContextProvider";
import api from "../services/";

export const AppContextProvider = (props) => {
  const { children } = props;

  const [criador, setCriador] = useState("Daniel Assis");

  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const { data = [] } = await api.get("/tasks");
      setTasks([...data]);
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (taskName) => {
    try {
      const { data: newTask } = await api.post("/tasks", {
        taskName: taskName,
      });
      setTasks((currentState) => {
        return [...currentState, newTask];
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeTask = async (taskId) => {
    try {
      await api.delete(`/tasks/${taskId}`);
      setTasks((currentState) => {
        const updatedTasks = currentState.filter(
          (tasks) => tasks.id !== taskId
        );

        return [...updatedTasks];
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (taskId, taskName) => {
    try {
      const { data: updatedTask } = await api.put(`/tasks/${taskId}`, {
        taskName: taskName,
      });
      setTasks((currentState) => {
        const updatedTasks = currentState.map((task) => {
          return task.id === taskId
            ? { ...task, taskName: updatedTask.taskName }
            : task;
        });
        return [...updatedTasks];
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);
  return (
    <AppContext.Provider
      value={{ criador, setCriador, tasks, createTask, removeTask, updateTask }}
    >
      {children}
    </AppContext.Provider>
  );
};
