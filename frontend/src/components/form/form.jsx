import { Button, Input } from "../../components";
import style from "./form.module.css";

const Form = () => {
  return (
    <form className={style.form}>
      <Input />
      <Button texto="+" />
    </form>
  );
};

export { Form };
