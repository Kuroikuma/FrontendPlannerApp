import icono from "../../../assets/image/Account/Login/iconoDePregunta.svg";
import "./Index.scss"

interface ISigInUser {
    Email: string;
    Password: string;
    RememberMe: boolean;
}

interface ISigInProps {
    user?: ISigInUser;
    handleChangeUser?: (e: React.FormEvent<HTMLInputElement>) => void;
  }


export const SigIn = (props:ISigInProps) => {

    const { user, handleChangeUser } = props

    
  return (
    <div className="SigIn-container">
      <div className="SigIn-container-top">
        <h2>Iniciar sesión</h2>
        <p>
          <span>¿Aún no tienes una cuenta,</span>
          <span className="blue"> registrarme</span>
          <span>?</span>
        </p>
      </div>
      <div className="SigIn-container-combine">
        <div className="SigIn-container-mid">
          <p>Tu correo electrónico</p>
          <div className="flex">
            <input type="text" name="Email" onChange={handleChangeUser} value={user?.Email} placeholder="ejemplo@gmail.com" />
            <img src={icono} alt="" />
          </div>
        </div>
        <div className="SigIn-container-bottom">
          <p>Contraseña</p>
          <div className="flex">
            <input name="Password" onChange={handleChangeUser} value={user?.Password} type="text" placeholder="**********" />
            <img src={icono} alt="" />
          </div>
        </div>
        <p className="OlvidoContrasea">Olvidé mi contraseña</p>
      </div>
    </div>
  );
};
