import Button from "../button";
import styles from "./navbar.module.scss";
import logo from "/assets/images/logo-white.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

/* GraphQL */
import { useQuery } from "@apollo/client";
import { GET_ROCKETS } from "@/hooks/apollo";
import { RocketsType } from "@/hooks/typescript/types";

const NavBar = () => {
  const { data } = useQuery<RocketsType>(GET_ROCKETS);
  const { isAuthenticated } = useAuth0();
  const { logout } = useAuth0();
  const navigate = useNavigate();

  return (
    <nav className={styles.container}>
      <img src={logo} alt="Logo SpaceX" className={styles.logo} />
      <ul className={styles.list}>
        {data?.rockets.map((rocket) => {
          return (
            <li key={rocket.id} className={styles.item}>
              {rocket.name}
            </li>
          );
        })}
        <li>
          {isAuthenticated ? (
            <Button
              text="Log out"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            />
          ) : (
            <Button text="Log in" onClick={() => navigate("/login")} />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
