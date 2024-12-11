import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router"; // Importe seu arquivo Router
import "./App.css";
import { AppContextProvider } from "./contexts";

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppContextProvider>
  );
};

export { App };
