import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NoMatch } from "./noMatch";
import { Login } from "../pages/Account/Login/Index";


export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route
            path={"/"}
            element={
            <>Hola mundo</>
            }
        />
        <Route
            path={"/account/login"}
            element={
            <Login />
            }
        />
        </Routes>
    </BrowserRouter>
  );
};
