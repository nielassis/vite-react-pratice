import { Route, Routes } from "react-router-dom";
import { About, Home, PageError } from "./pages";
import { DefaultLayout } from "./layouts";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageError />} />
      </Route>
    </Routes>
  );
};

export { Router };
