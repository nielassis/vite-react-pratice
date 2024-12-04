import "./App.css";
import { Header, Content, Footer } from "./components/";
import { Home } from "./pages";

const App = () => {
  return (
    <>
      <Header userName="João" />
      <Content>
        <Home />
      </Content>
      <Footer name="Daniel" />
    </>
  );
};

export { App };
