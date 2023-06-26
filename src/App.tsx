import { Router } from "./router";
import "./App.css";

function App() {
    console.log(import.meta.env.VITE_PLANNERAPP_URL);
  return (
    <>
      <div className="init-plannerapp">
        <Router />
      </div>
    </>
  );
}

export default App;
