import Button from "../button";
import styles from "./navbar.module.scss";
import logo from "/assets/images/logo-white.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

/* GraphQL */
import { useQuery } from "@apollo/client";
import { GET_ROCKETS } from "@/hooks/apollo";
import { RocketsType } from "@/hooks/typescript/types";
import Menu from "./menu";
import LoaderPage from "../loaderPage";

const NavBar = () => {
  const { data, loading } = useQuery<RocketsType>(GET_ROCKETS);
  const { isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();

  if (loading) return <LoaderPage />;

  return (
    <nav className={styles.container}>
      <img
        src={logo}
        alt="Logo SpaceX"
        className={styles.logo}
        onClick={() => navigate("/")}
      />
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
            <Menu name={user?.name} picture={user?.picture} />
          ) : (
            <Button text="Log in" onClick={() => navigate("/login")} />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
