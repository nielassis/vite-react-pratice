import style from "./header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <h1>
        <span>ToDo</span> List
      </h1>
    </div>
  );
};

export { Header };
