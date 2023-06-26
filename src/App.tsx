import { Router } from "./router";
import "./App.css";

function App() {
    console.log(import.meta.env.VITE_PLANNERAPP_URL);
    console.log(import.meta.env.PROD);
    console.log(import.meta.env.DEV);
  return (
    <>
      <div className="init-plannerapp">
        <Router />
      </div>
    </>
  );
}

export default App;
