import "./Index.scss";
import backIcon from "../../../assets/image/Account/Login/backIcon.svg";
import logo from "../../../assets/image/Account/Login/logo.svg";
import main from "../../../assets/image/Account/Login/main.png";
import { useState } from "react";
import { SigIn } from "../../../UI/organisms/signin/Index";
import axios from "axios"
import { json } from "react-router-dom";


interface ISigInUser {
    Email: string;
    Password: string;
    RememberMe: boolean;
}

export const Login = () => {
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);

  const [user, setUser] = useState<ISigInUser>({
    Email: "",
    Password: "",
    RememberMe: true,
  });

  const OpenSignIn = () => {
    setIsOpenSignIn(true);

    if (isOpenSignIn) handleSubmitUser();
  };

  const closeSignIn = () => {
    setIsOpenSignIn(false);
  };

  const handleChangeUser = ( e: React.FormEvent<HTMLInputElement>) => {
    let input = (e.target as HTMLInputElement)

    setUser({
        ...user,
        [input.name]: input.value,
    });
  }

  console.log(import.meta.env.VITE_PLANNERAPP_URL);
  

  const handleSubmitUser  = async () => {

    let action = "https://localhost:52463/Account/Login";

    const formData = new FormData();
    formData.append("Email", user.Email);
    formData.append("Password", user.Password);
    formData.append("RememberMe", `${user.RememberMe}`);

   let response = await axios.post(action, formData);

    console.log(response);  
  }

  let go = isOpenSignIn ? `bottom go up` : "bottom go";
  let title = isOpenSignIn ? `bottom title up` : "bottom title";
  let image = isOpenSignIn ? `bottom image upx2` : "bottom image";

  let buttomSignIn = isOpenSignIn
    ? "buttom-blue buttom-small below"
    : "buttom-orange buttom-large";

  let topButton = isOpenSignIn ? "top-button left" : "top-button";

  return (
    <div onChange={(e)=> {}} className="home-container">
      <div className="container-top">
        <img className="top-logo" src={logo} alt="Logo PlannerApp" />
        <button onClick={closeSignIn} className={topButton}>
          <img src={backIcon} alt="backIcon" />
          Atrás
        </button>
      </div>
      <div className="container-bottom">
        <div className={title}>
          <h1>Conoce lo mejor de PlannerApp</h1>
        </div>
        <div className={go}>
          <button>Vamos allá</button>
        </div>
        <div className={image}>
          <img src={main} alt="main" />
        </div>

        {isOpenSignIn ? <SigIn user={user} handleChangeUser={handleChangeUser} /> : null}
        <div className="bottom buttom">
          <button onClick={OpenSignIn} className={buttomSignIn}>
            {isOpenSignIn ? "Iniciar sesión" : "INICIAR SESIÓN"}
          </button>
          {isOpenSignIn ? null : (
            <div>
              <p>
                ¿No tienes cuenta en{" "}
                <strong className="BLUE360">PlannerApp</strong>?
              </p>
              <p>
                ¡Crea una <strong className="BLUE360">cuenta de prueba</strong>{" "}
                ahora!
              </p>
            </div>
          )}
        </div>
        <div className="bottom footer">
          <p>Privacidad · Términos y condiciones · Acerca de nosotros</p>
        </div>
      </div>
    </div>
  );
};
