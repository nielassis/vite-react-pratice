import "./App.css";
import { Header, Content, Footer } from "./components/";

const App = () => {
  return (
    <>
      <Header userName="João" />
      <Content>
        <h1>Titulo</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
          voluptatum numquam, qui adipisci harum, officia fugiat ab sequi nisi
          laudantium id, aut vitae. Aspernatur veniam in ex voluptas quo nulla!
        </p>
      </Content>
      <Footer name="Daniel Assis" />
    </>
  );
};

export { App };
