import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router"; // Importe seu arquivo Router
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export { App };
