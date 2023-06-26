import { Routes, Route } from "react-router-dom";
import { NoMatch } from "./noMatch";
import { Login } from "../pages/Account/Login/Index";

import routes from "./RouterList";
import { SigIn } from "../UI/organisms/signin/Index";


export const Router = () => {
  return (
    <Routes>
   
      <Route
        path={routes.Home.path}
        element={
          <>Hola mundo</>
        }
      />
      <Route
        path={routes.Login.path}
        element={
          <Login />
        }
      />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
