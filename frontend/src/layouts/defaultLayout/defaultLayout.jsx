import { Outlet } from "react-router-dom";
import { Content, Footer, Header } from "../../components";
import { useAppContext } from "../../hooks";

const DefaultLayout = () => {
  const { criador } = useAppContext();
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer name={criador} />
    </>
  );
};

export { DefaultLayout };
