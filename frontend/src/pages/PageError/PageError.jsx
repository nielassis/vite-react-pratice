import style from "./PageError.module.css";

const PageError = () => {
  return (
    <div className={style.error}>
      <h1>404</h1>
      <p>Página não encontrada</p>
    </div>
  );
};

export { PageError };
