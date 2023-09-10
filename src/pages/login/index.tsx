import styles from "./login.module.scss";
import logo from "/assets/images/logo.png";
import Button from "@/components-reusable/button";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <img src={logo} alt="Logo SpaceX" className={styles.logo} />
        <Button text="Log in" onClick={() => loginWithRedirect()} />
      </div>
    </section>
  );
};

export default Login;
