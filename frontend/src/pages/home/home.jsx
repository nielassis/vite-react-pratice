import { Form, List } from "../../components/";
import style from "./home.module.css";

const Home = () => {
  return (
    <div className={style.home}>
      <Form />
      <List />
    </div>
  );
};

export { Home };
