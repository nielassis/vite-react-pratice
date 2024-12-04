import style from "./footer.module.css";

const Footer = (props) => {
  const { name } = props;
  const anoAtual = new Date().getFullYear();
  return (
    <div className={style.footer}>
      <h1>
        Pratica Vite com JS - {anoAtual} - {name}
      </h1>
    </div>
  );
};

export { Footer };
