import { Link } from "react-router-dom";
import style from "./header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <Link to="/">
        <h1>
          <span>ToDo</span> List
        </h1>
      </Link>
      <div>
        <Link to="/about">
          <h1>Sobre</h1>
        </Link>
      </div>
    </div>
  );
};

export { Header };
