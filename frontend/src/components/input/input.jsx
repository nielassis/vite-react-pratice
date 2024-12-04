import style from "./input.module.css";

const Input = (props) => {
  return (
    <input
      className={style.input}
      {...props}
      type="text"
      placeholder="Inserir Tarefa"
    />
  );
};

export { Input };
